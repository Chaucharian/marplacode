import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Animation from './animation';
import MarplaCodeSVG from './marplacodeSvg';

const styles = {
    app: {
      display: 'flex',
      height: '100%',
      backgroundColor: '#000'
    },
    content: {
        display: 'flex',
        width: "100%",
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center'
    }
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
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(App);
