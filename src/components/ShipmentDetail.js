import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TextField from '@material-ui/core/TextField';
import UpdateName from './UpdateName';
import { Link } from "react-router-dom";
import '../Styles/ShipmentDetail.scss';

class ShipmentDetail extends Component {
    state = {
        Shipment: null,
        isLoading: false,
    }

    componentDidMount() {
        this.fetchShipment();
    }

    fetchShipment() {
        fetch(`http://localhost:1122/shipments/${this.props.match.params.id}`)
            // We get the API response and receive data in JSON format...
            .then(response => response.json())
            // ...then we update the users state
            .then(data =>
                this.setState({
                    Shipment: data,
                    isLoading: false,
                })
            )
            // Catch any errors we hit and update the app
            .catch(error => console.log('something went wrong.'));
    }

    render() {
        let shipment = this.state.Shipment;
        return (
            <div className="ShipmentDetail">
                {shipment &&
                    <Container maxWidth="lg">
                        <h1>Shipment Detail</h1>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper className="id-back-btn">
                                    <h3>{shipment.id}</h3>
                                    <Link to="/">
                                        <Button
                                            variant="contained"
                                            color="default"
                                            className='back-button'
                                            startIcon={<ArrowBackIcon />}
                                        >Back to Listing</Button>
                                    </Link>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Paper className="">
                                    <span>Name: </span>
                                    <span><b>{shipment.name}</b></span>
                                    <UpdateName>
                                        <span>Update Shipment Name</span>
                                        <form className="udpate-form" noValidate autoComplete="off">
                                            <TextField
                                                label="Name"
                                                id="filled-size-small"
                                                defaultValue={shipment.name}
                                                size="small"
                                            />
                                            <Button variant="contained" color="primary">Update</Button>
                                        </form>
                                    </UpdateName>
                                </Paper>
                            </Grid>

                            <Grid item xs={12} sm={4} className="haveExpandable">
                                <ExpansionPanel>
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <span><b>Cargo</b></span>
                                    </ExpansionPanelSummary>
                                    {shipment.cargo.map((val, index) =>
                                        <div key={`cargo-${index}`}>
                                            <ExpansionPanelDetails>
                                                <div className="cargo-details">
                                                    <span>Type:&nbsp;</span>
                                                    <span><b>{val.type}</b></span>
                                                </div>
                                                <div className="cargo-details">
                                                    <span>Description:&nbsp;</span>
                                                    <span><b>{val.description}</b></span>
                                                </div>
                                                <div className="cargo-details">
                                                    <span>Volume:&nbsp;</span>
                                                    <span><b>{val.volume}</b></span>
                                                </div>
                                            </ExpansionPanelDetails>
                                            {(shipment.cargo.length != index + 1) && <hr />}
                                        </div>
                                    )}
                                </ExpansionPanel>
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <Paper className="">
                                    <span>Mode: </span>
                                    <span><b>{shipment.mode}</b></span>
                                </Paper>
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <Paper className="">
                                    <span>Type: </span>
                                    <span><b>{shipment.type}</b></span></Paper>
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <Paper className="">
                                    <span>Destination: </span>
                                    <span><b>{shipment.destination}</b></span>
                                </Paper>
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <Paper className="">
                                    <span>Origin: </span>
                                    <span><b>{shipment.origin}</b></span>
                                </Paper>
                            </Grid>

                            <Grid item xs={12} sm={4} className="haveExpandable">
                                <ExpansionPanel>
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <span><b>Services</b></span>
                                    </ExpansionPanelSummary>
                                    {shipment.services.map((val, index) =>
                                        <div key={`services-${index}`}>
                                            <ExpansionPanelDetails>
                                                <div className="services-details">
                                                    <span>Type:&nbsp;</span>
                                                    <span><b>{val.type}</b></span>
                                                </div>
                                            </ExpansionPanelDetails>
                                            {(shipment.services.length != index + 1) && <hr />}
                                        </div>
                                    )}
                                </ExpansionPanel>
                            </Grid>

                            <Grid item xs={6} sm={4}>
                                <Paper className="">
                                    <span>Total: </span>
                                    <span><b>{shipment.total}</b></span>
                                </Paper>
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <Paper className="">
                                    <span>Status: </span>
                                    <span><b>{shipment.status}</b></span>
                                </Paper>
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <Paper className="">
                                    <span>userId: </span>
                                    <span><b>{shipment.userId}</b></span>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                }
            </div>
        );
    }
}

export default ShipmentDetail;