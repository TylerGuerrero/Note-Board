import { AppBar, Avatar, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import { useHistory, useLocation } from 'react-router'
import { format } from 'date-fns'

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
    return {
        page: {
            backgroundColor: "#f9f9f9",
            width: '100%',
            padding: theme.spacing(3)
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            display: 'flex'
        },
        active: {
            background: "#f4f4f4"
        },
        title: {
            padding: theme.spacing(2)
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow: 1
        },
        avatar: {
            marginLeft: theme.spacing(2)
        }
    }   
})

const Layout = ({ children }) => {
    const classes = useStyles()
    const history = useHistory();
    const location = useLocation();

    const menuItems = [
        { 
          text: 'My Notes', 
          icon: <SubjectOutlined color="secondary" />, 
          path: '/' 
        },
        { 
          text: 'Create Note', 
          icon: <AddCircleOutlineOutlined color="secondary" />, 
          path: '/create' 
        },
      ];
    
    return (
        <div className={classes.root}>
            <AppBar 
            className={classes.appbar}
            elevation={0}
            >
                <Toolbar>
                    <Typography variant="body1" className={classes.date}>
                       Today is {format(new Date(), 'do MMM Y')}
                    </Typography>
                    <Typography>
                         Tyler
                    </Typography>
                    <Avatar src="/logo192.png" className={classes.avatar}/>
                </Toolbar>
            </AppBar>
            <Drawer 
            className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{paper: classes.drawerPaper}}
            >
                <div>
                    <Typography className={classes.title} variant="h5">
                        Tyler Notes
                    </Typography>
                </div>
                <List>
                    {menuItems.map((item, index) => {
                        return (
                            <ListItem 
                            button 
                            key={item.text}
                            onClick={() => history.push(item.path)}
                            className={location.pathname === item.path ? classes.active : null}
                            >
                                <ListItemIcon> {item.icon} </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        )
                    })}
                </List>
            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>  
        </div>
    )
}

export default Layout
