import * as PIXI from 'pixi.js'
import { Game } from './game'
import { Plus } from './plus'

export class Min extends PIXI.Sprite {
    game : Game
    plus: Plus
    min : Min
    private yspeed: number
    constructor(texture: PIXI.Texture, game:Game) {
        super(texture)
        this.game = game
        this.yspeed = 2
        

        this.width = 150
        this.height = 150
        this.x = (Math.random() * game.pixi.screen.right)
        this.y = (Math.random() * game.pixi.screen.bottom)
    }


}

