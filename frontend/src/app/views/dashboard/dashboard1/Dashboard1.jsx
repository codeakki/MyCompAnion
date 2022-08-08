import React, { Component } from "react";
import ComparisonChart from "app/views/charts/echarts/ComparisonChart";
import PieChart from "app/views/charts/echarts/PieChart";
import LineChart3 from "app/views/charts/echarts/LineChart3";
import LineChart1 from "app/views/charts/echarts/LineChart1";
import LineChart2 from "app/views/charts/echarts/LineChart2";
import { Breadcrumb } from "@gull";
import SimpleCard from "@gull/components/cards/SimpleCard";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

class Dashboard1 extends Component {
  state = {
    cardList1: [
      {
        icon: "i-Add-User",
        title: "205",
        subtitle: "new leads"
      },
      {
        icon: "i-Financial",
        title: "4021",
        subtitle: "sales"
      },
      {
        icon: "i-Checkout-Basket",
        title: "80",
        subtitle: "checkout"
      },
      {
        icon: "i-Money-2",
        title: "120",
        subtitle: "expense"
      }
    ],
    
  };


  render() {
    let {
      cardList1 = [],
    } = this.state;

    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Dashboard", path: "/dashboard" },
            { name: "Version 1" }
          ]}
        ></Breadcrumb>
        <div className="row">
          {cardList1.map((card, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                <div className="card-body text-center">
                  <i className={card.icon}></i>
                  <div className="content">
                    <p className="text-muted mt-2 mb-0 text-capitalize">
                      {card.subtitle}
                    </p>
                    <p className="lead text-primary text-24 mb-2 text-capitalize">
                      {card.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-lg-8 col-md-12">
            <SimpleCard title="This Year Sales" className="mb-4">
              <ComparisonChart height="260px"></ComparisonChart>
            </SimpleCard>
          </div>
          <div className="col-lg-4 col-sm-12">
            <SimpleCard title="Sales by Countries" className="mb-4">
              <PieChart height="260px"></PieChart>
            </SimpleCard>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4">
              <div className="card-body card-title mb-0">
                <h3 className="m-0">Last 20 Day Leads</h3>
              </div>
              <LineChart3 height="360px"></LineChart3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard1;
