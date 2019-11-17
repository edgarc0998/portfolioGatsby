import React from "react"
import { Link } from "gatsby"

const ACTIVE_STYLE = { color: "#496ddb" }
const STYLE = { color: "gray", fontSize: "18px", padding: "5px" }

export default class Routes extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div id="routes">
        <Link to="/" activeStyle={ACTIVE_STYLE} style={STYLE}>
          About
        </Link>
        <Link to="/projects" activeStyle={ACTIVE_STYLE} style={STYLE}>
          Projects
        </Link>
      </div>
    )
  }
}
