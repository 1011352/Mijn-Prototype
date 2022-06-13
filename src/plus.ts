import * as PIXI from 'pixi.js'
import { Game } from './game'

export class Plus extends PIXI.Sprite {
    private yspeed: number = 0
    private xspeed: number = 0
    game: Game


    constructor(texture: PIXI.Texture, game: Game) {
        super(texture)
        this.game = game
        

        this.x = 0
        this.y = 0


        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }









    onKeyDown(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case " ":

                break


            case "A":
            case "ARROWLEFT":
                this.xspeed = -4
                this.scale.set(-1, 1)
                break
            case "D":
            case "ARROWRIGHT":
                this.xspeed = 4
                this.scale.set(1, 1)
                break
            case "W":
            case "ARROWUP":
                this.yspeed = -4
                break
            case "S":
            case "ARROWDOWN":
                this.yspeed = 4
                break
        }



    }


    private onKeyUp(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case " ":
                break;
            case "A":
            case "D":
            case "ARROWLEFT":
            case "ARROWRIGHT":
                this.xspeed = 0
                break
            case "W":
            case "S":
            case "ARROWUP":
            case "ARROWDOWN":
                this.yspeed = 0
                break
        }
    }

    keepInScreen() {
        if (this.getBounds().left > this.game.pixi.screen.right) {

            this.x = -this.getBounds().width

        }

        if (this.getBounds().top > this.game.pixi.screen.bottom) {

            this.y = -this.getBounds().height

        }

        if (this.getBounds().bottom < this.game.pixi.screen.top) {

            this.y = this.getBounds().height + 360

        }
        if (this.getBounds().right < this.game.pixi.screen.left) {

            this.x = this.getBounds().width +1000

        }

    }


    update(delta: number) {
        this.x += this.xspeed * delta
        this.y += this.yspeed * delta

        this.keepInScreen()



    }

}


