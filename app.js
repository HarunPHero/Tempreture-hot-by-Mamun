
function weather() {
    const inputText = document.getElementById('inputText').value;
    const apiKey = 'be41a330c7cde91f3b42dd660d4a3f50';
    const apiBase = 'https://api.openweathermap.org/data/2.5/weather';
    if (inputText == "") {
        alert('invalid address')
    }
    
    const url = `${apiBase}?q=${inputText}&units=metric&appid=${apiKey}`
    fetch(url)
        .then(res => res.json())
        .then(data => {

            const cityname = data.name;
            const cityWeather = data.weather[0].main;
            const temp = data.main.temp;
            const weatherIcon = document.getElementById('icon').setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)

            document.getElementById('weather').innerText = cityWeather;
            document.getElementById('city').innerText = cityname;
            document.getElementById('temp').innerText = temp + '°C';//to type degree sign press ALT & type 0176 in the number keypad;
            document.getElementById('icon').innerText = weatherIcon;
            })
}
const search = document.getElementById('search').addEventListener('click', function () {
    // const inputText = document.getElementById('inputText').value;
    // console.log(inputText)
    
    
    weather();
    document.getElementById('inputText').value = ""

})

