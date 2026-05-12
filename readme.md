# 이스트소프트 과정 소개 사이트 리뉴얼 (1차 프로젝트)
- 과정명: [13기]프론트엔드 개발자 부트캠프
- 1차 프로젝트: 2026/04/30 ~ 2026/05/12

## 빠른 링크
- 기획서 (피그마 슬라이드): https://www.figma.com/deck/jq4CKvl6IA4QmoDVmZ9EFF
- 디자인 원본 (피그마): https://www.figma.com/design/cTespbRD3YaC5cl353Z5At/%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%95%88?node-id=0-1&t=H6c5PgZvNAw2zCrh-1

## 1. 프로젝트 개요
### 1.1 목표
- 기존 정보 나열 중심의 구조에서 벗어나, 정보형 → 전환형 랜딩페이지 구조로 개선
- 사용자가 단순히 내용을 “읽는 것”을 넘어서, 자연스럽게 지원 / 문의 / 관심 - 행동으로 이어지도록 UX 흐름 설계
- 콘텐츠 흐름을 스토리라인처럼 구성하여, 상단에서는 핵심 가치 전달 → 중단에서는 신뢰 확보 → 하단에서는 행동 유도(CTA)로 연결되는 구조 구현
- 모바일 환경에서도 핵심 정보가 빠르게 인지될 수 있도록 스크롤 기반의 직관적인 정보 전달 구조 설계
- 불필요한 정보 탐색 과정을 줄이고, 사용자의 의사결정 속도를 높이는 경량 UX 구조 최적화

### 1.2 팀원

