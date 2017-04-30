import {Role} from "./Role";
export class UpgraderRole extends Role {
    public executeRole() {
        if (this.creep.carry.energy === 0) {
            this.creep.memory.working = false;
        }
        if (this.creep.carry.energy === this.creep.carryCapacity) {
            this.creep.memory.working = true;
        }
        if (this.creep.memory.working === true) {
            let controller = this.creep.room.controller;
            if (controller === undefined) return;
            let canUpgrade = this.creep.upgradeController(controller);
            if (canUpgrade === ERR_NOT_IN_RANGE) {
                this.moveBehaviour.moveToLocation(controller);
            }
        }
        if (this.creep.memory.working === false) {
            const droppedEnergy = this.creep.pos.findClosestByPath<Resource>(FIND_DROPPED_ENERGY);
            const canPickup = this.creep.pickup(droppedEnergy);
            if (canPickup === ERR_NOT_IN_RANGE) {
                this.moveBehaviour.moveToLocation(droppedEnergy);
            }
        }
    }
}
