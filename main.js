//! Descripción
//En este proyecto aplicaremos los conocimientos de JavaScript y DOM para crear una página que responda a cambios aplicados por un usuario y sea totalmente funcional.
//Para ello, haremos un "modal" que contenga el formulario de los filtros, para que podamos verlo u ocultarlo a nuestro gusto mediante un click.
//También, tendremos una serie de productos pintados (utilizando DOM y teniendo una estructura de objetos dentro de un array para un pintado sencillo y dinámico), que vayan cambiando según los filtros aplicados.
//DISEÑO SUGERIDO: https://www.figma.com/design/e9oKogSc0W6koZmUqIbwv3/PROYECTO2?node-id=0-1&t=O64qsrsxQ40Qh06Y-1

//! Requisitos
/* Nuestro proyecto consta de un archivo style.css, un index.html y un index.js
Habrá un array de objetos con la información de los productos que queramos pintar
Se generan los productos recorriendo el array con un bucle y pintándolos en el HTML mediante DOM
El contenido del HTML es muy escueto, y como mucho tiene un header y un footer, el resto irá inyectado mediante javascript */
//! Cosas pendientes:
//Web FULL RESPONSIVE
//Cumple los requisitos mínimos del anterior proyecto en cuanto al HTML y el CSS
//?pasarlo por el revisor de html y css
//mirar meta
//Hay un mínimo de dos filtros que funcionen en conjunto
//Si no se encuentra ningún producto con los filtros introducidos se mostrarán 3 productos aleatorios con un mensaje de productos sugeridos
//Existe un botón limpiar filtros, que reinicia los inputs de filtrado y pinta todos los productos
//3 botones con iconos
//Filtro de precio max
//Primer boton y flecha hace aparecer y desaparecer los filtros
//Pintar todos los playeros
//desplegable filtro
//cada zapatilla con border radius y shadow
//boton en medio y menor en cada zapatilla
//quitar scroll horizontal
//Hacer botones para los filtros
//Borrar lo que hay al poner un filtro
// Sandwich menu
//Boton izda arriba mejorar, border-radius
//colocar el aviso de 3 productos
//?boton sandwich mejorar

