
function Create_card(value){
    const container= document.getElementById('main')
    container.setAttribute("class", "container")
// Creacion de FRagmento
    const fragmento= document.createDocumentFragment()
// Container
// Ciclo for Creacion cards.
    for (let i =0; i<value ; i++){
        const div_card = document.createElement("div");
        div_card.setAttribute("class","card")
        container.appendChild(div_card)

        const div_body = document.createElement("div");
        div_body.setAttribute("class","card-body")
        container.appendChild(div_body)

        const imagen = document.createElement("img");
        imagen.src = "./profile.jpg"
        imagen.setAttribute("class", "card-img-top","alt","...")
        div_body.appendChild(imagen)

        const titulo = document.createElement("h5");
        titulo.setAttribute("class","card-tittle")
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
    }    
}

Create_card(6)
