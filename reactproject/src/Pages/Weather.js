import React, {Component} from "react";
import Info from "../Components/Info";
import Form from "../Components/Form";
import Weatherinfo from "../Components/Weatherinfo";
import {Container, Row} from "react-bootstrap"

// апи ключ получаемый с сайта оpenweathermap
const API_KEY ="d85680bd499924722d420819e15f3b98";
export default class Wheather extends React.Component  {
//стэйт для указания значений	
state = {
	temp: undefined,
	city: undefined,
	country:undefined,
	wind: undefined,
	sunset: undefined,
	error: undefined,

}
  //асинхронное получение ифнормации
  gettingWeather = async (e) => {  // метод е используется для того чтобы с превент дэфолт отменить обновление страницы 
  	e.preventDefault();
  	const city=e.target.elements.city.value;
  
  	if (city ){
  //вставка url апи асинхронно

  const apiUrl = await 
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`); 
  const data = await apiUrl.json(); // дата с косоли в джейсоон 
 console.log(data);
  // перевод времени захода в обычный формат 
  
  let sunsetInSec = data.sys.sunset
        let date = new Date(sunsetInSec * 1000)
        let timeSunset = date.toLocaleTimeString();
// зис стэйт для присваивания значений данныйх
  this.setState ({
  	temp:data.main.temp,
  	city:data.name,
  	country:data.sys.country,
  	wind:data.wind.speed,
  	sunset:timeSunset,
  	error:undefined
      });
    } else {
    this.setState ({
  	temp:undefined,
  	city:undefined,
  	country:undefined,
  	wind:undefined,
  	sunset:undefined,
  	error:"Enter city name"
    });
  }
}
	render() {
		return (
			<div className="wrapper">
 			<div className="main">
 					
			<div className="container">
				<div className="row">
					<div className="col-sm-5">
                      
                      <Info />
                      
					</div>
				
					<div className=" col-sm-7">
                        
                        <Form weatherMethod={this.gettingWeather}/>
				<Weatherinfo 
					temp={this.state.temp}
				    city={this.state.city}
				    country={this.state.country}
				    wind={this.state.wind}
				    sunset={this.state.sunset}
				    error={this.state.error}


				/>

				    </div>
				</div>

				</div>	
			</div>			

				
				
			</div>

		);
	}
}