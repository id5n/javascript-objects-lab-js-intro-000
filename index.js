var recipes = {
  'eggs' : 3,
  'cheese' : "2 slices",
  'paprika' : "1 dash"
};

var updateObjectWithKeyAndValue = function(object, key, value){
  var obj = {
    prop : 1
  };
  Object.assign(obj, { prop2 : 2 });
  return obj;
};
updateObjectWithKeyAndValue(obj, 'prop', 'new value');
