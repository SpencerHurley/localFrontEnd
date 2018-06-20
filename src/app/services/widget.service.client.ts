export class WidgetServiceClient {
  findWidgetsForLesson(lessonId) {
    return fetch('https://springbootsummer1.herokuapp.com/api/lesson/' + lessonId + '/widget')
      .then(response => response.json());
  }
}
