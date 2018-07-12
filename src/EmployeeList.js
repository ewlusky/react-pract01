import React, { Component } from 'react'


export default class EmployeeList extends Component {

    state = {
        employees: [
            { name: "Jessica Younker" },
            { name: "Jordan Nelson" },
            { name: "Zoe LeBlanc" },
            { name: "Blaise Roberts" }
        ]
    }

    render() {
        return (
            <article>
                <h1>Employee List</h1>
                {this.state.employees.map(employee =>
                    <section>{employee.name}</section>
                )}

            </article>
        );
    }
}