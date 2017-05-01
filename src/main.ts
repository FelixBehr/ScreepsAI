import {MemoryCleaner} from "./Utils/MemoryCleaner";
import {RoleExecutor} from "./Utils/RoleExecutor";
import {MaxAmountRoles} from "./Constants/MaxAmountRoles";
import {CreepsBodyParts} from "./Constants/CreepsBodyParts";
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

    if (harvesters.length < MaxAmountRoles.Harvester) {
        Game.spawns.Spawn1.createCreep(CreepsBodyParts.Harvester, undefined, {role: "Harvester"});
    }
    if (haulers.length < MaxAmountRoles.Hauler) {
        Game.spawns.Spawn1.createCreep(CreepsBodyParts.Hauler, undefined, {
            role: "Hauler",
            working: false,
        });
    }
    if (builders.length < MaxAmountRoles.Builder) {
        Game.spawns.Spawn1.createCreep(CreepsBodyParts.Builder, undefined, {role: "Builder", working: false});
    }
    if (upgraders.length < MaxAmountRoles.Upgrader) {
        Game.spawns.Spawn1.createCreep(CreepsBodyParts.Upgrader, undefined, {role: "Upgrader", working: false});
    }
    if (remoteHarvesters.length < MaxAmountRoles.RemoteHarvester) {
        Game.spawns.Spawn1.createCreep(CreepsBodyParts.Harvester, undefined, {
            home: "E56N29",
            role: "RemoteHarvester",
            room: "E57N29",
            target: "579faa5c0700be0674d30df0",
            working: false,
        });
    }
    if (remoteHaulers.length < MaxAmountRoles.RemoteHauler) {
        Game.spawns.Spawn1.createCreep(CreepsBodyParts.Hauler, undefined, {
            home: "E56N29",
            role: "RemoteHauler",
            room: "E57N29",
            target: "579faa5c0700be0674d30df0",
            working: false,
        });
    }
    if (repairerers.length < MaxAmountRoles.Repairer) {
        Game.spawns.Spawn1.createCreep(CreepsBodyParts.Repairer, undefined, {role: "Repairer", working: false});
    }

    _.values(Game.creeps).forEach((creep: Creep) => {
        RoleExecutor.executeRole(creep);
    });
}
