
class Controls {
    constructor(scene) {
        this.scene = scene;

        this.up = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.down = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.left = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.right = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.bag = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
    }
}
