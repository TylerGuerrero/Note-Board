import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
// import SendIcon from '@material-ui/icons/Send';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { FormControlLabel, makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
    field: {
        marginBottom: 20,
        marginTop: 20,
        display: 'block'
    }
})

const Create = () => {
    const classes = useStyles();
    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")
    const [titleErr, setTitleError] = useState(false)
    const [detailsErr, setDetailsError] = useState(false)
    const [categories, setCategories] = useState("todos")
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        setTitleError(false);
        setDetailsError(false);

        if (title === "") {
            setTitleError(true)
        }

        if (details === "") {
            setDetailsError(true)
        }

        if (title && details) {
            console.log(title, details, categories)
            const note = {title, details, categories};

            fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(note)
            }).then((res) => {
                history.push("/")
            }).catch((err) => {
                console.log(err);
            })

            setTitle("")
            setDetails("")
            setCategories("")
        } 
    }

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

            <form noValidate autoCapitalize="off" onSubmit={handleSubmit}>
                <TextField 
                className={classes.field}
                label="Note Title"
                variant="outlined"
                color="secondary"
                fullWidth
                required
                error={titleErr}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />

                <TextField 
                className={classes.field}
                label="Details"
                variant="outlined"
                color="secondary"
                multiline
                error={detailsErr}
                rows={4}
                fullWidth
                required
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                />

                <FormLabel>Not Category</FormLabel>
                <FormControl className={classes.field}>
                    <RadioGroup value={categories} onChange={(e) => setCategories(e.target.value)}>
                        <FormControlLabel value="money" control={<Radio />} label="Money"/>
                        <FormControlLabel value="todos" control={<Radio />} label="Todos"/>  
                        <FormControlLabel value="reminders" control={<Radio />} label="Reminders"/>
                        <FormControlLabel value="work" control={<Radio />} label="Work"/>
                    </RadioGroup>  
                </FormControl> 
    
                <Button
                    className={classes.btn}
                    // startIcon={<SendIcon />}
                    endIcon={<KeyboardArrowRightIcon />}
                    variant="contained"
                    color="secondary"
                    type="submit"
                    // disableElevation
                    onClick={() => console.log('clicked on me')}
                >
                Submit
                </Button>
            </form>
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
            /* <Radio value="hello"/>
                    <Radio value="goodbye"/> */