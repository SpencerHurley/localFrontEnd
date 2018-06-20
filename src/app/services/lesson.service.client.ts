export class LessonServiceClient {
  findLessonsForModule(moduleId) {
    return fetch('https://springbootsummer1.herokuapp.com/api/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }
}
