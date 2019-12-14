import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
  <div style={{ color: `teal` }}>
    <Link to="/">Home</Link>
    <Header />
    <h1>About Gatsby</h1>
    <p>Who said cats bee ?</p>
    <p>No not cats - gatsby</p>
    <p>Such wow. Very React.</p>
    <h2>What about the green light at the dock?</h2>
  </div>
)
