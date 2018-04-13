## 홈페이지 만들기

* html로 화면 띄워보기
  * create-react-app webapp-homepage
  * npm eject -> 설정 따로 하기위해 unpacked
  * npm install --save eslint
  * eslint -> 문법 검사해중(설정이 좀 복잡한듯..)

* jQuery사용하려면
  * npm install --save jquery

* js file import
  * npm install --save import-loader
  * npm install --save node-sass sass-loader -> .scss 파일 읽을려고
  * webpack.config.js 수정
  * eslint 무시하는 법 -> 파일 위에 주석만 달아주면됨

* 특정 문자(트위터 등등...) 안나오는 문제
  * 폰트를 못읽어서..폰트관련 파일들도 로드 시켜야할듯
