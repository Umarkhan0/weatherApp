navigator.geolocation.getCurrentPosition((location) => {
  let latitude = location.coords.latitude;
  let longitude = location.coords.longitude;
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=4c6a63ac32f07ed8e5671fc2c70a2de1&units=metric`)
    .then(res => res.json())
    .then((res) => {
      let temp = document.getElementById("tempreture")
      temp.innerHTML = `
    ${Math.round(res.main.temp)}<sup class="degree">o</sup>C
    `

      let back = document.getElementById("image")
      let body = document.getElementById("body");
      if (Math.round(res.main.temp) <= 0) {
        back.style.backgroundImage = "url('https://tse4.mm.bing.net/th?id=OIP.UVAyUy5phpeujFgTeWRo_AHaE7&pid=Api&P=0&h=180')";
        body.style.backgroundImage = "url('https://as2.ftcdn.net/v2/jpg/02/42/34/23/1000_F_242342389_NBmK5GZY8PKVSW2ohxEPchaMqCVQIXUW.jpg')"
      }
      else if (res.weather[0].main == "Clouds") {
        back.style.backgroundImage = "url('https://wallpaperaccess.com/full/530682.jpg')";
        body.style.backgroundImage = "url('https://j.gifs.com/vQJxxY.gif')"
      }

      else if (res.weather[0].main == "Thunderstorm") {
        back.style.backgroundImage = "url('https://rebelfinancial.com/wp-content/uploads/2018/03/vibrant-sunrise-yellow.jpg')";
        body.style.backgroundImage = "url('https://media.giphy.com/media/elm5ZlD6mCmFa/giphy.gif')"
      }
      else if (res.weather[0].main == "Clear") {
        back.style.backgroundImage = "url('https://rebelfinancial.com/wp-content/uploads/2018/03/vibrant-sunrise-yellow.jpg')";
        body.style.backgroundImage = "url('https://media.giphy.com/media/lyVNcb1n5Ob0Q/giphy.gif')"
      }
      else if (res.weather[0].main == "Smoke") {
        back.style.backgroundImage = "url('https://thumbs.dreamstime.com/b/shot-out-car-urbanization-global-warming-roadtrip-iceland-smoke-out-geothermal-pipes-against-dramatic-sunset-sky-108272378.jpg')";

        body.style.backgroundImage = "url('https://tse3.mm.bing.net/th?id=OIP.4m3iW4Pk8e1OFQsx6gCD6QHaEK&pid=Api&P=0&h=180')"

      }
      else if (res.weather[0].main == "Rain") {
        back.style.backgroundImage = "url('https://t3.ftcdn.net/jpg/00/70/07/18/240_F_70071801_cv30tSjMxjjleEU9kz7Q43p0pRELYAD0.jpg')";
        body.style.backgroundImage = "url('https://giffiles.alphacoders.com/105/105296.gif')"

      }
      else if (res.weather[0].main == "Haze") {

        back.style.backgroundImage = "url('https://t4.ftcdn.net/jpg/00/55/46/81/240_F_55468141_bnLQvA4ulDX0Jn8ZJq3WxfATKF0Y6rEY.jpg')";
        body.style.backgroundImage = "url('image/images.jpg')";
      }
      else if (res.weather[0].main == "Fog") {
        back.style.backgroundImage = "url('https://tse4.mm.bing.net/th?id=OIP.Ta4rHTDuIsCWR7z4BVh4LAHaFj&pid=Api&P=0&h=180')";

        body.style.backgroundImage = "url('https://media.giphy.com/media/VJcvHTPa98IoM/giphy.gif')"

      }
      else if (res.weather[0].main == "Tornado") {
        back.style.backgroundImage = "url('https://tse1.mm.bing.net/th?id=OIP.rEot5c_jlK4rfVZBcqXgFgHaE8&pid=Api&P=0&h=180')";

        body.style.backgroundImage = "url('https://api.time.com/wp-content/uploads/2017/04/121.gif')"

      }
      else if (res.weather[0].main == "Blizzard") {
        back.style.backgroundImage = "url('https://bgr.com/wp-content/uploads/2015/01/blizzard-2015.jpg?resize=827')";

        body.style.backgroundImage = "url('https://i.pinimg.com/originals/1f/5b/23/1f5b23a579ec85824e4340b20feaa457.gif')"

      }
      else if (res.weather[0].main == "Sunshine") {
        back.style.backgroundImage = "url('https://rebelfinancial.com/wp-content/uploads/2018/03/vibrant-sunrise-yellow.jpg')";

        body.style.backgroundImage = "url('https://media1.tenor.com/images/0840f15b8866176a10659fdf0f8f36b7/tenor.gif?itemid=11579869')"

      }

      else if (res.weather[0].main == "Heatwave") {

        back.style.backgroundImage = "url('https://www.healthvermont.gov/sites/default/files/images/2018/06/ENV_CH_HotWeather.jpg')";
        body.style.backgroundImage = "url('https://media.giphy.com/media/xT0wlvGLHmojbeu5vq/giphy.gif')";

      }
    

      document.getElementById("clouds").innerHTML = `
    ${res.clouds.all}%
    `
      document.getElementById("wind").innerHTML = `
    ${res.wind.speed}%
    `
      document.getElementById("cityName").innerHTML = `
    ${res.name}<p class="weaterType">${res.weather[0].main}</p>
    `
    })
    .catch((err) => {
      console.log(err);
    });
})
function search() {
  let user = document.getElementById("inputdisa")

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${user.value}&appid=4c6a63ac32f07ed8e5671fc2c70a2de1&units=metric`)
    .then(res => res.json())
    .then((res) => {
      let temp = document.getElementById("tempreture")
      temp.innerHTML = `
    ${Math.round(res.main.temp)}<sup class="degree">o</sup>C
    `
      let back = document.getElementById("image")
      let body = document.getElementById("body");
      if (Math.round(res.main.temp) <= 0) {

        back.style.backgroundImage = "url('https://tse4.mm.bing.net/th?id=OIP.UVAyUy5phpeujFgTeWRo_AHaE7&pid=Api&P=0&h=180')";
        body.style.backgroundImage = "url('https://as2.ftcdn.net/v2/jpg/02/42/34/23/1000_F_242342389_NBmK5GZY8PKVSW2ohxEPchaMqCVQIXUW.jpg')"

      }
      else if (res.weather[0].main === "Clouds") {
        back.style.backgroundImage = "url('https://wallpaperaccess.com/full/530682.jpg')";
        body.style.backgroundImage = "url('https://j.gifs.com/vQJxxY.gif')"

      }

      else if (res.weather[0].main == "Thunderstorm") {
        back.style.backgroundImage = "url('http://www.weatherforecast.co.uk/blog/wp-content/uploads/2015/06/thunderstorms.jpg')";
        body.style.backgroundImage = "url('https://media.giphy.com/media/elm5ZlD6mCmFa/giphy.gif')"

      }
      else if (res.weather[0].main == "Smoke") {
        back.style.backgroundImage = "url('https://thumbs.dreamstime.com/b/shot-out-car-urbanization-global-warming-roadtrip-iceland-smoke-out-geothermal-pipes-against-dramatic-sunset-sky-108272378.jpg')"

        body.style.backgroundImage = "url('https://tse3.mm.bing.net/th?id=OIP.4m3iW4Pk8e1OFQsx6gCD6QHaEK&pid=Api&P=0&h=180')"

      }
      else if (res.weather[0].main === "Rain") {
        back.style.backgroundImage = "url('https://t3.ftcdn.net/jpg/00/70/07/18/240_F_70071801_cv30tSjMxjjleEU9kz7Q43p0pRELYAD0.jpg')"
        body.style.backgroundImage = "url('https://giffiles.alphacoders.com/105/105296.gif')"

      }
      else if (res.weather[0].main === "Clear") {

        back.style.backgroundImage = "url('https://rebelfinancial.com/wp-content/uploads/2018/03/vibrant-sunrise-yellow.jpg')";
        body.style.backgroundImage = "url('https://media.giphy.com/media/lyVNcb1n5Ob0Q/giphy.gif')"

      }
      else if (res.weather[0].main == "Haze") {

        back.style.backgroundImage = "url('https://t4.ftcdn.net/jpg/00/55/46/81/240_F_55468141_bnLQvA4ulDX0Jn8ZJq3WxfATKF0Y6rEY.jpg')";
        body.style.backgroundImage = "url('image/images.jpg')";
      }
      else if (res.weather[0].main == "Fog") {
        back.style.backgroundImage = "url('https://tse4.mm.bing.net/th?id=OIP.Ta4rHTDuIsCWR7z4BVh4LAHaFj&pid=Api&P=0&h=180')"

        body.style.backgroundImage = "url('https://media.giphy.com/media/VJcvHTPa98IoM/giphy.gif')"

      }
      else if (res.weather[0].main == "Tornado") {
        back.style.backgroundImage = "url('https://tse1.mm.bing.net/th?id=OIP.rEot5c_jlK4rfVZBcqXgFgHaE8&pid=Api&P=0&h=180')"

        body.style.backgroundImage = "url('https://api.time.com/wp-content/uploads/2017/04/121.gif')"

      }
      else if (res.weather[0].main == "Blizzard") {
        back.style.backgroundImage = "url('https://bgr.com/wp-content/uploads/2015/01/blizzard-2015.jpg?resize=827')"

        body.style.backgroundImage = "url('https://i.pinimg.com/originals/1f/5b/23/1f5b23a579ec85824e4340b20feaa457.gif')"

      }
      else if (res.weather[0].main == "Sunshine") {
        back.style.backgroundImage = "url('https://rebelfinancial.com/wp-content/uploads/2018/03/vibrant-sunrise-yellow.jpg')"

        body.style.backgroundImage = "url('https://media1.tenor.com/images/0840f15b8866176a10659fdf0f8f36b7/tenor.gif?itemid=11579869')"

      }

      else if (res.weather[0].main == "Heatwave") {
        back.style.backgroundImage = "url('https://www.healthvermont.gov/sites/default/files/images/2018/06/ENV_CH_HotWeather.jpg')"
        body.style.backgroundImage = "url('https://media.giphy.com/media/xT0wlvGLHmojbeu5vq/giphy.gif')"

      }
      console.log(res.weather[0].main, back)

      document.getElementById("clouds").innerHTML = `
    ${res.clouds.all}%
    `
      document.getElementById("wind").innerHTML = `
    ${res.wind.speed}%
    `
      document.getElementById("cityName").innerHTML = `
    ${res.name}<p class="weaterType">${res.weather[0].main}</p>
    `
      user.value = "";
    })
    .catch((err) => {
      swal({
        title: "Not found!",
        text: "You clicked the button!",
        icon: "error",
        button: "Aww yiss!",
      });
      user.value = ""
    });
  // 
}
let arryofweek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Satur']
let dateDay = new Date()
let day = dateDay.getDay()
let date = dateDay.getDate()
let printDay = document.getElementById("dayPrint");
printDay.innerHTML = `
${arryofweek[day]}<br />${date}`