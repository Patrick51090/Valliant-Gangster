
class PlayerMovement {
    constructor(scene) {
        this.scene = scene;

        this.controls = {
            up: this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
            down: this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
            left: this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            right: this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        };
    }

    update() {
        this.scene.player.body.setVelocity(0);

        if (this.controls.up.isDown || this.controls.down.isDown || this.controls.left.isDown || this.controls.right.isDown) {
            if (this.scene.player.config.footstep_time >= this.scene.player.config.footstep_delay) {
                this.scene.player.config.footstep = true;
            }else {
                this.scene.player.config.footstep_time += 1;
            }
        }


        if (this.controls.up.isDown && this.controls.down.isUp && this.controls.left.isDown && this.controls.right.isUp) {
            this.scene.player.anims.play('player.walk.left', true);
            this.scene.player.body.y -= 1;
            this.scene.player.body.x -= 1;
        }

        if (this.controls.up.isDown && this.controls.down.isUp && this.controls.left.isUp && this.controls.right.isDown) {
            this.scene.player.anims.play('player.walk.right', true);
            this.scene.player.body.y -= 1;
            this.scene.player.body.x += 1;
        }

        if (this.controls.up.isUp && this.controls.down.isDown && this.controls.left.isDown && this.controls.right.isUp) {
            this.scene.player.anims.play('player.walk.left', true);
            this.scene.player.body.x -= 1;
            this.scene.player.body.y += 1;
        }

        if (this.controls.up.isUp && this.controls.down.isDown && this.controls.left.isUp && this.controls.right.isDown) {
            this.scene.player.anims.play('player.walk.right', true);
            this.scene.player.body.x += 1;
            this.scene.player.body.y += 1;
        }

        if (this.controls.up.isDown && this.controls.down.isUp && this.controls.left.isUp && this.controls.right.isUp) {
            this.scene.player.anims.play('player.walk.up', true);
            this.scene.player.body.y -= 2;
        }

        if (this.controls.up.isUp && this.controls.down.isDown && this.controls.left.isUp && this.controls.right.isUp) {
            this.scene.player.anims.play('player.walk.down', true);
            this.scene.player.body.y += 2;
        }

        if (this.controls.up.isUp && this.controls.down.isUp && this.controls.left.isDown && this.controls.right.isUp) {
            this.scene.player.anims.play('player.walk.left', true);
            this.scene.player.body.x -= 2;
        }

        if (this.controls.up.isUp && this.controls.down.isUp && this.controls.left.isUp && this.controls.right.isDown) {
            this.scene.player.anims.play('player.walk.right', true);
            this.scene.player.body.x += 2;
        }



        if (this.controls.up.isUp && this.controls.down.isUp && this.controls.left.isUp && this.controls.right.isUp) {
            this.scene.player.anims.stop();
        }
    }

}
