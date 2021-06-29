import { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const Scene = () => {
  const scene = useRef(null);

  useEffect(() => {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      // MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      World = Matter.World,
      Bodies = Matter.Bodies;

    var engine = Engine.create(),
      world = engine.world;

    // create renderer
    var render = Render.create({
      element: scene.current,
      engine: engine,
      options: {
        width: 600,
        height: 600,
        wireframes: false,
        background: 'rgba(0,0,0,0)',
      },
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    var rest = 0.5,
      space = 600 / 5,
      friction = 0.03;

    World.add(world, [
      Bodies.circle(space * 2.5, 0, 25, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/coin.svg',
            xScale: 0.35,
            yScale: 0.35,
          },
        },
      }),
      Bodies.circle(space * 2.5, -1000, 25, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/coin.svg',
            xScale: 0.35,
            yScale: 0.35,
          },
        },
      }),
      Bodies.circle(space * 2.5, -2000, 25, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/coin.svg',
            xScale: 0.35,
            yScale: 0.35,
          },
        },
      }),
      Bodies.circle(space * 2.5, -3000, 25, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/coin.svg',
            xScale: 0.35,
            yScale: 0.35,
          },
        },
      }),
      Bodies.circle(space * 2.5, -4000, 25, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/coin.svg',
            xScale: 0.35,
            yScale: 0.35,
          },
        },
      }),
      Bodies.circle(space * 2.5, -5000, 25, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/coin.svg',
            xScale: 0.35,
            yScale: 0.35,
          },
        },
      }),
      Bodies.circle(space * 2.5, -6000, 25, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/coin.svg',
            xScale: 0.35,
            yScale: 0.35,
          },
        },
      }),
      Bodies.circle(space * 2.5, -7000, 25, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/coin.svg',
            xScale: 0.35,
            yScale: 0.35,
          },
        },
      }),
      Bodies.circle(space * 2.5, -8000, 25, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/coin.svg',
            xScale: 0.35,
            yScale: 0.35,
          },
        },
      }),
      Bodies.circle(space * 2.5, -9000, 25, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/coin.svg',
            xScale: 0.35,
            yScale: 0.35,
          },
        },
      }),
      Bodies.circle(space * 2.5, -10000, 25, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/coin.svg',
            xScale: 0.35,
            yScale: 0.35,
          },
        },
      }),
      Bodies.circle(space * 2.5, -11000, 25, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/coin.svg',
            xScale: 0.35,
            yScale: 0.35,
          },
        },
      }),
      Bodies.circle(space * 2.5, -12000, 25, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/coin.svg',
            xScale: 0.35,
            yScale: 0.35,
          },
        },
      }),
      Bodies.circle(space * 2.5, -13000, 25, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/coin.svg',
            xScale: 0.35,
            yScale: 0.35,
          },
        },
      }),
      Bodies.circle(space * 2.5, -14000, 25, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/coin.svg',
            xScale: 0.35,
            yScale: 0.35,
          },
        },
      }),
      Bodies.circle(space * 2.5, -15000, 25, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/coin.svg',
            xScale: 0.35,
            yScale: 0.35,
          },
        },
      }),
      Bodies.circle(space * 2.5, -16000, 25, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/coin.svg',
            xScale: 0.35,
            yScale: 0.35,
          },
        },
      }),
      Bodies.circle(space * 2.5, -17000, 25, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/coin.svg',
            xScale: 0.35,
            yScale: 0.35,
          },
        },
      }),
      Bodies.circle(space * 2.5, -18000, 25, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/coin.svg',
            xScale: 0.35,
            yScale: 0.35,
          },
        },
      }),
      Bodies.circle(space * 2.5, -19000, 25, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/coin.svg',
            xScale: 0.35,
            yScale: 0.35,
          },
        },
      }),
      Bodies.circle(space * 2.5, -20000, 25, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/coin.svg',
            xScale: 0.35,
            yScale: 0.35,
          },
        },
      }),
      Bodies.circle(space * 2.5, -21000, 25, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/coin.svg',
            xScale: 0.35,
            yScale: 0.35,
          },
        },
      }),
      Bodies.circle(space * 2.5, -22000, 25, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/coin.svg',
            xScale: 0.35,
            yScale: 0.35,
          },
        },
      }),
      Bodies.circle(space * 2.5, -23000, 25, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/coin.svg',
            xScale: 0.35,
            yScale: 0.35,
          },
        },
      }),
      Bodies.circle(space * 2.5, -24000, 25, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/coin.svg',
            xScale: 0.35,
            yScale: 0.35,
          },
        },
      }),
      Bodies.circle(space * 2.5, -25000, 25, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/coin.svg',
            xScale: 0.35,
            yScale: 0.35,
          },
        },
      }),
      Bodies.circle(space * 2.5, -26000, 25, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/coin.svg',
            xScale: 0.35,
            yScale: 0.35,
          },
        },
      }),
      Bodies.circle(space * 2.5, -27000, 25, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/coin.svg',
            xScale: 0.35,
            yScale: 0.35,
          },
        },
      }),
      Bodies.circle(space * 2.5, -28000, 25, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/coin.svg',
            xScale: 0.35,
            yScale: 0.35,
          },
        },
      }),
      Bodies.circle(space * 2.5, -29000, 25, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/coin.svg',
            xScale: 0.35,
            yScale: 0.35,
          },
        },
      }),
      Bodies.circle(space * 2.5, -30000, 25, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/coin.svg',
            xScale: 0.35,
            yScale: 0.35,
          },
        },
      }),
      // walls
      // top wall
      // Bodies.rectangle(300, 0, 600, 50, {
      //   isStatic: true,
      //   render: { fillStyle: 'none', strokeStyle: 'none', opacity: '0.3' },
      // }),
      // bottom wall
      Bodies.rectangle(300, 600, 600, 50, {
        isStatic: true,
        render: { fillStyle: 'none', strokeStyle: 'none', opacity: '0' },
      }),
      // right wall
      Bodies.rectangle(600, 300, 50, 600, {
        isStatic: true,
        render: { fillStyle: 'none', strokeStyle: 'none', opacity: '0' },
      }),
      // left wall
      Bodies.rectangle(0, 300, 50, 600, {
        isStatic: true,
        render: { fillStyle: 'none', strokeStyle: 'none', opacity: '0' },
      }),
      Bodies.rectangle(410, 500, 30, 190, {
        isStatic: true,
        render: { fillStyle: 'none', strokeStyle: 'none', opacity: '0' },
      }),
      Bodies.rectangle(190, 500, 30, 190, {
        isStatic: true,
        render: { fillStyle: 'none', strokeStyle: 'none', opacity: '0' },
      }),
    ]);

    // add mouse control
    // var mouse = Mouse.create(render.canvas),
    //   mouseConstraint = MouseConstraint.create(engine, {
    //     mouse: mouse,
    //     constraint: {
    //       stiffness: 0.2,
    //       render: {
    //         visible: false,
    //       },
    //     },
    //   });

    // World.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    // render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: 600, y: 600 },
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

  return (
    <div
      style={{ position: 'absolute', transform: 'translate(0, -80px)' }}
      ref={scene}
    ></div>
  );
};

export default Scene;
