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
![Untitled](https://user-images.githubusercontent.com/15073430/161224428-2d068f2e-9833-4ccc-8602-0f59a5916e49.png)

1. 휴양림 데이터 조회는 한 번에 10개씩 무한 스크롤로 조회해야 합니다. 무한 스크롤은 라이브러리를 사용하지 말고 직접 구현해 주세요.  
    ![Untitled (1)](https://user-images.githubusercontent.com/15073430/161224480-10a5114d-5559-418f-82a7-89dc7cbd5430.png)
    
2. 휴양림 데이터 목록에서 [1 .메인화면]으로 이동할 수 있는 버튼이 있어야 합니다.(위 <)
3. 목록 중 하나를 선택하면 [3. 휴양림 저장 폼]을 노출시켜야 합니다.

## 저장된 휴양림 목록

![Untitled (2)](https://user-images.githubusercontent.com/15073430/161224567-07da00a7-9ca3-4c6b-a161-c716f5ce2a1b.png)

1. 저장이 완료되면 그에 따른 피드백이 유저에게 제공되어야 합니다.
2. 저장된 휴양림 목록 중 하나를 선택하면 [5. 휴양림 수정 폼]이 노출되어야 합니다.

## 휴양림 저장, 수정 폼
![Untitled (3)](https://user-images.githubusercontent.com/15073430/161225036-dcae8cdd-2f4c-4e75-b2bb-dabf2e1dc8d1.png)

1. 유저는 반드시 메모를 입력해야 합니다.
2. 모달의 외부 화면을 클릭하면 모달이 사라져야 합니다.
3. 유저는 삭제 버튼을 눌러 저장된 데이터를 삭제할 수 있습니다.
4. 유저는 수정 버튼을 눌러 메모를 수정 할 수 있습니다.
5. 데이터의 저장은 서버가 아니라 브라우저의 로컬 스토리지에 합니다.  
    
    ![Untitled (1)](https://user-images.githubusercontent.com/15073430/161224801-bd95ce3b-7e1f-473f-9d4d-d23f30ca5aab.png)

6. 메모가 빈 상태에서는 수정할 수 없습니다.

    ![Untitled](https://user-images.githubusercontent.com/15073430/161224914-53608583-54ff-46ab-b159-ea436acf1731.png)

## 검색

1. 유저는 이름, 주소, 메모 중 최소 두 가지 조건 중 하나를 선택해 검색할 수 있어야 합니다.
    
    ![Untitled (2)](https://user-images.githubusercontent.com/15073430/161224998-871e2d1f-1a28-493a-ac48-19dcf4118b20.png)


### 어려웠던 점 ****(에러 핸들링)****

1. CORS 
    cors에러를 proxy-middleware를 통해 해결하였지만, 배포 환경에서는 다른 설정이 필요했다.  
    netlify를 통해 배포를 하면 https로 만들어지기 때문에 https를 http로 리다이렉트 해주어야 했다.
`http-proxy-middleware`   
    
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
    overflow auto를 통해 스크롤을 만들었지만 스크롤이 나타나지 않았다.
    height의 크기를 지정해 주지 않아서 overflow가 일어나지 않았기 때문이었다.
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

