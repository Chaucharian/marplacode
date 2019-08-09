import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Animation from './animation';
import MarplaCodeSVG from './marplacodeSvg';
import { MorphIcon } from 'react-svg-buttons';

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
    },
    arrow: {
        '& svg': {
            transition: 'all 1s', 
            '&:hover' : { transform: 'translateY(20px)' }
        }
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
                    <MarplaCodeSVG  ></MarplaCodeSVG>
                    <div className={ classes.arrowContent } >
                        <MorphIcon className={ classes.arrow } color="#FFF" type="arrowDown" />
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(App);
