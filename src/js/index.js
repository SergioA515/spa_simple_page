import * as obj from './components/map'
import { showImage, nextImage } from './components/carrousel';

setInterval(nextImage, 5000);

// declaración global de elemetos importados initMap y apikey
window.initMap=obj.initMap;
window.apikey=obj.apikey;

let uri=`https://maps.googleapis.com/maps/api/js?key=${obj.apikey}&callback=initMap`;
let script =document.createElement('script');

script.src=uri;
script.async=true;
script.defer=true;
document.body.appendChild( script );
console.log('esta weada funciono ---'+obj.apikey);