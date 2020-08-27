// 11
  let s = 0;
  for(var i = 1; i<=100;i++){
    s += i;
  }
  console.log(s);

// 12
  let Wizard = class Wizard{
    constructor (health, mana, armor){
      this.health = health;
      this.mana = mana;
      this.armor = armor;
    }
    attack(){
      console.log('파이어 볼')
    }
  }

  const x = new Wizard(545, 210, 10);
  console.log(x.health, x.mana, x.armor);
  x.attack();

// 13
  const planets = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];
  // let q = prompt('몇번째행성인가요, 숫자를 입력하세요');
  // console.log(planets[q-1])

// 14 
  // let d14 = prompt('숫자는 3의 배수인가요?');
  // if(d14%3 ===0) {
  //   console.log('짝')
  // }else{
  //   console.log(d14)
  // }

// 15
  // let name = prompt('자기소개 하기')
  // console.log('안녕하세요 저는' + name + '입니다')

// 16
  // const d16 = prompt('입력하세요')
  // const dd16 = d16.split('').reverse().join('');
  // console.log(dd16)

// 17 
  // let d17 = prompt('당신의 키는?');
  // if(d17 >= 150){
  //   console.log('yes')
  // }else{
  //   console.log('no')
  // }

// 18 
  let d18 = prompt('입력하세요 평균을 내 드릴게요!');
  let dd18 = d18.split(' ')

  let sum = 0;

  for(let i = 0; i < dd18.length; i++){
    sum += parseInt(dd18[i], 10)
    console.log(parseInt(dd18[i], 10))
  }
  console.log(sum/dd18.length)

