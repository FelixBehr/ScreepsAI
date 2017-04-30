export class MemoryCleaner {
    public cleanMemory() {
        const aliveCreeps = Object.keys(Game.creeps);
        const deadCreeps = Object.keys(Memory.creeps).filter(creepName => aliveCreeps.indexOf(creepName) === -1)
        deadCreeps.forEach(deadCreep => delete Memory.creeps[deadCreep]);
    }
}