const trainersList = [
  {
    brand: "Nike Original",
    model: "Air Max 1",
    price: "120,00€",
    img: "./assets/Air_Max_1.png",
  },
  {
    brand: "New Balance",
    model: "NB 9060",
    price: "80,00€",
    img: "./assets/NB 9060.png",
  },
  {
    brand: "Nike Original",
    model: "Nike Revolution",
    price: "90,00€",
    img: "./assets/Nike Revolution.png",
  },
  {
    brand: "Adidas Original",
    model: "Forum Buckle",
    price: "100,00€",
    img: "./assets/Forum Buckle.png",
  },
  {
    brand: "Adidas Original",
    model: "Campus",
    price: "120,00€",
    img: "./assets/Campus.png",
  },
  {
    brand: "New Balance",
    model: "NB 327",
    price: "120,00€",
    img: "./assets/NB 327.png",
  },
  {
    brand: "Nike Original",
    model: "Dunk Low",
    price: "100,00€",
    img: "./assets/Dunk Low.png",
  },
  {
    brand: "Adidas Original",
    model: "Gazelle",
    price: "90,00€",
    img: "./assets/Gazelle.png",
  },
  {
    brand: "Nike Original",
    model: "Air Max SC",
    price: "150,00€",
    img: "./assets/Air Max SC.png",
  },
  {
    brand: "Adidas Original",
    model: "Handball Spezial",
    price: "120,00€",
    img: "./assets/Handball Spezial.png",
  },
  {
    brand: "Nike Original",
    model: "Air Force",
    price: "130,00€",
    img: "./assets/Air_Force.png",
  },
  {
    brand: "New Balance",
    model: "NB 9060",
    price: "120,00€",
    img: "./assets/NB 9060 b.png",
  },
  {
    brand: "New Balance",
    model: "NB 480",
    price: "150,00€",
    img: "./assets/NB 480.png",
  },
  {
    brand: "Nike Original",
    model: "Full Force Low",
    price: "70,00€",
    img: "./assets/Full Force Low.png",
  },
  {
    brand: "Nike Original",
    model: "Air Max SC",
    price: "160,00€",
    img: "./assets/Air Max SC b.png",
  },
  {
    brand: "Adidas Original",
    model: "Handball Spezial",
    price: "140,00€",
    img: "./assets/Handball Spezial b.png",
  },
];
const optionsSelectBrand = [];
const headerInfo = document.createElement("header");
const headerDiv1 = document.createElement("nav");
const headerDiv1ImgContainer = document.createElement("div");
const headerDiv1Img = document.createElement("img");
const headerDiv1Ul = document.createElement("ul");
const headerDiv1UlImg = document.createElement("button");
const headerDiv1Li1 = document.createElement("li");
const headerDiv1Li2 = document.createElement("li");
const headerDiv1Li3 = document.createElement("li");
const headerDiv1Li4 = document.createElement("li");
const headerButton1 = document.createElement("button");
const headerButton2 = document.createElement("button");
const headerButton3 = document.createElement("button");
const headerDiv2 = document.createElement("div");
const headerDiv3 = document.createElement("div");
const headerBGImg = document.createElement("img");
const headerFilters = document.createElement("div");
const brandFilter = document.createElement("select");
const brandFilterText = document.createElement("option");
const priceFilter = document.createElement("input");
const filterButton = document.createElement("button");
const filterReset = document.createElement("button");
const showFilters = document.createElement("button");
const showFiltersContainer = document.createElement("div");
const mainInfo = document.createElement("main");
const footerInfo = document.createElement("footer");
const footerUl1 = document.createElement("ul");
const footerUl1Li1 = document.createElement("li");
const footerUl1Li2 = document.createElement("li");
const footerUl1Li3 = document.createElement("li");
const footerUl1Li4 = document.createElement("li");
const footerUl1Li5 = document.createElement("li");
const footerUl1Li6 = document.createElement("li");
const footerUl2 = document.createElement("ul");
const footerUl2Li1 = document.createElement("li");
const footerUl2Li2 = document.createElement("li");
const footerUl2Li3 = document.createElement("li");
const footerUl2Li4 = document.createElement("li");
const footerUl3 = document.createElement("ul");
const footerUl3Li1 = document.createElement("li");
const footerUl3Li2 = document.createElement("li");
const footerUl3Li3 = document.createElement("li");
const footerUl3Li4 = document.createElement("li");
const footerUl3Li5 = document.createElement("li");
const footerUl3Li6 = document.createElement("li");
headerDiv3.classList = "imgHeader";
headerDiv1Img.classList = "imgHeaderLogo";
headerDiv1Ul.classList = "selectPerson";
headerDiv1UlImg.classList = "menuSandwich";
headerDiv1UlImg.src = "./assets/sandwich.png";
headerDiv3.src = "./assets/bgImgHeader.png"
headerButton1.classList = "buttonFilter";
headerButton2.classList = "buttonCarrito";
headerButton3.classList = "buttonUser";
headerFilters.classList = "filtersZone";
filterButton.classList = "filtersButtonZone";
filterReset.classList = "filtersResetZone";
showFilters.classList = "mostrarOcultarFiltrosClass"
priceFilter.id = "priceMax";
brandFilterText.id = "allBrands";
brandFilter.id = "selectOfBrands";
showFilters.id = "mostrarOcultarFiltros"
showFiltersContainer.id = "contenedorMostrarOcultarFiltros"
mainInfo.id = "zapatillas";
footerInfo.classList = "InfoFooter";
footerUl1.classList = "InfoFooterUl"
footerUl1Li1.classList = "InfoFooterUl1";
footerUl1Li2.classList = "InfoFooterUl1";
footerUl1Li3.classList = "InfoFooterUl1";
footerUl1Li4.classList = "InfoFooterUl1";
footerUl1Li5.classList = "InfoFooterUl1";
footerUl1Li6.classList = "InfoFooterUl1";
footerUl2.classList = "InfoFooterUl"
footerUl2Li1.classList = "InfoFooterUl2";
footerUl2Li2.classList = "InfoFooterUl2";
footerUl2Li3.classList = "InfoFooterUl2";
footerUl2Li4.classList = "InfoFooterUl2";
footerUl3.classList = "InfoFooterUl"
footerUl3Li1.classList = "InfoFooterUl3";
footerUl3Li2.classList = "InfoFooterUl3";
footerUl3Li3.classList = "InfoFooterUl3";
footerUl3Li4.classList = "InfoFooterUl3";
footerUl3Li5.classList = "InfoFooterUl3";
footerUl3Li6.classList = "InfoFooterUl3";
headerDiv1Li1.textContent = "Hombre";
headerDiv1Li2.textContent = "Mujer";
headerDiv1Li3.textContent = "Niños";
headerDiv1Li4.textContent = "Ofertas";
headerDiv1Li1.classList = "liMenuSandwich";
headerDiv1Li2.classList = "liMenuSandwich";
headerDiv1Li3.classList = "liMenuSandwich";
headerDiv1Li4.classList = "liMenuSandwich";
brandFilter.options = "a";
priceFilter.type = "number";
brandFilterText.setAttribute("selected", "");
brandFilterText.textContent = "Todas las marcas";
priceFilter.setAttribute("type", "number");
priceFilter.placeholder = "precio máximo €";
filterButton.textContent = "Filtrar";
filterReset.textContent = "Limpiar filtro";
footerUl1.textContent = "Compra con JD";
footerUl1Li1.textContent = "Guía de tallas";
footerUl1Li2.textContent = "Buscador de tallas";
footerUl1Li3.textContent = "Descuento estudiantes";
footerUl1Li4.textContent = "Calendario lanzamientos";
footerUl1Li5.textContent = "Inscribete a JDX";
footerUl1Li6.textContent = "JD Blog";
footerUl2.textContent = "Atención al cliente";
footerUl2Li1.textContent = "Preguntas frecuentes";
footerUl2Li2.textContent = "Envíos y devoluciones";
footerUl2Li3.textContent = "Seguimiento de envío";
footerUl2Li4.textContent = "Contacto";
footerUl3.textContent = "Aviso legal";
footerUl3Li1.textContent = "Términos y condiciones";
footerUl3Li2.textContent = "Promociones y condiciones";
footerUl3Li3.textContent = "Política de privacidad";
footerUl3Li4.textContent = "Política de Cookies";
footerUl3Li5.textContent = "Ajustes de Cookies";
footerUl3Li6.textContent = "Accesibilidad";
document.body.appendChild(headerInfo);
headerInfo.appendChild(headerDiv1);
headerDiv1.appendChild(headerDiv1ImgContainer);
headerDiv1ImgContainer.appendChild(headerDiv1Img);
//headerDiv1.appendChild(headerBGImg);
headerDiv1.appendChild(headerDiv1Ul);
headerDiv1Ul.appendChild(headerDiv1UlImg);
headerDiv1Ul.appendChild(headerDiv1Li1);
headerDiv1Ul.appendChild(headerDiv1Li2);
headerDiv1Ul.appendChild(headerDiv1Li3);
headerDiv1Ul.appendChild(headerDiv1Li4);
headerInfo.appendChild(headerDiv1);
headerInfo.appendChild(headerDiv1);
headerInfo.appendChild(headerDiv1);
headerInfo.appendChild(headerDiv1);
headerDiv1.appendChild(headerDiv2);
headerDiv2.appendChild(headerButton1);
headerDiv2.appendChild(headerButton2);
headerDiv2.appendChild(headerButton3);
headerInfo.appendChild(headerDiv3);
headerInfo.appendChild(headerFilters);
headerFilters.appendChild(brandFilter);
brandFilter.appendChild(brandFilterText);
headerFilters.appendChild(priceFilter);
headerFilters.appendChild(filterButton);
headerFilters.appendChild(filterReset);
headerInfo.appendChild(showFiltersContainer);
showFiltersContainer.appendChild(showFilters);
document.body.appendChild(mainInfo);
document.body.appendChild(footerInfo);
footerInfo.appendChild(footerUl1);
footerUl1.appendChild(footerUl1Li1);
footerUl1.appendChild(footerUl1Li2);
footerUl1.appendChild(footerUl1Li3);
footerUl1.appendChild(footerUl1Li4);
footerUl1.appendChild(footerUl1Li5);
footerUl1.appendChild(footerUl1Li6);
footerInfo.appendChild(footerUl2);
footerUl2.appendChild(footerUl2Li1);
footerUl2.appendChild(footerUl2Li2);
footerUl2.appendChild(footerUl2Li3);
footerUl2.appendChild(footerUl2Li4);
footerInfo.appendChild(footerUl3);
footerUl3.appendChild(footerUl3Li1);
footerUl3.appendChild(footerUl3Li2);
footerUl3.appendChild(footerUl3Li3);
footerUl3.appendChild(footerUl3Li4);
footerUl3.appendChild(footerUl3Li5);
footerUl3.appendChild(footerUl3Li6);
const printZapatillas = (zapatillas) => {
  const zapatillasSection = document.querySelector("#zapatillas");
  for (const zapatilla of zapatillas) {
    // Crear los elementos
    const containerZapa = document.createElement("div");
    const brandZapa = document.createElement("h3");
    const modelZapa = document.createElement("p");
    const priceZapa = document.createElement("p");
    const imgZapa = document.createElement("img");
    const buyButton = document.createElement("button");

    containerZapa.classList = "eachDivZapatilla";
    brandZapa.classList = "brandZapatilla";
    modelZapa.classList = "modelZapatilla";
    priceZapa.classList = "priceZapatilla";
    imgZapa.classList = "imgZapatilla";
    buyButton.classList = "buyButtonZapatilla";
    // dando los valores
    brandZapa.textContent = zapatilla.brand;
    modelZapa.textContent = zapatilla.model;
    priceZapa.textContent = zapatilla.price;
    imgZapa.src = zapatilla.img;
    buyButton.textContent = "Comprar";

    // Añadir los elementos al HTML
    mainInfo.appendChild(containerZapa);
    containerZapa.appendChild(imgZapa);
    containerZapa.appendChild(brandZapa);
    containerZapa.appendChild(modelZapa);
    containerZapa.appendChild(priceZapa);
    containerZapa.appendChild(buyButton);

    if (!optionsSelectBrand.includes(zapatilla.brand)) { optionsSelectBrand.push(zapatilla.brand); }
  }
};
printZapatillas(trainersList);
optionsSelectBrand.forEach(element => {
  const option = document.createElement("option");
  option.textContent = element;
  brandFilter.appendChild(option);
});
//funciones para los filtros
const threeRecomendations = document.createElement("p");
threeRecomendations.classList = "aviso3Productos";
threeRecomendations.textContent = "Los filtros no encuentran tus productos deseados. Te recomendamos estos 3 productos";
headerFilters.appendChild(threeRecomendations);
threeRecomendations.style.display = "none";
const filterZapatillas = (e) => {
  const theMaxPrice = document.getElementById("priceMax");
  if (threeRecomendations.style.display === 'block') {
    threeRecomendations.style.display = 'none';
  }
  if (theMaxPrice.value === "" && brandFilter.value === "Todas las marcas") {
    resetFilterZapatillas();
  } else {
    const bFilter = brandFilter.value;
    const brandSelected = [];
    trainersList.forEach(element => {
      const priceNumber = parseInt(element.price);
      if (((element.brand === bFilter) || (brandFilter.value === "Todas las marcas")) && ((priceNumber <= theMaxPrice.value) || (theMaxPrice.value === ""))) {
        brandSelected.push(element);
      }
    });
    //borramos todas las zapatillas
    const elementR = document.getElementById("zapatillas");
    while (elementR.firstChild) {
      elementR.removeChild(elementR.firstChild);
    }
    // Mostrar 3 elementos aleatorios
    if (brandSelected.length < 1 && brandFilter.value !== "Todas las marcas") {
      let num1 = Math.floor(Math.random() * trainersList.length);
      while (trainersList[num1].brand != bFilter) {
        num1 = Math.floor(Math.random() * trainersList.length);
      }
      let num2 = Math.floor(Math.random() * trainersList.length);
      while ((num1 == num2) || (trainersList[num2].brand != bFilter)) {
        num2 = Math.floor(Math.random() * trainersList.length);
      }
      let num3 = Math.floor(Math.random() * trainersList.length);
      while (num1 == num3 || num2 == num3 || (trainersList[num3].brand != bFilter)) {
        num3 = Math.floor(Math.random() * trainersList.length);
      }
      brandSelected.push(trainersList[num1]);
      brandSelected.push(trainersList[num2]);
      brandSelected.push(trainersList[num3]);
      if (threeRecomendations.style.display === 'none') {
        threeRecomendations.style.display = 'block';
      }
    } else if (brandSelected.length < 1) {
      let num1 = Math.floor(Math.random() * trainersList.length);
      num1 = Math.floor(Math.random() * trainersList.length);
      let num2 = Math.floor(Math.random() * trainersList.length);
      while ((num1 == num2)) {
        num2 = Math.floor(Math.random() * trainersList.length);
      }
      let num3 = Math.floor(Math.random() * trainersList.length);
      while (num1 == num3 || num2 == num3) {
        num3 = Math.floor(Math.random() * trainersList.length);
      }
      brandSelected.push(trainersList[num1]);
      brandSelected.push(trainersList[num2]);
      brandSelected.push(trainersList[num3]);
      if (threeRecomendations.style.display === 'none') {
        threeRecomendations.style.display = 'block';
      }
    }
    printZapatillas(brandSelected);
  }
}
filterButton.addEventListener("click", () => filterZapatillas());
const resetFilterZapatillas = (e) => {
  if (threeRecomendations.style.display === 'block') {
    threeRecomendations.style.display = 'none';
  }
  const elementR = document.getElementById("zapatillas");
  while (elementR.firstChild) {
    elementR.removeChild(elementR.firstChild);
  };
  const theMaxPriceR = document.getElementById("priceMax");
  theMaxPriceR.value = "";
  const brandFilterR = document.getElementById("allBrands");
  brandFilterR.selected = true;
  printZapatillas(trainersList);
}
filterReset.addEventListener("click", () => resetFilterZapatillas());
let elementInput = document.getElementById(`priceMax`);
headerFilters.style.display = '';
const toggleFilters = () => {
  if (headerFilters.style.display === '') {
    headerFilters.style.display = 'none';
    showFilters.classList = "rotar"
  } else {
    headerFilters.style.display = '';
    showFilters.classList = "noRotar"
  }
}
showFilters.addEventListener("click", () => toggleFilters());

const toggleMenuSandwich = () => {
  if (menuSi === true) {
    menuSi = false;
    headerDiv1Li1.style.display = "block";
    headerDiv1Li2.style.display = "block";
    headerDiv1Li3.style.display = "block";
    headerDiv1Li4.style.display = "block";
  } else {
    menuSi = true;
    headerDiv1Li1.style.display = "none";
    headerDiv1Li2.style.display = "none";
    headerDiv1Li3.style.display = "none";
    headerDiv1Li4.style.display = "none";
  }
  console.log(menuSi)
}
let menuSi = true;
headerDiv1UlImg.addEventListener("click", () => toggleMenuSandwich());