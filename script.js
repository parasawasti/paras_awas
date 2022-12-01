
function submitted(loc, tok) {
    // let url = `http://api.weatherstack.com/current?access_key=${tok}&query=${loc}`
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?unitGroup=metric&key=${tok}&contentType=json`

    let weatherData;
    fetch(url)
        .then(data => {
            if (document.getElementById('location').value == " ") {
                alert("Please enter location")
            }
            return data.json()
        }
        )

        .then(json => {
            console.log(json)
            weatherData = json;
            document.getElementById('loca').innerText = weatherData.address
            document.getElementById('lat').innerText = weatherData.latitude
            document.getElementById('long').innerText = weatherData.longitude

            document.getElementById('timezone').innerText = weatherData.timezone
            document.getElementById('windSpeed').innerText = weatherData.days[0].windspeed
            document.getElementById('pressure').innerText = weatherData.days[0].pressure
            document.getElementById('humidity').innerText = weatherData.days[0].humidity

            document.getElementById('wind_dir').innerText = weatherData.days[0].winddir
            document.getElementById('uv_index').innerText = weatherData.days[0].uvindex
            document.getElementById('feelslike').innerText = weatherData.days[0].feelslike

            document.getElementById('success').innerText = "Scroll Down To see the data"
            document.getElementById('success').style.color = "green"
        }
        )
        .catch(error => {
            makingValuesEmpty();
           
            alert("Failed to load Weather info");
            throw (error);
        })


}

async function accesskey() {
    const locat = document.getElementById('location').value;

    const token = document.getElementById('token').value;
    await checkforerror(locat, token)
}
async function checkforerror(location, key) {

    if (location == "") {
        alert("Please Enter Location")
    }
    else if (key == "") {
        alert("Please Enter Access Key")
    }
    else {
        submitted(location, key);
    }
}
function makingValuesEmpty() {
    document.getElementById('success').innerText = "Unable to get Data"
    document.getElementById('success').style.color = "red"
    document.getElementById('loca').innerText = " "
    document.getElementById('lat').innerText = " "
    document.getElementById('long').innerText = " "

    document.getElementById('timezone').innerText = " "
    document.getElementById('windSpeed').innerText = " "
    document.getElementById('pressure').innerText = " "
    document.getElementById('humidity').innerText = " "

    document.getElementById('wind_dir').innerText = " "
    document.getElementById('uv_index').innerText = " "
    document.getElementById('feelslike').innerText = " "
}