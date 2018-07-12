import React, { Component } from 'react'


export default class LocationList extends Component {
    state = {
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
        ]
    }
    render() {
        return (
            <React.Fragment>
                <h3>Student Kennels</h3>

                {
                    this.state.locations.map(location =>
                        <div>
                            <h4>{location.name}</h4>
                            <h5>{location.address}</h5>
                            {this.state.animals.filter(animal => animal.id === location.id).map(animal =>
                                <p>{animal.name}</p>
                            )}
                        </div>
                    )
                }
            </React.Fragment>
        );
    }
}