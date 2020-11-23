import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DatePicker } from "antd";
import "antd/dist/antd.css";

const AntDesign = () => {
  return (
    <div>
      <DatePicker />
      <img src="/images/wahed.jpg" alt="" />
    </div>
  );
};

ReactDOM.render(<AntDesign />, document.getElementById("root"));
