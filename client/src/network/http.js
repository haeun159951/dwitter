export default class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async fetch(url, options) {
    const response = await fetch(`${this.baseURL}${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });
    let data;

    try {
      data = await response.json();
    } catch (error) {
      console.error(error);
    }
    if (response.status > 299 || response.status < 200) {
      throw new Error(`Error: ${data.message}`);
    }
    return data;
  }
}
