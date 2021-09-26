import { Box, Card, CircularProgress, Grid } from '@mui/material';
import React from 'react';
import Article from './Article';

class Articles extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            items: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:4000/api/articles", {
            method: 'GET'
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        loaded: true,
                        items: result
                    });
                },
                // Remarque : il est important de traiter les erreurs ici
                // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
                // des exceptions provenant de réels bugs du composant.
                (error) => {
                    this.setState({
                        loaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { loaded, items } = this.state
        console.log(loaded, items)
        if (loaded === false) {
            return <Box sx={{ textAlign: 'center' }}><CircularProgress /></Box>
        } else {
            return (
                <Grid container direction="row" justifyContent="space-around" rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {items.map((element) => {
                        return (
                            <Grid item key={element.id}>
                                <Article article={element} />
                            </Grid>
                        )
                    })}
                </Grid>

            )
        }
    }
}

export default Articles;