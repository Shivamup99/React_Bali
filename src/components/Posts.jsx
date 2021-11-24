import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme)=>({
 container:{
    paddingTop:theme.spacing(10)
 },
 media:{
     height:250,
     [theme.breakpoints.down("sm")]:{
        height:150
     }
 },
 card:{
     marginBottom: theme.spacing(5)
 }
}))
function Posts() {
    const classes = useStyles()
    return (
         <Card className={classes.card}>
             <CardActionArea>
                 <CardMedia className={classes.media}
                 image="https://media.istockphoto.com/photos/pura-ulun-danu-bratan-temple-in-bali-picture-id675172642?b=1&k=20&m=675172642&s=170667a&w=0&h=IgKlfRYs9bs6bq3fx0WOCqdgWY3WW2-_2PKBMCcREj0="
                 title="Kabupaten De Tabanan"/>
                 <CardContent>
                     <Typography gutterBottom variant="h5">The Bali Tabanan</Typography>
                     <Typography variant="body2">Tourism-reliant Bali is scheduled to reopen on Thursday and though its Ngurah Rai international airport has carried out simulations preparing for tourists to return, it is not expecting much to happen soon."So far there is no schedule," said Taufan Yudhistira, a spokesman for the airport.Indonesia's tight immigration measures during the pandemic have devastated the island, with widespread closures of hotels, shops and businesses.</Typography>
                 </CardContent>
             </CardActionArea>
             <CardActions>
                 <Button size="small" color="primary">Share</Button>
                 <Button size="small" color="inherit">Learn More</Button>
             </CardActions>
         </Card> 
    )
}

export default Posts
