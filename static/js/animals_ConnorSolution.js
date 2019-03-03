// create a function that returns name, species, and food preferences of each animal
function getInfo(res) {
  console.log(res);

  // Connor's solution:
  let headers = Object.keys(res[0]);
  console.log(headers);

  // create a header html string
  let header_html= '<thead><tr><th>#</th>';

  for (let i in headers) {
    header_html += `<th>${headers[i]}</th>`
  }

  // end row and head
  header_html += '</tr></thead>';

  // insert into table
  $('table').html(header_html);

  // create body information for each animal
  let body_html = '<tbody>';

  // loop for each animal and add to body_html
  for (let i in res) {
    body_html += `
    <tr>
      <td>${parseInt(i) + 1}</td>
      <td>${res[i].name}</td>
      <td>${res[i].species}</td>
      <td>Likes: ${res[i].foods.likes}<br>Dislikes: ${res[i].foods.dislikes}</td>
    </tr>
    `;
  }

  body_html += '</tbody>';


  // insert into table
  $('table').html(header_html + body_html);


$.get('https://learnwebcode.github.io/json-example/animals-1.json', getInfo);
