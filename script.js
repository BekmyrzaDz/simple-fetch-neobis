const getData = async (url) => {
  const result = await fetch(url);

  return await result.json();
};

getData('https://jsonplaceholder.typicode.com/posts')
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].userId == 1) {
        for (let key in data[i]) {
          document.write(`${key}: ${data[i][key]}</br>`);
        }
      }
    }
  });