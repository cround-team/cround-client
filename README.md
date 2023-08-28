# 🧑🏻‍💻 Cround Client Repo

---

## 🚀 시작하기

**로컬에서 실행**

```
# 로컬 환경에 Clone하기
git clone https://github.com/cround-team/cround-client.git

# 디펜던시 설치하기
yarn

# 개발 서버 실행하기
yarn dev
```

**크라운드 바로가기**

---

## 📔 개발 스택

- Typescript
- React
- Next.js
- React-query
- Styled-components

---

## 브랜치 전략

```javascript
|-- master
    |-- develop
        |-- <label>/<#issue number>/<내용>
```

---

## 규칙

> 다른 시점의 나를 위한..

### 이슈

1. 이슈 생성 후 PR
2. `develop` 브랜치 `merge`

### 커밋 메시지

- [gitmoji 공식문서](https://gitmoji.dev/)
- **`<label>: <commit message> (#issue number)`**

|        이모티콘        |          문자          |                설명                 |
| :--------------------: | :--------------------: | :---------------------------------: |
|           💄           |       `lipstick`       |  UI, 스타일 관련 파일 추가 및 수정  |
|           ✨           |       `sparkles`       |       기능 개발 및 기능 수정        |
|           🐛           |         `bug`          |              버그 해결              |
|           ♻️           |       `recycle`        |            코드 리팩토링            |
|           📝           |         `memo`         |          문서 추가 및 수정          |
|           🚚           |        `truck`         |          파일, 경로, 변경           |
|           🔥           |         `fire`         |          삭제(파일, 코드)           |
|           🩹           |   `adhesive_bandage`   | 단순한, critical하지 않은 이슈 수정 |
| :closed_lock_with_key: | `closed_lock_with_key` |         설정 파일 업데이트          |
|           🍱           |        `bento`         | asset 파일(이미지, 아이콘 등) 추가  |
|   :white_check_mark:   |   `white_check_mark`   |          테스트 추가/수정           |

---
