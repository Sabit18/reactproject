import React, {Component} from "react";

import {Container, Tab, Nav, Col, Row, } from "react-bootstrap";

const divStyle = {
  color: 'dark',
  fontSize: 20,
  backgroundPosition: 'center',
  flex: 1,
  WebkitBackgroundSize:"100",
  backgroundSize:  'cover',
  backgroundRepeat  : 'no-repeat',
  //backgroundImage:"url('https://images.pexels.com/photos/164005/pexels-photo-164005.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')" ,
  backgroundImage:"url('https://clarionschooldubai.com/wp-content/uploads/2017/05/bg-grey.jpg')" ,
 //backgroundImage:"url('https://www.usgbcwm.org/blog/wp-content/uploads/2018/07/radient-gradient-bg-light.jpg')" ,

  height:601,
};
const tabStyle={
	height:451,
    Position: 'top',
    ml:"10",
    mr:'10',
}


export default class About extends Component {
	render() {
		return (
           <div style={divStyle}>

                     
		  <Container >

		 <Tab.Container id="ledt-tabs-example" defaultActiveKey="first" >
		  	<Row>
		  		<Col sm={3}>
		  			<Nav variant="pills" className="flex-column mt-3" style={{color:'red'}} >
		  				<Nav.Item className="light">
		  					<Nav.Link eventKey="first"> Baku </Nav.Link>
		  				</Nav.Item>	
		  				<Nav.Item>
		  					<Nav.Link eventKey="second"> Qabala </Nav.Link>
		  				</Nav.Item>	
		  				<Nav.Item>
		  					<Nav.Link eventKey="third"> Shusha </Nav.Link>
		  				</Nav.Item>	
		  				<Nav.Item>
		  					<Nav.Link eventKey="fourth"> Shaki </Nav.Link>
		  				</Nav.Item>	
		  				<Nav.Item>
		  					<Nav.Link eventKey="fifth"> Ismayilli </Nav.Link>
		  				</Nav.Item>	
		  			</Nav>		
		  		</Col>	
		  		<Col sm={9}>
		  			<Tab.Content className="mt-3" style={tabStyle}>
		  				<Tab.Pane eventKey="first">
                           <img style={tabStyle} src="https://kongres-magazine.eu/wp-content/uploads/2019/10/shutterstock_1103017691.jpg"  rounded />                		
                           	<p>
							Baku is the capital and economic center of Azerbaijan,
 							located on the shores of the Caspian Sea..Baku is located 28 metres (92 ft) below sea level, 
							 which makes it the lowest lying national capital in the world and also the largest city in the world located below sea level
                			</p>

		  				</Tab.Pane >
		  				<Tab.Pane eventKey="second">
                         <img className="w-100" style={tabStyle} src="https://www.azernews.az/media/2016/08/26/gabala_1.jpg" circleRounded/>
                			<p>
                			Qabala is a city and the administrative centre of the Qabala District of Azerbaijan. 
                			Before the city was known as Kutkashen, but after the Republic of Azerbaijan's independence the town was renamed in honour of the much older city of Gabala, the former capital of Caucasian Albania,
                			 the archaeological site of which is about 20 km southwest.
                			</p>

		  				</Tab.Pane >
		  				<Tab.Pane eventKey="third">
                          <img style={tabStyle} src="https://armenpress.am/static/news/b/2018/05/933787.jpg"/>
                			<p>
                			Shusha is a city and the centre of the Shusha District of Azerbaijan.
                			 Situated at an altitude of 1,400–1,800 metres (4,600–5,900 ft) in the Karabakh mountains, 
                			 Shusha was a mountain recreation resort in the Soviet era. The city is one of the leading centres 
                			of the Azerbaijani culture and was declared the cultural capital of Azerbaijani culture on January 2021.
                			</p>

		  				</Tab.Pane>
		  				<Tab.Pane eventKey="fourth">
                         <img 
 						 className="width-100"
 						 	src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/f2/72/5a.jpg"
 						 	/>
                			<p>
                			Shaki is in northern Azerbaijan on the southern part of the Greater Caucasus mountain range, 240 km (150 mi) from Baku.  
                			Shaki is surrounded by snowy peaks of the Greater Caucasus, 
                			which in some places reaches 3000–3600 m. The average annual temperature in Shaki is 12 °C. In June and August, the average temperature varies between 20 and 25 °C.
                			</p>

		  				</Tab.Pane>
		  				<Tab.Pane eventKey="fifth">
                         <img 
                         className="width-100"	
                         src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/bf/68/e8.jpg" />
                			<p>
                			İsmayıllı is a town and the capital of the Ismailli Rayon of Azerbaijan
                			. There has been found and obtained granite in the mountains near to İsmayıllı. The rayon has a strong agriculture. A kolkhoz named after Kalinin and located in Ivanovka 
                			village is famous for its achievements and has a broad fame beyond the borders of Azerbaijan.
                			</p>

		  				</Tab.Pane>
		  			</Tab.Content>	
		  			</Col>		
			</Row>
		 </Tab.Container>

		  </Container>	
	    
		  </div>
		);
	}
}