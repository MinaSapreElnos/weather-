var input=document.getElementById('input')
let allDays=[];

input.addEventListener('blur',function(){
    var search =input.value
    getcountry(search)
})





 async function getcountry(meal){
    let req= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${meal}&days=3`)
     allDays= await req.json()
    displaydays()
}

getcountry('Cairo')


function displaydays(){
    let day1="";
    let day2="";
    let day3="";

    day1+=`<div class="col-md-4">
    <div class="card bg-dark text-white">
        <div class="card-header">
            <span>${allDays.forecast.forecastday[0].date}</span>
        </div>
        <div class="cardBody mb-3 ">
            <h4>${allDays.location?.name}</h4>
            <div class="d-flex justify-content-evenly">
              <div class="num d-flex">
                <h1>${allDays.current?.temp_c} <sup>o</sup>c</h1>
              </div>
                <div class="icon">
                    <img src="${allDays.current.condition.icon}" alt="" width="90">
                </div>
            </div>
        </div>
        <h5>${allDays.current?.condition.text} </h5>
        <div class="card-footer">
            <span class="me-4">
                <img src="${allDays.current.condition.icon}" alt="">
                20%
            </span>  
            <span class="me-4"><img src="./imges/icon.ear.png" alt="">18km/h</span>  
            <span class="me-4"><img src="./imges/icon-compass@2x.png" alt="">East</span>
        </div>
    </div>
</div>`

day2+=`<div class="col-md-4">
<div class="card bg-dark text-white">
    <div class="card-header text-center">
        <span>${allDays.forecast.forecastday[1].date}</span>
    </div>
    <div class="card-body text-center">
        <div class="icon">
            <img src="${allDays.forecast.forecastday[1].day.condition.icon}" alt="" width="48">
        </div>

        <h3>${allDays.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup> C </h3>
        <small>${allDays.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></small>
        <h4 class="mt-4">${allDays.forecast.forecastday[1].day.condition.text}</h4>
    </div>
</div>
</div>`

day3+=`<div class="col-md-4">
<div class="card bg-dark text-white">
    <div class="card-header text-center">
        <span>${allDays.forecast.forecastday[2].date}</span>
    </div>
    <div class="card-body text-center">
        <div class="icon">
            <img src="${allDays.forecast.forecastday[2].day.condition.icon}" alt="" width="48">
        </div>

        <h3>${allDays.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup> C</h3>
        <small>${allDays.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></small>
        <h4 class="mt-4">${allDays.forecast.forecastday[2].day.condition.text}</h4>
    </div>
</div>`

document.querySelector('.row').innerHTML=day1 + day2 + day3
}
