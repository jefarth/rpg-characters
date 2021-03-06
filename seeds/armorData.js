const { Armor } = require('../models');

const armorData = [
  {
    id: 1,
    name: "Armor of the Unmoving",
    bonus_def: 12,
    lvl_req: 9,
    player_id: 2
  },
  {
    id: 2,
    name: "Cracked Armor",
    bonus_def: 2,
    lvl_req: 1,
    player_id: 3
  },
  {
    id: 3,
    name: "Dragon's Scales",
    bonus_def: 20,
    lvl_req: 15,
    player_id: 1
  },
];

const seedArmor = () => Armor.bulkCreate(armorData);

module.exports = seedArmor;