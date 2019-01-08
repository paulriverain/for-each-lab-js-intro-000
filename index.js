function iterativeLog(array){
  array.forEach((element, index) =>{
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  const cheese = ['cheddar', 'swiss', 'provolone']
  cheese.forEach(callback)
  return cheese
}
