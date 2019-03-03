// create a function that returns name, species, and food preferences of each animal
function getInfo(res) {
  let t = '<table><thead>';
  t += '<tr><th>#</th><th>name</th><th>species</th><th>food</th></tr></thead><tbody>';
  let id = 1;

  for (let i in res) {
    let name = res[i].name;
    let species = res[i].species;
    let likes = '';
    let dislikes = '';
    for (let j in res[i].foods.likes) {
      let like = res[i].foods.likes[j];
      likes += `<span id="green">Likes:</span> ${like}<br>`;
    }
    for (let k in res[i].foods.dislikes) {
      let dislike = res[i].foods.dislikes[k];
      dislikes += `<span id="red">Dislikes:</span> ${dislike}<br>`;
    }

    t += `<tr><td id="id">${id}</td><td>${name}</td><td>${species}</td><td> ${likes} ${dislikes}</td></tr>`;

    id += 1;
  }
  t += '</tbody></table>';

  $('#animals_table').html(t);
}

$.get('https://learnwebcode.github.io/json-example/animals-1.json', getInfo);
