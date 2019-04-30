import React from "react"

const Button = props => (
  <a href={props.href} target="_blank" rel="noopener noreferrer" id="button">
    <div>{props.text}</div>
  </a>
)

export default Button
