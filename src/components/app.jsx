import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Animation from './animation';
import MarplaCodeSVG from './marplacodeSvg';

const styles = {
    app: {
      display: 'flex',
      height: '100%',
        "& h1": {
            display: "inline",
            height: "100%",
            margin: "0px",
            padding: "0px",
            color: "white",
            fontFamily: 'Abril Fatface, cursive'
        },
        "& p": {
            fontFamily: 'Shadows Into Light, cursive',
            color: "white"
        }
    },
    content: {
        display: 'flex',
        width: "100%",
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center'
    },
};  

class App extends Component {
    constructor() {
        super();
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={ classes.app } >
                <div className={ classes.content } >
                    <MarplaCodeSVG></MarplaCodeSVG>
                    <p>We bring interactiveness to the web.</p>
                </div>
                <Animation canvasSelector="mainAnimation"></Animation>
            </div>
        );
    }
}

export default withStyles(styles)(App);