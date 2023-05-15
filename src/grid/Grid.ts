import Tile from "./Tile";
import Vector2 from "./Vector2";

export default class Grid {
  private tileMap: Map<string, Tile>;

  constructor() {
    this.tileMap = new Map<string, Tile>();
  }

  getTileAtPosition(v2: Vector2): Tile | null {
    const key = v2.toString();

    if (!this.tileMap.has(key)) {
      return this.tileMap.get(key) as Tile;
    }

    return null;
  }

  setTileAtPosition(v2: Vector2, tile: Tile) {
    this.tileMap.set(v2.toString(), tile);
  }
}
