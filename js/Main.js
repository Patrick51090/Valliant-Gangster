


//Where all the game's data is stored
var GameData = {};


//Configures the game when created
var gameConfig = {
	type: Phaser.WEBGL,
	title: "Valiant Wizard",
	version: '0.0.1',
	parent: 'game-area',
	transparent: false,
	pixelArt: true,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			debug: false
		}
	},
	scene: [
		PreloadScene,
		MenuScene,
		IntroScene,
        MainWorldScene
	]
};


//Creates the game
var game = new Phaser.Game(gameConfig);
