const weatherContainer = document.querySelector(".weather__container");

const API_KEY = "d8395d193557f6d8cb03d38b69442b17";

const koreaPlace = {
  Seoul: {
    lat: 37.56667,
    log: 126.97806,
  },
  Busan: {
    lat: 35.17944,
    log: 129.07556,
  },
  Incheon: {
    lat: 37.45639,
    log: 126.70528,
  },
  Daegu: {
    lat: 35.87222,
    log: 128.6025,
  },
  Daejeon: {
    lat: 36.35111,
    log: 127.385,
  },
  Gwangju: {
    lat: 35.15972,
    log: 126.85306,
  },
  Ulsan: {
    lat: 35.53889,
    log: 129.31667,
  },
};

const getWeather = () => {
  for (let i = 0; i < Object.keys(koreaPlace).length; i++) {
    const lat = koreaPlace[Object.keys(koreaPlace)[i]].lat;
    const log = koreaPlace[Object.keys(koreaPlace)[i]].log;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const temperature = json.main.temp;
        const weatherDiv = document.createElement("div");
        const weatherTemp = document.createElement("span");
        const weatherPlace = document.createElement("span");
        const weatherImg = document.createElement("img");
        weatherDiv.classList.add("weather__div");
        weatherImg.classList.add("weather__image");
        weatherTemp.classList.add("weather__temp");
        weatherPlace.classList.add("weather__place");
        weatherContainer.append(weatherDiv);
        weatherDiv.append(weatherTemp);
        weatherDiv.append(weatherPlace);
        weatherDiv.append(weatherImg);
        weatherImg.src = `images/${Object.keys(koreaPlace)[i]}.jpg`;
        weatherPlace.innerText = Object.keys(koreaPlace)[i];
        weatherTemp.innerText = `${temperature}℃`;
      });
  }
};

function init() {
  getWeather();
}

init();
