let variasTarjetas = [{
        title: "Card 1",
        content: "Este es el texto que debe observarse en el card-text",
        buton: "Pulsame",
    },
    {
        title: "Card 2",
        content: "Este es el texto que debe observarse en el card-text",
        buton: "Pulsame",
    },
    {
        title: "Card 3",
        content: "Este es el texto que debe observarse en el card-text",
        buton: "Pulsame",
    },
    {
        title: "Card 4",
        content: "Este es el texto que debe observarse en el card-text",
        buton: "Pulsame",
    },
    {
        title: "Card 5",
        content: "Este es el texto que debe observarse en el card-text",
        buton: "Pulsame",
    },
    {
        title: "Card 6",
        content: "Este es el texto que debe observarse en el card-text",
        buton: "Pulsame",
    },
    {
        title: "Card 7",
        content: "Este es el texto que debe observarse en el card-text",
        buton: "Pulsame",
    },
];

const filasR = document.getElementById("rows");

const createCard = (elemento) => {

        const colum = document.createElement("div");
       
        const cards = document.createElement("div");
        const headers = document.createElement("div");
        headers.textContent = "Tarjeta de Presentacion";
  
        const div_body = document.createElement("div");
  
        const titulo = document.createElement("h5");
        titulo.textContent = elemento.title;
  
        const parrafo = document.createElement("p");
        parrafo.textContent = elemento.content;
  
        const boton = document.createElement("a");
        boton.textContent = elemento.buton;

        const footer = document.createElement("div");
      
        colum.setAttribute("class", "col-lg-4")
        div_body.setAttribute("class", "card-body");
        titulo.setAttribute("class", "card-title text-center");
        headers.setAttribute("class", "card-header bg-primary text-white");
        parrafo.setAttribute("class", "card-text ");
        boton.setAttribute("class", "btn btn-primary");
        cards.setAttribute("class", "card my-3")
        cards.setAttribute("style","width:18rem")
        footer.setAttribute("class", "card-footer")
        filasR.appendChild(colum);
        colum.appendChild(cards);
        cards.appendChild(headers);
        cards.appendChild(div_body);
        div_body.appendChild(titulo);
        div_body.appendChild(parrafo);
        div_body.appendChild(boton);
        cards.appendChild(footer);
        div_body.appendChild(parrafo);
        div_body.appendChild(boton);
}

variasTarjetas.forEach(elemento => createCard(elemento));

function texto() {
    const testA = document.getElementById("texto-addidas");
    testA.innerHTML =
        "Adidas es una de las marcas más reconocidas en el mercado deportivo, es la favorita por muchos atletas";

    const testn = document.getElementById("texto-nike");
    testn.innerHTML =
        "Empresa multinacional estadounidense dedicada al diseño, desarrollo, fabricación y comercialización ";

    const testc = document.getElementById("texto-converse");
    testc.innerHTML =
        "Converse es una compañía estadounidense de ropa y calzado fundada durante la decada de 1900. Desde 2003 ";

    const testr = document.getElementById("texto-reebok");
    testr.innerHTML =
        "Reebok es una empresa estadounidense de zapatillas, ropa, y accesorios deportivos,subsidiaria del grupo Authentic Brands Group.";

    const testp = document.getElementById("texto-puma");
    testp.innerHTML =
        "Puma SE es una empresa alemana fabricante de accesorios, ropa y calzado deportivo,cuya sede principal está en Herzogenaurach.";

    const testb = document.getElementById("texto-balenciaga");
    testb.innerHTML =
        "Balenciaga es una casa de moda de lujo española fundada en 1917 por el diseñador Cristóbal Balenciaga en San Sebastián, España";

    const testNew = document.getElementById("texto-new-balance");
    testNew.innerHTML =
        "Más conocida simplemente como New Balance (NB), es un fabricante estadounidense de piezas de arco con sede en Boston (Estados Unidos)";

    const testNike = document.getElementById("texto-nike2");
    testNike.innerHTML =
        "empresa multinacional estadounidense dedicada al diseño, desarrollo, fabricación y comercialización de equipamiento deportivo: balones.";

    const testaddidas = document.getElementById("texto-addidas2");
    testaddidas.innerHTML =
        "Adidas es una de las marcas más reconocidas en el mercado deportivo, es la favorita por muchos atletas y produce  calzado deportivo.";
}

function tabla() {
    var x = document.getElementById("mytable");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function carrusel() {
    var x = document.getElementById("carrusel2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function calculadora() {
    var num1 = parseInt(prompt("Ingrese el primer numero"));
    var num2 = parseInt(prompt("Ingrese el segundo numero"));

    suma = num1 + num2;
    resta = num1 - num2;

    alert("Calculadora\nSuma: " + suma);
    alert("Multiplicacion: " + num1 * num2);
    alert("Resta: " + resta);
    alert("Division: " + num1 / num2);
}
