import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
// import SendIcon from '@material-ui/icons/Send';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    btn: {
        fontSize: 60,
        backgroundColor: 'violet',
        '&:hover': {
            backgroundColor: 'blue'
        }
    },
    title: {
        textDecoration: 'underline',
        marginBottom: 20
    }
})

const Create = () => {
    const classes = useStyles();

    return (
        <Container>
            <Typography
                className={classes.title}
                variant="h6"
                component="h2"
                gutterBottom
                color="textSecondary"
            >
            Create a New Note
            </Typography>
            <Button
                className={classes.btn}
               // startIcon={<SendIcon />}
                endIcon={<KeyboardArrowRightIcon />}
                variant="contained"
                color="secondary"
                type="submit"
                disableElevation
                onClick={() => console.log('clicked on me')}
            >
            Submit
            </Button>
            <br />
        </Container>
    )
}

export default Create

// import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
// import ButtonGroup from '@material-ui/core/ButtonGroup'
/* <Typography 
                variant="h3"
                color="primary"
                align="center"
            >
                Create a new Note
            </Typography>
            <Typography
                color="secondary"  
            >
                Another new Note
            </Typography>
            <Typography
                color="secondary"
                noWrap
            >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque molestiae magnam voluptate reiciendis fuga totam facere officia, animi sint laboriosam dolorum voluptas cupiditate explicabo dolore veritatis recusandae rem inventore sunt.
            </Typography> */

            /* <Button type="submit">Submit</Button>
            <Button variant="outlined" color="secondary" type="submit">Submit</Button>
            <ButtonGroup color="secondary" variant="contained">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup> */
            /* <AcUnitOutlinedIcon />
            <AcUnitOutlinedIcon color="secondary" fontSize="large"/>
            <AcUnitOutlinedIcon color="secondary" fontSize="small"/>
            <AcUnitOutlinedIcon color="action" fontSize="small"/>
            <AcUnitOutlinedIcon color="error" fontSize="small"/>
            <AcUnitOutlinedIcon color="disabled" fontSize="small"/> */