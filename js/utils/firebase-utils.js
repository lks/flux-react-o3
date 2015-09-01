/**
 * Created by j.calabrese on 8/19/15.
 */
var FirebaseUtils = {
  convertToArray: function (objectToConvert) {

    var list = [];
    if (objectToConvert != null) {
      for (var i = 0; i < Object.keys(objectToConvert).length; i++) {
        list[i] = {
          key: Object.keys(objectToConvert)[i],
          value: objectToConvert[Object.keys(objectToConvert)[i]]
        };
      }
    }

    return list;
  }
};
module.exports = FirebaseUtils;