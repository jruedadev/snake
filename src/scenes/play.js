import Snake from '../objects/Snake.js';

class Play extends Phaser.Scene {
    constructor() {
        super('Play');
    }
    
    preload(){
        console.log('Started Play Scene');
        this.snake = new Snake(this);
    }

    create(){
        this.input.keyboard.on('keydown_UP',()=>this.snake.changeDirection('up'));
        this.input.keyboard.on('keydown_DOWN',()=>this.snake.changeDirection('down'));
        this.input.keyboard.on('keydown_LEFT',()=>this.snake.changeDirection('left'));
        this.input.keyboard.on('keydown_RIGHT',()=>this.snake.changeDirection('right'));
    }

    update(time){
        this.snake.update(time);
    }

    centerX ()
    {
        return this.sys.game.config.width / 2;
    }
    centerY ()
    {
        return this.sys.game.config.height / 2;
    }
}

export default Play;