

class Ghost extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'img-entity-ghost01', 0);

        this.scene = scene;

        this.config = scene.cache.json.get('json-entities').ghost;


        this.setVisible(false);
        this.setActive(false);
    }

    update() {
        this.setDepth(3);

        if (!this.config.ableToMove) {
            this.setPosition(this.x, this.y);
        }
    }

    generate() {

        this.setPosition(Phaser.Math.RND.integerInRange(0, 480), Phaser.Math.RND.integerInRange(480, 1184));

        this.point = {
            x: Phaser.Math.RND.integerInRange(0, 480),
            y: Phaser.Math.RND.integerInRange(480, 1184)
        };

        this.tween1 = this.scene.tweens.add({
            targets: this,
            x: this.point.x,
            y: this.point.y,
            repeat: -1,
            duration: 15000,
            yoyo: true,
            onComplete: function() {
                this.currentPoint += 1;
            }
        });

        this.setVisible(true);
        this.setActive(true);
    }
}
