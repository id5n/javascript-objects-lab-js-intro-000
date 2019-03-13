let recipes = {};

let updateObjectWithKeyAndValue = function(object, key, value) {
  return Object.assign({}, object, { [key]: value });
  /*
  '{}' is an new empty object that will store the update values without mutating the original object.
  'object' is the original object being referenced.
  The new 'key' and 'value' will be assigned to the  original 'object' as a new object, preserving the original state.
  */
};

let destructivelyUpdateObjectWithKeyAndValue = function(object, key, value) {
  object[key] = value;
  return object;
  // Updates the current object by assigning a new key or value.
};

let deleteFromObjectByKey = function(object, key) {
  return Object.assign({}, delete object.key);
  /*
  '{}' is an new empty object that will store the update values without mutating the original object.
  'delete object.key' will delete the key-value pair from the object passed as an argument without mutating the original.
   */
};

let destructivelyDeleteFromObjectByKey = function(object, key) {
  delete object.key;
  return object;
    // Deletes key-value pair from original object destructively.
};
