'use strict';


/**
 * Assign an image to a task
 * The image uploaded is assigned to the task with the taskId. This operation can only be performed by the owner.
 *
 * body Object the image to assing to a specified task
 * taskId Long ID of the task
 * no response value expected for this operation
 **/
exports.assignImagetoTask = function(body,taskId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

/**
 * Delete an images
 * The image with ID imageId is deleted. This operation can only be performed by the owner.
 *
 * taskId Long ID of the task
 * imageId Long ID of the image to delete
 * no response value expected for this operation
 **/
 exports.deleteImage = function(taskId,imageId) {
    return new Promise(function(resolve, reject) {
      resolve();
    });
  }
  
  
  /**
   * Retreve an image
   * The image with ID imageId is retrieved. This operation can be performed on the task if at least one of the following three conditions is satisfied. 1) The task is public. 2) The user who performs the operation is the task's owner. 3) The user who performs the operation is a task's assignee.
   *
   * taskId Long ID of the task
   * imageId Long ID of the Image to retrieve
   * accept UUID image/extensions for the image to retrieve
   * returns byte[]
   **/
  exports.getSingleImage = function(taskId,imageId,accept) {
    return new Promise(function(resolve, reject) {
      var examples = {};
      examples['application/json'] = "";
      if (Object.keys(examples).length > 0) {
        resolve(examples[Object.keys(examples)[0]]);
      } else {
        resolve();
      }
    });
  }
