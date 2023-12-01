fetch('https://goweather.herokuapp.com/weather/bogota')
    .then(Response => Response.json())
    .then(data => { 
        console.log('la temperatura es de : ' + data.temperature) 
        console.log('la velocidad del viento es de : ' + data.wind)
    })