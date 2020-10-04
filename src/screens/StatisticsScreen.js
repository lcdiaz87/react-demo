import React, { Component } from "react";
import AllocatedCalls from "../components/dashboard/AllocatedCalls";
import Employees from "../components/dashboard/Employees";
import InterviewTimes from "../components/dashboard/InterviewTimes";
import TableEmployees from "../components/statistics/TableEmployee";
import Menu from "../components/Menu";
import data from '../data.json';
export default class StatisticsScreen extends Component {
  render() {
    return (
        <div className="content">
          <div className="menu">
            <Menu to="statistics" />
          </div>
          <div className="dailyStatistics p-2">
              <div>
                <h4>Phone</h4>
                <h5>Daily Statistics</h5>
              </div>
              <div style={{ height: "28rem" }}>
                <AllocatedCalls
                  allocatedCalls={data.phone.allocatedCalls}
                  mode="read"
                />
              </div>
              <div style={{ height: "28rem" }}>
                <InterviewTimes
                  interviewTimes={data.phone.interviewTimes}
                  mode="read"
                />
              </div>
          </div>
        <div className="businessSumary">
          <section className="fill-width">
            <div className="m-0">
              <div className="fill-height w-100">
                <div>
                  <h5>Business Sumary</h5>
                </div>
                <div style={{ height: "28rem" }}>
                  <Employees companies={data.companies} mode="read" />
                </div>
                <div>
                  <TableEmployees tableEmployees={data.tableEmployees} mode="read" />
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="teams">
          <div>
            <div>
              <h1>hola5</h1>
            </div>
            <div>
              <h1>hola6</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
