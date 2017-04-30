export class DyingBehaviour {
    private creep: Creep;

    constructor(creep: Creep) {
        this.creep = creep;
    }

    public checkDying() {
        if (this.creep.ticksToLive < 200 && this.creep.memory.saidDying === undefined) {
            this.creep.say("Dying soon");
            this.creep.memory.saidDying = true;
        }
    }
}