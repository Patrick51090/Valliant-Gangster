
class MainWorldScene extends Phaser.Scene {
    constructor() {
        super({key: "MainWorld"});
    }


    init() {
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



        this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
        this.physics.world.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);




        this.player = this.physics.add.sprite(32, 32, 'img-player', 0).setCollideWorldBounds(true);
        this.player.config = GameData.player;
        this.player.body.fixedRotation = true;

        this.player_movement = new PlayerMovement(this, this.player);

        this.cameras.main.startFollow(this.player);






        //Collision Callbacks


        //Grass Tiles 1
        this.map_layer1.setTileIndexCallback(1, FootstepAudio.Grass, this);


        //Sand Tiles 2, 20
        this.map_layer1.setTileIndexCallback(2, FootstepAudio.Sand, this);
        this.map_layer1.setTileIndexCallback(20, FootstepAudio.Sand, this);


        //Stone tiles 88, 107, 91, 119, 140, 118, 89
        this.map_layer1.setTileIndexCallback(88, FootstepAudio.Stone, this);
        this.map_layer1.setTileIndexCallback(107, FootstepAudio.Stone, this);
        this.map_layer1.setTileIndexCallback(91, FootstepAudio.Stone, this);
        this.map_layer1.setTileIndexCallback(119, FootstepAudio.Stone, this);
        this.map_layer1.setTileIndexCallback(140, FootstepAudio.Stone, this);
        this.map_layer1.setTileIndexCallback(118, FootstepAudio.Stone, this);
        this.map_layer1.setTileIndexCallback(89, FootstepAudio.Stone, this);






        this.physics.add.collider(this.player, this.map_layer1);

    }



    update() {
        this.player_movement.update();
    }
}
