export class UserServiceClient {

  findRunnerById(userId) {
    return fetch('https://sheltered-fjord-29617.herokuapp.com/api/runner/' + userId)
      .then(response => response.json());
  }

  findAllRunners() {
    return fetch('https://sheltered-fjord-29617.herokuapp.com/api/runner')
      .then(response => response.json());
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('https://sheltered-fjord-29617.herokuapp.com/api/login', {
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
    return fetch('https://sheltered-fjord-29617.herokuapp.com/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  profile() {
    return fetch('https://sheltered-fjord-29617.herokuapp.com/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then((user) => user.json());
  }

  updateRunner(user) {
    return fetch('https://sheltered-fjord-29617.herokuapp.com/api/runner', {
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
    return fetch('https://sheltered-fjord-29617.herokuapp.com/api/runner/register', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  findSegments(runnerId) {
    return fetch('https://sheltered-fjord-29617.herokuapp.com/api/runner/' + runnerId + '/segments')
      .then(res => res.json());
  }

  deleteUser(user) {
    return fetch('https://sheltered-fjord-29617.herokuapp.com/api/runner/' + user._id, {
      method: 'delete'
    }).then(res => res.json());
  }
}
