import React, {useState} from 'react'
import Snackbar from '@material-ui/core/Snackbar'

export default function SnackBar() {
    const [open, setOpen] = useState(false)


    return(
        <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={() => setOpen(false)}
                message="Car deleted"/>
    )
}