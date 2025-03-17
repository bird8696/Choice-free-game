# 🎮 Choice-Free Game: 선택 기반 텍스트 어드벤처 게임

## 📝 프로젝트 개요
Choice-Free Game은 **사용자의 선택에 따라 스토리가 달라지는 텍스트 어드벤처 게임**입니다.
프론트엔드와 백엔드가 분리된 풀스택 웹 애플리케이션으로, 직관적인 UI와 간단한 백엔드 API를 통해 게임 진행이 이루어집니다.

---

## 🔧 기술 스택

### **🖥️ 프론트엔드 (Client-Side)**
- **React.js** : 사용자 인터페이스(UI) 구현
- **Vite** : 빠른 개발 환경 및 빌드 성능 최적화
- **React Router** : 페이지 간의 이동 및 동적 라우팅 구현
- **Tailwind CSS** : 반응형 디자인 및 스타일링 최적화
- **Axios** : 백엔드 API와의 비동기 통신을 위한 HTTP 클라이언트

### **⚙️ 백엔드 (Server-Side)**
- **Node.js (Express.js)** : RESTful API 서버 구축
- **MongoDB (Mongoose)** : 게임 데이터 및 사용자 진행 상태 저장
- **JWT (JSON Web Token)** : 사용자 인증 및 보안 처리
- **WebSockets (Socket.io)** : 실시간 데이터 통신 (멀티플레이 기능 확장 가능)

### **📦 기타 DevOps & 배포**
- **Docker** : 컨테이너화하여 로컬 및 클라우드 환경에서 일관된 실행 환경 제공
- **AWS / Firebase** : 배포 및 데이터 저장 가능
- **ESLint & Prettier** : 코드 품질 유지 및 정적 분석 도구 적용

---

## 📥 설치 및 실행 방법

1️⃣ **리포지토리 클론**
```bash
git clone https://github.com/bird8696/Choice-free-game.git
```

2️⃣ **서버 설치 및 실행**
```bash
cd server
npm install
npm start
```

3️⃣ **클라이언트 설치 및 실행**
```bash
cd ../client
npm install
npm start
```

4️⃣ **브라우저에서 실행**
- `http://localhost:3000` 접속 후 게임 시작

---

## 📁 프로젝트 구조

📂 `server/` → 백엔드 API 및 데이터베이스 관리
📂 `client/` → 프론트엔드 React 애플리케이션
📂 `routes/` → Express 기반 API 라우트 관리
📂 `models/` → MongoDB 데이터 스키마 정의
📂 `components/` → React UI 컴포넌트
📂 `public/` → 정적 파일 및 이미지

---

## 🚀 주요 기능

✅ **선택 기반 게임 진행** : 사용자의 선택에 따라 다른 결과 제공
✅ **자동 저장 기능** : 사용자의 진행 상황을 DB에 저장하여 이어서 플레이 가능
✅ **JWT 인증 시스템** : 로그인 및 사용자 인증을 통한 개인화된 경험 제공
✅ **반응형 UI 디자인** : 모바일 및 데스크톱 환경 지원
✅ **API 기반 데이터 처리** : 백엔드에서 관리하는 게임 데이터 동적 로딩

---

## 🤝 기여 방법

1️⃣ **이슈 등록** : 버그 리포트 또는 기능 제안
2️⃣ **포크 후 수정** : 리포지토리를 포크한 후 원하는 기능 추가
3️⃣ **풀 리퀘스트 생성** : 수정 사항을 적용하고 PR 요청 보내기

---

## 📜 라이선스

📝 이 프로젝트는 **MIT 라이선스**를 따릅니다. 자세한 내용은 `LICENSE` 파일을 참고하세요.



사이트 주소 : http://3.36.95.133/login
