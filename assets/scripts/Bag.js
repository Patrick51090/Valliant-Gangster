
class Bag {
    constructor(scene) {
        this.scene = scene;

        this.items = this.scene.cache.json.get('json-items');

        for (var i in this.items) {
            this.items[i].count = 0;
        }
    }

    Add(id, count) {

        this.items[id].count += count;

    }

    Remove(id, count) {

        this.items[id].count -= count;

    }

    Set(id, count) {

        this.items[id].count = count;

    }
}
