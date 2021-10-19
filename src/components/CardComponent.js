import React from 'react'
import { Card, Button } from 'react-bootstrap';
export const CardComponent = () => {
    return (
<div className='container'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://source.unsplash.com/user/erondu/600x400" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some Custom text one can write here
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
       
   </div>
    );

}