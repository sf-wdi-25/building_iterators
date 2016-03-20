/* write your myEach function here */

function myEach(arr, callback) {
  console.log('myEach');
  for (var i=0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}











/* used only in CommonJS environments (e.g. node), skip in browser */
if (typeof exports !== 'undefined' && this.exports !== exports) {
  // export this function (STUDENTS: you may ignore this for now)
  module.exports = myEach;
}
