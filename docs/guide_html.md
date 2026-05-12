# EAST CAMP 14기 프론트엔드 프로젝트 컨벤션 가이드

본 문서는 프로젝트의 코드 일관성 유지와 협업 효율성을 위해 작성되었습니다.

---

## 1. 문서 구조
- HTML5 표준 문법 사용
- `<!DOCTYPE html>` 선언 필수
- `lang="ko"` 반드시 명시

```
html
<!DOCTYPE html>
<html lang="ko">
```
## 기본 구조는 항상 아래 순서 유지
 - header
 - nav
 - main
 - footer

- 페이지는 반드시 section 단위 컴포넌트 구조로 구성

## 2. 들여쓰기와 공백
- 들여쓰기는 **스페이스 2칸**
- 중첩 구조는 depth 기준 정렬
- 불필요한 공백 및 빈 줄 제거
- 주석은 섹션 단위로 구분

## 3. 시멘틱 태그 사용
- 의미에 맞는 HTML 태그 사용 (\`header\`, \`nav\`, \`main\`, \`footer\`, \`article\`, \`section\` 등)
- UI 블록은 반드시 section 단위로 분리
```
<section class="benefit inner-pd">
```
- div는 레이아웃 목적 또는 container 용도로만 사용

## 4. 클래스 네이밍 규칙
- 컴포넌트 단위로 구조 인식 가능하게 작성
- 기능 + 역할 기반 네이밍
## 예시
- hero-btn-group
- benefit-cards
- instructor-card
- footer-bottom
- nav-panel

## 5. Utility Class 사용 규칙
- layout 관련 스타일은 utility class 활용
- 반복되는 스타일은 CSS 변수 기반 관리

## 6. 속성 작성 순서
1. \`id\`, \`class\`
2. \`name\`, \`data-*\`
3. \`src\`, \`href\`, \`type\`, \`alt\`
4. \`role\`, \`aria-*\`

## 7. 접근성
- 이미지에 \`alt\` 속성 필수
- 폼 요소에는 \`label\` 연결
- 버튼은 의미가 명확한 텍스트 사용

## 8. 이미지 및 미디어 사용 규칙
- 장식용 이미지는 CSS background 사용
- 콘텐츠 이미지만 <img> 사용
- 모든 이미지에 alt 필수 작성

## 9. 인터랙션 구현 기준
## 가능한 경우 CSS로 구현
 -  sticky
 -  fixed

- 스크롤 UI는 JS 최소화
- JS는 이벤트 기반 보조 용도로만 사용

## 9. 컴포넌트 구조 기준
- 모든 UI는 section 단위로 분리
- 독립적으로 재사용 가능하게 구성
### 대표 구조
- hero
- problem
- program
- benefit
- result
- review
- process
- company
- lecturer
- faq
- cta
- footer

## 11. 컨테이너 구조 규칙
- 모든 section 내부는 .container로 정렬 기준 통일
- inner-pd로 섹션 간 여백 관리

## 12. 인터랙션 구조 (현재 프로젝트 기준)
- checkbox 기반 mobile nav 사용
- nav-panel은 header 외부 구조로 분리
- JS 없이 CSS로 토글 구현

## 10. 최종 원칙
- 의미 없는 마크업 금지
- 구조 중심으로 작성
- 유지보수 가능한 HTML 작성
- 시멘틱 우선