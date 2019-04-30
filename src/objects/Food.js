class Food {
    constructor(scene) {
        this.scene = scene;
        this.food = this.scene.physics.add.group({
            key: 'food',
            setXY: {
                x: 30,
                y: 30
            }
        });
        this.food.getChildren()[0].setOrigin(0).setDepth(-1);
        setInterval(()=>{this.create()},2000);
    }

    create() {
        let x = Phaser.Math.Between(50,this.scene.sys.game.config.width -50);
        let y = Phaser.Math.Between(50,this.scene.sys.game.config.height -50);
        this.food.create(x,y,'food');
        this.food.getChildren()[0].setOrigin(0).setDepth(-1);
    }
}

export default Food;