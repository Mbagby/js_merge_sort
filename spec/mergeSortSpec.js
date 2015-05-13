var mergeSort = require("../mergeSort.js");

describe('Merge', function() {
  it('should merge two arrays of size 1', function() {
     expect(mergeSort.merge([1],[2])).toEqual([1,2]);
  });
});

describe('Merge Sort', function() {
  it('should sort two arrays of size 1', function() {
     expect(mergeSort.mergeSort([2],[1])).toEqual([1,2]);
  });
  it('should sort two arrays of size 4', function(){
  	expect(mergeSort.mergeSort([2,3,1,0],[6,8,4,4])).toEqual([0,1,2,3,4,4,6,8]);
  });
  it('should sort three arrays of size 2', function(){
  	expect(mergeSort.mergeSort([2,3],[0,1],[6,8])).toEqual([0,1,2,3,6,8]);
  });
   it('should sort two arrays of different sizes', function(){
  	expect(mergeSort.mergeSort([2,3,0],[0,1])).toEqual([0,0,1,2,3]);
  });
});

