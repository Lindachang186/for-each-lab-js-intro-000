function iterativeLog(array){
  array.forEach((element, index, array)=> {
    console.log(`${index}: ${element}`)
  })
}

function callback(item, counter, array){
  console.log(array);
}

function iterate(){
  var array = [1,2,3,4];
  array.forEach(callback)
}
