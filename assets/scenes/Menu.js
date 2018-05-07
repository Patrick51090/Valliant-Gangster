
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
        this.title.bg = this.add.sprite(400, 300, 'img-bg-city01').setOrigin(0.5);
        this.title.bg.setPipeline('Light2D');


        this.title.label = this.add.bitmapText(400, 100, 'fnt-pixel', "Valiant Gangster", 56).setOrigin(0.5);







        this.title_light = this.lights.addLight(300, 600, 500).setIntensity(2);;
        this.lights.enable().setAmbientColor(0x555555);






        //Play Btn
        this.btn1 = this.add.sprite(400, 450, 'img-btn1-none').setOrigin(0.5).setInteractive();
        this.btn1.label = this.add.bitmapText(400, 445, "fnt-pixel", "Play Game", 24).setOrigin(0.5);



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
        this.btn2 = this.add.sprite(400, 550, 'img-btn2-none').setOrigin(0.5).setInteractive();
        this.btn2.label = this.add.bitmapText(400, 545, "fnt-pixel", "Load Game", 24).setOrigin(0.5);




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






        this.name_label = this.add.bitmapText(200, 200, "fnt-pixel", "Enter your name:", 16);

        this.name_field = new TextField(400, 300, 300, 150, ["img-text-field-large-none", 'img-text-field-large-active'], this);







    }



    update() {
        this.name_field.update();
    }
}
