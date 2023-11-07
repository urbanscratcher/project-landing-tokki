# 토끼 소주 랜딩 페이지

## 소개
CSS와 HTML를 자세히 배운 후 처음 제작해 본 1페이지의 랜딩 페이지 

## 프로젝트 이야기
- 좋아하던 브랜드 '토끼 소주'의 pdf 브로셔를 발견, 이를 토대로 랜딩 페이지를 제작
- 특별한 기능보다는 섹션별로 랜딩 페이지에서 나타나는 다양한 패턴을 구현에 집중
- 뼈대는 피그마에서 UI 키트를 이용해 구성했고, 브랜드의 성격에 맞춰 폰트와 주요 컬러를 선택
- 개인 프로젝트라 오버스펙이긴 하지만, 배워보고 싶었던 기술들도 곁가지로 사용. 아무래도 제한이 없고 태스크도 단순하다 보니 오히려 이것저것 실험을 많이 해 본
- 이 프로젝트 덕분에 CSS나 HTML 구조화에 대해 완전히 익숙해졌지만, 까다로웠던 작업은 역시 Carousel Slide, 모달 구현, 모바일 메뉴 변환
- 그래도 절대적인 양으로는 디자인 고민에 시간을 가장 많이 할애했던 것 같다. 혼자 하는 작업이긴 해도, 코딩하면서 디자인하는 것보다 디자인(계획)을 먼저하고 코딩 하는 등 두 과정을 잘 분리하는 게 효율적인 것 같다.
- Atomic Design을 공부하면서 컴포넌트를 atoms, molecules, organisms 등으로 나누어 보았는데 이론적으로는 이해가 갔지만, 직관적이지는 않았다. Presentational한 컴포넌트와 기능이 있는 컴포넌트로 나누는 방식이 더 나은 것 같았다.

## 링크
https://project-landing-tokki.vercel.app

## 라이브러리 & 기술
- 구현: HTML, CSS(SASS), TypeScript
  - SASS는 css module 형태로 사용
  - BEM 네이밍을 활용한 CSS, TailwindCSS, Bootstrap 등과 비교해 보고 싶어 사용
    - 결론적으로 말하면, 컴포넌트 단위로 쪼개다 보니 너무 세세하게 분리돼 버려서 비효율적이었다.
    - 그렇지만 스타일의 변수 및 함수화가 가능하고, nested 구조로 깔끔하게 작성이 가능해서 순수 CSS보다 사용이 편리했다.
- 프레임워크: Nextjs 13
  - 랜딩 페이지용으론 당연히 필요하진 않지만, 맛보기로 NextJs에 대해 공부하고, 13버전의 Image Optimization에 대해서도 알고 싶어 사용해 보았다.
- 배포: Vercel

## 피그마 링크
https://www.figma.com/file/0MKWzzPJg3VToNgVaSROHB/%5BProject%5D-Landing-Page---Tokki-Soju?type=design&node-id=2203%3A104&mode=design&t=A7s7zEhXK9P8PSh6-1

## 개인 기여도
100%
