# 🏦 Simple Remittance System (간단한 송금 시스템)

**간단한 송금 시스템**을 구현한 프로젝트입니다.  
사용자가 본인의 계좌에서 다른 계좌로 송금하고, 거래 내역을 조회할 수 있도록 설계되었습니다.

**Spring Boot + React 기반의 풀스택 프로젝트**로,  
실시간 송금 처리와 거래 내역 조회 기능을 포함하고 있습니다.

---

## 📌 주요 기능

- 사용자 인증 (JWT 기반 로그인)
- 계좌 조회 및 송금 기능
- 송금 요청 시 금액 검증 및 거래 처리
- 거래 내역 전체 조회
- 송금/입금 필터, 기간 필터 기능
- 계좌번호 포맷 적용 (2-3-3)
- 거래 내역 디자인 개선 (송금/입금 아이콘, 금액 강조, 복사 기능 등)

---

## 🚀 진행 상황

### 🔥 현재까지 구현된 기능

- 사용자 인증 및 계좌 조회 API 개발 완료
- 송금 요청 API 개발 완료
- 거래 내역 조회 API 개발 완료
- 프론트엔드 송금 요청 UI 구현
- 거래 내역 조회 화면 구현
    - 거래 필터 기능 (입금/송금/전체)
    - 기간 필터 기능 (1개월, 3개월, 6개월, 전체)
    - 거래일 포맷, 계좌번호 포맷, 복사 기능 적용
    - 거래내역 카드 UI 개선

---

### 🟢 다음 진행 예정 기능

- 거래 상세보기 모달 기능
- 거래 금액 요약 표시 (이번 달 총 입금/송금 금액)
- 거래 검색 기능 (상대 계좌번호, 금액 기준)
- 거래 내역 페이지네이션 또는 무한 스크롤
- 관리자 기능, 장애 로그, 알림 기능 (추후 확장 예정)
- CI/CD, MSA, Kubernetes 환경 구축 (추후)

---

## 🛠 기술 스택

### 🔹 Backend
- **Spring Boot** - REST API 서버
- **PostgreSQL** - 데이터베이스
- **Docker** - 컨테이너 환경
- **JWT** - 사용자 인증

### 🔹 Frontend
- **React** - UI 개발
- **Axios** - API 통신
- **Tailwind CSS** - UI 스타일링
- **lucide-react** - 아이콘 사용

---

## 🚀 프로젝트 실행 방법

### 1️⃣ Backend 실행
```bash
# 프로젝트 클론
git clone https://github.com/soyoonjeong2328/EzPay.git
cd simple-remittance-system/backend

# 환경 설정 (DB, Kafka 등)
docker-compose up -d

# Spring Boot 실행
./gradlew bootRun