import React, {useRef, useState} from "react";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";
import {Col} from "react-bootstrap";
import {MarkerComponent} from "./index"

let noPoi = [
  {
    featureType: "poi",
    stylers: [{visibility: "off"}]
  }
];

const locations = [
  {lat: -31.56391, lng: 147.154312},
  {lat: -33.718234, lng: 150.363181},
  {lat: -33.727111, lng: 150.371124},
  {lat: -33.848588, lng: 151.209834},
  {lat: -33.851702, lng: 151.216968},
  {lat: -34.671264, lng: 150.863657},
  {lat: -35.304724, lng: 148.662905},
  {lat: -36.817685, lng: 175.699196},
  {lat: -36.828611, lng: 175.790222},
  {lat: -37.75, lng: 145.116667},
  {lat: -37.759859, lng: 145.128708},
  {lat: -37.765015, lng: 145.133858},
  {lat: -37.770104, lng: 145.143299},
  {lat: -37.7737, lng: 145.145187},
  {lat: -37.774785, lng: 145.137978},
  {lat: -37.819616, lng: 144.968119},
  {lat: -38.330766, lng: 144.695692},
  {lat: -39.927193, lng: 175.053218},
  {lat: -41.330162, lng: 174.865694},
  {lat: -42.734358, lng: 147.439506},
  {lat: -42.734358, lng: 147.501315},
  {lat: -42.735258, lng: 147.438},
  {lat: -43.999792, lng: 170.463352}
];

const Marker = ({children}) => children;

export default function Map() {
  const mapRef = useRef();
  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(10);
  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback({map, maps}) {
    mapRef.current = map;
    setMap({...maps, ...map});
  }, []);

  const points = locations.map((location, idx) => ({
    type: "Feature",
    properties: {cluster: false, pointId: idx, price: 100000},
    geometry: {
      type: "Point",
      coordinates: [parseFloat(location.lng), parseFloat(location.lat)]
    }
  }));

  const {clusters, supercluster} = useSupercluster({
    points,
    bounds,
    zoom,
    options: {radius: 75, maxZoom: 20}
  });

  return (
      <Col md={6} lg={7} className="rental-map px-0">
        <div style={{height: "100%", width: "100%"}}>
          <GoogleMapReact
              bootstrapURLKeys={{key: ""}}
              // bootstrapURLKeys={{ key: "" }}
              defaultCenter={{lat: 9.072264, lng: 7.491302}}
              // defaultCenter={{ lat: -28.024, lng: 140.887 }}
              defaultZoom={12}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={onLoad}
              onChange={({zoom, bounds}) => {
                setZoom(zoom);
                setBounds([
                  bounds.nw.lng,
                  bounds.se.lat,
                  bounds.se.lng,
                  bounds.nw.lat
                ]);
              }}
              options={{
                minZoom: 12,
                maxZoom: 18,
                styles: noPoi,
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: false,
                zoomControlOptions: {
                  position: map && map.ControlPosition.LEFT_BOTTOM
                }
              }}
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
                            mapRef.current.panTo({lat: latitude, lng: longitude});
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
                    <MarkerComponent property={cluster.properties || {}}/>
                  </Marker>
              );
            })}
          </GoogleMapReact>
        </div>
      </Col>
  );
}

