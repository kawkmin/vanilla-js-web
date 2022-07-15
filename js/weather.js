const API_KEY = "719d1586894b42cd1fe63a1413d8a15b"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weahter = document.querySelector("#weahter span:first-child");
            const city = document.querySelector("#weahter span:last-child");
            city.innerText = data.name;
            weahter.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}

function onGeoError() {
    alert("Can't find you");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
