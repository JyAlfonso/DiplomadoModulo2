const cards = document.getElementById('card')
cards.setAttribute("class", "container")

const imagen = document.createElement("img");
imagen.src = "./profile.jpg"
imagen.setAttribute("class", "card-img-top","alt","...")
cards.appendChild(imagen)
 
const div_body = document.createElement("div");
div_body.setAttribute("class","card-body")
cards.appendChild(div_body)

const titulo = document.createElement("h5");
titulo.setAttribute("class","card-body")
titulo.textContent = "Card title"
div_body.appendChild(titulo)

const contenido_card = document.createElement("p");
contenido_card.setAttribute('class',"card-text")
contenido_card.textContent = "Some quick example text to build on the card title and make up the bulk of the card's content."
div_body.appendChild(contenido_card)

const boton = document.createElement("a");
boton.setAttribute("class","btn btn-primary", "href=","#")
boton.textContent = "Go somewhere"
div_body.appendChild(boton)





