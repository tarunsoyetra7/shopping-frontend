import React from "react";
import { Card, CardBody, CardGroup, CardLink, CardText, CardTitle, Col, ListGroup, ListGroupItem } from "reactstrap";

function CardComp (){

    return(
      <div style={{display:"flex" , padding:"5px", marginTop:"20px"}}>
        <Card className = "col-md-3" style={{marginLeft:"auto", marginRight:"auto",width:"24%"}}>
  <img
    alt="Card"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      Card Title
    </CardTitle>
    <CardText>
      This is some text within a card body.
    </CardText>
  </CardBody>
  <ListGroup flush>
    <ListGroupItem>
      An item
    </ListGroupItem>
    <ListGroupItem>
      A second item
    </ListGroupItem>
    <ListGroupItem>
      And a third item
    </ListGroupItem>
  </ListGroup>
  <CardBody>
    <CardLink href="#">
      Card Link
    </CardLink>
    <CardLink href="#">
      Another Card Link
    </CardLink>
  </CardBody>
</Card>
<Card className="col-md-3" style={{marginLeft:"auto", marginRight:"auto",width:"24%"}}>
  <img
    alt="Card"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      Card Title
    </CardTitle>
    <CardText>
      This is some text within a card body.
    </CardText>
  </CardBody>
  <ListGroup flush>
    <ListGroupItem>
      An item
    </ListGroupItem>
    <ListGroupItem>
      A second item
    </ListGroupItem>
    <ListGroupItem>
      And a third item
    </ListGroupItem>
  </ListGroup>
  <CardBody>
    <CardLink href="#">
      Card Link
    </CardLink>
    <CardLink href="#">
      Another Card Link
    </CardLink>
  </CardBody>
</Card>
<Card className = "col-md-3" style={{marginLeft:"auto", marginRight:"auto",width:"24%"}}>
  <img
    alt="Card"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      Card Title
    </CardTitle>
    <CardText>
      This is some text within a card body.
    </CardText>
  </CardBody>
  <ListGroup flush>
    <ListGroupItem>
      An item
    </ListGroupItem>
    <ListGroupItem>
      A second item
    </ListGroupItem>
    <ListGroupItem>
      And a third item
    </ListGroupItem>
  </ListGroup>
  <CardBody>
    <CardLink href="#">
      Card Link
    </CardLink>
    <CardLink href="#">
      Another Card Link
    </CardLink>
  </CardBody>
</Card>
<Card className = "col-md-3" style={{marginLeft:"auto", marginRight:"auto",width:"24%"}}>
  <img
    alt="Card"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      Card Title
    </CardTitle>
    <CardText>
      This is some text within a card body.
    </CardText>
  </CardBody>
  <ListGroup flush>
    <ListGroupItem>
      An item
    </ListGroupItem>
    <ListGroupItem>
      A second item
    </ListGroupItem>
    <ListGroupItem>
      And a third item
    </ListGroupItem>
  </ListGroup>
  <CardBody>
    <CardLink href="#">
      Card Link
    </CardLink>
    <CardLink href="#">
      Another Card Link
    </CardLink>
  </CardBody>
</Card>
</div>
    );

}

export default CardComp;