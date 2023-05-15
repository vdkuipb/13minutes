import { Application, Assets, Sprite } from "pixi.js";

import Grid from "./grid/Grid";
import Vector2 from "./grid/Vector2";
import Tile from "./grid/Tile";

function initializeGrid() {
  const grid = new Grid();

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      grid.setTileAtPosition(new Vector2(x, y), Tile.from("images/grass.png"));
    }
  }

  return grid;
}

async function start() {
  const app = new Application({});
  document.body.appendChild(app.view as any);

  const grid = initializeGrid();

  const texture = await Assets.load("images/wth.png");

  const funny = new Sprite(texture);

  funny.x = app.renderer.width / 2;
  funny.y = app.renderer.height / 2;

  funny.anchor.x = 0.5;
  funny.anchor.y = 0.5;

  app.stage.addChild(funny);

  app.ticker.add(() => {
    funny.rotation += 0.01;
  });
}

start();
