const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");

app.use(cors());
const port = process.env.port || 3006;

app.listen(port, console.log(`Listening ${port}`));

let appId = "9e9f1b5959068abc3a1e3c8cec297a19";
let cityname = "London";
let units = "metric";


app.get("/", (req, res) => {
  const d = new Date();

  let fiveDay = [];
  axios(
    `http://api.openweathermap.org/data/2.5/forecast?q=${cityname}&APPID=${appId}&units=${units}`
  )
    .then(result => {
      dataArr = result.data.list;

      for (var i = 0; i < dataArr.length; i = i + 8) {
        var weather = {};
        weather.cityName = cityname;
        weather.date = dataArr[i].dt_txt;
        weather.temperature = dataArr[i].main.temp;
        weather.desc = dataArr[i].weather.map(desc => {
          return desc.description;
        });
        weather.humidity = dataArr[i].main.humidity;
        weather.windSpeed = dataArr[i].wind.speed;
        const date = new Date(dataArr[i].dt_txt);
        weather.day = date.getDay();
        fiveDay.push(weather);
      }
      res.send(fiveDay);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = app;
//export default app;