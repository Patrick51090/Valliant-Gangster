
class FootstepAudio {

    static Grass() {
        if (this.player.config.footstep_time >= this.player.config.footstep_delay) {
            this.player.config.footstep = true;
        }else {
            this.player.config.footstep_time += 1;
        }

        if (this.player.config.footstep) {
            this.sound.add('sfx-fs-grass');
            this.sound.volume = GameData.config.volume.footsteps;
            this.sound.play();

            this.player.config.footstep = false;
            this.player.config.footstep_time = 0;
        }
    }


    static Sand() {
        if (this.player.config.footstep_time >= this.player.config.footstep_delay) {
            this.player.config.footstep = true;
        }else {
            this.player.config.footstep_time += 1;
        }

        if (this.player.config.footstep) {
            this.sound.add('sfx-fs-sand');
            this.sound.volume = GameData.config.volume.footsteps;
            this.sound.play();

            this.player.config.footstep = false;
            this.player.config.footstep_time = 0;
        }
    }


    static Stone() {
        if (this.player.config.footstep_time >= this.player.config.footstep_delay) {
            this.player.config.footstep = true;
        }else {
            this.player.config.footstep_time += 1;
        }

        if (this.player.config.footstep) {
            this.sound.add('sfx-fs-stone');
            this.sound.volume = GameData.config.volume.footsteps;
            this.sound.play();

            this.player.config.footstep = false;
            this.player.config.footstep_time = 0;
        }
    }
}
