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
    fetch('http://localhost:3009/characters')
      .then(response => response.json())  // Parse the JSON response // covert it to json format
    //   .then(response => {
    //     console.log(response)
    //     console.log(response.json)
    //   }) 
    // Parse the JSON response // covert it to json format
      .then(characters => {
        const characterBar = document.getElementById('character-bar'); // Get the character bar div
            console.log("Cahr", characters)

  
        // Iterate over each character and create a span element
        characters.forEach(character => {
          const span = document.createElement('span'); // Create a span tag
          span.textContent = character.name;           // Set the character name as the text content
          span.id = `spanks ${character.id}`
          characterBar.appendChild(span);              // Add the span to the character-bar div
          rename(character)
          
        });
        
      })
    
      //.catch(error => console.error('Error fetching characters:', error)); // Handle errors
  }

function rename(character){
    const variab = document.getElementById(`spanks ${character.id}`)
    //console.log("variab", variab)
    //console.log("T", character)
    variab.addEventListener("click", (event)=>{
        const chan = document.getElementById('name')
            //console.log(chan)
            chan.textContent = character.name
        const chang = document.getElementById('image')
            //console.log(chan)
            chang.src= character.image
            chang.alt=character.name // every image needs an ult tage this helps personalize it
        const chane = document.getElementById('vote-count')
            console.log(chane)
            chane.textContent = character.votes

    })


}

function addstuff () {
    const chee = document.getElementById('vote-count')
    //console.log(chee)
    const chehe = document.getElementById('votes')
    // console.log(chehe)
    
    const addvotez = document.getElementById('votes-form')
    addvotez.addEventListener("submit", (event)=>{
        const addition = Number(chee.textContent) + Number(chehe.value)
        console.log(addition)
        chee.textContent = addition
        event.preventDefault();
    
    })
    
}

fetchCharacters()
addstuff()