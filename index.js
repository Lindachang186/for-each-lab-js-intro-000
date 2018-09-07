function iterativeLog(array){
  array.forEach((element, index, array)=> {
    console.log(`${index}: ${element}`)
  })
}

function callback(array){
  return array
}

function iterate(array){
  var array = [1,2,3,4];
  array.forEach(callback)
}
