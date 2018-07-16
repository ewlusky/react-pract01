import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"


export default class NavBar extends Component {
    state = {
        query: ""
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    
    render() {
        return (
            <nav>
                <Link to="/">Locations</Link>
                <Link to="/animals">Animals</Link>
                <Link to="/employees">Employees</Link>
                <input onChange={this.handleFieldChange} type="search" id="query" name="q" />
                <Link className="card-link"
                    to={{
                        pathname: `/query`,
                        state: { search: this.state.query }
                    }}>
                    Search
                </Link>

            </nav>
        )
    }
}