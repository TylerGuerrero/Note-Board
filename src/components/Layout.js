import { List, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import { useHistory, useLocation } from 'react-router'

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
                {children}
            </div>  
        </div>
    )
}

export default Layout
