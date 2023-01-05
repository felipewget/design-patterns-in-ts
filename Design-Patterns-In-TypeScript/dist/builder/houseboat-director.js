"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const house_builder_1 = require("./house-builder");
class HouseBoatDirector {
    static construct() {
        return new house_builder_1.default()
            .setBuildingType('House Boat')
            .setNumberWindows(8)
            .setWallMaterial('Wood')
            .setNumberDoors(6)
            .getResult();
    }
}
exports.default = HouseBoatDirector;
