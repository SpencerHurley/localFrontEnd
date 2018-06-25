export class TeamServiceClient {

  findAllTeams() {
    return fetch('http://localhost:4000/api/team')
      .then(response => response.json());
  }

  findTeamById(id) {
    return fetch('http://localhost:4000/api/team/' + id)
      .then(response => response.json());
  }

  createTeam(team) {
    return fetch('http://localhost:4000/api/team', {
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
    return fetch('http://localhost:4000/api/team', {
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
    return fetch('http://localhost:4000/api/team' + id,
      {
        method: 'delete'
      })
      .then(response => response.json());
  }

  findRunnersForTeam(id) {
    return fetch('http://localhost:4000/api/team/' + id + '/members')
      .then(response => response.json());
  }

  enrollRunnerInTeam(id) {
    return fetch('http://localhost:4000/api/team/' + id + '/enroll',
      {
        credentials: "include",
        method: "post"
      }).then(response => response.json());
  }
}
