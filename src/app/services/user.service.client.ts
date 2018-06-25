export class UserServiceClient {

  findRunnerById(userId) {
    return fetch('http://localhost:4000/api/runner/' + userId)
      .then(response => response.json());
  }

  findAllRunners() {
    return fetch('http://localhost:4000/api/runner')
      .then(response => response.json());
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('http://localhost:4000/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
  }

  logout() {
    return fetch('http://localhost:4000/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  profile() {
    return fetch('http://localhost:4000/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      }).then((res) => res.json());
  }

  updateRunner(user) {
    return fetch('http://localhost:4000/api/runner', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password,
      email: '',
      firstName: '',
      lastName: '',
      weeklyGoal: 30
    };
    return fetch('http://localhost:4000/api/runner/register', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  findSegments(runnerId) {
    return fetch('http://localhost:4000/api/runner/' + runnerId + '/segments')
      .then(res => res.json());
  }

  deleteUser(user) {
    return fetch('http://localhost:4000/api/runner/' + user._id, {
      method: 'delete'
    }).then(res => res.json());
  }
}
