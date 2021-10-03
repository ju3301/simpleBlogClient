import { Box, CircularProgress, Grid } from '@mui/material';
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
                    console.log('article request')
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

        if (loaded === false) {
            return <Box sx={{ textAlign: 'center' }}><CircularProgress /></Box>
        } else {
            return (
                <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {items.map((element) => {
                        return (
                            <Grid item xs={12} md={6} lg={4} xl={3} display="flex" justifyContent="center" key={element.id} >
                                <Article article={element} key={element.id} />
                            </Grid>
                        )
                    })
                    }
                </Grid>

            )
        }
    }
}

export default Articles;