import React from "react";
import { render } from "react-dom";

import App from "~/pages/App";
import './index.css';

const Application: React.FC<{}> = App;

render(<Application />, document.getElementById("root"));