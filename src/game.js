import Bootloader from './bootloader.js';
import Play from './scenes/play.js';
import UI from './scenes/UI.js';
import gameOver from './scenes/gameOver.js';
import Menu from './scenes/menu.js';

const config = {
    title: 'Puzzle',
    width: 1024,
    height: 768,
    type: Phaser.AUTO,
    parent: 'game',
    backgroundColor: '#f9ca24',
    pixelArt: true,
    physics: {
        default: 'arcade',
        // arcade: {
        //     gravity: {y: 200}
        // }
    },
    scene: [Bootloader, Menu, Play, UI, gameOver]
};
var game = new Phaser.Game(config);