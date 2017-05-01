import {RemoteRole} from "./RemoteRole";
export class RemoteHaulerRole extends RemoteRole {
    public executeRole() {
        if (this.creep.carry.energy === 0) {
            this.creep.memory.working = false;
        }
        if (this.creep.carry.energy === this.creep.carryCapacity) {
            this.creep.memory.working = true;
        }

        if (this.creep.memory.working === false) {
            if (this.creep.room.name !== this.creep.memory.room) {
                this.travelBehaviour.travelToRoom(this.creep.memory.room);
                return;
            }
            const droppedEnergy = this.creep.room.find<Resource>(FIND_DROPPED_ENERGY);
            const sortedDroppedEnergy = droppedEnergy.sort((a: Resource, b: Resource) => {
                return b.amount - a.amount;
            });
            const canPickup = this.creep.pickup(sortedDroppedEnergy[0]);
            if (canPickup === ERR_NOT_IN_RANGE) {
                this.moveBehaviour.moveToLocation(sortedDroppedEnergy[0]);
            }
        }
        if (this.creep.memory.working === true) {
            if (this.creep.room.name !== this.creep.memory.home) {
                this.travelBehaviour.travelToRoom(this.creep.memory.home);
                return;
            }
            let needsEnergy: Structure = this.creep.pos.findClosestByPath<Structure>(FIND_STRUCTURES, {
                filter: (structure: StructureSpawn|StructureExtension) => {
                    return (
                            structure.structureType === STRUCTURE_SPAWN
                            || structure.structureType === STRUCTURE_EXTENSION
                        )
                        && structure.energy < structure.energyCapacity;
                },
            });
            if (needsEnergy === undefined || needsEnergy === null) {
                needsEnergy = this.creep.pos.findClosestByPath<Structure>(FIND_STRUCTURES, {
                    filter: (structure: StructureContainer) => {
                        return structure.structureType === STRUCTURE_CONTAINER
                            && structure.store[RESOURCE_ENERGY] < structure.storeCapacity;
                    },
                });
            }
            let canTransfer = this.creep.transfer(needsEnergy, RESOURCE_ENERGY);
            if (canTransfer === ERR_NOT_IN_RANGE) {
                this.moveBehaviour.moveToLocation(needsEnergy);
            }
        }
    }
}
