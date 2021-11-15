'use strict';

var utils = require('../utils/writer.js');
var TaskstaskIdimages = require('../service/ImagesService');

module.exports.assignImagetoTask = function assignImagetoTask (req, res, next, body, taskId) {
  TaskstaskIdimages.assignImagetoTask(body, taskId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteImage = function deleteImage (req, res, next, taskId, imageId) {
    TaskstaskIdimagesimageId.deleteImage(taskId, imageId)
      .then(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
  };
  
  module.exports.getSingleImage = function getSingleImage (req, res, next, taskId, imageId, accept) {
    TaskstaskIdimagesimageId.getSingleImage(taskId, imageId, accept)
      .then(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
  };
  