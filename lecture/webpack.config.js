const path = require('path');

module.exports = {
  name: 'word-relay-setting',
  mode: 'development', // 실서비스 : production으로 바꾸기
  devtool: 'eval', // 빠르게 하겠다.
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: {
    app: ['./client']
  }, // 입력
  output: {
    path: path.join(__dirname, 'dist'), 
    filename: 'app.js'
  }, // 출력
}