function iterativeLog(array){
  array.forEach((element, index, array)=> {
    console.log(`${index}: ${element}`)
  })
}

function callback(item, index, array){
  array.forEach(array)
}

function iterate(item, index, array){
  var array = [1,2,3,4];
  array.forEach(callback)
}
