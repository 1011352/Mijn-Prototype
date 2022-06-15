import * as PIXI from 'pixi.js'
import heroPlus from "./images/plus.png"
import cityImage from "./images/city.jpg"
import minImage from "./images/min.png"
import city2Image from "./images/city2.jpg"
import city3Image from "./images/city3.jpg"
import { Plus } from './plus'
import { Min } from './min'
import { Background } from './background'
import { PauseButton } from './pause'



export class Game {
    pixi: PIXI.Application
    loader: PIXI.Loader
    bg: Background
    plus: Plus
    min: Min
    mins: Min[] = []
    text: PIXI.Text
    button: PauseButton
    isDone: Boolean = false
    paused: boolean = false

    constructor(pixi: PIXI.Application) {
        this.pixi = new PIXI.Application({ width: 1000, height: 546 })
        document.body.appendChild(this.pixi.view)
        this.loader = new PIXI.Loader()

        this.pixi.loader.add('plusTexture', heroPlus)
            .add('cityTexture', cityImage)
            .add('minTexture', minImage)
            .add('city2Texture', city2Image)
            .add('city3Texture', city3Image)




        this.pixi.loader.load(() => this.loadCompleted())

    }


    loadCompleted() {

        this.bg = new Background(this.pixi.loader.resources["city2Texture"].texture!, this.pixi.screen.width, this.pixi.screen.height)
        this.pixi.stage.addChild(this.bg)


        for (let i = 0; i < 1; i++) {
            this.min = new Min(this.pixi.loader.resources["minTexture"].texture!, this)
            this.pixi.stage.addChild(this.min)
            this.mins.push(this.min)
        }

        this.plus = new Plus(this.pixi.loader.resources["plusTexture"].texture!, this)
        this.pixi.stage.addChild(this.plus)

        this.button = new PauseButton(
            this.pixi.screen.width / 9,
            this.pixi.screen.height / 9
        );

        this.pixi.stage.addChild(this.button);

        this.button.on("pointerdown", () => this.onClick());


        this.pixi.ticker.add((delta: number) => this.update(delta))


    }

    onClick() {
        if (!this.paused) {
            this.pixi.ticker.stop()
        }
        else {
            this.pixi.ticker.start()
        }

    }

    public collision(a, b) {
        const bounds1 = a.getBounds()
        const bounds2 = b.getBounds()

        return bounds1.x < bounds2.x + bounds2.width
            && bounds1.x + bounds1.width > bounds2.x
            && bounds1.y < bounds2.y + bounds2.height
            && bounds1.y + bounds1.height > bounds2.y;
    }

    randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;

    }

    mathQues() {
        let a = this.randomInteger(4, 9)
        let b = this.randomInteger(1, 4)
        let c = a - b

        this.text = new PIXI.Text("sample", { fill: ["#ffffff"] })

        this.text.x = 200
        this.text.y = 200
        this.pixi.stage.addChild(this.text)

        console.log("wat is", a, "-", b)
        console.log("het antword is", c)

        this.text.text = "wat is", a, "-", b
    }




    update(delta: number) {
        this.bg.update(delta)


        this.plus.update(delta)
        for (const min of this.mins) {

            if (this.collision(this.plus, min)) {

                if (!this.isDone) {

                    this.mathQues()

                    this.isDone = true;
                }

            } else {
                this.pixi.stage.removeChild(this.text)

                this.isDone = false

            }
        }
    }
}
