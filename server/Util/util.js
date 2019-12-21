const sarees = require('../models/sarees');
const jewellery = require('../models/jewellery');

const Util = {
  getProductTable : (data) => {
    let db = null;
    switch(data.designable_type)
    {
      case "saree":
      db = sarees;
      break;

      case "jewellery":
      db = jewellery;
      break;

      default:
      db = null
      break;
    }

    return db;
  }
};

module.exports = Util;
