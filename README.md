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
# 더블엔씨 기업과제

## 과제

충청북도 휴양림 중 마음에 드는 곳에 메모를 남겨 저장하는 서비스

1. 휴양림 데이터 목록
2. 휴양림 저장, 수정 폼
3. 저장된 휴양림 목록

## **Stack**

`Javascript` `React` `Styled-Components`

### library

`axios` `http-proxy-middleware`   

## 휴양림 데이터 목록

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bd7a568f-f506-4919-8e28-ad5ef3f32b79/Untitled.png)

1. 휴양림 데이터 조회는 한 번에 10개씩 무한 스크롤로 조회해야 합니다. 무한 스크롤은 라이브러리를 사용하지 말고 직접 구현해 주세요.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/536f04f8-7ddc-4f3d-8ee4-053f2982ba5d/Untitled.png)
    
2. 휴양림 데이터 목록에서 [1 .메인화면]으로 이동할 수 있는 버튼이 있어야 합니다.(위 <)
3. 목록 중 하나를 선택하면 [3. 휴양림 저장 폼]을 노출시켜야 합니다.

## 저장된 휴양림 목록

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/04ce1a5f-4a64-4643-99b8-50744b2d9620/Untitled.png)

1. 저장이 완료되면 그에 따른 피드백이 유저에게 제공되어야 합니다.
2. 저장된 휴양림 목록 중 하나를 선택하면 [5. 휴양림 수정 폼]이 노출되어야 합니다.

## 휴양림 저장, 수정 폼

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1514bdfd-c641-41a5-9a78-25c1066e2c23/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e081728b-a400-4ae2-ac54-0c8c07515255/Untitled.png)

1. 유저는 반드시 메모를 입력해야 합니다.
2. 모달의 외부 화면을 클릭하면 모달이 사라져야 합니다.
3. 유저는 삭제 버튼을 눌러 저장된 데이터를 삭제할 수 있습니다.
4. 유저는 수정 버튼을 눌러 메모를 수정 할 수 있습니다.
5. 데이터의 저장은 서버가 아니라 브라우저의 로컬 스토리지에 합니다.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f7ff0cd6-ca1f-4b40-ae8e-ee336dda9ce6/Untitled.png)
    
6. 메모가 빈 상태에서는 수정할 수 없습니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/48c8dad5-7d85-4056-be1b-5cee2682c188/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cdc16240-723b-4e07-a717-3b9622c36f12/Untitled.png)

## 검색

1. 유저는 이름, 주소, 메모 중 최소 두 가지 조건 중 하나를 선택해 검색할 수 있어야 합니다.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3f1c2b39-db45-4147-a008-0e4b38ea413f/Untitled.png)
    

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
![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d825a874-e0ae-4449-8a1f-af2d6deee624/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/771045cf-4b9c-4426-884e-23f8540c206b/Untitled.png)
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

