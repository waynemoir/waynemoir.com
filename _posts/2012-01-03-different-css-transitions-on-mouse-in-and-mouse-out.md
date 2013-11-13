---
layout: post

title: Different CSS Transitions on Mouse In and Mouse Out

categories:
- Front end development
---

Prior to CSS3 the most effective way to implement mouse hover animations was using JavaScript. Now that cross browser CSS3 transitions support has grown beyond being restricted to WebKit I have started experimenting more with transitions and quickly came across the problem of wanting to use a different transition effects on mouse in and mouse out events.

![Mouse in and out transition](/img/content/vary-transition-on-mouse-in-out.jpg)

Initially looking at the syntax for this it doesn’t appear to be possible, however this can be done using the following simple trick as originally documented on [Design Shack](http://www.designshack.net/articles/css/mastering-mouse-enter-and-exit-events-with-css-transitions/) and [CSS Tricks](http://css-tricks.com/different-transitions-for-hover-on-hover-off/).

	div {
		background: #000;
		color: #fff;
		margin:  auto;
		padding: 100px ;
		transition: border-radius 0.5s ease-in;
		text-align: center;
		width: 200px;
	}

	div:hover {
		background: gray;
		border-radius: 100px;
		transition: all 1s ease;
		transform: rotate(720deg);
	}

The key to achieving the desired behaviour on mouse in and mouse out is to specify the mouse over transition in the hover state and the mouse out transition in the regular state.

[View demo](http://jsfiddle.net/QKUdx/1/)