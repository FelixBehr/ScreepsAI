import {MemoryCleaner} from "./Utils/MemoryCleaner";
import {RoleExecutor} from "./Utils/RoleExecutor";
import {MAX_HARVESTERS} from "./Constants/MaxAmountRoles";
import {MAX_HAULERS} from "./Constants/MaxAmountRoles";
import {MAX_BUILDERS} from "./Constants/MaxAmountRoles";
import {MAX_UPGRADERS} from "./Constants/MaxAmountRoles";
console.log('New Version loaded');
const memoryCleaner = new MemoryCleaner();

export function loop() {

    memoryCleaner.cleanMemory();
    const harvesters = _.filter(Game.creeps, creep => creep.memory.role === 'Harvester');
    const haulers = _.filter(Game.creeps, creep => creep.memory.role === 'Hauler');
    const builders = _.filter(Game.creeps, creep => creep.memory.role === 'Builder');
    const upgraders = _.filter(Game.creeps, creep => creep.memory.role === 'Upgrader');

    if(harvesters.length < MAX_HARVESTERS){
        Game.spawns['Spawn1'].createCreep([WORK, WORK, MOVE], undefined, {role: 'Harvester'});
    }
    if(haulers.length < MAX_HAULERS){
        Game.spawns['Spawn1'].createCreep([CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], undefined, {role: 'Hauler', working: false});
    }
    if(builders.length < MAX_BUILDERS){
        Game.spawns['Spawn1'].createCreep([WORK, WORK, CARRY, MOVE], undefined, {role: 'Builder', working: false});
    }
    if(upgraders.length < MAX_UPGRADERS){
        Game.spawns['Spawn1'].createCreep([WORK, WORK, CARRY, MOVE], undefined, {role: 'Upgrader', working: false});
    }

    _.values(Game.creeps).forEach((creep: Creep) => {
        RoleExecutor.executeRole(creep);
    })
}
