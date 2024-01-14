import * as obj from './js/map.js'

// declaración global de elemetos importados initMap y apikey
window.initMap=obj.initMap;
window.apikey=obj.apikey;

let uri=`https://maps.googleapis.com/maps/api/js?key=${apikey}&callback=initMap`;
let script =document.createElement('script');

script.src=uri;
script.async=true;
script.defer=true;

document.body.appendChild( script );

// navbar config
const button = document.querySelector('#pullDownButton') 
const menu = document.querySelector('#mobile-menu')

button.addEventListener('click', ()=>{
    console.log('click');
    menu.classList.toggle('hidden')
});