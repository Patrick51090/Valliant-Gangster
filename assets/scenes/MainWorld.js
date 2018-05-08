
class MainWorldScene extends Phaser.Scene {
    constructor() {
        super({key: "MainWorld"});
    }


    init() {
        this.cameras.main.setZoom(4);
        this.cameras.main.setBounds(0, 0, (16 * 32), (16 * 32));
    }



    create() {
        this.map = this.make.tilemap({ key: "maps-main-world" });
        this.map_tiles = this.map.addTilesetImage('ground_tiles', 'img-ground_tiles');
        this.map_layer = this.map.createStaticLayer('Ground', this.map_tiles, 0, 0);

    }



    update() {

    }
}
