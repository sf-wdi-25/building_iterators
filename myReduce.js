/* write your myReduce function body in the function below */

function myReduce(arr, callback   {
	//////////////////////////////////
	var accum = array[0];
	for(j = 1; j < array.length; j++) {
		accum = callback(accum, array[j])
	}
return accum;
}
	 //////////////////////////////////



// export this function (you can ignore this for now)
module.exports = myReduce;
