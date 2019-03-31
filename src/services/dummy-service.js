
export default class DummyService {

  data = [
    {
      id: 1,
      title: 'Board 1'},
    {
      id: 2,
      title: 'Board 2'}
  ];

  getBoards() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
        //reject(new Error('Something bad happened'));
      }, 700);
    });
  }
}