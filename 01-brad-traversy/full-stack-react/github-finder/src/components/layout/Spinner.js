import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = () =>
    <Fragment>
      <img src={spinner} alt="loading" style={{width:'200px' , display:'block'}} />
    </Fragment>

export default Spinner