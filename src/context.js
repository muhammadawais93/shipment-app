import React, { Component } from 'react';

const ShipmentContext = React.createContext();

class ShipmentsProvider extends Component {
    state = {
        Shipments: null,
        isLoading: true,
        error: null
    }
    componentDidMount() {
        this.fetchShipments();
    }

    fetchShipments() {
        fetch(`http://localhost:1123/shipments`)
            // We get the API response and receive data in JSON format...
            .then(response => response.json())
            // ...then we update the users state
            .then(data =>
                this.setState({
                    Shipments: data,
                    isLoading: false,
                })
            )
            // Catch any errors we hit and update the app
            .catch(error => this.setState({ error, isLoading: false }));
    }
    render() {
        return (
            <ShipmentContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </ShipmentContext.Provider>
        );
    }
}

const ShipmentConsumer = ShipmentContext.Consumer;
export { ShipmentContext, ShipmentsProvider, ShipmentConsumer };