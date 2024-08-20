import React from 'react';
import { Card } from 'react-bootstrap';

const BlogProp = ( props) => {
    const {title , image}= props
  return (
    <Card style={{ height: '100%' }}>
    <Card.Body>
      <Card.Title>
        {title}
      </Card.Title>
    </Card.Body>
    <Card.Img variant="bottom" src={image} style={{ height: '200px', objectFit: 'cover' }} />
  </Card>
  )
}

export default BlogProp
