var search = document.getElementById("search");

//Events
search.addEventListener('keyup', (e) => {
    var getCityName = e.target.value;

    getWeather(getCityName);
});

function getWeather(getCityName) {
    console.log(getCityName);

    const weatherAPI = `http://api.openweathermap.org/data/2.5/weather?q=${getCityName}&&mode=json&units=metric&APPID=40ee7bf0de23ac5e8871b52b2e160d46`;

    window
        .fetch(weatherAPI)
        .then(data => {
        data
            .json()
            .then(weather => {
                var output = "";

                /*console.log(weather);
                console.log(weather.coord.lon);
                console.log(weather.coord.lat);*/

                //Array here
                var weatherData = weather.weather;
                
                for(let x of weatherData) {
                    /*console.log(x);
                    console.log(x.id);
                    console.log(x.main);
                    console.log(x.description);
                    console.log(x.icon);*/
                    
                    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    var date = new Date();
                    var day = days[date.getDay()];
                    var hour = date.getHours() > 12 ? date.getHours()-12 : date.getHours();
                    var min = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
                    var am_pm = date.getHours() >= 12 ? "PM" : "AM";    
                    
                    output += `
                        <div class="mt-4 weatherBlock">
                            <div class="card-body1">
                                <h1>${weather.name}</h1>

                                <span class="date">${day}, ${hour}:${min} ${am_pm}</span>

                                <span class="icon">
                                    <img src="http://openweathermap.org/img/wn/${x.icon}.png"/>
                                </span>

                                <p>
                                    <span>
                                        Temp:
                                    </span>

                                    <span class="temp">
                                    ${weather.main.temp}&degc
                                    </span>
                                </p>

                                <span class="des float-left">${x.description}</span>

                                <span class="des float-right">${x.main}</span>
                            </div>
                        </div>
                    `;
                    document.getElementById("template").innerHTML = output;
                }
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
}