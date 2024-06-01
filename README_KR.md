# 토끼 소주

2023년 3월
CSS와 HTML를 자세히 배운 후 처음으로 제작해 본 1페이지의 랜딩 페이지입니다. 실제 좋아하던 브랜드 '토끼 소주'의 pdf 브로셔를 발견, 이를 토대로 랜딩 페이지를 제작해 보았습니다.

## Features

- **다양한 랜딩 페이지 패턴**: 히어로 섹션, 기능 목록, Z-패턴, 테스티모니얼 섹션, Carousel 갤러리, FAQ, CTA 폼 등과 같은 다양한 랜딩 페이지 패턴을 적용해 보았습니다.
- **캐러셀 슬라이드**: 캐러셀 슬라이드 기능을 구현하여, 사용자들이 쉽게 여러 이미지를 볼 수 있도록 했습니다. 앞뒤 이미지는 블러 처리되어 전환 효과를 내고, 아래에는 동그라미 버튼을 통해 슬라이드 위치를 이동할 수 있습니다.
- **모달 창**: 제품 상세 정보에서는 모달 창을 활용했습니다. 제품 상세 버튼을 클릭하면 모달 창이 나타나며, 창 외부를 클릭하면 사라집니다.
- **반응형 디자인**: 반응형 디자인을 적용해 다양한 디바이스에서 적절히 보여지도록 했습니다. 모바일 화면에서는 헤더 메뉴가 모바일 메뉴로 자동 전환됩니다.

## Technical Focus

- 특별한 기능보다는 랜딩 페이지에서의 다양한 패턴을 구현하는 데 초점을 맞췄습니다.
- 초기 디자인 구상은 피그마에서 UI 키트를 이용했고, 브랜드의 특성에 맞게 폰트와 주요 컬러를 선택했습니다.
- 스타일링시 `SCSS`는 BEM 네이밍 규칙을 따르며 CSS 모듈 형식으로 작성했습니다.
- Next.js는 랜딩 페이지에 적합한 도구는 아니지만, Next.js를 학습하기 위해 프로젝트를 감싸는 정도로 활용했습니다.

## Demo

<video controls>
  <source src="https://github.com/urbanscratcher/project-landing-tokki/assets/17016494/d2e8502a-232d-4b69-8b6d-13b75f0a5b6a" type="video/webm">
  Your browser does not support the video tag.
</video>

[사이트 바로가기](https://project-landing-tokki.vercel.app)

## Tech Stack

### 프론트 엔드

- **프레임워크**: Next.js 13
- **언어**: TypeScript
- **스타일링**: SCSS

### 백엔드

- 없음

### 데이터베이스

- 없음

### 개발 환경

- **소스 코드**: GitHub
- **패키지 관리**: pnpm

### 클라우드 서비스 및 배포

- **호스팅 및 배포**: Vercel

## 디자인 과정

1. 브로셔 파일을 보며 어떤 내용을 넣을지 선정했습니다.

2. 어떤 패턴을 넣을지 구상합니다.

<video src="https://github.com/urbanscratcher/project-landing-tokki/assets/17016494/ff1059fc-fd03-4e0a-a0bf-608280f427aa" controls></video>

3. 제품에 맞는 컬러를 선택하고, 패턴에 맞게 내용을 넣거나 조정했습니다.

<video src="https://github.com/urbanscratcher/project-landing-tokki/assets/17016494/5465da04-633f-4579-90fe-14131326aa50" controls></video>

[피그마 바로가기](https://www.figma.com/design/tXAVttydu8o7QMzKN9w8sa/%5BProject%5D-Landing-page---Tokki-Soju?node-id=0-1&t=NNSwLCldMbakCyl1-1)

---

## Reflection

- 프로젝트 목표와 비교했을 때 기술 스택이 다소 과잉이었던 것 같다. 다만 이를 통해 새로운 기술을 익히고 실험할 수 있는 기회가 되었다.
- `CSS`와 `HTML`의 구조에 대해 보다 더 깊게 이해할 수 있었던 프로젝트였다. 특히 캐러셀 슬라이드, 모달창 구현, 모바일 메뉴 변환과 같은 어려운 작업을 해결하면서 많은 것을 배웠다.
- 디자인 고민에 시간을 가장 많이 할애했던 것 같다. 혼자 하는 작업이긴 해도, 코딩하면서 디자인하는 것보다 디자인과 기획을 우선 고려하고, 이후에 코딩하는 방식이 효율적이었다.
- Atomic Design을 적용하면서 컴포넌트를 나누는 것에 대해 고민해 보았다. 이론적인 부분은 이해가 되었지만, 직관적이지는 않아 실제로는 컴포넌트를 어떻게 나누는 것이 가장 효율적인지에 대한 고민이 필요했다. 프로젝트 초기에는 더미 컴포넌트와 기능이 있는 컴포넌트로 나누는 방식이 더 나은 것 같다.
- BEM 네이밍과 `SCSS`를 함께 사용해 보니 중첩 구조로 깔끔하게 작성이 가능해서 코드 구조화와 유지보수에 유리하다고 생각했다.
