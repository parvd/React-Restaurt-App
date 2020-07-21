import React, { Component } from 'react';
import { Navbar, NavbarBrand,  } from 'reactstrap';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponents';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import {Switch,Route,Redirect, Router ,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Contact from './ContactComponent';


const mapStateToProps = state =>{
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {

  constructor(props) {
    super(props);
    
  }



  render() {
    const HomePage =()=> {
      return(
        <Home dish={this.props.dishes.filter((dish)=>dish.featured)[0]}
        promotion={this.props.promotions.filter((promo)=>promo.featured)[0]}
        leader={this.props.leaders.filter((leader)=>leader.featured)[0]}
        />
      );
    }
    const DishWithID = ({match}) =>
    {
        return(
          <Dishdetail dish={this.props.dishes.filter((dish)=>dish.id === parseInt(match.params.dishId,10))[0]}
                      comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
          />
        );
    }
    //console.log(this.state.leaders);

    return (
      <div>
        <Header />
        <Switch>
          <Route 
          path="/home" 
          component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.props.dishes} />}
          />
          <Route
          path="/menu/:dishId" component={DishWithID} 
          />

          <Route
            exact
            path="/contactus"
            component={Contact}
          />
          
          <Route
            exact
            path="/aboutus"
            component={ () => <About leaders={this.props.leaders}/> }
          />
          
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));