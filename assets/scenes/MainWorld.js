
class MainWorldScene extends Phaser.Scene {
    constructor() {
        super({key: "MainWorld"});
    }


    init() {
        this.cameras.main.setZoom(4);

        this.animations = new Animations(this);
        //this.footstep_audio = new FootstepAudio();
        this.player_movement = new PlayerMovement(this);
    }



    create() {

        this.bg_music = this.sound.add('track-loop2');
        this.bg_music.volume = GameData.config.volume.music;
        this.bg_music.loop = true;
        this.bg_music.play();

        this.map = this.make.tilemap({ key: "maps-main-world" });
        this.map_tiles = this.map.addTilesetImage('ground_tiles', 'img-ground_tiles');
        this.map_layer1 = this.map.createStaticLayer('Ground', this.map_tiles, 0, 0);
        this.map_layer2 = this.map.createStaticLayer('Paths', this.map_tiles, 0, 0);

        this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
        this.physics.world.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);




        this.player = this.physics.add.sprite(32, 32, 'img-player', 0).setCollideWorldBounds(true);
        this.player.config = GameData.player;
        this.player.body.fixedRotation = true;

        this.player_movement = new PlayerMovement(this, this.player);

        this.cameras.main.startFollow(this.player);






        //Collision Callbacks

        //Stone tiles 88, 107, 91
        this.map_layer2.setTileIndexCallback(88, FootstepAudio.Stone, this);
        this.map_layer2.setTileIndexCallback(107, FootstepAudio.Stone, this);
        this.map_layer2.setTileIndexCallback(91, FootstepAudio.Stone, this);

    }



    update() {
        this.player_movement.update();
    }
}
