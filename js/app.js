// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function showDate() {
   const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
   ];

   const months = [
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
      "December"
   ];

   let today = new Date(),
      day = today.getDay(),
      dato = today.getDate(),
      month = today.getMonth(),
      year = today.getFullYear();

   let fullDate = days[day] + ", " + dato + " " + months[month] + " " + year;

   document.getElementById("xdate").innerHTML = fullDate;
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function showTime() {
   let today = new Date(),
      hour = today.getHours(),
      min = today.getMinutes();
   let amPm;

   if (hour < 12) {
      amPm = "am";
   } else if (hour >= 12) {
      amPm = "pm";
   }

   if (hour > 12) {
      hour -= 12;
   } else if (hour == 0) {
      hour = 12;
   }

   min = (parseInt(min, 10) < 10 ? "0" : "") + min; // with leading zero
   let fullTime = hour + ":" + min;

   document.getElementById("time").innerHTML = fullTime;
   document.getElementById("ampm").innerHTML = amPm;
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function setGreet() {
   let today = new Date(),
      hour = today.getHours(),
      greeting = document.getElementById("greeting");

   if (hour < 12) {
      greeting.textContent = "Good morning, ";
      document.body.style.backgroundImage = "url('../img/morning.jpeg')";
      document.body.style.color = "#ddd";
   } else if (hour < 18) {
      greeting.textContent = "Good afternoon, ";
      document.body.style.backgroundImage = "url('../img/afternoon.jpeg')";
      document.body.style.color = "#333";
   } else {
      greeting.textContent = "Good evening, ";
      document.body.style.backgroundImage = "url('../img/evening.jpeg')";
      document.body.style.color = "#ddd";
   }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function showPhase() {
   const phase = [
      "New Moon",
      "Waxing Crescent Moon",
      "First Quarter Moon",
      "Waxing Gibbous Moon",
      "Full Moon",
      "Waning Gibbous Moon",
      "Last Quarter Moon",
      "Waning Crescent Moon"
   ];
   let c = (e = jd = b = 0);
   let today = new Date(),
      dato = today.getDate(),
      month = today.getMonth(),
      year = today.getFullYear();

   if (month < 3) {
      year--; // apparently the year begins in April
      month += 12;
   }

   month++;

   c = 365.25 * year; //no. of days since year 0
   e = 30.6 * month; //no. of days this month
   jd = c + e + dato - 694039.09; // current julian day - julian day for 1900.01.01 (a known full moon)
   jd /= 29.5305882; // divided by the lunar cycle, giving lunation rounded to nearest whole day
   b = parseInt(jd); // discard fraction
   jd -= b; // subtract the integer from the julian day, leaving the fractional part
   b = Math.round(jd * 8); // divide into pieces of eight

   if (b >= 8) {
      b = 0; // 0 and 8 are the same, so, reset
   }

   document.getElementById("moonphase").innerHTML = phase[b];
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function getMessage() {
   let today = new Date();

   if (today.getMonth() === 0 && today.getDate() === 1) {
      return "New Year's Day";
   } else if (today.getMonth() === 0 && today.getDate() === 25) {
      return "You & Me Day";
   } else if (today.getMonth() === 1 && today.getDate() === 14) {
      return "Cam's Birthday";
   } else if (today.getMonth() === 2 && today.getDate() === 17) {
      return "St Patrick's Day";
   } else if (today.getMonth() === 4 && today.getDate() === 25) {
      return "St. Bede's Day";
   } else if (today.getMonth() === 5 && today.getDate() === 11) {
      return "Anniversary";
   } else if (today.getMonth() === 5 && today.getDate() === 14) {
      return "Flag Day";
   } else if (today.getMonth() === 5 && today.getDate() === 21) {
      return "Ancestors Day";
   } else if (today.getMonth() === 5 && today.getDate() === 24) {
      return "Penny the Dog Day";
   } else if (today.getMonth() === 6 && today.getDate() === 2) {
      return "Dad's Birthday";
   } else if (today.getMonth() === 6 && today.getDate() === 4) {
      return "Independence Day";
   } else if (today.getMonth() === 6 && today.getDate() === 6) {
      return "Happy Birthday!";
   } else if (today.getMonth() === 6 && today.getDate() === 31) {
      return "Lisa's Birthday";
   } else if (today.getMonth() === 7 && today.getDate() === 1) {
      return "Swiss National Day";
   } else if (today.getMonth() === 8 && today.getDate() === 27) {
      return "Hans arrived in America (1710)";
   } else if (today.getMonth() === 9 && today.getDate() === 31) {
      return "Halloween";
   } else if (today.getMonth() === 10 && today.getDate() === 11) {
      return "Veteran's Day";
   } else if (today.getMonth() === 11 && today.getDate() === 24) {
      return "Yule Eve";
   } else if (today.getMonth() === 11 && today.getDate() === 25) {
      return "Yule";
   } else if (today.getMonth() === 11 && today.getDate() === 31) {
      return "New Year's Eve";
   } else {
      return "random";
   }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function rndMessage() {
   const randomMessages = [
      "You matter",
      "Never stop dreaming",
      "Be creative",
      "Live simply",
      "Remember who you are",
      "Trust your intuition",
      "Choose joy",
      "Be yourself",
      "Focus on the positive",
      "Create",
      "Shouldn't you be coding?",
      "Hail, Thunar!",
      "We invented everything",
      "Beagle nationalism",
      "Honor your ancestors",
      "Today's the day",
      "Be a jarl",
      "I created this",
      "The first Noble Virtue is Courage",
      "The second Noble Virtue is Truth",
      "The third Noble Virtue is Honor",
      "The fourth Noble Virtue is Fidelity",
      "The fifth Noble Virtue is Discipline",
      "The sixth Noble Virtue is Hospitality",
      "The seventh Noble Virtue is Self-Reliance",
      "The eighth Noble Virtue is Industriousness",
      "The ninth Noble Virtue is Perseverance",
      "Strength is better than weakness",
      "Courage is better than cowardice",
      "Joy is better than guilt",
      "Honor is better than dishonor",
      "Freedom is better than slavery",
      "Kinship is better than alienation",
      "Realism is better than dogmatism",
      "Vigor is better than lifelessness",
      "Ancestry is better than rootlessness"
   ];
   let max = randomMessages.length;
   let rndNum = Math.floor(Math.random() * max);
   return randomMessages[rndNum];
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function showMessage() {
   let message = "";
   message = getMessage();

   if (message == "random") {
      message = rndMessage();
   }

   document.getElementById("message").innerHTML = message;
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function showWeather() {
   let lat, long;
   let temp = document.getElementById("temperature"),
      heat_index = document.getElementById("heat-index"),
      summ = document.getElementById("summary");

   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
         lat = position.coords.latitude;
         long = position.coords.longitude;
         const proxy = "https://cors-anywhere.herokuapp.com/";
         const api = `${proxy}https://api.darksky.net/forecast/fc6838719bc5539953da7994c98bd6c6/${lat},${long}`;

         fetch(api)
            .then(weather_data => {
               return weather_data.json();
            })
            .then(weather_data => {
               const { temperature } = weather_data.currently;
               const { summary } = weather_data.currently;
               const { apparentTemperature } = weather_data.currently;

               temp.innerHTML =
                  "Temperature: " + parseInt(temperature) + "&#176;";
               heat_index.innerHTML =
                  "Heat index: " + parseInt(apparentTemperature) + "&#176;";
               summ.textContent = "Currently, it's " + summary.toLowerCase();
            });
      });
   } else {
      // geolocation does not work
      document.getElementById("temperature").textContent =
         "Unable to retrieve weather.";
   }
   setTimeout(showWeather, 300000);
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function getName() {
   let name = document.getElementById("name");
   if (localStorage.getItem("name") === null) {
      name.textContent = "[Enter Name]";
   } else {
      name.textContent = localStorage.getItem("name");
   }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function setName(event) {
   let name = document.getElementById("name");
   if (event.type === "keypress") {
      if (event.which == 13 || event.keycode == 13) {
         localStorage.setItem("name", event.target.innerText);
         name.blur();
      }
   } else {
      localStorage.setItem("name", event.target.innerText);
   }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function changeMessage() {
   let now = new Date(),
      hour = now.getHours(),
      minute = now.getMinutes(),
      seconds = now.getSeconds();

   if (hour == 0 && minute == 0 && seconds <= 7) {
      showMessage(); // change the message at midnight
   }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function initialize() {
   showMessage(); // set initial message
   showWeather(); // show initial weather
   getName();
   let name = document.getElementById("name");
   name.addEventListener("keypress", setName);
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function main() {
   showDate();
   showTime();
   setGreet();
   showPhase();
   changeMessage();
   setTimeout(main, 5000);
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
initialize();
main();
