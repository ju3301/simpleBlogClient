import { Slide } from '@mui/material';
import React from 'react';
import './styles/Header.css';

class Header extends React.PureComponent {
    render() {
        return (
            <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                <h1 id="title-header">Simple Blog !</h1>
            </Slide>
        );
    }
}

export default Header;
