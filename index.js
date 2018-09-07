function iterativeLog(array){
  array.forEach((element, index, array)=> {
    console.log(`${index}: ${element}`)
  })
}

function callback(array){
  console.log(array)
}

function iterate(item, index, array){
  var array = [1,2,3,4];
  return array.forEach(callback)
}
