## Pretendard font 사용 가이드

상세 내용은 [Pretendard 공식 github repository](https://github.com/orioncactus/pretendard)를 참조

## 다운로드

[여기](https://github.com/orioncactus/pretendard/releases/tag/v1.3.5)에서 다운로드 가능


## CDN 을 통해 불러오기

### HTML link tag
```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css" />
```

### CSS import syntax
```css
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css");
```

이 외에도 다이나믹 서브셋, 가변 폰트를 제공 하고 있음

## font-family 설정
```css
html, body {
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}
```
