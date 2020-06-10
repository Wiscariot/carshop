import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'


export default function EditCar(props) {
    const [open, setOpen] = React.useState(false)
    const [car, setCar] = useState({
        brand:'',
        model:'',
        color:'',
        fuel:'',
        year:'',
        price:''
    })

    const handleClickOpen = () => {
    
      setCar({
        brand:props.car.brand,
        model:props.car.model,
        color:props.car.color,
        fuel:props.car.fuel,
        year:props.car.year,
        price:props.car.price
    })
      setOpen(true)
    }
    
    const handleClose = () => setOpen(false)
    const handleInputChange = (event) => setCar({...car, [event.target.name]: event.target.value})
    
    const addCar = () => {
        console.log(props.car)
        props.saveCar(car)
        handleClose()
    }
    
    const updateCar = () => {
      props.updateCar(car, props.car._links.car.href)
      handleClose()
    }

    return(
        <div>
      <IconButton onClick={handleClickOpen} size="small" aria-label="delete">
        <EditIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        
        <DialogTitle id="form-dialog-title">Add car</DialogTitle>
        
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
            name="brand"
            label="Brand"
            value={car.brand}
            onChange={(e) => handleInputChange(e)}
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            name="model"
            label="Model"
            value={car.model}
            onChange={(e) => handleInputChange(e)}
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            name="color"
            label="Color"
            value={car.color}
            onChange={(e) => handleInputChange(e)}
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            name="fuel"
            label="fuel"
            value={car.fuel}
            onChange={(e) => handleInputChange(e)}
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            name="year"
            label="Year of manufacture"
            value={car.year}
            onChange={(e) => handleInputChange(e)}
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            name="price"
            label="Price"
            value={car.price}
            onChange={(e) => handleInputChange(e)}
            type="text"
            fullWidth
          />
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={updateCar} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    )
}