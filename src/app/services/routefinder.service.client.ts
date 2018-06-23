export class RouteFinderServiceClient {

  findRoutesByCity(cityPoint) {
    console.log(cityPoint);
    const sw = {
      lat : 0,
      lng : 0
    };
    const ne = {
      lat : 0,
      lng : 0
    };

    sw.lat = cityPoint.southwest.lat - 0.5;
    sw.lng = cityPoint.southwest.lng - 0.5;
    ne.lat = cityPoint.northeast.lat + 0.5;
    ne.lng = cityPoint.northeast.lng + 0.5;
    return fetch('https://www.strava.com/api/v3/segments/explore?bounds=[' +
      sw.lat  +  "," +
      sw.lng + "," +
      ne.lat + "," +
      ne.lng + "]", {
      headers: {
        'Authorization': 'Bearer 6c2fdb6f73ae7a0ad8c2dcfa1a2badec5670a42c'
      }
    })
      .then((response) => response.json());
  }

  findCoordinatesForCity(cityName) {
    return fetch('https://maps.googleapis.com/maps/api/geocode/json?&address=' + cityName)
      .then(response => response.json());
  }

  findSegmentById(id) {
    console.log(id);
    return fetch('https://www.strava.com/api/v3/segments/' + id, {
      headers: {
        'Authorization': 'Bearer 6c2fdb6f73ae7a0ad8c2dcfa1a2badec5670a42c'
      }
    })
      .then((response) => response.json());
  }
}
