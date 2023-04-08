import React, { Fragment } from "react";
import { NavLink, useRoutes } from "react-router-dom";
import Header from "./components/Header";
import routes from "./routes"; //路由表

export default function App() {
  //const element是一个路由表，根据路由表生成对应的路由规则
  const element = useRoutes(routes);

  return (
    <Fragment>
      <Header />
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 路由链接 */}
            <NavLink className="list-group-item" to="/about">
              About
            </NavLink>
            <NavLink className="list-group-item" to="/home">
              Home
            </NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 路由表 */}
              {element}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
