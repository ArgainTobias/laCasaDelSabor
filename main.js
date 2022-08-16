const url = "data/menu.json";
const contenedorNodoMenu = document.querySelector(".comida");

const mostrarMenu = () => {
    
    arrayMenus.forEach((menu) => {
        
        
        const nodoMenu = document.createElement("div");
        nodoMenu.classList.add(`platos`);

        const titulo = document.createElement("h3");
        titulo.innerText = `${menu.tipo}`;
        nodoMenu.append(titulo);
        
        menu.platos.forEach((plato)=>{
            const contenedorPlatos = document.createElement("p");
            contenedorPlatos.innerText = `${plato.nombre} - $${plato.precio}`
            nodoMenu.append(contenedorPlatos);
        })
        contenedorNodoMenu.append(nodoMenu);
    })
}

const inicio = () => {
    mostrarMenu();
}

inicio();