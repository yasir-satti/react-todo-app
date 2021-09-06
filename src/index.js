import React from "react"
import ReactDOM from "react-dom"
// componenet file
import TodoContainer from "./components/TodoContainer"
// stylesheet
import "./App.css"

ReactDOM.render(<React.StrictMode>
    <TodoContainer />
    </React.StrictMode>, 
    document.getElementById("root"))