// enrutamiento url de la pagina
document.addEventListener('click',(e) => {
    const {target} = e;
    if (!target.matches('nav a')){
        return;
    }
    e.preventDefault();
    console.log('si funciono');
    route();
})

const routes = {
    "/" : {
        template:"/src/views/index.html",
        title:"Incio"
    },
    "/hotel" : {
        template:"/src/views/hotel.html",
        title: ""
    },
    "/contactenos" : {
        template:"/src/views/contactenos.html",
        title: ""
    }
};

const route = (event) =>{
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({},"", event.target.href);
    handlerLocation();
} 

// const handlerLocation = async () => {
//   let currentLocation = window.location.pathname;
//   if (currentLocation.length === 0) {
//     currentLocation = "/";
//   }
// //   || routes["/"]
//   const urlLocation = routes[currentLocation] ;
//   const html = await fetch(urlLocation.template).then((res)=>
//   res.text());
//   document.getElementById('content').innerHTML = html
//   document.title= urlLocation.title;
// };
const handlerLocation = async () => {
    const currentLocation = window.location.pathname;
    if (currentLocation.length === 0) {
      currentLocation = "/";
    }
  
    // Verificar si la ruta actual existe en routes, si no, usar la ruta "/"
    const urlLocation = routes[currentLocation];
  
    if (urlLocation) {
      const html = await fetch(urlLocation.template).then((res) => res.text());
      document.getElementById('content').innerHTML = html;
      document.title = urlLocation.title;
    } else {
      console.error(`Error: No se encontró la ruta para ${currentLocation}`);
      // Puedes manejar la falta de ruta de manera adecuada, como redirigir a una página de error.
    }
  };

window.onpopstate = handlerLocation;

window.urlLocation = route;

handlerLocation();