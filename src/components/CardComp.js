import react from "react";
import { Button, Card, CardBody, CardGroup, CardLink, CardText, CardTitle, Col, ListGroup, ListGroupItem } from "reactstrap";

const CardComp = ({ cardComp }) => {

  return (
    <Card className = "col-md-3 " style={{marginLeft:"auto", marginRight:"auto",width:"24%"}}>
      <img alt="Card" src="https://picsum.photos/300/200" />
      <CardBody className="text-center">
        <CardTitle tag="h5">
          {cardComp.title}
        </CardTitle>
          <CardText>
            {cardComp.description}
        </CardText>
      </CardBody>
      <ListGroup flush>
        <ListGroupItem>
          {cardComp.highlight}
        </ListGroupItem>
        <ListGroupItem>
          {cardComp.offer}
        </ListGroupItem>
        <ListGroupItem>
          {cardComp.price}
        </ListGroupItem>
      </ListGroup>
      <CardBody>
        <Button outline color="primary" className="card-link" href="#"> Add to Cart </Button>
        <Button outline color="primary" className="card-link" href="#"> Buy Now </Button>
      </CardBody>
    </Card> 
  )
   
}

export default CardComp;