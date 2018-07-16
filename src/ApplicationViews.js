import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './AnimalList'
import Animal from './Animal'
import EmployeeList from './EmployeeList'
import Employee from "./Employee";
import LocationList from './LocationList'
import Login from './Login'
import Query from './Query'


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
                                    return <Animal animal={props.location.state.animal}>
                                        {props.location.state.animal.name}
                                    </Animal>
                                }} />
                                <Route exact path="/employees" component={EmployeeList} />
                                <Route path="/employees/:employeeId" render={(props) => {
                                    return <Employee employee={props.location.state.employee}>
                                        {props.location.state.employee.name}
                                    </Employee>
                                }} />
                                <Route path="/query" render={(props) => {
                                    return <Query key={props.location.state.search} search={props.location.state.search} />
                                }} />
                            </React.Fragment>
                        )
                    }
                }} />

            </React.Fragment>
        )
    }
}