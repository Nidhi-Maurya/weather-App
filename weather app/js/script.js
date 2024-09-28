//dbdadfb2015783aa5faf6f4235c1b6d9
//https://api.openweathermap.org/data/2.5/weather?units=metric&q=Lucknow&appid=dbdadfb2015783aa5faf6f4235c1b6d9

//https://api.openweathermap.org/data/2.5/weather?units=metric&q=Lucknow&appid=dbdadfb2015783aa5faf6f4235c1b6d9

// https://api.openweathermap.org/data/2.5/weather?units=metric&q=&appid=dbdadfb2015783aa5faf6f4235c1b6d9

async function weather(){
  
  let city=document.querySelector('#search>button').value;
  console.log(city);
  var url="https://api.openweathermap.org/data/2.5/weather?units=metric&q="+city+"&appid=dbdadfb2015783aa5faf6f4235c1b6d9";


  console.log(url);
  const res=await fetch(url);

  var data=await res.json();
  console.log(data);
  
  temp.innerHTML=Math.round(data.main.temp)+"℃";
  cityname.innerHTML=data.name;
  humidity.innerHTML=data.main.humidity+"%";
  wind.innerHTML=data.wind.speed+"Km/h"
  console.log(data.weather[0].main);
  if(data.weather[0].main=="Mist"){
    document.querySelector('#main>img').src="images/mist.png"
  }
  weather()
}