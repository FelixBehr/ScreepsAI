import {Role} from "./Role";
export class BuilderRole extends Role {
    public executeRole() {
        if (this.creep.carry.energy === 0) {
            this.creep.memory.working = false;
        }
        if (this.creep.carry.energy === this.creep.carryCapacity) {
            this.creep.memory.working = true;
        }
        if (this.creep.memory.working === true) {
            let constructionSite = this.creep.pos.findClosestByPath<ConstructionSite>(FIND_CONSTRUCTION_SITES);
            let canBuild = this.creep.build(constructionSite);
            if (canBuild === ERR_NOT_IN_RANGE) {
                this.moveBehaviour.moveToLocation(constructionSite);
            }
        }
        if (this.creep.memory.working === false) {
            this.energyCollectorBehaviour.collectEnergy();
        }
    }
}