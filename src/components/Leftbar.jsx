import { Container, List, makeStyles, Typography } from '@material-ui/core'
import { ArrowForward, Camera, Collections, GifOutlined, Home, ListSharp, MobileFriendlyOutlined, Person, PlaceSharp, Settings, VideoLibrarySharp } from '@material-ui/icons'
import React from 'react'

const useStyles = makeStyles((theme)=>({
   container:{
       height:'100vh',
       color:'white',
       paddingTop:theme.spacing(10),
       position:"sticky",
       top:0,
       [theme.breakpoints.up("sm")]:{
         backgroundColor:"white",
         color:"#555",
         border:"1.5px solid #ece7e7"  
       },
       [theme.breakpoints.down("sm")]:{
        backgroundColor:"white",
        color:"brown",
        border:"1.5px solid #ece7e7"  
      }
   },
   item:{
       display:"flex",
       alignItems:"center",
       marginBottom:theme.spacing(4),
       [theme.breakpoints.up("sm")]:{
           marginBottom: theme.spacing(3),
           cursor:"pointer"
       }
   },
   icon:{
        marginRight: theme.spacing(1.3),
        [theme.breakpoints.up("sm")]:{
            fontSize:"18px"
        }
   },
   text:{
       fontWeight:500,
       fontSize:'14px',
       [theme.breakpoints.down("sm")]:{
           display:"none"
       }
   }
}))
function Leftbar() {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <Home className={classes.icon}/>
                <Typography className={classes.text}>Homepage</Typography>
            </div>
            <div className={classes.item}>
                <Person className={classes.icon}/>
                <Typography className={classes.text}>Friends</Typography>
            </div>
            <div className={classes.item}>
                <ListSharp className={classes.icon}/>
                <Typography className={classes.text}>Lists</Typography>
            </div>
            <div className={classes.item}>
                <Camera className={classes.icon}/>
                <Typography className={classes.text}>Camera</Typography>
            </div>
            <div className={classes.item}>
                <VideoLibrarySharp className={classes.icon}/>
                <Typography className={classes.text}>Videos</Typography>
            </div>
            <div className={classes.item}>
                <MobileFriendlyOutlined className={classes.icon}/>
                <Typography className={classes.text}>Apps</Typography>
            </div>
            <div className={classes.item}>
                <Collections className={classes.icon}/>
                <Typography className={classes.text}>Collections</Typography>
            </div>
            <div className={classes.item}>
                <PlaceSharp className={classes.icon}/>
                <Typography className={classes.text}>Market Place</Typography>
            </div>
            <div className={classes.item}>
                <Settings className={classes.icon}/>
                <Typography className={classes.text}>Settings</Typography>
            </div>
            <div className={classes.item}>
                <ArrowForward className={classes.icon}/>
                <Typography className={classes.text}>Logout</Typography>
            </div>
        </Container>
    )
}

export default Leftbar
