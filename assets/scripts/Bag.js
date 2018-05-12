
class Bag {
    constructor(scene) {
        this.scene = scene;

        this.items = this.scene.cache.json.get('json-items');
        this.cards = this.scene.cache.json.get('json-cards');

        for (var i in this.items) {
            this.items[i].count = 0;
        }


        this.menu = scene.add.sprite(400, 300, 'img-menu-bag').setOrigin(0.5).setScrollFactor(0);
        this.menu.visible = false;
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.scene.controls.bag)) {
            this.open();
        }
    }

    open() {
        this.menu.visible = true;
    }

    close() {
        this.menu.visible = false;
    }


    add(id, count) {

        this.items[id].count += count;

    }

    remove(id, count) {

        this.items[id].count -= count;

    }

    set(id, count) {

        this.items[id].count = count;

    }
}
