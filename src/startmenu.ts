import * as PIXI from "pixi.js";
import { Game } from "./game";
import { Button } from "./button";

export class Startmenu {
  _pixi: PIXI.Application;
  private button: Button;
  
  constructor() {
    console.log("startmenu created");

    this._pixi = new PIXI.Application({
        width: 1920, 
        height: 1080,
        backgroundColor: 0x333333
    });

    document.body.appendChild(this._pixi.view)

    this.button = new Button(
      this._pixi.screen.width / 2,
      this._pixi.screen.height / 2
    );

    this._pixi.stage.addChild(this.button);

    this.button.on("pointerdown", () => this.onClick())
  }

  private onClick() {
    this.button.destroy();
    new Game(this._pixi);
    
  }
}

new Startmenu()