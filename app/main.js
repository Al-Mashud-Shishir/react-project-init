import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function ExComponent() {
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}

ReactDOM.render(<ExComponent />, document.querySelector("#app"));
