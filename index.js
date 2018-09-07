function iterativeLog(array){
  array.forEach((element, index, array)=> {
    console.log(`${index}: ${element}`)
  })
}

function callback(item, index, array){
  console.log(array)
}

function iterate(array, callback){
  var array = [1,2,3,4];
  array.forEach(callback)
}
