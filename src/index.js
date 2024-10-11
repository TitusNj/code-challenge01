// Your code 
// function Cute(){
//     var img = document.getElementById('image')
//         img.src = 'assets/Cute.jpeg'
//     var charName =document.getElementById('name')
//         charName.textContent = "Cute"


// } 
// function Monkey(){
//     var img = document.getElementById('image')
//         img.src = 'assets/Monkey.jpeg'
//     var charName =document.getElementById('name')
//         charName.textContent = "Monkey"

// } 
// function Zebra(){
//     var img = document.getElementById('image')
//         img.src = 'assets/Zebra.jpeg'
//     var charName =document.getElementById('name')
//         charName.textContent = "Zebra"
    
// }
// function Lion(){
//     var img = document.getElementById('image')
//         img.src = 'assets/Lion.jpeg'
//     var charName =document.getElementById('name')
//         charName.textContent = "Panda"

// }
// function Panda(){
//     var img = document.getElementById('image')
//         img.src = 'assets/Panda.jpeg'
//     var charName =document.getElementById('name')
//         charName.textContent = "Zebra"
// } 


const baseURL = 'http://localhost:3009/'

function fetchCharacters() {
    fetch('/characters')
      .then(response => db.json())  // Parse the JSON response
      .then(characters => {
        const characterBar = document.getElementById('character-bar'); // Get the character bar div
  
        // Iterate over each character and create a span element
        characters.forEach(character => {
          const span = document.createElement('span'); // Create a span tag
          span.textContent = character.name;           // Set the character name as the text content
          characterBar.appendChild(span);              // Add the span to the character-bar div
        });
      })
      .catch(error => console.error('Error fetching characters:', error)); // Handle errors
  }

collectData()