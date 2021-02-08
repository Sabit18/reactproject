import React, {Component} from "react";


// стили css записываются в реакте путем присвоения
 const divStyle={
      marginTop:5,
 }
// при онсабмит выполняется действие получения информации с метода gettingWeather
 const Form =(props)=> (
 <div style={divStyle}>

            <form onSubmit={props.weatherMethod}  > 
                  <input 
                        type="text"
                        name="city"
                        placeholder="City"

                  />
                  <button>Get weather</button>
            </form>     
                        </div>

                  );


export default Form;