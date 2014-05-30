// My role in the group is: 
The Coders
// Here is my part of the challenge:

var sum = function(list){
    var result = 0;
    for (var i = 0; i < list.length; i ++) {
      result = result + list[i];
    }
    return result;
};


var mean = function(list){
   var result = (sum(list) / list.length);
   return result;
};


var median = function(list){
  var sorting = list.sort(function(a, b) {return a-b;});
  var length = list.length; 
  var remainder = sorting.length%2
  var half = Math.floor(list.length/2);
  if (remainder === 1){
    return sorting[half];
  } else {
    return (sorting[half] + sorting[half-1])/2;
  }
};
  
