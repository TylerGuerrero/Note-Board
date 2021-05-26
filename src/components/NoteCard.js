import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { IconButton, Typography, makeStyles } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';


const useSyles = makeStyles({
    test:{
        border: (note) => {
            if (note.category === 'work') {
                return '1px solid red'
            }
        }
    }
})

const NoteCard = ({ note, handleDelete }) => {
    const classes = useSyles(note);

    return (
        <div>
            <Card elevation={1} className={classes.test}>
                <CardHeader
                    action={
                        <IconButton onClick={() => handleDelete(note.id)}>
                            <DeleteOutlined />
                        </IconButton>
                    }

                    title={note.title}
                    subheader={note.category}
                />
            </Card>
            <CardContent>
                <Typography 
                    variant="body2"
                >
                    { note.details }
                </Typography>
            </CardContent>
        </div>
    )
}

export default NoteCard
