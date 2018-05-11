

class Entity extends Phaser.GameObjects.Sprite {
    constructor(x, y, texture, scene) {
        super(scene, x, y, texture, 0);

        this.scene = scene;
    }
}
