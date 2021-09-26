import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

class Article extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        this.setState({
            loaded: true
        })
    }

    render() {
        const { loaded } = this.state
        const { article } = this.props
        if (loaded === false) {
            return <Box sx={{ textAlign: 'center' }}><CircularProgress /></Box>
        } else {
            return (
                <Card key={article.id} sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://picsum.photos/345/140"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {article.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {article.content}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            )
        }
    }
}

export default Article;