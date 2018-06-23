export class RunServiceClient {
  findAllRuns() {
    return fetch('http://localhost:4000/api/run')
      .then(response => response.json());
  }

}
