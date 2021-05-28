import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
// import Paper from '@material-ui/core/Paper'
import { Container } from '@material-ui/core'
import NoteCard from '../components/NoteCard'
import Masonry from 'react-masonry-css'

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

    const breakPoints = {
        default: 3,
        1100: 2,
        700: 1
    }

    return (
        <Container>
            {loading && <p>It is loading right now</p>}
            <Masonry
                breakpointCols={breakPoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {notes && notes.map((note) => {
                    return (
                        <div key={note.id}>
                            <NoteCard note={note} handleDelete={handleDelete}/>   
                        </div>
                    )
                })}
            </Masonry>
            {error && <p> error: {error} </p>}
        </Container>
    )
}

export default Notes
