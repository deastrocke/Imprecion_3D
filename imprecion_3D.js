const newRandomNumber = Math.floor(Math.random() * 500) + 1;
const newRandomNumber2 = Math.floor(Math.random() * 500) + 1;

fetch(`https://rickandmortyapi.com/api/character/${newRandomNumber}`)
  .then(response => response.json())
  .then(data => {
    console.log(data.image, data.name);
  })
  

fetch(`https://rickandmortyapi.com/api/character/${newRandomNumber2}`)
  .then(response => response.json())
  .then(data => {
    console.log(data.image, data.name);
  })
 