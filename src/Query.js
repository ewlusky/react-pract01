import React, { Component } from "react"
import Animal from './Animal'
import Employee from './Employee'




export default class Query extends Component {
    state = {
        animals: [],
        employees: []
    }

    

    componentWillMount() {
        const fetchAnimals = fetch(`http://localhost:5002/animals?q=${this.props.search}`).then(e => e.json())
        const fetchEmployees = fetch(`http://localhost:5002/employees?q=${this.props.search}`).then(e => e.json())
        Promise.all([fetchAnimals, fetchEmployees])
            .then(values => {
                console.log("query values:", values);
                this.setState({ animals: values[0] });
                this.setState({ employees: values[1] });

            })

    }
    render() {
        return (
            <div>
                <section>Animal Matches</section>
                {
                    this.state.animals.map(animal => {
                        return <Animal key={animal.id}
                            animal={animal}
                            checkOutAnimal={this.checkOutAnimal}
                        />
                    })

                }


                <section>Employee Matches</section>
                {
                    this.state.employees.map(employee =>
                        <Employee key={employee.id}
                            employee={employee}
                            checkOutEmployee={this.checkOutEmployee}
                        />
                    )
                }
            </div>
        )
    }
}