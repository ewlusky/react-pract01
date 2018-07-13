import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './AnimalList'
import Animal from './Animal'
import EmployeeList from './EmployeeList'
import LocationList from './LocationList'
import Login from './Login'

export default class ApplicationViews extends Component {

    isAuthenticated = () => {
        return (localStorage.getItem("credentials") !== null || sessionStorage.getItem("credentials") !== null)
    }

    render() {
        return (

            <React.Fragment>
                <Route path="/" render={props => {
                    if (!(this.isAuthenticated())) {
                        return <Login />
                    } else {
                        return (
                            <React.Fragment>

                                <Route exact path="/" component={LocationList} />
                                <Route exact path="/animals" component={AnimalList} />
                                <Route path="/animals/:animalId" render={(props) => {
                                    return <Animal animal={props.location.state.animal} />
                                }} />
                                <Route path="/employees" component={EmployeeList} />
                                <Route path="/logi" component={Login} />
                            </React.Fragment>
                        )
                    }
                }} />

            </React.Fragment>
        )
    }
}