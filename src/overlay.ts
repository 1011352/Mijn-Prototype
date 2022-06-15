import * as PIXI from "pixi.js";

export class Overlay extends PIXI.Graphics{
    
    constructor(){
        super()



        this.drawRoundedRect(0, 0, 400, 200, 15);

        const questionText = new PIXI.Text(" ", {
            breakWords: true,
            dropShadow: true,
            fill: "white",
            fontFamily: "Arial Black",
            fontWeight: "bold",
            strokeThickness: 3
          });
    }
}