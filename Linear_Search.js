var MyArray = [2,3,5,7,9];
function linearSearch(arr , element){
  for (var i = 0; i<arr.length; i++){
    if(arr[i] == element){
      return i ;
     
    }
    return null;
  }
}

console.log(linearSearch(MyArray,2))
//console.log(linearSearch)
