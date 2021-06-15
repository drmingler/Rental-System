import React, {useRef, useState} from "react";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";
import {Col} from "react-bootstrap";
import {MarkerComponent} from "./index";
import {API_KEY} from "../../api/apiUtils";
import {getPoints, mapOptions} from "./mapConfigs";

const Marker = ({ children }) => children;

export default function Map({ center, properties, setNewCenter }) {
  const { lat, lng } = center;
  const mapRef = useRef();
  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(10);
  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback({ map, maps }) {
    mapRef.current = map;
    setMap({ ...maps, ...map });
  }, []);

  const points = getPoints(properties);

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 }
  });

  return (
    <Col md={6} lg={7} className="rental-map px-0">
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={
            { lat: parseFloat(lat), lng: parseFloat(lng) } || {
              lat: 6.5244,
              lng: 3.3792
            }
          }
          defaultZoom={12}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={onLoad}
          onChange={({ zoom, bounds }) => {
            setZoom(zoom);
            setBounds([
              bounds.nw.lng,
              bounds.se.lat,
              bounds.se.lng,
              bounds.nw.lat
            ]);
            setNewCenter({ lng: bounds.nw.lng, lat: bounds.se.lat });
          }}
          options={mapOptions(map)}
        >
          {clusters.map(cluster => {
            const [longitude, latitude] = cluster.geometry.coordinates;
            const {
              cluster: isCluster,
              point_count: pointCount
            } = cluster.properties;

            if (isCluster) {
              return (
                <Marker
                  key={`cluster-${cluster.id}`}
                  lat={latitude}
                  lng={longitude}
                >
                  <div
                    className="cluster-marker"
                    onClick={() => {
                      const expansionZoom = Math.min(
                        supercluster.getClusterExpansionZoom(cluster.id),
                        20
                      );
                      mapRef.current.setZoom(expansionZoom);
                      mapRef.current.panTo({ lat: latitude, lng: longitude });
                    }}
                  >
                    {pointCount}
                  </div>
                </Marker>
              );
            }

            return (
              <Marker
                key={`location-${cluster.properties.pointId}`}
                lat={latitude}
                lng={longitude}
              >
                <MarkerComponent property={cluster.properties || {}} />
              </Marker>
            );
          })}
        </GoogleMapReact>
      </div>
    </Col>
  );
}
