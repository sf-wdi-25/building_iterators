/* write your myMap function body in the function below */

function myMap(arr, callback) {
  var outputArray = [];
  for (var i=0; i<arr.length; i++) {
    outputArray.push(callback(arr[i], i, arr));
  }
  return outputArray;
}









/* used only in CommonJS environments (e.g. node), skip in browser */
if (typeof exports !== 'undefined' && this.exports !== exports) {
  // export this function (STUDENTS: you may ignore this for now)
  module.exports = myMap;
}
