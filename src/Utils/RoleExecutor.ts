import {HarvesterRole} from "../Creeps/Roles/HarvesterRole";
import {BuilderRole} from "../Creeps/Roles/BuilderRole";
import {UpgraderRole} from "../Creeps/Roles/UpgraderRole";
import {HaulerRole} from "../Creeps/Roles/HaulerRole";
import {RemoteHarvesterRole} from "../Creeps/Roles/RemoteHarvesterRole";
import {RemoteHaulerRole} from "../Creeps/Roles/RemoteHaulerRole";
import {RepairerRole} from "../Creeps/Roles/RepairerRole";

export class RoleExecutor {
    public static executeRole(creep: Creep) {
        if (creep.memory.role === "Harvester") {
            new HarvesterRole(creep).executeRole();
        } else if (creep.memory.role === "Hauler") {
            new HaulerRole(creep).executeRole();
        } else if (creep.memory.role === "Builder") {
            new BuilderRole(creep).executeRole();
        } else if (creep.memory.role === "Upgrader") {
            new UpgraderRole(creep).executeRole();
        } else if (creep.memory.role === "RemoteHarvester") {
            new RemoteHarvesterRole(creep).executeRole();
        } else if (creep.memory.role === "RemoteHauler") {
            new RemoteHaulerRole(creep).executeRole();
        } else if (creep.memory.role === "Repairer") {
            new RepairerRole(creep).executeRole();
        }
    }
}