import React, {Component} from "react";
//импорт карусели с реакт бутстрапа
import Carousel from "react-bootstrap/Carousel";

import aze1 from "../assets/aze1.jpg";

const imgStyle={
	height:601,
	
};



//CarouselItem для вставки фото в карусель
//CarouselCaption для надписи на карусели

export default class CarouselBox extends Component {
	render() {
		return (
        /* блок карусель для карусели на главной странице */
		<Carousel>
		
			<Carousel.Item>
				<img
				    style={imgStyle}
				    fluid
				    flex-grow-1
					className="mx-auto w-100"
					src={aze1}
					alt="Baku"
				/>

                   
				<Carousel.Caption>
					<h3>Baku</h3>
					<h2>Azerbaijan</h2>	
				</Carousel.Caption>	
			</Carousel.Item>
			<Carousel.Item>
				<img
				    style={imgStyle}
                    fluid
				    flex-grow-1
					className="mx-auto w-100"
					
			        src="https://www.azernews.az/media/2019/01/07/bakucityy4.jpg"
	
					alt="Baku"
				/>
				<Carousel.Caption className="text-align-top">
					<h3>Baku</h3>
					<h2>Azerbaijan</h2>
				</Carousel.Caption>	
			</Carousel.Item>	
				<Carousel.Item>
				<img
				    style={imgStyle}
                    fluid
				    flex-grow-1
					className="mx-auto w-100"
					
			        src="https://eufordigital.eu/wp-content/uploads/2019/08/Azerbaijan.jpg"
	
					alt="Baku"
				/>
				<Carousel.Caption className="text-align-top">
					<h3>Baku</h3>
					<h2>Azerbaijan</h2>
				</Carousel.Caption>	
			</Carousel.Item>	
				
		</Carousel>	
		  
		);
	}
}