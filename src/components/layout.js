import React from "react"
import HeaderBar from "../components/headerBar"

export default props => {
  var children = props.children
  return (
    <div id="layout">
      <div id="overlay"></div>
      <HeaderBar />

      <div id='layout-children'>{children}</div>
    </div>
  )
}
