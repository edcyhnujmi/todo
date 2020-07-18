const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";/////
const COORDS = 'coords';

function getWeather(lat,lng){/////
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`);/////
}/////

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
   const latitude = position.coords.latitude;
   const longitude = position.coords.longitude;
   const coordsObj = {
    //  if the name of object and key are the same, just

     /*latitude, 
       longitude 
     */
    //is okay
       latitude: latitude,
       longitude: longitude
   };
   saveCoords(coordsObj);
   getWeather(latitude, longitude);/////
}

function handleGeoError(){
    console.log("Cant access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);/////
        //console.log(parseCoords);/////
        getWeather(parseCoords.latitude,parseCoords.longitude);
        //getWeather
    }
}

function init(){
    loadCoords();
}

init();
