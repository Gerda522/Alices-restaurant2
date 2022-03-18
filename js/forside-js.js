let Da = function() {
  vel.innerHTML = "Velkommen til Alices Restaurant"
  tryk.innerHTML = "Tryk her for at se og bestille menu!"
  button1.innerHTML = "Se menu"
  city.innerHTML = "Vejret i Aarhus"
}

let En = function() {
  vel.innerHTML = "Welcome to Alices Restaurant"
  tryk.innerHTML = "Click here to see and order the menu!"
  button1.innerHTML = "See menu"
  city.innerHTML = "Weather in Aarhus"
}



let weather = {
  apiKey: "05f64efd0074544de77a9f0c1aa0f2b2",
  fetchWeather: function(city) {
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&lang=da&units=metric&appid=05f64efd0074544de77a9f0c1aa0f2b2")
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },

  displayWeather: function(data) {
    const {
      name
    } = data;
    const {
      icon,
      description
    } = data.weather[0];
    const {
      temp,
      humidity
    } = data.main;
    const {
      speed
    } = data.wind;
    console.log(name, icon, description, temp, humidity, speed)
    document.querySelector(".city").innerText = "Vejret i " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
  },

};

weather.fetchWeather("Aarhus");

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VyZGE1MjIiLCJhIjoiY2wwczJ2M24yMDlmYTNjcGtteG05ZWV2ZiJ9.6nPrlOmdtKJ-JuH73iqcyQ';
const monument = [10.208814, 56.158277];
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/gerda522/cl0s32hd4001214s29ykcl5iq', // style URL
  center: monument,
  zoom: 15 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());

// create the popup
const popup = new mapboxgl.Popup({
  offset: 25
}).setText(
  'Volden 234 8000 Aarhus C'
);

// create DOM element for the marker
const el = document.createElement('div');
el.id = 'marker';

// create the marker
new mapboxgl.Marker(el)
  .setLngLat(monument)
  .setPopup(popup) // sets a popup on this marker
  .addTo(map);

var date = new Date()
document.getElementById("dato").innerHTML = date.toDateString();

const d = new Date();
document.getElementById("time").innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
