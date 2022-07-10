const getData = async (url) => {
  const result = await fetch(url);

  return await result.json();
};

getData('https://jsonplaceholder.typicode.com/posts')
  .then(data => {
    let box = document.querySelector('.box');

    for (let i = 0; i < data.length; i++) {
      if (data[i].userId == 1) {
        for (let key in data[i]) {
          let list = document.createElement('ul');
          let listItem = document.createElement('li');

          listItem.innerHTML = `${key}: ${data[i][key]}`;

          list.appendChild(listItem);

          box.appendChild(list);
        }

        let hr = document.createElement('hr');
        box.appendChild(hr);
      }
    }
  });