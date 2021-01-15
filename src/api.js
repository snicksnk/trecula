const api = {
  loadHistory: () => {
    return Promise.resolve([
      {
        id: 3,
        startDate: new Date("Mon, 11 Jan 2021 22:13:05 GMT"),
        stopDate: new Date("Mon, 11 Jan 2021 22:15:05 GMT")
      },
      {
        id: 2,
        startDate: new Date("Mon, 11 Jan 2021 22:12:05 GMT"),
        stopDate: new Date("Mon, 11 Jan 2021 22:12:25 GMT")
      },
      {
        id: 1,
        startDate: new Date("Mon, 11 Jan 2021 22:10:05 GMT"),
        stopDate: new Date("Mon, 11 Jan 2021 22:11:25 GMT")
      }
    ]);
  }
};

export default api;
