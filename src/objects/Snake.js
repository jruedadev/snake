class Snake {
    constructor(scene) {

        this.scene = scene;
        this.body = [];
        this.dir = 'left';
        this.oldDir = 'right';
        this.timmer = 0;
        this.size = 10;
        this.width = 10;
        this.height = 10;

        for (let i = 0; i < this.size; i++) {
            // Create Body Element
            this.body.push(this.scene.physics.add.image(this.scene.centerX() + (i * this.width), this.scene.centerY(), 'body').setOrigin(0));
            if (i >= 1) {
                // Create Collision
                this.scene.physics.add.collider(this.body[0], this.body[i], () => this.collision('body'));
            }
        }

        setInterval(() => { this.grow() }, 1000);
    }

    changeDirection(dir) {
        if (this.oldDir !== dir) {
            this.dir = dir;
        }
    }

    grow() {
        const obj = this.body[this.size - 1];
        let x = this.width+obj.x; let y = this.height;
        /* 
        if (this.dir === 'left' || this.dir === 'right') {
            x = obj.x + this.width;
            y = obj.y
        }
        else{
            x = obj.x;
            y = obj.y + this.height;
        }
        */
        const newObj = this.scene.physics.add.image(x, y, 'body').setOrigin(0);
        this.scene.physics.add.collider(this.body[0], newObj, () => this.collision('body'));
        this.body.push(newObj);
        this.size += 1;
    }

    collision(type) {
        if (type === 'body') {
            this.scene.scene.start('gameOver');
        }
    }

    update(time) {
        if (time > this.timmer) {
            for (let i = this.size - 1; i > 0; i--) {

                var posX = this.body[this.size - 1 - i].x;
                var posY = this.body[this.size - 1 - i].y;
                this.body[this.size - 1 - i].x = Phaser.Math.Wrap(posX, 0, this.scene.sys.game.config.width);
                this.body[this.size - 1 - i].y = Phaser.Math.Wrap(posY, 50, this.scene.sys.game.config.height);

                // Set Each Body Pos From Head 
                this.body[i].x = this.body[i - 1].x;
                this.body[i].y = this.body[i - 1].y;
            }
            switch (this.dir) {
                case 'left':
                    this.oldDir = 'right';
                    this.body[0].x -= this.width;
                    break;

                case 'right':
                    this.oldDir = 'left';
                    this.body[0].x += this.width;
                    break;

                case 'up':
                    this.oldDir = 'down';
                    this.body[0].y -= this.width;
                    break;

                case 'down':
                    this.oldDir = 'up';
                    this.body[0].y += this.width;
                    break;
            }
            this.timmer = time + 150;
        }
    }
}
export default Snake