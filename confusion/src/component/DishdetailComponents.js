import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish(dishDetail) {
    return (
      <div className="container pt-5">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg top src={dishDetail.image} alt={dishDetail.name} />
              <CardBody>
                <CardTitle>{dishDetail.name}</CardTitle>
                <CardText>{dishDetail.description}</CardText>
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

const DishDetail = props => {
  if (props.dish) {
    return <RenderDish {...props.dish} />;
  } else return <div></div>;
};

export default DishDetail;