
class PreloadScene extends Phaser.Scene {
    constructor() {
        super({key: "PreloadScene"});
    }

    init() {

    }


    preload() {



        //Images
        this.load.image('img-btn1-none', 'assets/images/btn1-none.png');
        this.load.image('img-btn1-hover', 'assets/images/btn1-hover.png');
        this.load.image('img-btn2-none', 'assets/images/btn2-none.png');
        this.load.image('img-btn2-hover', 'assets/images/btn2-hover.png');

        this.load.image('img-icons-author', 'assets/images/icons/author.png');

        this.load.image('img-text-field-large-none', 'assets/images/text-field-large-none.png');
        this.load.image('img-text-field-large-active', 'assets/images/text-field-large-active.png');






        //Audio
        this.load.audio('sfx-click-action-00', 'assets/audio/sfx/click-action-00.mp3');
		this.load.audio('sfx-click-action-01', 'assets/audio/sfx/click-action-01.mp3');
		this.load.audio('sfx-click-action-02', 'assets/audio/sfx/click-action-02.mp3');

		this.load.audio('sfx-footstep-grass', 'assets/audio/sfx/footsteps/leaves01.ogg');
		this.load.audio('sfx-footstep-stone', 'assets/audio/sfx/footsteps/wood01.ogg');
		this.load.audio('sfx-footstep-wood', 'assets/audio/sfx/footsteps/wood01.ogg');
		this.load.audio('sfx-footstep-sand', 'assets/audio/sfx/footsteps/mud02.ogg');

		this.load.audio('sfx-explosion', 'assets/audio/sfx/explosion.wav');


        this.load.audio('track-loop1', 'assets/audio/music/loop1.ogg');







        //Fonts (.png & .fnt)
		this.load.bitmapFont('fnt-pixel', 'assets/fonts/font.png', 'assets/fonts/font.fnt');


    }


    create() {
        this.scene.start('MenuScene');
    }
}