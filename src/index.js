import "./index.css";
import { render } from "@testing-library/react";
import App from "./component/app/app";

const here = document.getElementById("here");
const app = <App />;

render(app, here);
