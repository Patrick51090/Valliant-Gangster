
class PreloadScene extends Phaser.Scene {
    constructor() {
        super({key: "PreloadScene"});
    }

    init() {

    }


    preload() {



        //Images
        this.load.image('img-bg-menu', ['assets/images/backgrounds/menu-bg.png', 'assets/images/backgrounds/menu-bg.png']);



        this.load.image('img-btn1-none', 'assets/images/btn1-none.png');
        this.load.image('img-btn1-hover', 'assets/images/btn1-hover.png');
        this.load.image('img-btn2-none', 'assets/images/btn2-none.png');
        this.load.image('img-btn2-hover', 'assets/images/btn2-hover.png');

        this.load.image('img-icons-author', 'assets/images/icons/author.png');

        this.load.spritesheet('img-player', 'assets/images/player.png', { frameWidth: 24, frameHeight: 32 });

        this.load.image('img-text-field-large-none', 'assets/images/text-field-large-none.png');
        this.load.image('img-text-field-large-active', 'assets/images/text-field-large-active.png');

        this.load.image('img-ground_tiles', 'assets/images/ground_tiles.png');






        //Audio
        this.load.audio('sfx-click-action-00', 'assets/audio/sfx/click-action-00.mp3');
		this.load.audio('sfx-click-action-01', 'assets/audio/sfx/click-action-01.mp3');
		this.load.audio('sfx-click-action-02', 'assets/audio/sfx/click-action-02.mp3');

		this.load.audio('sfx-fs-grass', 'assets/audio/sfx/footsteps/leaves01.ogg');
		this.load.audio('sfx-fs-stone', 'assets/audio/sfx/footsteps/wood01.ogg');
		this.load.audio('sfx-fs-wood', 'assets/audio/sfx/footsteps/wood01.ogg');
		this.load.audio('sfx-fs-sand', 'assets/audio/sfx/footsteps/mud02.ogg');

		this.load.audio('sfx-explosion', 'assets/audio/sfx/explosion.wav');


        this.load.audio('track-loop1', 'assets/audio/music/loop1.ogg');
        this.load.audio('track-loop2', 'assets/audio/music/loop2.mp3');







        //Scripts
        this.load.script('js-animations', 'assets/scripts/Animations.js');
        this.load.script('js-player-movement', 'assets/scripts/PlayerMovement.js');
        this.load.script('js-footstep-audio', 'assets/scripts/FootstepAudio.js');
        this.load.script('js-bag', 'assets/scripts/Bag.js');






        //Fonts (.png & .fnt)
		this.load.bitmapFont('fnt-pixel', 'assets/fonts/font.png', 'assets/fonts/font.fnt');
        this.load.bitmapFont('fnt-title', 'assets/fonts/title.png', 'assets/fonts/title.fnt');
        this.load.bitmapFont('fnt-bold', 'assets/fonts/bold.png', 'assets/fonts/bold.fnt');




        //Data
        this.load.json('json-game-data', 'assets/data/GameData.json');
        this.load.json('json-items', 'assets/data/Items.json');

        this.load.tilemapTiledJSON('maps-main-world', 'assets/data/maps/main_world.json');

    }


    create() {

        GameData = this.cache.json.get('json-game-data');

        if (gameConfig.physics.arcade.debug) {
            this.scene.start('MainWorld');
        }else {
            this.scene.start('MenuScene');
        }
    }
}
