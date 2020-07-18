import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
function RenderDish(dishDetail) {
    return (
      <div className="container pt-5">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg top src={dishDetail.dish.image} alt={dishDetail.dish.name} />
              <CardBody>
                <CardTitle>{dishDetail.dish.name}</CardTitle>
                <CardText>{dishDetail.dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
          <ul>{<RenderComments comments={dishDetail.comments} />}</ul>
        </div>
      </div>
    </div>
  );
}

function RenderComments(comments) {
  return comments.comments.map((comment, i) => (
    <li key={i}>
      {comment.comment}
      <br />
      <br />
      -- {comment.author},
      {new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit"
      }).format(new Date(Date.parse(comment.date)))}
      <br />
      <br />
    </li>
  ));
}

const Dishdetail = props => {
  //console.log(props);
  if (props.dish) {
    return (
      <div className="conatiner">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="row">
            <h3>{props.dish.name}</h3>
            <hr />
        </div>
        <div className="row">
          <RenderDish {...props} />
        </div>

      </div>
    );
  } else return <div></div>;
};

export default Dishdetail;