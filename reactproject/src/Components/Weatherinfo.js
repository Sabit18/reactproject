import React, {Component} from "react";



const Weatherinfo = (props) => (

			<div>
               
             	{props.temp &&  //проверка , если одно из значенй верно то условие выполняется инфа выводится на экран
                  // вывод информации на экран
                 <div>
                <p>Location: {props.city}, {props.country}</p> 
          
            	<p>Temperature:{props.temp}°C</p>
          
            	<p> Wind speed:{props.wind} mps</p>	
          
            	<p>Sunset:{props.sunset}</p>	
            		</div>
                 }
            	<p>{props.error}</p>
               
              
             </div>


	);

export default Weatherinfo;

