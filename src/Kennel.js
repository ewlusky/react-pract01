import React, { Component } from 'react'
import EmployeeList from "./EmployeeList"  // Import EmployeeList component
import LocationList from "./LocationList"



export default class Kennel extends Component {
    state = {
        employees: [
            { name: "Jessica Younker" },
            { name: "Jordan Nelson" },
            { name: "Zoe LeBlanc" },
            { name: "Blaise Roberts" }
        ],
        locations: [
            { id: 1, name: "Nashville North", address: "500 Puppy Lane" },
            { id: 2, name: "Nashville South", address: "401 Kitty Blvd" }

        ],
        animals: [
            { id: 1, name: "Doodles" },
            { id: 2, name: "Jack" },
            { id: 2, name: "Angus" },
            { id: 1, name: "Henley" },
            { id: 1, name: "Derkins" },
            { id: 2, name: "Checkers" }
        ],

    }

    render() {
        return (
            <div>
                <h3>Student Kennels</h3>
                <LocationList locations={this.state.locations} animals={this.state.animals}/>
                <EmployeeList />
            </div>
        );
    }
}