const sarees = require('../models/sarees');
const jewellery = require('../models/jewellery');

const Util = {
  getProductTable : (data) => {
    let db = null;
    switch(data.designable_type)
    {
      case "saree":
      return sarees;
      break;

      case "jewellery":
      return jewellery;
      break;

      default:
      db = null
      break;
    }

    return db;
  }
};

module.exports = Util;
