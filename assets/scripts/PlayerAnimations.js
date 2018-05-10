
class PlayerAnimations {
    constructor(scene) {
        this.scene = scene;

        this.config1 = this.scene.anims.create({
            key: 'player.walk.down',
            frames: this.scene.anims.generateFrameNumbers('img-player', { frames: [0, 1, 2, 3, 4, 5, 6, 7] }),
            frameRate: 10,
            repeat: -1
        });
        this.anims2 = this.scene.anims.create({
            key: 'player.walk.up',
            frames: this.scene.anims.generateFrameNumbers('img-player', { frames: [8, 9, 10, 11, 12, 13, 14, 15] }),
            frameRate: 10,
            repeat: -1
        });
        this.anims3 = this.scene.anims.create({
            key: 'player.walk.left',
            frames: this.scene.anims.generateFrameNumbers('img-player', { frames: [16, 17, 18, 19, 20, 21, 22, 23] }),
            frameRate: 10,
            repeat: -1
        });
        this.config4 = this.scene.anims.create({
            key: 'player.walk.right',
            frames: this.scene.anims.generateFrameNumbers('img-player', { frames: [24, 26, 27, 28, 29, 30, 31] }),
            frameRate: 10,
            repeat: -1
        });
    }
}
