import React from "react"
import Routes from "./routes"
export default function HeaderBar() {
  return (
    <div id="headerBar">
      <div id="headerName">
        <div>
          <h1>Edgar Camacho</h1>
          <h5>Full stack developer located in Chicago, Illinois</h5>
        </div>
      </div>
      <div>
        <Routes />
      </div>
    </div>
  )
}
