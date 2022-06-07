const axios = require('axios'); 

let x= [2,3,90]
var m=80;

x.map(y=>{ m=y; return y});

console.log(m);

const getLongitudeNumber =  async ()=> {
  var longitude = 0;
  console.log('longitude value: '+longitude)
   return axios.get("https://api.openweathermap.org/data/2.5/weather?lat=10&lon=10&units=metric&cnt=7&lang=en&appid=753983d1101525edd0545786efa2b53d")
    .then(
      (res) => res.data,
      (err) => console.log("error ", err)
    )
    .then((response) => {
      longitude = response.coord.lon;
      console.log('After resolve longitude = '+ longitude);
      return longitude;
    });
    
    console.log('return longitude value: '+longitude)
  //return longitude;
};
 
//getLongitudeNumber();

const longitude = async ()  => 
{
    let x =  await getLongitudeNumber();
    console.log(x);
}

const newLongitude = longitude * 10;//is it 10 times the longitude obtained from api?
//console.log('New Longitude '+ newLongitude);