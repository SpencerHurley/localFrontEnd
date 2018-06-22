export class RouteFinderServiceClient {

  findRoutesByCity(userId) {
    return fetch('https://www.strava.com/api/v3/segments/explore?' + userId)
      .then(response => response.json());
  }

  findCoordinatesForCity(cityName) {
    return fetch('https://maps.googleapis.com/maps/api/geocode/json?&address=' + cityName)
      .then(response => response.json());
  }
}
