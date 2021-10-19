import React from 'react'
import { Card, Button } from 'react-bootstrap';
export const CardComponent = ({title, img, description}) => {
    return (
<div className='col-sm-2 container'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
       
   </div>
    );

}