import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Animation from './animation';

const styles = {
    app: {
      display: 'flex',
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
        },
        "& canvas": {
            zIndex: -999,
            position: "absolute"
        }  
    },
    content: {
        display: 'block',
        width: "100%",
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
                    <h1>MARPLACODE</h1>
                    <p>Site still under construction. Meanwhile, play with this!</p>
                </div>
                <Animation canvasSelector="mainAnimation"></Animation>
            </div>
        );
    }
}

export default withStyles(styles)(App);