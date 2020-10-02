import { dataBound } from "@syncfusion/ej2-react-grids";
import React, { Component } from "react";
//import Filter from "../components/Filter";
//import Products from "../components/Products";
//import Cart from "../components/Cart";
import Menu from "../components/Menu";
import data from "../data.json";
import CustomerCenter from "../components/CustomerCenter";

export default class DashboardScreen extends Component {
  render() {
    return (
        <div className="content">
            <div className="menu">
                <Menu />
            </div>
            <div className="customer-center">
                <div className="content-center">
                    <CustomerCenter centers={data.centers} />
                </div>
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
