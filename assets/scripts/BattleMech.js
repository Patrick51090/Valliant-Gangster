
class BattleMech {
    constructor(scene) {
        this.scene = scene;
    }

    static Fight(player, obj) {
        if (player.config.fighting) {
            return;
        }

        player.config.ableToMove = false;
        obj.config.ableToMove = false;

        obj.tween1.pause();

        player.anims.stop();
        player.anims.play('player.walk.right');
        player.anims.stop();

        var fightLocation = {
            x: player.body.x,
            y: player.body.y
        };


        var fightArea = this.add.sprite(fightLocation.x, fightLocation.y, 'img-battle-area').setOrigin(0.5);
        fightArea.setDepth(0);
        fightArea.alpha = 0.7;

        var circle1 = this.add.sprite(fightLocation.x - (fightArea.width / 2), fightLocation.y, 'img-battle-circle').setOrigin(0.5);
        var circle2 = this.add.sprite(fightLocation.x, fightLocation.y - (fightArea.height / 2), 'img-battle-circle').setOrigin(0.5);
        var circle3 = this.add.sprite(fightLocation.x, fightLocation.y + (fightArea.height / 2), 'img-battle-circle').setOrigin(0.5);
        var circle4 = this.add.sprite(fightLocation.x + (fightArea.width / 2), fightLocation.y, 'img-battle-circle').setOrigin(0.5);

        circle1.setDepth(1);
        circle2.setDepth(1);
        circle3.setDepth(1);
        circle4.setDepth(1);

        circle1.alpha = 0.5;
        circle2.alpha = 0.5;
        circle3.alpha = 0.5;
        circle4.alpha = 0.5;



        player.body.x = circle1.x - (circle1.width);
        player.body.y = circle1.y - (circle1.height);


        obj.body.x = circle2.x - (circle2.width);
        obj.body.y = circle2.y - (circle2.height);


    }
}
