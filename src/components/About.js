import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import Me from '../me.png';

class About extends Component {
  render() {
    return (
        <div className='page text-center d-flex align-items-center' id='about'>
          <Container>
            <Row>
              <h1><strong>About Me</strong></h1>
            </ Row>
            
              <Row>
              <h4>Full Stack Web Developer</h4>
              </ Row>
              <Row>
              <Col xs={6} id='about-img' >
                <img src={Me} className='img-thumbnail text-center'  alt='Self Portrait'/>
              </ Col>
              <Col xs={6}>
                <p> // Hello World!
                </p>
                <p>My name is Randy Lam and I am a health care professional turned programmer. I have worked within the pharmacy industry for the last 6+ years. Over the years, I have come to the realization that I have a strong drive to learn and problem solve and the pharmacy industry is not the ideal environment for my needs. Once I learned about programming, I knew this is the industry for me.
                </p>
                <p>Nostrum nam assumenda, velit nobis quis at quisquam accusamus, cum quo sunt enim unde laudantium officiis deleniti et! Facere molestias odit doloribus libero vel dolores veniam minima quas nobis accusantium.
                </p>
                <p>Reprehenderit, fuga a. Sequi quas qui fugit molestiae quasi ratione reiciendis perferendis unde vitae enim et nesciunt doloribus quia, repudiandae ea fuga. Magnam, ratione suscipit nobis facere ab ducimus ipsa!
                </p>
              </ Col>
              </ Row>
            
            
          </ Container>
        </div>
      
    );
  }
}

export default About;
