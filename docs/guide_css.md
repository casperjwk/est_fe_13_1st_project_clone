## 1. 기본 원칙

- CSS3 표준 속성 우선 사용
- 불필요한 중복 스타일 제거
- 재사용 가능한 구조 우선 작성
- 유지보수 가능한 코드 지향

---

## 2. 코드 스타일
- 들여쓰기: 스페이스 2칸 사용
- 모든 속성은 구조적으로 정렬

### 속성 선언 순서
공통요소 → 타이포그래피 → 시작적효과 → 박스모델

[csscommon.css](/css/common.css)
```
.selector {
  /* 레이아웃 */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
body {
  font:
    var(--base-font)/var(--base-unit) "Pretendard",
    sans-serif;
  background: var(--background);
}
```
## 3. 핵심 원칙
- 중복 스타일 최소화
- 구조 먼저, 디자인 나중
- 일관된 속성 순서 유지
- 읽기 쉬운 코드 작성