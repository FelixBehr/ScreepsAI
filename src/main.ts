import {MemoryCleaner} from "./Utils/MemoryCleaner";
import {RoleExecutor} from "./Utils/RoleExecutor";
import {
    MAX_HARVESTERS, MAX_REMOTE_HARVESTER, MAX_REMOTE_HAULERS, MAX_REPAIRERS,
} from "./Constants/MaxAmountRoles";
import {MAX_HAULERS} from "./Constants/MaxAmountRoles";
import {MAX_BUILDERS} from "./Constants/MaxAmountRoles";
import {MAX_UPGRADERS} from "./Constants/MaxAmountRoles";
const memoryCleaner = new MemoryCleaner();

export function loop() {

    memoryCleaner.cleanMemory();
    const harvesters = _.filter(Game.creeps, creep => creep.memory.role === "Harvester");
    const haulers = _.filter(Game.creeps, creep => creep.memory.role === "Hauler");
    const builders = _.filter(Game.creeps, creep => creep.memory.role === "Builder");
    const upgraders = _.filter(Game.creeps, creep => creep.memory.role === "Upgrader");
    const remoteHarvesters = _.filter(Game.creeps, creep => creep.memory.role === "RemoteHarvester");
    const remoteHaulers = _.filter(Game.creeps, creep => creep.memory.role === "RemoteHauler");
    const repairerers = _.filter(Game.creeps, creep => creep.memory.role === "Repairer");

    if (harvesters.length < MAX_HARVESTERS) {
        Game.spawns.Spawn1.createCreep([WORK, WORK, MOVE], undefined, {role: "Harvester"});
    }
    if (haulers.length < MAX_HAULERS) {
        Game.spawns.Spawn1.createCreep([CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], undefined, {
            role: "Hauler",
            working: false,
        });
    }
    if (builders.length < MAX_BUILDERS) {
        Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, MOVE], undefined, {role: "Builder", working: false});
    }
    if (upgraders.length < MAX_UPGRADERS) {
        Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, MOVE], undefined, {role: "Upgrader", working: false});
    }
    if (remoteHarvesters.length < MAX_REMOTE_HARVESTER) {
        Game.spawns.Spawn1.createCreep([WORK, WORK, MOVE], undefined, {
            home: "E56N29",
            role: "RemoteHarvester",
            room: "E57N29",
            target: "579faa5c0700be0674d30df0",
            working: false,
        });
    }
    if (remoteHaulers.length < MAX_REMOTE_HAULERS) {
        Game.spawns.Spawn1.createCreep([CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], undefined, {
            home: "E56N29",
            role: "RemoteHauler",
            room: "E57N29",
            target: "579faa5c0700be0674d30df0",
            working: false,
        });
    }
    if (repairerers.length < MAX_REPAIRERS) {
        Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, MOVE], undefined, {role: "Repairer", working: false});
    }

    _.values(Game.creeps).forEach((creep: Creep) => {
        RoleExecutor.executeRole(creep);
    });
}
