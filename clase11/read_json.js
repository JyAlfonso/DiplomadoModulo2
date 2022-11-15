const cards = [{
    "title": "Card 1",
    "content": "Este es el texto que debe observarse en el card-text",
    "buton": "Pulsame"
},
{
    "title": "Card 2",
    "content": "Este es el texto que debe observarse en el card-text",
    "buton": "Pulsame"
},
{
    "title": "Card 3",
    "content": "Este es el texto que debe observarse en el card-text",
    "buton": "Pulsame"
},
{
    "title": "Card 4",
    "content": "Este es el texto que debe observarse en el card-text",
    "buton": "Pulsame"
},
{
    "title": "Card 5",
    "content": "Este es el texto que debe observarse en el card-text",
    "buton": "Pulsame"
},
{
    "title": "Card 6",
    "content": "Este es el texto que debe observarse en el card-text",
    "buton": "Pulsame"
}]



function CreateCard({title, content, buton}){
    console.log("Muestrame los paramentros", title, content, buton)

    const div = document.getElementById("reference")
    const fragment = document.createDocumentFragment()
    const header = document.createElement("h1")
    header.textContent = title

    fragment.appendChild(header)
    div.appendChild(fragment)
    
}

function readJson(){

    cards.forEach(element => {
        CreateCard(element)
    });
}

readJson()

