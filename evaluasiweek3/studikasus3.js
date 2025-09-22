let apitest = "https://jsonplaceholder.typicode.com/users"

fetch (apitest)

  let x = await fetch(apitest);
  let y = await x.text(console.log);