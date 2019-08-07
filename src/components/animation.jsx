import Matter from 'matter-js'
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
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
            <canvas className={ classes.canvas +' '+ canvasSelector} ></canvas>
        );
    }

    initialize(width, height) {
        const { canvasSelector } = this.props;

        var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composites = Matter.Composites,
        Common = Matter.Common,
        World = Matter.World,
        Bodies = Matter.Bodies,
        Events = Matter.Events;

        // create engine
        var engine = Engine.create(),
            world = engine.world;

        // create renderer
        var render = Render.create({
            canvas: document.querySelector(`.${canvasSelector}`),
            engine: engine,
            options: {
                width: width,
                height: height,
                showVelocity: true,
                showAngleIndicator: true
            }
        });

        Render.run(render);

        // create runner
        var runner = Runner.create();
        Runner.run(runner, engine);

        // add screen borders
        World.add(world, [
            Bodies.rectangle(width/ 2, -50, 1000, 50, { isStatic: true }),
            Bodies.rectangle(width / 2, height + 50, 900, 50.5, { isStatic: true }),
            Bodies.rectangle(width + 50, 300, 50, 600, { isStatic: true }),
            Bodies.rectangle(- 50, 300, 50, 600, { isStatic: true })
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

        var stack = Composites.stack(10, 40, 5, 3, 0, 0, function(x, y) {
            switch (Math.round(Common.random(0, 1))) {

            case 0:
                if (Common.random() < 0.8) {
                    return Bodies.rectangle(x, y, Common.random(20, 50), Common.random(20, 50));
                } else {
                    return Bodies.rectangle(x, y, Common.random(80, 120), Common.random(20, 30));
                }
            case 1:
                return Bodies.polygon(x, y, Math.round(Common.random(1, 8)), Common.random(20, 50));

            }
        });
        
        World.add(world, stack);
        
        Events.on(runner, "afterTick", () => {
            // world.composites[0].bodies[0].position.x
            
        });

        // fit the render viewport to the scene
        Render.lookAt(render, {
            min: { x: 0, y: 0 },
            max: { x: width, y: height }
        });

    }
}

export default withStyles(styles)(Animation);