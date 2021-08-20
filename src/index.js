module.exports = function check(str, bracketsConfig) {
  // your solution
  const bracketsPairs = {};

  for(let i = 0; i < bracketsConfig.length; i++){
    bracketsPairs[bracketsConfig[i][1]] = bracketsConfig[i][0]
  }
  console.log(bracketsPairs)

  let stack = [];

  for(let i = 0; i < str.length; i++){
    if(stack.length === 0){
      stack.push(str[i])
    } else if(stack[stack.length - 1] === bracketsPairs[str[i]]){
      stack.pop()
    } else {
      stack.push(str[i])
    }
  }
  return stack.length === 0
}
