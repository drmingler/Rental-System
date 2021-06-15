let noPoi = [
  {
    featureType: "poi",
    stylers: [{ visibility: "off" }]
  }
];
const mapOptions = map => {
  return {
    minZoom: 10,
    maxZoom: 18,
    styles: noPoi,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    zoomControlOptions: {
      position: map && map.ControlPosition.LEFT_BOTTOM
    }
  };
};

const getPoints = properties =>
  properties.map((property, idx) => ({
    type: "Feature",
    properties: {
      cluster: false,
      pointId: idx,
      price: property.monthlyRent,
      address: property.propertyAddress.address,
      name: property.propertyName,
      image: property.propertyImage[0].image,
      bath: property.numberOfBathrooms,
      bed: property.numberOfBedrooms,
      size: property.size
    },
    geometry: {
      type: "Point",
      coordinates: [
        parseFloat(property.propertyAddress.longitude),
        parseFloat(property.propertyAddress.latitude)
      ]
    }
  }));
export { mapOptions, getPoints };

// http://localhost:3000/properties/9.072264/7.491302
// longitude&latitude__range=7.4913__9.072264
// http://127.0.0.1:8000/api/search/?latitude__range=7.4913__9.072264&longitude__range=7.4913__9.072264
