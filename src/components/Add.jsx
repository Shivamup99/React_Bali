import {Container, Fab, makeStyles, MenuItem, Modal, TextField, Tooltip,RadioGroup,FormControlLabel,Radio, FormLabel, Button, Snackbar } from '@material-ui/core'
import React, { useState } from 'react'
import {Add as AddIcon} from "@material-ui/icons"
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const useStyles = makeStyles((theme)=>({
    fab:{
        position:'fixed',
        bottom:20,
        right:20
    },
    container:{
        width:500,
        height:550,
        backgroundColor:"#fff",
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        margin:'auto',
        [theme.breakpoints.down("sm")]:{
            width:'100vw',
            height:'100vh'
        }
    },
    form:{
        padding:theme.spacing(2)
    },
    item:{
        marginBottom:theme.spacing(3)
    }
}))
function Add() {
    const classes = useStyles()
    const[open,setOpen] = useState(false)
    const [openAlert,setOpenAlert] = useState(false)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenAlert(false);
      };
    return (
        <>
        <Tooltip title="Add" aria-label="add" onClick={()=>setOpen(true)}>
            <Fab color="primary" className={classes.fab}>
                <AddIcon/>
            </Fab>
        </Tooltip>
        <Modal open={open}>
            <Container className={classes.container}>
             <form className={classes.form} autoComplete="off">
                 <div className={classes.item}>
                     <TextField id="standard-basic" label="Title" size="small" style={{width:"100%"}}></TextField>
                 </div>
                 <div className={classes.item}>
                     <TextField id="outlined-multiline-static" multiline rows={4} defaultValue="About your place" 
                     label="Description" variant="outlined" size="small" style={{width:"100%"}}></TextField>
                 </div>
                 <div className={classes.item}>
                     <TextField select label="Visibility" value="Public">
                         <MenuItem value="Public">Public</MenuItem>
                         <MenuItem value="Private">Private</MenuItem>
                         <MenuItem value="Unlisted">Unlisted</MenuItem>
                     </TextField>
                 </div>
                 <div className={classes.item}>
                     <FormLabel component="legend">Who can comment ?</FormLabel>

                 <RadioGroup >
        <FormControlLabel value="Everybody" control={< Radio size="small" />} label="Everybody" />
        <FormControlLabel value="My friends" control={< Radio size="small" />} label="My friends" />
        <FormControlLabel value="Nobody" control={< Radio size="small" />} label="Nobody" />
        <FormControlLabel value="Custom" disabled control={< Radio size="small" />} label="Custom (Premium)" />
      </RadioGroup>
                </div>
                <div className={classes.item}>
                    <Button variant="outlined" color="primary" style={{marginRight:"10px"}} onClick={()=>setOpenAlert(true)}>
                        Create
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={()=>setOpen(false)}>
                        Cancel
                    </Button>

                </div>
             </form>
            </Container>

        </Modal>
        <Snackbar open={openAlert} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{vertical:'bottom' , horizontal:'left'}}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
        </Snackbar>
        </>
    )
}

export default Add
