import React, { Component } from "react";
//import Filter from "../components/Filter";
//import Products from "../components/Products";
//import Cart from "../components/Cart";
import Menu from "../components/Menu";


export default class DashboardScreen extends Component {
  render() {
    return (
        <div className="content">
            <div className="menu">
                <Menu />
            </div>
            <div className="main">
                FilterFilter
                ProductsProducts
            </div>
            <div className="sidebar">
                Cart
            </div>
        </div>
    );
  }
}
