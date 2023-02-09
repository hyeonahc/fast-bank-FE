<br/>

<div align="center"><img src="./src/assets/images/logo.png" width="300"></div>

# 🏦 fastbank

## 📑 목차

- [🚀 프로젝트 실행하기](#-프로젝트-실행하기)
- [🗓 프로젝트 제작기간](#-프로젝트-제작기간)
- [✨ 프로젝트 소개](#-프로젝트-소개)
- [👀 데모](#데모)
  - [와이어프레임 링크](#와이어프레임-링크)
  - [목업 링크](#목업-링크)
  - [주요 페이지 목업](#주요-페이지-목업)
- [🪄 기술 스택](#-기술-스택)
  - [디자인 사용 소프트웨어](#디자인-사용-소프트웨어)
  - [프론트앤드 기술 스택](#프론트앤드-기술-스택)
  - [백앤드 기술 스택](#백앤드-기술-스택)
  - [기타 사용 툴](#기타-사용-툴)
- [🧑‍🤝‍🧑 업무 분배](#-업무-분배)
  - [프론트앤드 업무 분배](#프론트앤드-업무-분배)
  - [백앤드 업무 분배](#백앤드-업무-분배)

<br />

## 🚀 프로젝트 실행하기

1. 리포 클론하기: `git clone https://github.com/hyeonahc/fast-bank-FE.git`
2. 해당 디렉토리로 이동하기: `cd <YOUR_PROJECT_NAME>`.
3. 패키지 설치하기: `yarn install`
4. 프로젝트 실행하기: `yarn start`
5. 프로젝트 실행시 env 인증키가 필요하신 분은 [hyeonah.hello@gmail.com](hyeonah.hello@gmail.com)로 연락을 주시면 제공해드리겠습니다.

<br />

## 🗓 프로젝트 제작기간

2022년 8월 24일 - 2022년 09월 6일 (2주)

<br />

## ✨ 프로젝트 소개

패스트 뱅크는 사용자의 나이와 직업을 바탕으로 은행 상품을 추천해주고 상품을 신청할 수 있는 서비스 앱입니다.

- 아이디어: 사용자의 나이와 직업을 바탕으로 은행 상품을 추천해주고 상품을 신청할 수 있는 앱을 만들면 어떨까?
- 타겟: 은행에서 예금, 적금, 대출 상품을 신청하고 싶은 모든 사람

<br />

## 👀 데모

### 와이어프레임 링크

🔗 [Behance에서 와이어프레임 보기](https://www.behance.net/gallery/152030991/fastbank-wireframe)

### 목업 링크

🔗 [Behance에서 목업 보기](https://www.behance.net/gallery/152031065/fastbank-mockup)

### 주요 페이지 목업

| 로그인                                                                                                             | 회원가입                                                                                                           | 회원가입 성공시 모달창                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| ![1-SignIn](https://user-images.githubusercontent.com/83247825/188583431-50609b7f-06cb-47d5-bd1a-56eea40bafdb.png) | ![5-SignUp](https://user-images.githubusercontent.com/83247825/188583447-29fd454e-a8e7-4d88-b3b0-28a88b9220d6.png) | ![7-SignUp_Success](https://user-images.githubusercontent.com/83247825/188583453-22541475-dd4b-4baa-b6ac-b942bf5adc9d.png) |

<br/>

| 홈페이지 (전체 상품 페이지)                                                                                                 | 상품 상세 정보 모달창                                                                                                                        | 맞춤형 상품 페이지                                                                                                                |
| --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| ![8-AllProductsPage](https://user-images.githubusercontent.com/83247825/188583455-fa4c5beb-e57d-42e6-bca5-2f08ee2a620f.png) | ![10-AllProductsPage_ProductDetailed](https://user-images.githubusercontent.com/83247825/188583460-4c61d1eb-b1f8-433b-93e9-183ccad798ee.png) | ![11-PersonalProductsPage](https://user-images.githubusercontent.com/83247825/188583464-87376716-4a59-46ec-a8ce-e7a2d0d02168.png) |

<br/>

| 찜한 상품 페이지                                                                                                                  | 장바구니 페이지                                                                                                       | 404 페이지                                                                                                                |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| ![12-FavoriteProductsPage](https://user-images.githubusercontent.com/83247825/188583468-4a251b0e-cd65-45e4-a3db-3234adca6aba.png) | ![13-CartPage](https://user-images.githubusercontent.com/83247825/188583475-07152be3-68ae-4eeb-a142-7321fa3f48e9.png) | ![16-NotFoundPage](https://user-images.githubusercontent.com/83247825/188583479-40f7051d-96d1-4b9a-a600-a274a152161b.png) |

<br />

## 🪄 기술 스택

### 디자인 사용 소프트웨어

- **와이어프레임, 목업 제작**: Adobe XD

### 프론트앤드 기술 스택

🔗 프론트엔드 리포: [fast-bank-FE 보러가기](https://github.com/hyeonahc/fast-bank-FE)

- **라이브러리**: React.js
- **언어**: TypeScript
- **라우터**: Router-v6
- **상태관리 라이브러리**: Redux
- **API 요청**: Axios
- **스타일 적용**: styled-components, material-icons
- **기타**: ESLint, Prettier

### 백앤드 기술 스택

🔗 백엔드 리포: [fastbank-backend 보러가기](https://github.com/yongseungLeeDec/fastbank-backend)

- **언어**: Java 11
- **프레임워크**: Spring Boot (Spring Web, Spring Data JPA)
- **DBMS**: MariaDB
- **배포**: Amazon EC2, Amazon RDS (MariaDB), Nginx 웹 서버

### 기타 사용 툴

- **이슈관리**: Github Issue
- **문서화**: Notion
- **커뮤니케이션**: Slack, Zoom, Zepp

<br />

## 🧑‍🤝‍🧑 업무 분배

### 프론트앤드 업무 분배

|                                   조현아                                    |                  석광현                  |                          박인석                           |                김민구                |
| :-------------------------------------------------------------------------: | :--------------------------------------: | :-------------------------------------------------------: | :----------------------------------: |
|                  [@hyeonahc](https://github.com/hyeonahc)                   | [@Untest57](https://github.com/Untest57) |          [@isp1106](https://github.com/isp1106)           | [@kimmgu](https://github.com/kimmgu) |
| 와이어프레임, 목업 제작 <br/>회원가입, 로그인 페이지<br/>모달창, 404 페이지 |  맞춤형 상품 페이지<br/>장바구니 페이지  | 레이아웃, 네비게이션<br/>홈페이지 (전체 상품 페이지)<br/> |           찜한 상품 페이지           |

### 백앤드 업무 분배

|                                      조혜진                                      |                                          이용승                                           |
| :------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------: |
|                 [@Johyejin-119](https://github.com/Johyejin-119)                 |                  [@yongseungLeeDec](https://github.com/yongseungLeeDec)                   |
| 상품 검색 기능 구현<br />맞춤형 상품 제시 기능 구현<br />관심상품 관리 기능 구현 | 인증/인가 기능 구현<br />장바구니 관리 기능 구현<br />서버 배포 및 프론트엔드 연동 테스트 |
