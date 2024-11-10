let apiKey = "047311faf3784612a13232008240910";

async function search(a) {
  let t = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=047311faf3784612a13232008240910&q=${a}&days=3`
  );
  if (t.ok && 400 != t.status) {
    let a = await t.json();
    displayCurrent(a.location, a.current),
      displayAnother(a.forecast.forecastday);
  }
}
document.getElementById("search").addEventListener("blur", (a) => {
  search(a.target.value);
});
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function displayCurrent(a, t) {
  let weathersCondition = t.condition.text.toLowerCase();
  let weatherImgssrc = "";
  if (
    weathersCondition === "patchy rain nearby" ||
    weathersCondition === "light drizzle" ||
    weathersCondition === "heavy rain" ||
    weathersCondition === "moderate rain" ||
    weathersCondition === "light rain" ||
    weathersCondition === "light rain shower"
  ) {
    weatherImgssrc = "img/rain.png";
  } else if (weathersCondition === "clear" || weathersCondition === "clear sky") {
    weatherImgssrc = "img/night.png";
  } else if (weathersCondition === "sunny") {
    weatherImgssrc = "img/sun.png";
  } else if (weathersCondition === "snow"|| weathersCondition === "freezing fog") {
    weatherImgssrc = "img/snow.png";
  } else if (weathersCondition === "thundery outbreaks in nearby" || weathersCondition.includes("moderate or heavy rain with thunder") ) {
    weatherImgssrc = "img/thunder.png";
    } else if (
    weathersCondition === "cloudy" ||
    weathersCondition === "partly cloudy"
  ) {
    weatherImgssrc = "img/cloud.png";
  } else if (weathersCondition === "mist" || weathersCondition === "Fog") {
    weatherImgssrc = "img/mist.png";
  } else if (weathersCondition === "overcast") {
    weatherImgssrc = "img/haze.png";
  }
console.log(weathersCondition);

  if (null != t) {
    var e = new Date(t.last_updated.replace(" ", "T"));
    let n = `<div class="today forecast">\n    <div class="forecast-header"  id="today">\n    <div class="day">${
      days[e.getDay()]
    }</div>\n    <div class=" date">${
      e.getDate() + monthNames[e.getMonth()]
    }</div>\n    </div> \x3c!-- .forecast-header --\x3e\n    <div class="forecast-content" id="current">\n    <div class="location">${
      a.name
    }</div>\n    <div class="degree">\n        <div class="num">${
      t.temp_c
    }<sup>o</sup>C</div>\n      \n        <div class="forecast-icon">\n            <img src="${weatherImgssrc}" alt="" width=90>\n        </div>\t\n    \n    </div>\n    <div class="custom">${
      t.condition.text
    }</div>\n    <span><img src="img/icon-umberella.png" alt="">20%</span>\n\t\t\t\t\t\t\t\t<span><img src="img/icon-wind.png" alt="">18km/h</span>\n\t\t\t\t\t\t\t\t<span><img src="img/icon-compass.png" alt="">East</span>\n    </div>\n</div>`;
    document.getElementById("forecast").innerHTML = n;
  }
}
function displayAnother(a) {
  let cartona = "";
  for (let e = 1; e < a.length; e++){
    let  weatherCondition = a[e].day.condition.text.toLowerCase();
    let  weatherImgsrc = "";
  if (
    weatherCondition === "patchy rain nearby" ||
    weatherCondition === "light drizzle" ||
    weatherCondition === "heavy rain" ||
    weatherCondition === "light rain" ||
    weatherCondition === "moderate rain" ||
    weatherCondition === "light rain shower"
  ) {
    weatherImgsrc = "img/rain.png";
    
    } else if (weatherCondition === "clear" || weatherCondition === "clear sky") {
    weatherImgsrc = "img/night.png";
    } else if (weatherCondition === "sunny") {
    weatherImgsrc = "img/sun.png";
    } else if (weatherCondition === "snow") {
    } else if (weatherCondition === "thundery outbreaks in nearby" || weatherCondition === "moderate or heavy rain with thunder") {
    weatherImgsrc = "img/thunder.png";
    } else if (weatherCondition === "snow"|| weatherCondition === "freezing fog") {
    weatherImgsrc = "img/snow.png";
    } else if (
      weatherCondition.includes("partly cloudy") ||
      weatherCondition.includes("cloudy")
    ) {
      weatherImgsrc = "img/clouds.png";
    } else if (weatherCondition === "mist" || weatherCondition === "fog") {
    weatherImgsrc = "img/mist.png";
    } else if (weatherCondition.includes("overcast")) {
    weatherImgsrc = "img/haze.png";
    } 
    console.log(weatherImgsrc);
    console.log(weatherCondition);
  cartona += `\t<div class="forecast">\n        <div class="forecast-header">\n            <div class="day">${
    days[new Date(a[e].date.replace(" ", "T")).getDay()]
  }</div>\n        </div> \x3c!-- .forecast-header --\x3e\n        <div class="forecast-content">\n            <div class="forecast-icon">\n                <img src=${
    weatherImgsrc
  } alt="" width=80>\n            </div>\n            <div class="degree">${
    a[e].day.maxtemp_c
  }<sup>o</sup>C</div>\n            <small>${
    a[e].day.mintemp_c
  }<sup>o</sup></small>\n            <div class="custom">${
    a[e].day.condition.text
  }</div>\n        </div>\n        </div>`;}

  document.getElementById("forecast").innerHTML += cartona;
}
search("cairo");

// if (weatherCondition === "rain") {
//     weatherImg.src = "img/rain.png";
//     weatherImgs.src = "img/rain.png";
// } else if (weatherCondition === "clear" || weatherCondition === "clear sky") {
//     weatherImg.src = "img/sun.png";
//     weatherImgs.src = "img/sun.png";
// } else if (weatherCondition === "snow") {
//     weatherImg.src = "img/snow.png";
//     weatherImgs.src = "img/snow.png";
// } else if (weatherCondition === "clouds" || weatherCondition === "smoke") {
//     weatherImg.src = "img/cloud.png";
//     weatherImgs.src = "img/cloud.png";
// } else if (weatherCondition === "mist" || weatherCondition === "Fog") {
//     weatherImg.src = "img/mist.png";
//     weatherImgs.src = "img/mist.png";
// } else if (weatherCondition === "haze") {
//     weatherImg.src = "img/haze.png"  ;
//     weatherImgs.src = "img/haze.png";
// }
