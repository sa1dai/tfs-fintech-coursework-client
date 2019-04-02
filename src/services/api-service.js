export default class ApiService {

  _apiBase = 'http://localhost:8000/api';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  getBoards = async () => {
    const res = await this.getResource(`/boards`);
    console.log(res);
    return res;
  };
}
