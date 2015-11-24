/* write your myMap function body in the function below */

function myMap(arr, callback) {
	//////////////////////////////////
	var returnArray = [];
	for(var i = 0; i < arr.length; i++) {
		returnArray.push(callback(arr[i]));
	}
	return returnArray;
    //////////////////////////////////
}










// export this function (you can ignore this for now)
module.exports = myMap;
