const apikey= 'AIzaSyDNcNhBABiuk6_NxDynt3Qy5DvYbRWh8UE';
function initMap(){
    const coords = {lat: 5.0592886227257114, lng: -75.48756347688564};
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 15,
          center: coords,
        });
        const marker = new google.maps.Marker({
          position: coords,
          map,
        });
        return map,marker;
}
function test(){
  const p = console.log('La weada principal tambien funciono');
  return p;
}
export { initMap,apikey,test };
