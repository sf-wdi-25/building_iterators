/* write your myEach function body in the function below */

function myEach(arr, callback) {
//////////////////////////////////
for(var i = 0; i < arr.length; i++) {
		callback(arr[i]);
	}
//////////////////////////////////
}










// export this function (you can ignore this for now)
module.exports = myEach;
