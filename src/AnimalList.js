import React, { Component } from 'react'


export default class AnimalList extends Component {
    state = {

        animals: [
            { id: 1, name: "Doodles" },
            { id: 2, name: "Jack" },
            { id: 2, name: "Angus" },
            { id: 1, name: "Henley" },
            { id: 1, name: "Derkins" },
            { id: 2, name: "Checkers" }
        ]
    }
    render() {
        return (
            <article>
                <h2>All Animals</h2>
                {this.state.animals.map(animal =>
                    <section>{animal.name}</section>
                )}
            </article>
        );
    }
}