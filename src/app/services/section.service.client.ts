export class SectionServiceClient {

  SECTION_URL = 'http://localhost:4000/api/course/COURSEID/section';

  findSectionsForStudent() {
    const url = 'http://localhost:4000/api/student/section';
    return fetch(url, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  enrollStudentInSection(sectionId) {
    const url = 'http://localhost:4000/api/student/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }

  unenrollStudentInSection(sectionId) {
    const url = 'http://localhost:4000/api/section/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'delete',
      credentials: 'include'
    });
  }

  findSectionsForCourse(courseId) {
    return fetch(this.SECTION_URL.replace('COURSEID', courseId))
      .then(response => response.json());
  }

  findSectionById(sectionId) {
    return fetch('http://localhost:4000/api/section/' + sectionId)
      .then(response => response.json());
  }

  createSection(courseId, name, seats) {
    const section = {courseId, name, maxSeats: seats, availableSeats: seats};
    return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  deleteSection(sectionId) {
    return fetch('http://localhost:4000/api/section/' + sectionId,
      {
        method: 'delete'
      }).then(response => response.json());
  }

  updateSection(section) {
    return fetch('http://localhost:4000/api/section/' + section._id,
      {
        method: 'put',
        body: JSON.stringify(section),
        headers: {
          'content-type' : 'application/json'
        }
      }).then(response => response.json());
  }
}
