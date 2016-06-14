# Baseline
Method for baselining fonts on the web. 

View example and read more at: http://shalanah.github.io/baseline

## 1. Baseline font with FontSquirrel

Essentially we are moving the baseline of the font, which typically sits somewhere in the middle of the em-square, to the absolute bottom of the em-square.

- Go to [FontSquirrel Generator](https://www.fontsquirrel.com/tools/webfont-generator)
- Click on "EXPERT..." mode
- Under "Vertical Metrics", select Custom Alignment
- Set your custom alignment to: **Ascent: 2048**, **Descent: 0**, **LineGap: 0**
- Download your kit and include font files and relevent CSS.

## 2. Markup
```html
<p> <!-- block text element -->
  <span clas='base'> <!-- enscapsulating inline element -->
    Text...
  </span>
</p>
```

## 3. CSS
```css
/*--- 
 One time set up... 
 ---*/
body {
  font-family: 'Lato_Light'; /* Baseline font for main container */
  line-height: 1; /* Line-height matches set font-size */
}
.base:before { /* Moving baseline (1em to match font-size of block, which is our line-height) */
  content: '';
  height: 1em;
  display: inline-block; 
}
.base {
  line-height: 0; /* For good measure, removes extra space below baseline, in IE/FF */
}

/*--- 
 Sample text element, with grid=20px 
 ---*/
h1 {
  font-family: 'Lato_Thin'; /* Baselined font */
  font-size: 80px; /* Acts as line-height (multiple of grid) */
  margin-bottom: 40px; /* Vertical margins must be mutliple of grid */
}
h1 > .base {
  font-size: 70px; /* Font-size of text, does NOT need to be grid based */
}
```

## BONUS! Sass mixin
### Mixin
```scss
@mixin baseTextInit($container, $selector, $baselineFont) {
  #{$selector} {
    line-height: 0;
  }
  #{$selector}:before {
    content: '';
    height: 1em;
    display: inline-block;
  }
  #{$container} {
    font-family: $baselineFont
  }
}

@mixin baseTextBlock($selector, $lineHeight, $fontSize) {
  font-size: $lineHeight; // should be a multiple of grid
  > #{$selector} {
    font-size: $fontSize; // does not need to be a multiple of grid
  }
}
```
### Typography.scss
```scss
@include baseTextInit( // one time set up
  $container: 'body',
  $selector: '.base'
  $baselineFont: 'Lato_Light'
)
h1 {
  font-family: 'Lato_Thin';
  margin-bottom: 2 * 20px; // mutliple of grid
  @include baseText(
    $selector: '.base',
    $lineHeight: 4 * 20px, // mutliple of grid
    $fontSize: 70px
  )
}
```

### To take a look, download this repo then...
1. Install dependencies with `npm install`
2. Run `gulp` to create an updated `main.css`
