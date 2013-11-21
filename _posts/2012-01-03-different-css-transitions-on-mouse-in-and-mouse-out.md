---
layout: post

title: Different CSS Transitions on Mouse In and Mouse Out

categories:
- Web Design
---

Prior to CSS3 the most effective way to implement mouse hover animations was using JavaScript. Now that cross browser CSS3 transitions support has grown beyond being restricted to WebKit I have started experimenting more with transitions and quickly came across the problem of wanting to use a different transition effects on mouse in and mouse out events.

![Mouse in and out transition](/img/content/vary-transition-on-mouse-in-out.jpg)

Initially looking at the syntax for this it doesn’t appear to be possible, however this can be done using a simple trick originally documented on [Design Shack](http://www.designshack.net/articles/css/mastering-mouse-enter-and-exit-events-with-css-transitions/) and [CSS Tricks](http://css-tricks.com/different-transitions-for-hover-on-hover-off/).

<p data-height="300" data-theme-id="2540" data-slug-hash="tmCAi" data-user="waynemoir" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/waynemoir/pen/tmCAi'>Different CSS Transitions on Mouse In and Mouse Out</a> by Wayne Moir (<a href='http://codepen.io/waynemoir'>@waynemoir</a>) on <a href='http://codepen.io'>CodePen</a></p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

The key to achieving the desired behaviour on mouse in and mouse out is to specify the mouse over transition in the hover state and the mouse out transition in the regular state.