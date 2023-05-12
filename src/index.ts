import { Application, Assets, Sprite } from "pixi.js";

async function start() {
  const app = new Application({});
  document.body.appendChild(app.view as any);

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
