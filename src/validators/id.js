'use strict';
const joi = require('joi');

module.exports = joi.object().keys({
  id: joi.number().integer().required(),
  offset: joi.number().default(0),
  limitt: joi.number().default(100),

 
});