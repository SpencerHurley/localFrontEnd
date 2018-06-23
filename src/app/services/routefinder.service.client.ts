export class RouteFinderServiceClient {

  findRoutesByCity(sw, ne) {
    sw.lat -= 2;
    sw.lng -= 2;
    ne.lat += 2;
    ne.lng += 2;

    return fetch('https://www.strava.com/api/v3/segments/explore?bounds=[' +
      sw.lat +  "," +
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
