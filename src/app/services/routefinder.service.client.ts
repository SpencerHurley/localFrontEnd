export class RouteFinderServiceClient {

  findRoutesByCity(userId) {
    return fetch('https://www.strava.com/api/v3/segments/explore?' + userId)
      .then(response => response.json());
  }
}
