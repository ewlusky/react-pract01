import React, { Component } from 'react'
import Animal from './Animal'


export default class AnimalList extends Component {
    state = {
        animals: [],
        petName: "",
        petBreed: ""
    }

    componentDidMount() {
        fetch("http://localhost:5002/animals")
            .then(e => e.json())
            .then(animals => this.setState({ animals: animals }))
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    checkInAnimal = () => {
            fetch(`http://localhost:5002/animals`, {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.petName,
                breed: this.state.petBreed
            })
        })
            .then(result => {
                console.log('Push Return:', result);
                fetch("http://localhost:5002/animals")
                    .then(e => e.json())
                    .then(animals => this.setState({ animals: animals }))
                this.setState({ petBreed: "" });
                this.setState({ petName: "" });
            })
    }


    checkOutAnimal = (animalId) => {
        // Delete the specified animal from the API
        fetch(`http://localhost:5002/animals/${animalId}`, {
            method: "DELETE"
        })
            // When DELETE is finished, retrieve the new list of animals
            .then(() => {
                // Remember you HAVE TO return this fetch to the subsequenet `then()`
                return fetch("http://localhost:5002/animals")
            })
            // Once the new array of animals is retrieved, set the state
            .then(a => a.json())
            .then(animalList => {
                this.setState({
                    animals: animalList
                })
            })
    }

    render() {
        return (
            <React.Fragment>
                <label>Pet Name</label>
                <input onChange={this.handleFieldChange} value={this.state.petName} type="text" id="petName" />
                <label>Pet Breed</label>
                <input onChange={this.handleFieldChange} value={this.state.petBreed} type="text" id="petBreed" />
                <button onClick={this.checkInAnimal} id="add-pet">Add Pet</button>


                {
                    this.state.animals.map(animal =>
                        <Animal key={animal.id}
                            animal={animal}
                            checkOutAnimal={this.checkOutAnimal}
                        />
                    )
                }
            </React.Fragment>
        )
    }
}