function balikString (word){
  let tmp = []
  for(var i= word.length - 1; i >= 0; i--){
    tmp.push(word[i])
  }
  return tmp.join('')
}

console.log(balikString('hello world!'))
