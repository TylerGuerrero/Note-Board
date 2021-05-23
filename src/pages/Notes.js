import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
// import Paper from '@material-ui/core/Paper'
import { Container } from '@material-ui/core'
import NoteCard from '../components/NoteCard'

const Notes = () => {
    const [loading, setLoading] = useState(true) 
    const [notes, setNotes] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/notes`)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Server error')
            }

            return res.json()
        })
        .then((data) => {
            setNotes(data);
            setError(null)
            setLoading(false)
        })
        .catch((err) => {
            setError(err.message);
            setLoading(true)
            setNotes(null)
        })
    }, [])

    const handleDelete = async (id) => {
        await fetch(`http://localhost:8000/notes/${id}`, {
            method: 'DELETE'
        })

        setNotes(
            notes.filter((note) => id !== note.id)
        )
    }

    return (
        <Container>
            {loading && <p>It is loading right now</p>}
            <Grid container spacing={3}>
                {notes && notes.map((note) => {
                    return (
                        <Grid key={note.id} item xs={12} sm={6} md={3}>
                            <NoteCard note={note} handleDelete={handleDelete}/>   
                        </Grid>
                    )
                })}
            </Grid>
            {error && <p> error: {error} </p>}
        </Container>
    )
}

export default Notes
