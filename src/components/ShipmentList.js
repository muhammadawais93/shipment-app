import React, { Component } from 'react';
import { ShipmentConsumer } from '../context';
import DataTable, { createTheme } from 'react-data-table-component';
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import Loading from './Loading';

const columns = [
    {
        name: 'ID',
        selector: 'id',
        sortable: true,
    },
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
    },
    {
        name: 'Mode',
        selector: 'mode',
        sortable: true,
    },
    {
        name: 'Type',
        selector: 'type',
        sortable: true,
    },
    {
        name: 'Destination',
        selector: 'destination',
        sortable: true,
    },
    {
        name: 'Origin',
        selector: 'origin',
        sortable: true,
    },
    {
        name: 'Total',
        selector: 'total',
        sortable: true,
    },
    {
        name: 'Status',
        selector: 'status',
        sortable: true,
    },
    {
        name: 'UserId',
        selector: 'userId',
        sortable: true,
    },
    {
        cell: (row) => <Link to={`/shipment/${row.id}`}><Button raised variant="contained" size="small" color="primary">Detail</Button></Link>,
        ignoreRowClick: true,
        button: true,
    },
];

class ShipmentList extends Component {
    render() {
        return (
            <ShipmentConsumer>
                {context => {
                    let { Shipments, isLoading } = context;
                    if (isLoading) return <Loading />;
                    return (
                        <Card>
                            <DataTable
                                title="FreightHub Shipments"
                                columns={columns}
                                data={Shipments}
                                sortIcon={<SortIcon />}
                                defaultSortField='id'
                                striped
                                highlightOnHover
                                pointerOnHover
                                pagination
                                paginationPerPage={20}
                            />
                        </Card>
                    )
                }}
            </ShipmentConsumer>
        );
    }
}

export default ShipmentList;
