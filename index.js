let recipes = {};

let updateObjectWithKeyAndValue = function(object, key, value) {
  return Object.assign({}, object, { [key]: value })
  // '{}' is an new empty object that will store the update values without mutating the original object.
  // 'object' is the original object being referenced.
  // The new 'key' and 'value' will be assigned to the 'object' as a new object.

};

let destructivelyUpdateObjectWithKeyAndValue = function() {


};
