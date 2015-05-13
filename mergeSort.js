
// Merge takes two sorted arrays (left, right) and
// returns one array which contains the sorted numbers
// from left and right.

exports.merge = function(left, right) {
	var leftI=0;
	var rightI=0;
	var result=[];
	while(leftI<left.length || rightI<right.length){
		if (left[leftI]<= right[rightI]){
			result.push(left[leftI])
			leftI++;
		}
		else if ((right[rightI]< left[leftI]){
			result.push(right[rightI])
			rightI++;
		})
	}
}

// Merge sort uses the merge function in order to
// sort an array. Given an array of numbers in any
// order, merge sort should return an array that is
// sorted.
exports.mergeSort = function(arr) {
}

