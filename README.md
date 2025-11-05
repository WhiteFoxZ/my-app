vscode 설치
ESLint
Prettier ESLint
Reactjs code snippets

https://ko.legacy.reactjs.org/docs/create-a-new-react-app.html
npx create-react-app my-app

에러
npm ERR! network 'proxy' config is set properly. See: 'npm help config'

해결
npm config delete proxy
npm config delete https-proxy

prettier
![prettier](prettier.png)

.prettierrc 생성

settion text editer formatting

![alt text](formatting.png)

{
"printWidth": 120, // 코드 최대 줄 길이
"tabWidth": 2, // 들여쓰기 너비 (스페이스 2칸)
"singleQuote": true, // 따옴표는 '' (큰따옴표 대신 작은따옴표 사용)
"semi": true, // 문장 끝 세미콜론 사용 여부 (true: 사용)
"trailingComma": "es5", // 꼬리 쉼표 사용 (es5: 객체, 배열 등에서 마지막 요소 뒤에 쉼표 추가)
"bracketSpacing": true, // 객체 리터럴에서 괄호 안 공백 사용 여부
"arrowParens": "avoid" // 화살표 함수의 인자에 괄호 사용 여부 (avoid: 불필요한 괄호 생략)
}

google fonts - Noto Sans Korean

https://www.photopea.com/

https://mironcoder-hotash.netlify.app/ecommerce

폴더생성 components, pages,assets\images

src\assets\images logo 이미지 다운

npm install react-router-dom

https://mui.com/material-ui/

https://mui.com/material-ui/getting-started/installation/

npm install @mui/material @emotion/react @emotion/styled

npm install @mui/material @mui/styled-engine-sc styled-components

npm install @mui/icons-material

npm install react-icons --save

구글 검색 bootstrap 4 npm

############################ mobx 환경설정 ###################

https://mobx.js.org/

npm install bootstrap 설치

npm install mobx mobx-react-lite --save
