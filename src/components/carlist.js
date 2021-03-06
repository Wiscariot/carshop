import React, { useState, useEffect } from "react"
import Addcar from './Addcar'
import EditCar from './EditCar'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Snackbar from './Snackbar'



export default function Carlist() {
    const [cars, setCars] = useState([])
    const [snackbarOpen, setOpenSnackbar] = useState(false)

    useEffect(() => fetchData(), [])

    const fetchData = () => {
        fetch('https://carstockrest.herokuapp.com/cars')
        .then(response => response.json())
        .then(data => setCars(data._embedded.cars))
    }

    const deleteCar = (link) => {
        if (window.confirm('Are you sure?')) {
        fetch(link, {method: 'DELETE'})
        .then(res => fetchData())
        .then(res => showMessage())
        .catch(err => console.error(err))
        }
    }

    const saveCar = (car) => {
        fetch('https://carstockrest.herokuapp.com/cars', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json' 
            },
            body: JSON.stringify(car)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }

    const updateCar = (car, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json' 
            },
            body: JSON.stringify(car)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }

    const showMessage = () => setOpenSnackbar(true)

    const columns =  [
        {
            Header: 'Brand',
            accessor: 'brand'
        },
        {
            Header: 'Model',
            accessor: 'model'
        },
        {
            Header: 'Color',
            accessor: 'color'
        },
        {
            Header: 'Fuel',
            accessor: 'fuel'
        },
        {
            Header: 'Year',
            accessor: 'year'
        },
        {
            Header: 'Price',
            accessor: 'price'
        },
        {
            sortable: false,
            filterable: false,
            width: 75,
            accessor: '_links.self.href',
            Cell: row => <EditCar updateCar={updateCar} car={row.original} />
                            
        },
        {
            sortable: false,
            filterable: false,
            width: 75,
            accessor: '_links.self.href',
            Cell: row => 
                            <IconButton size="small" onClick={() => deleteCar(row.value)}>
                                <DeleteIcon/>
                            </IconButton>
                            
        },
    ]
    
    return (
        <div>
            <Addcar saveCar={saveCar} />
            <ReactTable data={cars} columns={columns} filterable={true} />
            <Snackbar />
        </div>
    )
}