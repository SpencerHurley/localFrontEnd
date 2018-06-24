export class RunServiceClient {
  findAllRuns() {
    return fetch('http://localhost:4000/api/run')
      .then(response => response.json());
  }

  findRunsForUser(id) {
    return fetch('http://localhost:4000/api/runner/' + id + '/runs')
      .then(response => response.json());
  }

  createRun(run) {
    return fetch('http://localhost:4000/api/run', {
      method: 'post',
      body: JSON.stringify(run),
      credentials: "include",
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
  }

}
