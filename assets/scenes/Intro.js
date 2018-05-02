

class IntroScene extends Phaser.Scene {
    constructor() {
        super({key: "IntroScene"});
    }


    init() {

    }


    create() {

        this.author_icon = this.add.sprite(200, 250, 'img-icons-author').setOrigin(0.5);
        this.author_label = this.add.bitmapText(500, 250, 'fnt-pixel', "by Patrick Studios Pro", 32).setOrigin(0.5);


        this.time.delayedCall(2000, function() {
            this.cameras.main.fadeOut(500);
        }, [], this);

        this.cameras.main.once('camerafadeoutcomplete', function(camera) {
            this.scene.start("MainWorld");
        }, this);

    }


    update() {

    }
}
