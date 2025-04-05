import { useCallback } from 'react';
import { Container, Graphics } from 'pixi.js';
import { Application, extend } from '@pixi/react';

extend({
  Container,
  Graphics,
});

const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 600;
const MARGIN = 50;

const getRandomPosition = (min: number, max: number) => {
  return min + Math.random() * (max - min * 2);
};

const blackHolePosition = {
  x: getRandomPosition(MARGIN, SCREEN_WIDTH),
  y: getRandomPosition(MARGIN, SCREEN_HEIGHT),
};

const drawBlackHole = (graphics: Graphics) => {
  graphics.circle(0, 0, 30).fill(0x000000).stroke({
    color: 0xffa500,
    width: 2,
  });
};

export const App = () => {
  const drawCallback = useCallback(drawBlackHole, []);

  return (
    <>
      <h1>InterGrav</h1>

      <Application
        width={SCREEN_WIDTH}
        height={SCREEN_HEIGHT}
        backgroundColor={0x161616}
        antialias
      >
        <pixiContainer
          data-name="black-hole"
          x={blackHolePosition.x}
          y={blackHolePosition.y}
        >
          <pixiGraphics draw={drawCallback} />
        </pixiContainer>
      </Application>
    </>
  );
};
