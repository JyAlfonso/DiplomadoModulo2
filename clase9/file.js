// const lista = document.getElementById("lista");

// const li_lista = document.createElement("li");
// li_lista.textContent= "elemento "; 

// lista.appendChild(li_lista);

const lista = document.getElementById("lista");

// ======= Arrays ======== 

let conjunto =["perro","gato","conejo","pollo"]

conjunto.forEach(elemento => {
    const li_lista = document.createElement("li");
    li_lista.textContent= elemento; 
    li_lista.setAttribute("id", ("animales"));
    lista.appendChild(li_lista);

});

lista.setAttribute("class","d-flex text-danger");
