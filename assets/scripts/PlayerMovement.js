
class PlayerMovement {
    constructor(scene, player) {
        this.scene = scene;

        this.player = player;

        this.controls = {
            up: this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
            down: this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
            left: this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            right: this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        };
    }

    update() {
        this.player.body.setVelocity(0);

        if (this.controls.up.isDown) {
            this.player.anims.play('player.walk.up', true);
            this.player.body.velocity.y = -100;
        }else if (this.controls.down.isDown) {
            this.player.anims.play('player.walk.down', true);
            this.player.body.velocity.y = 100;
        }else if (this.controls.left.isDown) {
            this.player.anims.play('player.walk.left', true);
            this.player.body.velocity.x = -100;
        }else if (this.controls.right.isDown) {
            this.player.anims.play('player.walk.right', true);
            this.player.body.velocity.x = 100;
        }


        if (this.controls.up.isUp && this.controls.down.isUp && this.controls.left.isUp && this.controls.right.isUp) {
            this.player.anims.stop();
        }
    }

}
