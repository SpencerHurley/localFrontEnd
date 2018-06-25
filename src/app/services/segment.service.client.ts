export class SegmentServiceClient {
  findAllSegments() {
    return fetch('http://localhost:4000/api/segment')
      .then(response => response.json());
  }

  createSegment(segment) {
    return fetch('http://localhost:4000/api/segment', {
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
    return fetch('http://localhost:4000/api/segment/' + id)
      .then(response => response.json());
  }
}
