
// 21 set에 대하여
  // let setA = new Set('dody'); // 같은 value를 두번 가질 수 없음
  // let setB = new Set().add('a').add('b');
  // console.log(setA, setB, [...'Munsic'])

// 25
  // function Dody (n){
  //   return n * n * 3.14
  // }

  // let dody = prompt('입력하세요 ');
  // console.log(Dody(dody));

// 26
  // let dody = {
  //   '수성' : 'Mercury',
  //   '금성' : 'Venus',
  //   '지구' : 'Earth',
  //   '화성' : 'Mars',
  //   '목성' : 'Jupiter',
  //   '토성' : 'Saturn',
  //   '천왕성' : 'Uranus',
  //   '해왕성' : 'Neptune'
  // };

  // let hello = prompt('행성의 영어이름');
  // console.log(dody[hello])


  // 27 
  // let names = prompt('이름은?').split(' ');
  // let nums = prompt('숫자는?').split(' ');
  // const obj ={};

  // for(let i = 0; i < names.length; i++){
  //   obj[names[i]] = nums[i]
  // }

  // console.log(obj)

  // 28
  // const dody = prompt('단어를 입력하세욘').split('')

  // for(let i = 0; i < dody.length -1; i ++){
  //   console.log(dody[i], dody[i+1])
  // }
  
  // 29
  // let dody = prompt('대문자만 지나가')
  // if(dody === dody.toUpperCase()){
  //   console.log('yes')
  // }else{
  //   console.log('no')
  // }

  // 30
  let dody1 = prompt('문자를 입력')
  let dody2 = prompt('찾을 문자를 입력')

  console.log(dody1.indexOf(dody2))