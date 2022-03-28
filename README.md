# wanted-codestates-project-8
💡 개인 기업과제 8 : 더블엔씨

### 📌 &nbsp;[더블엔씨 과제 확인하러 가기](https://elegant-ganache-715518.netlify.app/)

### Features

충청북도 휴양림 중 마음에 드는 곳에 메모를 남겨 저장하는 서비스

- [x] 휴양림 데이터 목록
- [x] 휴양림 저장, 수정 폼
- [x] 저장된 휴양림 목록

## 🏕 Code Convention

### Getting Started

1. `clone` the repository,

```
$ git clone "https://github.com/hasunghwa/wanted-codestates-project-8.git"
```

2. `Install` dependencies,

```
$ npm install
```

3. `start` the project,

```
$ npm start
```

## **Stack**

`Javascript` `React` `Styled-Components`

### library

`axios` `http-proxy-middleware`   

## 휴양림 데이터 목록

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bd7a568f-f506-4919-8e28-ad5ef3f32b79/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220328T124419Z&X-Amz-Expires=86400&X-Amz-Signature=07bbb40dadcbfc16419d5af7c250ec91191e7c040965c7a093b26757db970e88&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

1. 휴양림 데이터 조회는 한 번에 10개씩 무한 스크롤로 조회해야 합니다. 무한 스크롤은 라이브러리를 사용하지 말고 직접 구현해 주세요.
    
    ![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/536f04f8-7ddc-4f3d-8ee4-053f2982ba5d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220328T124507Z&X-Amz-Expires=86400&X-Amz-Signature=722d62a089a21d43985f4d6becd111c95a4e4e4c1b7b749627e088401cf6f4fe&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
    
2. 휴양림 데이터 목록에서 [1 .메인화면]으로 이동할 수 있는 버튼이 있어야 합니다.(위 <)
3. 목록 중 하나를 선택하면 [3. 휴양림 저장 폼]을 노출시켜야 합니다.

## 저장된 휴양림 목록

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/04ce1a5f-4a64-4643-99b8-50744b2d9620/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220328T124524Z&X-Amz-Expires=86400&X-Amz-Signature=75558236c5f90d6145ebd857c9324cb3d057802003ee5d50f7705e0dd1ae22fc&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

1. 저장이 완료되면 그에 따른 피드백이 유저에게 제공되어야 합니다.
2. 저장된 휴양림 목록 중 하나를 선택하면 [5. 휴양림 수정 폼]이 노출되어야 합니다.

## 휴양림 저장, 수정 폼

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1514bdfd-c641-41a5-9a78-25c1066e2c23/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220328T124535Z&X-Amz-Expires=86400&X-Amz-Signature=a15e46a6efb3996c00ecf49f5461965f103657e0748f100ccc52e8a01f7d917c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e081728b-a400-4ae2-ac54-0c8c07515255/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220328T124552Z&X-Amz-Expires=86400&X-Amz-Signature=c7db760f971eed41bb5e74663af6ccfe5ae4ee9536b086072586191dca4479dd&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

1. 유저는 반드시 메모를 입력해야 합니다.
2. 모달의 외부 화면을 클릭하면 모달이 사라져야 합니다.
3. 유저는 삭제 버튼을 눌러 저장된 데이터를 삭제할 수 있습니다.
4. 유저는 수정 버튼을 눌러 메모를 수정 할 수 있습니다.
5. 데이터의 저장은 서버가 아니라 브라우저의 로컬 스토리지에 합니다.
    
    ![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f7ff0cd6-ca1f-4b40-ae8e-ee336dda9ce6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220328T124605Z&X-Amz-Expires=86400&X-Amz-Signature=e357cf21767c20f1413bca25a2d33b63fdb8d50d91fe0c0f190f09d52ca21bf1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
    
6. 메모가 빈 상태에서는 수정할 수 없습니다.

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/48c8dad5-7d85-4056-be1b-5cee2682c188/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220328T124618Z&X-Amz-Expires=86400&X-Amz-Signature=4c82fb27fcbafdeb1036a3ae59c212b0d5e38c6d106f2238548bc9c66f5a5478&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## 검색

1. 유저는 이름, 주소, 메모 중 최소 두 가지 조건 중 하나를 선택해 검색할 수 있어야 합니다.
    
    ![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3f1c2b39-db45-4147-a008-0e4b38ea413f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220328T124627Z&X-Amz-Expires=86400&X-Amz-Signature=e92a3f50abfd7f43c59976f96a8ae70ba12ebfb49c38acc3dbeeb38a4c712cba&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
    

### 어려웠던 점 ****(에러 핸들링)****

1. CORS `http-proxy-middleware`   
    
    ```jsx
    //setupProxy.js
    const { createProxyMiddleware } = require('http-proxy-middleware');
    
    module.exports = function (app) {
      app.use(
        '/api',
        createProxyMiddleware({
          target: 'https://www.chungbuk.go.kr',
          changeOrigin: true,
          pathRewrite: {
            '^/api': '',
          },
        }),
      );
    };
    
    ```
    
    ```jsx
    //netlify.toml
    [[redirects]]
      from = "/api/*"
      to = "https://www.chungbuk.go.kr/:splat"
      status = 200
    ```
    
2. 무한 스크롤
    ```css
    overflow-y: auto;
    height: 80vh;
    ```

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/771045cf-4b9c-4426-884e-23f8540c206b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220328T124650Z&X-Amz-Expires=86400&X-Amz-Signature=da0358b8eb7afbf9526a5263c0675d8f3a320a2363756f7b3bd6c683dde9b0ed&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
### 🏕 Commit Emoji

|   emoji    | commit message |       when to use it        |
| :--------: | :------------: | :-------------------------: |
|   :tada:   |     Start      |        프로젝트 시작        |
| :sparkles: |      Feat      |      새로운 기능 추가       |
|   :bug:    |      Fix       |          버그 수정          |
| :recycle:  |    Refactor    |        코드 리팩터링        |
| :lipstick: |     Style      |   스타일 추가 및 업데이트   |
| :package:  |     Chore      |   패키지 추가 및 업데이트   |
|  :books:   |      Docs      | 그 외 문서 추가 및 업데이트 |

### <br/>

