import React, {Component} from "react";
import CarouselBox from "../Components/CarouselBox";
import {Container, CardDeck, Card , Button} from "react-bootstrap";
const divStyle = {
  color: 'dark',
  /*fontSize: 20,
  backgroundPosition: 'center',
  flex: 1,
  WebkitBackgroundSize:"100",
  backgroundSize:  'cover',
  backgroundRepeat  : 'no-repeat',
  backgroundImage:"url('https://clarionschooldubai.com/wp-content/uploads/2017/05/bg-grey.jpg')" ,
  height:900,
   */      
   backgroundColor:'#93919c',      
};
const carStyle= {
	height:601,
};
const cardStyle={
	height:500,

}

const imgStyle={
  height:190,
  weight:222,
}
export default class Home extends Component {
	render() {
		return (
    
         <div style={divStyle}>

         <CarouselBox style={carStyle}/>
 		<Container style={divStyle}>
 			<CardDeck >
 				<Card >
 					<img style={imgStyle}
 					variant="top"
 					src="https://media-cdn.tripadvisor.com/media/photo-s/0f/2c/cf/5b/iceri-seher-towers.jpg"
 					/>	
 					<Card.Body>
 						<Card.Title>
 							Lorem Ipsum
 						</Card.Title>
 						<Card.Text>
                        Every part of Azerbaijan has many interesting historical monuments. 
                        Among the masterpieces of brilliant archers - the unique palace of the Shekinakh Khans ; 
                        the sacred temple of Diri Baba, carved into the rocks of a wild gorge; 
                        minarets of Juma mosques in different cities of the country; 
                        powerful bridges that have survived the era and etc.
 						</Card.Text>
 					</Card.Body>
 				</Card>	
 				<Card style={cardStyle}>
 					
 					<Card.Body>
 						<Card.Title>
 							Lorem Ipsum
 						</Card.Title>
 						<Card.Text>
                        National traditions are well preserved in Azerbaijan. 
                        They have a long history, namely originates from the formation of the Azerbaijani people.
                         There are several traditions in Azerbaijan, 
                        some customs and traditions differ from region to region.
 						</Card.Text>
 					</Card.Body>
 					<Card.Img
 					style={imgStyle}
 					variant="bottom"
 					src="https://cdn.yeniavaz.com/UploadedFiles/Custom/2018/9/17/1/688c2c96-9c95-452d-97c2-67266569f5a6/novruz-xonca-bayram-kosa-kecel4.jpeg"	
 					/>	
 				</Card>	
 				<Card style={cardStyle}>
 					<Card.Img
          style={imgStyle}
 					variant="top"
 					src="https://object.pscloud.io/cms/cms/Uploads/20857b3046720c1ebce5a5e062a2b507.jpg"	
 					/>	
 					<Card.Body>
 						<Card.Title>
 							Lorem Ipsum
 						</Card.Title>
 						<Card.Text>
                        Azerbaijani national cuisine is one of the most ancient in the world.
                         Azerbaijani cuisine is very satisfying, nutritious and high-calorie, 
                         it is original and has its own national flavor, 
                        manifested in the specificity of culinary techniques and traditions of the Azerbaijani feast.
 						</Card.Text>
 					</Card.Body>
 				</Card>	
 			</CardDeck>	
 		</Container>
 			</div>

   		)
	}
}