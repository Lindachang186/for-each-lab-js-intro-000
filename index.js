function iterativeLog(array){
  array.forEach((element, index, array)=> {
    console.log(`${index}: ${element}`)
  })
}

function callback(item, counter, array){
  console.log(array);
}

function iterate(item, counter, array){
  var array = [1];
  array.forEach(callback)
}
