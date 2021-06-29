import { useRef, useEffect } from 'react';
import Matter from 'matter-js';

const Timescale = () => {
  const scene = useRef(null);

  useEffect(() => {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Body = Matter.Body,
      Events = Matter.Events,
      Composite = Matter.Composite,
      Composites = Matter.Composites,
      Common = Matter.Common,
      World = Matter.World,
      Bodies = Matter.Bodies;

    // create engine
    var engine = Engine.create(),
      world = engine.world;

    // create renderer
    var render = Render.create({
      element: scene.current,
      engine: engine,
      options: {
        width: 500,
        height: 250,
        wireframes: false,
        background: 'rgba(0,0,0,0)',
      },
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    World.add(world, [
      Bodies.rectangle(250, 0, 500, 1, {
        isStatic: true,
        render: { fillStyle: 'blue', strokeStyle: 'none', opacity: '0' },
      }),
      Bodies.rectangle(250, 250, 500, 1, {
        isStatic: true,
        render: { fillStyle: 'blue', strokeStyle: 'none', opacity: '0' },
      }),
      Bodies.rectangle(500, 125, 1, 250, {
        isStatic: true,
        render: { fillStyle: 'blue', strokeStyle: 'none', opacity: '0' },
      }),
      Bodies.rectangle(0, 125, 1, 250, {
        isStatic: true,
        render: { fillStyle: 'blue', strokeStyle: 'none', opacity: '0' },
      }),
    ]);

    var explosion = function (engine) {
      var bodies = Composite.allBodies(engine.world);

      for (var i = 0; i < bodies.length; i++) {
        var body = bodies[i];

        if (!body.isStatic && body.position.y >= 125) {
          var forceMagnitude = 0.02 * body.mass;

          Body.applyForce(body, body.position, {
            x:
              (forceMagnitude + Common.random() * forceMagnitude) *
              Common.choose([1, -1]),
            y: -forceMagnitude + Common.random() * -forceMagnitude,
          });
        }
      }
    };

    var timeScaleTarget = 1,
      counter = 0;

    Events.on(engine, 'afterUpdate', function (event) {
      // tween the timescale for bullet time slow-mo
      engine.timing.timeScale +=
        (timeScaleTarget - engine.timing.timeScale) * 0.05;

      counter += 1;

      // every 1.5 sec
      if (counter >= 60 * 5.5) {
        // flip the timescale
        if (timeScaleTarget < 1) {
          timeScaleTarget = 1;
        } else {
          timeScaleTarget = 0.05;
        }

        // create some random forces
        explosion(engine);

        // reset counter
        counter = 0;
      }
    });

    var bodyOptions = {
      frictionAir: 0,
      friction: 0.0001,
      restitution: 0.7,
      render: {
        fillStyle: '#f43f70',
      },
      // render: {
      //   sprite: {
      //     texture: '/coin.svg',
      //     xScale: 0.35,
      //     yScale: 0.35,
      //   },
      // },
    };

    // add some small bouncy circles... remember Swordfish?
    World.add(
      world,
      Composites.stack(20, 20, 7, 1, 17, 40, function (x, y) {
        return Bodies.circle(x, y, 25, bodyOptions);
      })
    );

    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: 500, y: 250 },
    });

    // context for MatterTools.Demo
    return {
      engine: engine,
      runner: runner,
      render: render,
      canvas: render.canvas,
      stop: function () {
        Matter.Render.stop(render);
        Matter.Runner.stop(runner);
      },
    };
  }, []);

  return <div ref={scene}></div>;
};

export default Timescale;
