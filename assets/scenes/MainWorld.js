
class MainWorldScene extends Phaser.Scene {
    constructor() {
        super({key: "MainWorld"});
    }


    init() {
        this.cameras.main.setZoom(4);

        new PlayerAnimations(this);
    }



    create() {
        this.map = this.make.tilemap({ key: "maps-main-world" });
        this.map_tiles = this.map.addTilesetImage('ground_tiles', 'img-ground_tiles');
        this.map_layer = this.map.createStaticLayer('Ground', this.map_tiles, 0, 0);

        this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
        this.physics.world.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);






        this.player = this.physics.add.sprite(32, 32, 'img-player', 0).setCollideWorldBounds(true);
        this.player.body.fixedRotation = true;

        this.player_movement = new PlayerMovement(this, this.player);

        this.cameras.main.startFollow(this.player);

    }



    update() {
        this.player_movement.update();
    }
}
