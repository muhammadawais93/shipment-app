import React from 'react';
import { ShipmentConsumer } from '../context';
import DataTable from 'react-data-table-component';
import Card from "@material-ui/core/Card";
import TextField from '@material-ui/core/TextField';
import SortIcon from "@material-ui/icons/ArrowDownward";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import Loading from './Loading';
import '../Styles/ShipmentsList.scss';

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

const ShipmentList = () => {

    const [filterText, setFilterText] = React.useState('');

    return (
        <ShipmentConsumer>
            {context => {
                let { Shipments, isLoading } = context;
                const filteredItems = Shipments ? Shipments.filter(item => item.id && item.id.includes(filterText)) : null;
                if (isLoading) return <Loading />;
                return (
                    <Card>
                        <TextField 
                            id="standard-basic" 
                            type="text" 
                            className="search-id"
                            placeholder="Filter By ID" 
                            value={filterText} 
                            onChange={e => setFilterText(e.target.value)}
                        />

                        <DataTable
                            title="FreightHub Shipments"
                            columns={columns}
                            data={filteredItems}
                            sortIcon={<SortIcon />}
                            defaultSortField='id'
                            striped={true}
                            highlightOnHover={true}
                            pointerOnHover={true}
                            pagination={true}
                            paginationPerPage={20}
                        />
                    </Card>
                )
            }}
        </ShipmentConsumer>
    );
}

export default ShipmentList;
