
export class RunServiceClient {
  findAllRuns() {
    return fetch('https://sheltered-fjord-29617.herokuapp.com//api/run')
      .then(response => response.json());
  }

  findRunsForUser(id) {
    return fetch('https://sheltered-fjord-29617.herokuapp.com//api/runner/' + id + '/runs')
      .then(response => response.json());
  }

  findRunById(id) {
    return fetch('https://sheltered-fjord-29617.herokuapp.com//api/run/' + id)
      .then(response => response.json());
  }

  createRun(run) {
    return fetch('https://sheltered-fjord-29617.herokuapp.com//api/run', {
      method: 'post',
      body: JSON.stringify(run),
      credentials: "include",
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
  }

  findTeamsForRunner(id) {
    return fetch('https://sheltered-fjord-29617.herokuapp.com//api/runner/' + id + '/teams')
      .then(response => response.json());
  }

  starRun(id) {
    return fetch('https://sheltered-fjord-29617.herokuapp.com//api/run/' + id + '/star', {
      method: 'post'
    })
      .then((response) => response.json());
  }

}
