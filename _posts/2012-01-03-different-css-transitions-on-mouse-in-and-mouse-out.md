---
title: Different CSS Transitions on Mouse In and Mouse Out
author: wayne.moir
layout: default
categories:
- CSS
tags:
- CSS
- Transitions
---
# 

Prior to CSS3 the most effective way to implement mouse hover animations was using JavaScript. Now that cross browser CSS3 transitions support has grown beyond being restricted to WebKit I have started experimenting more with transitions and quickly came across the problem of wanting to use a different transition effects on mouse in and mouse out events.

![Mouse in and out transition][1]

 [1]: http://www.waynemoir.com/wp-content/uploads/2012/01/mouseinout.jpg "Mouse In Out"

Initially looking at the syntax for this it doesn’t appear to be possible, however this can be done using the following simple trick as originally documented on [Design Shack][2] and [CSS Tricks][3].

 [2]: http://www.designshack.net/articles/css/mastering-mouse-enter-and-exit-events-with-css-transitions/
 [3]: http://css-tricks.com/different-transitions-for-hover-on-hover-off/

    div &#123;
        background: black;
        color: #fff;
        margin:  auto;
        padding: 100px ;
      -webkit-transition: -webkit-border-radius 0.5s ease-in;
      -moz-transition: -moz-border-radius 0.5s ease-in;
      -o-transition: border-radius 0.5s ease-in;
      -ms-transition: border-radius 0.5s ease-in;
        transition: border-radius 0.5s ease-in;
        text-align: center;
        width: 200px;
    &#125;
    &nbsp;
    div:hover &#123;
        background: gray;
      -webkit-border-radius: 100px;
      -moz-border-radius: 100px;
        border-radius: 100px;
      -webkit-transition: all 1s ease;
      -moz-transition: all 1s ease;
      -o-transition: all 1s ease;
      -ms-transition: all 1s ease;
        transition: all 1s ease;
      -webkit-transform: rotate&#40;720deg&#41;;
      -moz-transform: rotate&#40;720deg&#41;;
      -o-transform: rotate&#40;720deg&#41;;
      -ms-transform: rotate&#40;720deg&#41;;
        transform: rotate&#40;720deg&#41;;
    &#125;

The key to achieving the desired behaviour on mouse in and mouse out is to specify the mouse over transition in the hover state and the mouse out transition in the regular state.

[View demo][4]

 [4]: http://jsfiddle.net/QKUdx/1/