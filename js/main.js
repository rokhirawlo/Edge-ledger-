function initMap(){
const loc = { lat:19.145170 , lng:72.838260};

const map = new google.maps.Map(document.querySelector('.map')
, {
  zoom: 14,
  center: loc

});
const marker = new google.maps.Marker({position: loc, map: map});   
}