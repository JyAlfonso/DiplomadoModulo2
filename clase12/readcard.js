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

    const cards = document.getElementById('main')

    const u_card= document.createElement("div")
    const div_body = document.createElement("div");
    const imagen = document.createElement("img");
    const titulo = document.createElement("h5");
    const contenido_card = document.createElement("p");
    const boton = document.createElement("a");

    cards.setAttribute("class", "container mx-auto")
    u_card.setAttribute("class","card")
    div_body.setAttribute("class","card-body", "style", "width: 18rem;")
    imagen.src = "./profile.jpg"
    imagen.setAttribute("class", "card-img-top","alt","...")
    titulo.setAttribute("class","card-tittle")
    contenido_card.setAttribute('class',"card-text")
    boton.setAttribute("class","btn btn-primary", "href=","#")
   
    
    cards.appendChild(u_card)
    u_card.appendChild(div_body)
    div_body.appendChild(imagen)
    div_body.appendChild(titulo)
    div_body.appendChild(contenido_card)
    div_body.appendChild(boton)

    titulo.textContent = title
    contenido_card.textContent = content
    boton.textContent = buton
}

function readJson(){

// Creacion de Fragmento
    const fragmento= document.createDocumentFragment()

    const container= document.getElementById('main')
    
    
    cards.forEach(element => {
        CreateCard(element)
    });
}

readJson()

