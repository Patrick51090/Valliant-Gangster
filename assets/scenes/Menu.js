
class MenuScene extends Phaser.Scene {
    constructor() {
        super({key: "MenuScene"});
    }


    init() {

    }



    create() {

        this.bg_music = this.sound.add('track-loop1', {loop: true});
		this.bg_music.volume = 0.2;
		this.bg_music.play();


        this.title = {};
        this.title.bg = this.add.sprite(400, 300, 'img-bg-menu').setOrigin(0.5);


        this.title.label = this.add.bitmapText(400, 100, 'fnt-title', "Valiant Wizard", 72).setOrigin(0.5);
        this.title.label.tint = 0x000000;






        //Play Btn
        this.btn1 = this.add.sprite(400, 450, 'img-btn1-none').setOrigin(0.5).setInteractive();
        this.btn1.label = this.add.bitmapText(400, 445, "fnt-bold", "Play Game", 26).setOrigin(0.5);



        //Events
        this.btn1.on('pointerover', function() {
            this.btn1.setTexture('img-btn1-hover');
        }, this);

        this.btn1.on('pointerout', function() {
            this.btn1.setTexture('img-btn1-none');
        }, this);

        this.btn1.on('pointerdown', function() {
            this.btn1.setTexture('img-btn1-hover');

            let btn_click_snd = this.sound.add('sfx-click-action-00');
			btn_click_snd.volume = 1;
			btn_click_snd.play();

			let tween1 = this.tweens.add({
				targets: this.bg_music,
				volume: 0,
				duration: 750,
				ease: "Power1",
				onComplete: function() {
					this.bg_music.stop();
					this.scene.start('IntroScene');
				}.bind(this)
			}, this);
        }, this);






        //Load Game
        //Play Btn
        this.btn2 = this.add.sprite(400, 530, 'img-btn2-none').setOrigin(0.5).setVisible(false);
        this.btn2.label = this.add.bitmapText(400, 525, "fnt-bold", "Load Game", 26).setOrigin(0.5).setVisible(false);




        //Events
        this.btn2.on('pointerover', function() {
            this.btn2.setTexture('img-btn2-hover');
        }, this);

        this.btn2.on('pointerout', function() {
            this.btn2.setTexture('img-btn2-none');
        }, this);

        this.btn2.on('pointerdown', function() {
            this.btn2.setTexture('img-btn2-hover');

            let btn_click_snd = this.sound.add('sfx-click-action-00');
			btn_click_snd.volume = 1;
			btn_click_snd.play();

			let tween1 = this.tweens.add({
				targets: this.bg_music,
				volume: 0,
				duration: 750,
				ease: "Power1",
				onComplete: function() {
					this.bg_music.stop();
					//Open the Load Character Menu
				}.bind(this)
			}, this);
        }, this);













    }



    update() {
    }
}
