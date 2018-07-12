import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './AnimalList'
import Animal from './Animal'
import EmployeeList from './EmployeeList'
import LocationList from './LocationList'
export default class ApplicationViews extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={LocationList} />
                <Route exact path="/animals" component={AnimalList} />
                <Route path="/animals/:animalId" render={(props) => {
                    console.log(props)
                    return <Animal animal={props.location.state.animal} />
                }} />
                {/* <Route path="/animals/:animalId" component={Animal} /> */}
                <Route path="/employees" component={EmployeeList} />
            </React.Fragment>
        )
    }
}