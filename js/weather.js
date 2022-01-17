// https://api.openweathermap.org 이용
const API_KEY = "ffb43c467ea2b651c3f0dc7d69739b62"
function onGeoOk(position){
    // console.log(position)
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) =>{
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child") 
        city.innerText = data.name; 
        weather.innerText = `${data.weather[0].main} / ${Math.floor(data.main.temp)}˚C`;

    });
}

function onGeoError(){
    alert("Can't find you")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);