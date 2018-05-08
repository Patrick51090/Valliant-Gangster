
class MainWorldScene extends Phaser.Scene {
    constructor() {
        super({key: "MainWorld"});
    }


    init() {
        this.cameras.main.setZoom(4);
        this.cameras.main.setBounds(0, 0, (16 * 32), (16 * 32));


        this.map_data = this.cache.json.get('maps-main-world');
    }



    create() {
        this.map = this.make.tilemap({ data: this.map_data, tileWidth: 16, tileHeight: 16 });
        this.map_tiles = this.map.addTilesetImage('img-tiles');
        this.map_layer = this.map.createStaticLayer(0, this.map_tiles, 0, 0);

    }



    update() {

    }
}
