import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { IconButton, Typography, makeStyles, Avatar } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import { blue, green, pink, yellow } from '@material-ui/core/colors';


const useSyles = makeStyles({
    test:{
        border: (note) => {
            if (note.category === 'work') {
                return '1px solid red'
            }
        }
    },
    avatar: {
        backgroundColor: (note) => {
            if (note.category === 'work') {
                return yellow[700]
            }

            if (note.category === 'money') {
                return green[500]
            }

            if (note.category === 'todos') {
                return pink[500]
            }

            return blue[500]
        }
    }
})

const NoteCard = ({ note, handleDelete }) => {
    const classes = useSyles(note);

    return (
        <div>
            <Card elevation={1} className={classes.test}>
                <CardHeader
                    avatar={
                        <Avatar className={classes.avatar}>
                            {note.category[0].toUpperCase()}
                        </Avatar>
                    }
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
