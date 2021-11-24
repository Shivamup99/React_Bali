import { AppBar, InputBase, makeStyles, Toolbar, Typography,alpha, Badge, Avatar } from '@material-ui/core'
import { Mail, Search,Notifications, Cancel } from '@material-ui/icons'
import React, { useState } from 'react'

const useStyle = makeStyles((theme)=>({
    appBar:{
       backgroundColor:"brown"
    },
    toolbar:{
        display:"flex",
        justifyContent:"space-between"
    },
    search:{
        alignItems:"center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width:"50%",
        display:"block",
        [theme.breakpoints.down("sm")]:{
            display:(props)=>(props.open?"flex":"none"),
            width:'70%'
        }
    },
    logoLg:{
        display:"none",
        [theme.breakpoints.up("sm")]:{
            display:"block"
        }
    },
    logoSm:{
        display:"block",
        [theme.breakpoints.up("sm")]:{
            display:"none"
        }
    },
    input:{
        color:"white",
        marginLeft:theme.spacing(1)
    },
    cancel:{
      [theme.breakpoints.up("sm")]:{
          display:'none'
      }
    },
    icons:{
        alignItems:"center",
        display:(props)=>(props.open?"none":"flex")
    },
    badge:{
        marginRight:theme.spacing(2.8)
    },
    searchButton:{
        marginRight:theme.spacing(2.8),
        [theme.breakpoints.up("sm")]:{
            display:"none"
        },
    },
}))

function Navbar() {
    const [open,setOpen] = useState(false)
    const classses = useStyle({open})
    return (
        <AppBar className={classses.appBar} position="fixed">
            <Toolbar className={classses.toolbar}>
                <Typography variant="h6" className={classses.logoLg}>
                   AMIGO CREATOR
                </Typography>
                <Typography variant="h6" className={classses.logoSm}>
                   AMIGO
                </Typography>
                <div className={classses.search}>
                    <Search />
                    <InputBase placeholder="Search Creations ..." className={classses.input}/>
                    <Cancel className={classses.cancel} onClick={()=>setOpen(false)}/>
                </div>
                <div className={classses.icons}>
                    <Search className={classses.searchButton} onClick={()=>setOpen(true)}/>
                    <Badge badgeContent={4} color="secondary" className={classses.badge}>
                        <Mail/>
                    </Badge>
                    <Badge badgeContent={6} color="secondary"  className={classses.badge}>
                        <Notifications/>
                    </Badge>
                    <Avatar alt="uodb" src="https://lh3.googleusercontent.com/pw/AM-JKLVRBTZn9ug69yqMICTnbvb1HqaXJnQlTpiPtvwa5PoBTRvWJmP1a61TiblPNQ-Zsb8xKs6IuJY2XNLHMoPPxnKVUEyc3L_vHh7Uu1HRLHz-9ucWdAv-mDnqd0XzLKcqTcPCOHF6aDz0wbaoODb98DNWtjH88IsZkDtEn8vEttVoH5sV9w62fZIUIBQrJ1ty9bfb85yTFbRcrTik-zZVyNLZLTcVTFTGOMJSs8IpGdJ9wS3vGitZTIKVwP7OAwDNIHgwI8DAm0qMSoq9pUQkQDWwyCoaWNEqTKdt6tzWAcZJG_WIyKm5-2XgVyaDOzRuRyAbffc7pDsyz4pGpu0ltsl3wwwyAv6rmrZBP8m2d5nsKDdZdDllMYeHfUKiC2l7BNLyDsWXXFgbWJuENxDQWO_z4ivrBx90XEIca0AuOxv1yvIIKBEkKWap_Hf0fnzqM7-v1d9ZMHLhEjySxLDb7ni19lLDB6nGUPr5BvcmUfjecQ01vJUbCangsgPymF_V9Jad35I-vkKK6kk9NSReuYqreUgXfyk8UFq4f4nQ44Lz3ajE-Fxk1yKn3CA5y8B0joUU93QJD9oIWvsKSwI8E1j46L7MYE6rce5psWwzcpo5xDjQ16UNHrljXWWwU_XQzkv8QIJXpF8g7k_dBszaTdBQYy7IQ56RyDB2LiWwEdZeLr8DmYH0J3yTEitEGOnuojBPP7ilb7abBvVIwBFhXotRWyYubILbGSkGZ-ex=w686-h914-no?authuser=0&authuser=0"/>

                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
