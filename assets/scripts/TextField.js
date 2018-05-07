
class TextField {
    constructor(x, y, width, height, textures, scene) {

        this.scene = scene;

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.textures = textures;

        this.sprite = scene.add.sprite(x, y, textures[0]).setSize(width, height).setOrigin(0.5).setInteractive();
        this.selected = false;
        this.typing = false;

        this.label = scene.add.bitmapText(x, y, "fnt-pixel", "", 32);
        this.label.tint = 0x000000;


        this.string = "";

        this.keys = {
            a: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            b: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B),
            c: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C),
            d: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
            e: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E),
            f: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F),
            g: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G),
            h: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H),
            i: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I),
            j: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J),
            k: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K),
            l: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L),
            m: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M),
            n: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N),
            o: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O),
            p: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P),
            q: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
            r: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R),
            s: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
            t: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T),
            u: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.U),
            v: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.V),
            w: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
            x: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X),
            y: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Y),
            z: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z)
        };


        this.sprite.on('pointerdown', function(pointer) {
            this.selected = true;
            this.typing = true;
        }, this);

        scene.input.on('pointerdown', function() {
            this.sprite.setTexture(this.textures[0]);
            this.typing = false;
            this.selected = false;
        }, this);
    }

    update() {
        this.label.setText(this.string);

        if (this.typing) {
            if (Phaser.Input.Keyboard.JustDown(this.keys.a)) {
                this.string += "A";
            }else if (this.keys.b.isDown) {
                this.string += "B";
            }else if (this.keys.c.isDown) {
                this.string += "C";
            }else if (this.keys.d.isDown) {
                this.string += "D";
            }else if (this.keys.e.isDown) {
                this.string += "E";
            }else if (this.keys.f.isDown) {
                this.string += "F";
            }else if (this.keys.g.isDown) {
                this.string += "G";
            }else if (this.keys.l.isDown) {
                this.string += "L";
            }else if (this.keys.m.isDown) {
                this.string += "M";
            }else if (this.keys.n.isDown) {
                this.string += "N";
            }else if (this.keys.o.isDown) {
                this.string += "O";
            }else if (this.keys.p.isDown) {
                this.string += "P";
            }else if (this.keys.q.isDown) {
                this.string += "Q";
            }else if (this.keys.r.isDown) {
                this.string += "R";
            }else if (this.keys.s.isDown) {
                this.string += "S";
            }else if (this.keys.t.isDown) {
                this.string += "T";
            }else if (this.keys.u.isDown) {
                this.string += "U";
            }else if (this.keys.v.isDown) {
                this.string += "V";
            }else if (this.keys.w.isDown) {
                this.string += "W";
            }else if (this.keys.x.isDown) {
                this.string += "X";
            }else if (this.keys.y.isDown) {
                this.string += "Y";
            }else if (this.keys.z.isDown) {
                this.string += "Z";
            }
        }
    }
}
