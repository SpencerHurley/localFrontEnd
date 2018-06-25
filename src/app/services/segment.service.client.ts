export class SegmentServiceClient {
  findAllSegments() {
    return fetch('https://sheltered-fjord-29617.herokuapp.com//api/segment')
      .then(response => response.json());
  }

  createSegment(segment) {
    return fetch('https://sheltered-fjord-29617.herokuapp.com//api/segment', {
      method: 'post',
      body: JSON.stringify(segment),
      credentials: "include",
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
  }

  findSegmentById(id) {
    return fetch('https://sheltered-fjord-29617.herokuapp.com//api/segment/' + id)
      .then(response => response.json());
  }
}
