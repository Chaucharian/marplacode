import Matter from 'matter-js'
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    content: {
        position: 'absolute',
        display: 'flex',
        '& p': {
            margin: '0px',
            color: 'white'
        },
        '& #first-smooke': { fontFamily: 'Fredericka the Great, cursive', fontSize: '25px' },
        '& #second-smooke': { fontFamily: 'Cormorant, serif', fontSize: '15px' },
        '& #third-smooke': { fontFamily: 'Belleza, sans-serif', fontSize: '30px' },
        '& #fourth-smooke': { fontFamily: 'Gilda Display, serif', fontSize: '27px' }
    },
    canvas: {
        zIndex: -999,
        position: "absolute"
    }
};

class Animation extends Component{

    constructor(props) {
        super(props);
        this.state = { width: window.innerWidth, height: window.innerHeight };
    }

    updateDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    componentDidUpdate() {
        const { width, height } = this.state;
        this.initialize(width, height);
    }

    componentDidMount() {
        const { width, height } = this.state;
        this.initialize(width, height);
        window.addEventListener('resize', () => this.updateDimensions());
    }

    componentWillUnmount() {
        window.removeEventListener("resize", () => this.updateDimensions());
    }

    render() {
        const { canvasSelector, classes } = this.props;
        return (
            <div className={ classes.content }>
                <p id="first-smooke" >New web experiences</p>
                <p id="second-smooke" >Innovation</p>
                <p id="third-smooke" >User Experience</p>
                <p id="fourth-smooke" >Top quality websites</p>
                <canvas className={ classes.canvas +' '+ canvasSelector} ></canvas>
            </div>
        );
    }

    initialize(width, height) {
        const { canvasSelector } = this.props;
        const firstSmooke = document.getElementById('first-smooke');
        const secondSmooke = document.getElementById('second-smooke');
        const thirdSmooke = document.getElementById('third-smooke');
        const fourthSmooke = document.getElementById('fourth-smooke');

        document.querySelector('canvas').style.backgroundColor = 'rgb(12, 12, 12)'; // painting canvas since we just emulate physics not painting its bodies

        const Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composites = Matter.Composites,
        Common = Matter.Common,
        World = Matter.World,
        Bodies = Matter.Bodies,
        Events = Matter.Events;

        // create engine
        const engine = Engine.create(),
            world = engine.world;

        // create renderer
        var render = Render.create({
            canvas: document.querySelector(`.${canvasSelector}`),
            engine: engine,
            options: {
                width: width,
                height: height,
                /*hasBounds: false,
                enabled: false,
                wireframes: false,
                showSleeping: false,
                showDebug: false,
                showBroadphase: false,
                showBounds: false,
                showVelocity: false,
                showCollisions: false,
                showSeparations: false,
                showAxes: false,
                showPositions: false,
                showAngleIndicator: false,
                showIds: false,
                showShadows: false,
                showVertexNumbers: false,
                showConvexHulls: false,
                showInternalEdges: false,
                showMousePosition: false*/
            }
        });

//        Render.run(render);

        // create runner
        const runner = Runner.create();
        Runner.run(runner, engine);

        const rest = 0.9;
        // add screen borders
        World.add(world, [
            Bodies.rectangle(width/ 2, 100, width, 50, { isStatic: true }),
            Bodies.rectangle(width / 2, height - 50, width, 50, { isStatic: true }),
            Bodies.rectangle(width - 50, height / 2, 50, height, { isStatic: true }),
            Bodies.rectangle(50, height / 2, 50, height, { isStatic: true }),

            Bodies.rectangle( width / 2, height / 2, 50, 10,  { restitution:  rest }),
            Bodies.rectangle( width / 2 + 50, height / 2, 50, 10, { restitution:  rest }),
            Bodies.rectangle( width / 2 - 50, height / 2, 50, 10, { restitution:  rest }),
            Bodies.rectangle( width / 2, height / 2 + 50, 50, 10, { restitution:  rest }),

        ]);

        
        window.addEventListener('devicemotion', event => {
            // Y = < 0 up > 0 down
            // X = < 0 left > 0 rigth
            const x = event.accelerationIncludingGravity.x;
            const y = event.accelerationIncludingGravity.y;
            // determing key by measuring aceleration axis
            if(x >= 0.5) {
                engine.world.gravity.x = -1;
            } else if(x <= -0.5) {
                engine.world.gravity.x = 1;
            } else {
                engine.world.gravity.y = 0;
            }
            if(y >= 0.5) {
                engine.world.gravity.y = 1;
            } else if(y <= -0.5) {
                engine.world.gravity.y = -1;
            } else {
                engine.world.gravity.y = 0;
            }
        }, false);
        
        Events.on(runner, "afterTick", () => {
            // world.composites[0].bodies[0].position.x
            // To degrees world.composites[0].bodies[0].angle * 180 / Math.PI 

            firstSmooke.style.transform = 'translate('+  world.bodies[4].position.x +'px'+','+ world.bodies[4].position.y +'px) rotate('+  world.bodies[4].angle * 180 / Math.PI +'deg)';
            secondSmooke.style.transform = 'translate('+  world.bodies[5].position.x +'px'+','+ world.bodies[5].position.y +'px) rotate('+  world.bodies[5].angle * 180 / Math.PI +'deg)';
            thirdSmooke.style.transform = 'translate('+  world.bodies[6].position.x +'px'+','+ world.bodies[6].position.y +'px) rotate('+  world.bodies[6].angle * 180 / Math.PI +'deg)';
            fourthSmooke.style.transform = 'translate('+  world.bodies[7].position.x +'px'+','+ world.bodies[7].position.y +'px) rotate('+  world.bodies[7].angle * 180 / Math.PI +'deg)';

        });

        // fit the render viewport to the scene
        /*Render.lookAt(render, {
            min: { x: 0, y: 0 },
            max: { x: width, y: height }
        });*/

    }
}

export default withStyles(styles)(Animation);