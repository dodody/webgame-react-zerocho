// 1
  var nums = [100,200, 300, 400, 500]
  nums.pop();
  nums.pop();

// 2
  var arr = [200, 100, 300];
  arr.splice(2, 0, 10000)

// 3
  // console.log(typeof(arr)) // object

// 4
// 5 for문 계산
  var a = 10;
  var b = 2;
  for (let i= 1; i<5; i+=2){
    a += i;
    // console.log(a, i)
  }
  // console.log(a);// 최종값이구나
  // console.log(a+b);

// 6
// 7 
// 8 
  var b = {
    'height':180,
    'weight':78,
    'weight':84,
    'temperature':36,
    'eyesight':1
  }
  // console.log(b, b['weight']);

// 10 
  // const n = prompt('숫자를 입력하세요.');
  let tree = '';
  let n = 5;

  for(let i = 1; i<=n; i++){
    let star = '';
    for(let j = 1; j<=5 -i; j++){
      star +=' '
    }
    for(let k = 1; k<=2*i-1; k++){
      star += '*'
    }

    tree += star + '\n'
  }

  // console.log(tree)