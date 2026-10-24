const userInput = document.querySelector(".inputField");
const forecastNAme = document.querySelector(".forecast-name");
const forecastDescription = document.querySelector(".forecast-description");

/* =============================================
                HOURS CARDS
\ =============================================*/
const now = document.querySelector(".now");
const getTime = document.querySelectorAll(".time");
const timeValue = document.querySelectorAll(".value");
const condition = document.querySelectorAll(".condition");

/* =============================================
                RIGHT CONTAINER
 =============================================*/
const pin = document.querySelector("pin");
const locationNAme = document.querySelector(".location");
const temperature = document.querySelector(".temperature");
// const tempCondition = document.querySelector('.condition') repeated
const stat_item = document.querySelector(".stat-item");
const weatherSummary = document.querySelector(".weather-summary");

/* =============================================
                RIGHT CONTAINER CARDS
 =============================================*/
const humidityNumber = document.querySelector(".humidityNumber");
const windNumber = document.querySelector(".windNumber");
const uvNumber = document.querySelector(".uvNumber");
const changeDegree = document.querySelector(".degree");

let currentTempFahrenheit;
let isCelsius = false;

function updateTemperatureDisplay() {
  if (!Number.isFinite(currentTempFahrenheit)) {
    return;
  }

  const displayedTemp = isCelsius
    ? ((currentTempFahrenheit - 32) * 5) / 9
    : currentTempFahrenheit;
  const unit = isCelsius ? "C" : "F";

  temperature.textContent = `${displayedTemp.toFixed(1)}°${unit}`;
  timeValue.forEach((cardTemperature) => {
    cardTemperature.textContent = `${displayedTemp.toFixed(1)}°${unit}`;
  });
}

changeDegree.addEventListener("click", () => {
  isCelsius = !isCelsius;
  changeDegree.textContent = isCelsius ? "Fahrenheit" : "Celsius";
  updateTemperatureDisplay();
});

/* =============================================
        FETCHING DATA FROM THE API
 =============================================*/
async function getData() {
  const input = userInput.value.trim();
  userInput.value = "";
  const weather_KEY = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}?unitGroup=us&key=XQ6YLCGETA3TAVWPWFN3QBBME`;

  if (!input) {
    alert("Please enter a location to search");
    return;
  }

  temperature.textContent = "Loading...";
  forecastNAme.textContent = "Loading...";

  try {
    const response = await fetch(weather_KEY);
    if (!response.ok) {
      throw new Error(`Famous erro: ${response.status}`);
    }
    const data = await response.json();
    forecastNAme.textContent = data.resolvedAddress;
    locationNAme.textContent = data.resolvedAddress;
    forecastDescription.textContent = data.description;
    condition.textContent = data.currentConditions.conditions;
    humidityNumber.textContent = `${data.currentConditions.humidity}%`;
    windNumber.textContent = `${data.currentConditions.windspeed}km/h`;

    currentTempFahrenheit = Number(data.currentConditions.temp);
    updateTemperatureDisplay();

    /* ==================================================
     CHANGED THE SUMMARYCARD BG BASED ON THE WEATHER
    ====================================================*/
    const currentCondition =
      data.currentConditions.conditions || data.description || "Clear";
    const conditionText = currentCondition.toLowerCase();
    let backgroundImage = "./img/sunny.jpeg";

    if (conditionText.includes("thunder") || conditionText.includes("storm")) {
      backgroundImage = "./img/storm.jpeg";
    } else if (conditionText.includes("heavy rain")) {
      backgroundImage = "./img/rainny2.jpeg";
    } else if (conditionText.includes("rain")) {
      backgroundImage = "./img/rainny.jpeg";
    } else if (
      conditionText.includes("cloud") ||
      conditionText.includes("overcast") ||
      conditionText.includes("fog") ||
      conditionText.includes("mist")
    ) {
      backgroundImage = "./img/cloudy.jpeg";
    }

    weatherSummary.style.backgroundImage = `url('${backgroundImage}')`;
    document.body.style.backgroundImage =
  `linear-gradient(135deg, rgba(6, 6, 6, 0.55), rgba(227, 242, 255, 0.65)), ` +
  `url('${backgroundImage}')`;

    /* ==================================================
                SUMMARY CARD CPONDITIONS
    ====================================================*/
    condition.forEach((condition) => {
      condition.textContent = data.currentConditions.conditions;
    });

    if (
      data.currentConditions.uvindex > 0 &&
      data.currentConditions.uvindex <= 2
    ) {
      uvNumber.textContent = "Low";
    } else if (
      data.currentConditions.uvindex > 3 &&
      data.currentConditions.uvindex <= 6
    ) {
      uvNumber.textContent = "Moderate";
    } else if (
      data.currentConditions.uvindex > 6 &&
      data.currentConditions.uvindex <= 7
    ) {
      uvNumber.textContent = "High";
    } else if (
      data.currentConditions.uvindex > 8 &&
      data.currentConditions.uvindex <= 10
    ) {
      uvNumber.textContent = "Very high";
    } else if (data.currentConditions.uvindex > 10) {
      uvNumber.textContent = "Extreme";
    }

    /* =============================================
                 TIME  DISPLAY
    =============================================*/
    const hourlyData = data.days?.[0]?.hours ?? [];
    const currentHour = data.currentConditions.datetime?.slice(0, 2);
    const startIndex = hourlyData.findIndex(
      (hour) => hour.datetime?.slice(0, 2) === currentHour
    );

    timeValue.forEach((card, index) => {
      const hourData =
        startIndex < 0 ? undefined : hourlyData[startIndex + index];
      const time = getTime[index];
      const cardCondition = condition[index];

      if (!hourData) {
        card.textContent = "N/A";
        time.textContent = "N/A";
        cardCondition.textContent = "N/A";
        return;
      }

      card.textContent =
        Number.isFinite(Number(hourData.temp)) && hourData.temp != null
          ? `${Math.round(hourData.temp)}°F`
          : "N/A";
      time.textContent = hourData.datetime
        ? index === 0
          ? "Now"
          : hourData.datetime
        : "N/A";
      cardCondition.textContent = hourData.conditions || "N/A";
    });

// The only code i dont understand how it works only God Know how it worked ;)

    /* =============================================
               TIME GEGREE DISPLAY
    =============================================*/
    console.log(data);
  } catch (error) {
    temperature.textContent = "Unavailable";
    console.error(error);
  }
}
/* =============================================
        SEARCH BAR KEYPRESS EVENTCLISTER
 =============================================*/
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getData();
  }
});

/* =============================================
         DEFAULT LOCATION ON START
 =============================================*/
userInput.value = "Accra"; // Choose your starting city
getData();                   // Fetch its weather when the page loads