| 이름 | 역할 | 담당 섹션 | GitHub | 연락 |
|------|------|----------|--------|------|
| 김소영 | 팀장 | 회사소개 / 강사소개 / FAQ / CTA / Footer | [@s0y0ungk](https://github.com/s0y0ungk) | soyo2039@gmail.com |
| 최정원 | FE 리드 | 혜택 / 이벤트 / PR 영역 | - | picasomati@gmail.com |
| 김정우 | UI | 문제제기 / 프로그램 소개 | - | casperjwk@gmail.com |
| 김윤수 | UI | 목록/상세 / 검색 / 상태관리 / 접근성 | @garam-dev | kys5826911@gmail.com |
| 김찬희 | UI | Header / Hero | - | - |

### 1.3 단계별 진행

#### 1일차 — 팀 결성 및 시장 조사
- [ ]  팀장 선정, 팀명 선정
- [ ]  레퍼런스 조사 
- [ ]  리뉴얼 웹사이트 분석 및 제작 방향 설정 

#### 2일차 — 스토리보드 및 스타일 가이드 작성
- [ ]  Figma 스토리보드 작성
- [ ]  발표 자료 작성
- [ ]  스타일 가이드, 그리드 작성

#### 3일차 — 프로젝트 이해 & 환경 세팅
- [ ]  Figma 디자인 분석 (레이아웃, 색상, 폰트, 이미지 등 파악)
- [ ]  페이지 구성 요소 목록 작성 (헤더, 네비게이션, 섹션, 푸터 등)
- [ ]  필요한 이미지, 아이콘, 폰트 등의 자산 추출/준비
- [ ]  GitHub 저장소 생성 및 로컬 환경 연결

#### 4일차 — HTML 구조 구현
- [ ]  시맨틱 태그를 사용하여 전체 HTML 골격 작성
- [ ]  헤더/메뉴/메인 섹션/푸터의 기본 마크업 완료
- [ ]  각 섹션별 더미 텍스트/이미지 삽입

#### 5일차 — CSS 기본 스타일링
- [ ]  Figma 기준 색상, 폰트, 간격 적용
- [ ]  공통 스타일(리셋·폰트·변수) 적용
- [ ]  공통요소 스타일 적용
- [ ]  헤더·메인·푸터 등 주요 파트 스타일 완성

#### 6일차 — 세부 디자인 반영
- [ ]  버튼·폼·이미지 등 세부 요소 스타일링
- [ ]  Figma와 디자인 비교·오차 수정
- [ ]  웹표준 & 웹접근성 검사 및 수정
- [ ]  코드 정리 및 주석 작성

#### 7일차 — 기능 점검 & 배포 준비
- [ ]  크로스 브라우저 테스트(Chrome, Edge 등)
- [ ]  ReadMe.md 작성
- [ ]  GitHub Pages 배포 설정
- [ ]  배포 후 URL 공유

```mermaid
gantt
    title Project Timeline (Milestones)
    dateFormat  YYYY-MM-DD
    excludes    weekends

    section 기획
    레퍼런스 조사 및 기획 발표 준비 :a1, 2026-04-28, 1d
    기획 발표                         :a2, 2026-04-29, 1d

    section 디자인
    디자인 최종 완성                  :b1, 2026-04-30, 6d

    section 구현
    디자인 수정 및 코드 구현          :c1, 2026-05-06, 2d
    핵심 코드 구현                    :c2, 2026-05-07, 3d

    section 반응형 / 검토
    모바일 반응형 구현 및 검토        :d1, 2026-05-10, 2d

    section 최종
    최종 발표                         :e1, 2026-05-12, 1d
```
### 1.5 주요 기능

#### 사용자/관리자 관리
- Supabase Auth 기반의 이메일 로그인 시스템을 통해 사용자 인증 구조를 구현
- 관리자 계정과 일반 사용자의 권한을 분리하여 콘텐츠 관리 기능을 제한적으로 제공
- Row Level Security(RLS)를 적용하여 데이터 접근 권한을 서버 레벨에서 제어함으로써 보안성을 강화

#### 프로젝트 관리
- 프로젝트 정보를 등록할 수 있는 구조로 구성 (제목, 설명, 이미지, 링크, 후기 등)
- Supabase Storage를 활용하여 이미지 업로드 및 관리 기능 구현
- 목록 → 상세 페이지로 이어지는 정보 구조를 통해 콘텐츠 탐색 흐름 설계
- 썸네일 이미지와 상세 이미지를 분리하여 시각적 계층 구조를 명확하게 구성

#### 부가 기능
- 기술 스택 및 카테고리 기반 검색/필터 기능을 통해 원하는 정보 탐색 효율 개선
- 페이지네이션 또는 무한 스크롤 구조를 통해 대량 데이터 탐색 UX 최적화
- 모바일, 태블릿, 데스크톱 환경을 모두 고려한 반응형 레이아웃 구현
- SEO 및 Open Graph(OG) 태그 설정을 통해 외부 공유 및 검색 노출 최적화

---
## 2. 개발 환경 및 배포

### 2.1 개발 스택

#### Frontend
- **Framework**:Next.js 15 (App Router)
- **Language**: HTML / CSS
- **Styling**: CSS Modules + CSS Variables 기반 디자인 시스템
- **Routing**: Next.js App Router
- **Image Handling**: next/image
- **State Management**: 기본 DOM 기반 구조 + 최소 클라이언트 상태 관리

#### Backend (BaaS)
- **Database**: Database: Supabase (PostgreSQL)
- **Auth**: upabase Auth (이메일 로그인)
- **Storage**: Supabase Storage (이미지 업로드)

#### Tools
- **Version Control**: Git & GitHub
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions (테스트 및 배포 자동화)
- **Design**: Figma

### 2.2 배포 URL
- **Production**: https://s0y0ungk.github.io/est_fe_13_1st_project/

### 2.3 개발 컨벤션 가이드

프로젝트에서 사용하는 HTML, CSS, JavaScript 작성 규칙은 아래 문서를 참고하세요.

- [HTML 컨벤션](-)
- [CSS 컨벤션](-)

## 3. 라우팅 구조
| 경로                 | 설명                     | 접근 권한 |
| ------------------ | ---------------------- | ----- |
| `/`                | 메인 홈 (랜딩 페이지 / 섹션형 구성) | 전체    |
| `/problem`         | 문제 제기 / 프로그램 소개        | 전체    |
| `/benefit`         | 혜택 / 이벤트 / PR 영역       | 전체    |
| `/process`         | 과정 소개 / 진행 구조          | 전체    |
| `/review`          | 수강생 후기                 | 전체    |
| `/company`         | 회사 소개                  | 전체    |
| `/lecturer`        | 강사진 소개                 | 전체    |
| `/faq`             | 자주 묻는 질문               | 전체    |
| `/cta`             | 지원 유도 영역               | 전체    |
| `/admin/login`     | 관리자 로그인 페이지            | 비로그인  |
| `/admin/dashboard` | 콘텐츠 관리 대시보드            | 관리자   |
| `/admin/insert`    | 콘텐츠 등록 페이지             | 관리자   |
| `/admin/edit/[id]` | 콘텐츠 수정 페이지             | 관리자   |

---

## 4. 데이터 흐름
```mermaid
sequenceDiagram
    actor User as 사용자
    actor Admin as 관리자
    participant FE as Next.js Frontend
    participant SB as Supabase (Auth / DB / Storage)

    %% 사용자 흐름 (조회)
    User->>FE: 랜딩페이지 접속
    FE->>SB: 프로젝트 목록 조회 요청
    SB-->>FE: 프로젝트 데이터 반환
    FE-->>User: 리스트 / 상세 페이지 렌더링

    %% 관리자 로그인
    Admin->>FE: 로그인 정보 입력
    FE->>SB: Auth 요청
    SB-->>FE: 토큰 + 사용자 정보 반환
    FE->>FE: 로그인 상태 저장 (쿠키/세션)

    %% 관리자 CRUD
    Admin->>FE: 프로젝트 등록 요청
    FE->>SB: DB Insert + 이미지 업로드 요청
    SB-->>FE: 저장 성공 응답
    FE-->>Admin: 관리 페이지 갱신

    Admin->>FE: 프로젝트 수정/삭제 요청
    FE->>SB: DB Update/Delete 요청
    SB-->>FE: 결과 반환
    FE-->>Admin: 변경된 리스트 반영
```


## 5. 프로젝트 구조
```
1ST_PROJECT/
├─ CSS/
│  ├─ common.css
│  ├─ flex-utility.css
│  ├─ index.css
│  ├─ normalize.css
│  ├─ reset.css
│  └─ responsive.css
├─ images/
├─ common.html
├─ index.html
└─ readme.md
```

## 6. 아키텍처

## 7. 향후 개선 사항
- 모바일 환경에서의 인터랙션 및 UI 디테일 개선
- 섹션별 애니메이션 및 스크롤 기반 인터랙션 추가
- CTA(지원 유도) 전환율 개선을 위한 UX 구조 최적화
- 검색 및 필터 기능 고도화 (카테고리 확장)
- 콘텐츠 관리 편의성을 위한 관리자 페이지 개선
- 이미지 최적화 및 로딩 성능 개선 (Lazy loading 적용)
- SEO 및 Open Graph 설정 강화로 외부 유입 개선
- 코드 구조 리팩토링 및 컴포넌트 재사용성 향상
