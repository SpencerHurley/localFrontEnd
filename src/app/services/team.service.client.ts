export class TeamServiceClient {

  findAllTeams() {
    return fetch('https://sheltered-fjord-29617.herokuapp.com//api/team')
      .then(response => response.json());
  }

  findTeamById(id) {
    return fetch('https://sheltered-fjord-29617.herokuapp.com//api/team/' + id)
      .then(response => response.json());
  }

  createTeam(team) {
    return fetch('https://sheltered-fjord-29617.herokuapp.com//api/team', {
      method: 'post',
      body: JSON.stringify(team),
      credentials: "include",
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
  }

  updateTeam(team) {
    return fetch('https://sheltered-fjord-29617.herokuapp.com/api/team', {
      method: 'put',
      body: JSON.stringify(team),
      credentials: "include",
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
  }

  deleteTeam(id) {
    return fetch('https://sheltered-fjord-29617.herokuapp.com/api/team' + id,
      {
        method: 'delete'
      })
      .then(response => response.json());
  }

  findRunnersForTeam(id) {
    return fetch('https://sheltered-fjord-29617.herokuapp.com/api/team/' + id + '/members')
      .then(response => response.json());
  }

  enrollRunnerInTeam(id) {
    return fetch('https://sheltered-fjord-29617.herokuapp.com/api/team/' + id + '/enroll',
      {
        credentials: "include",
        method: "post"
      }).then(response => response.json());
  }
}
