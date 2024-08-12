module.exports = function check(str, bracketsConfig) {
  // your solution
  let currentStr='';

  for (let i = 0; i < str.length; i++) {
    const currentElement = str[i];
    for (let j = 0; j < bracketsConfig.length; j++) {
        let startBracket=bracketsConfig[j][0];
        let endBracket=bracketsConfig[j][1];

        if (currentElement == endBracket)
        {
          if (currentStr.length==0 && startBracket!= endBracket)
            return false;

          if (currentStr.slice(-1)==startBracket)
          {
            currentStr=currentStr.substring(0, currentStr.length-1);
            break;
          }
          if (startBracket!= endBracket)
            return false;
        }

        if (currentElement == startBracket)
        {
          currentStr=currentStr+currentElement;
          break;
        }
    }
  }

  if (currentStr.length>0)
    return false;

  return true;
}
