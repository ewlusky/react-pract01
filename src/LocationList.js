import React, { Component } from 'react'


export default class LocationList extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.locations.map(location =>
                        <div>
                            <h4>{location.name}</h4>
                            <h5>{location.address}</h5>
                            {this.props.animals.filter(animal => animal.id == location.id).map(animal =>
                                <p>{animal.name}</p>
                            )}
                        </div>
                    )
                }
            </React.Fragment>
        );
    }
}