class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }

    preload(){
        console.log('Preloading Assets');
        this.load.image('body',baseUrl+'assets/images/body.png');
        this.load.image('food',baseUrl+'assets/images/food.png');
        this.load.image('scoreboard',baseUrl+'assets/images/scoreboard.png');
    }
    
    create(){
        this.scene.start('Play');
    }
}

export default Bootloader;