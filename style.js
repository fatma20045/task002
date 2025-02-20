async function getUsers() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();

  const result = users.map(function (user) {
    return `
      <div class="user">
        <h2>${user.name}</h2>
        <p>${user.email}</p>
      </div>
    `;
  }).join('');

  document.querySelector(".users").innerHTML = result;
}

getUsers();
