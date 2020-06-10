import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'


export default function Addcar(props) {
    const [open, setOpen] = React.useState(false)
    const [car, setCar] = useState({
        brand:'',
        model:'',
        color:'',
        fuel:'',
        year:'',
        price:''
    })

    const handleClickOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const handleInputChange = (event) => setCar({...car, [event.target.name]: event.target.value})
    
    const addCar = () => {
        props.saveCar(car)
        handleClose()
    }
    

    return(
        <div>
      <Button position="right" style={{margin:5}} variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Car
      </Button>
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
          <Button onClick={addCar} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    )
}