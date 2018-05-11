


class FootstepAudio {

    static Grass() {
        if (this.player.config.footstep) {
            var sound = this.sound.add('sfx-fs-grass');
            sound.volume = GameData.config.volume.footsteps;
            sound.play();

            this.player.config.footstep = false;
            this.player.config.footstep_time = 0;
        }
    }


    static Sand() {
        if (this.player.config.footstep) {
            var sound = this.sound.add('sfx-fs-sand');
            sound.volume = GameData.config.volume.footsteps;
            sound.play();

            this.player.config.footstep = false;
            this.player.config.footstep_time = 0;
        }
    }


    static Stone() {
        if (this.player.config.footstep) {
            var sound = this.sound.add('sfx-fs-stone');
            sound.volume = GameData.config.volume.footsteps;
            sound.play();

            this.player.config.footstep = false;
            this.player.config.footstep_time = 0;
        }
    }
}
