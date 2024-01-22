// configuración de renderización del map para views/inicio 

import * as obj from './components/map'

// declaración global de elemetos importados initMap y apikey
window.initMap=obj.initMap;
window.apikey=obj.apikey;

let uri=`https://maps.googleapis.com/maps/api/js?key=${apikey}&callback=initMap`;
let script =document.createElement('script');

script.src=uri;
script.async=true;
script.defer=true;
document.body.appendChild( script );
console.log('esta weada funciono');