x = process.argv[3]
let arr = []
let hex = process.argv[2].split('')
let saveNum = '/'


const print = (str)  => {
  console.log(str)
}

const getNumBase = (saved) => {
  for (var i = 0; i < hex.length; i++) {
    if(hex[i] == saved){
      return 11+i
    }
  }
}

const getNum = (saved) => {
  for (var i = 0; i < hex.length; i++) {
    if(hex[i] == saved){
      return 11+i
    }
  }
}

const getNumValue = (num, base) => {
   num = num.split('')
  let k = num.map((cha,i) => {
    if (hex.includes(cha)) {
      cha = getNum(cha)
    }
    return (parseInt(cha) * Math.pow(parseInt(base),num.length-1-i))
  })
  let sum = 0
  k.forEach(c => {
    sum = sum+c
  })
  return sum
}

const findBase = () => {
  x.split('').forEach((num,i)=>{
      if(hex.includes(num)) {
        if (num.charCodeAt(0) > saveNum.charCodeAt(0) ) {
              saveNum = num
        }
      }else if(i == x.length - 1 && saveNum == '') {
          let newHex =  x.split('').sort((b,a)=>a-b)[0]
            saveNum =  newHex
      }
  })
}

const getNext = (a) => {
  a = a+1
  let b = getNumValue(x,a)
  print(a+' '+b);
  if (parseInt(a) < 10+hex.length) getNext(a)
}

const redo = () =>{
  let a = hex.includes(saveNum) ? getNumBase(saveNum) : saveNum
  let b = getNumValue(x,a)
  print(a+' '+b);
  if (parseInt(a) < 10+hex.length) getNext(a)
}

findBase()
redo()
