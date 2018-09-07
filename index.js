function iterativeLog(array){
  array.forEach((element, index, array)=> {
    console.log(`${index}: ${element}`)
  })
}


function iterate(callback){
  var array = [1,2,3,4];
  return array.forEach(callback)
}
