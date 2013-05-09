---
title: HTML5 Elements in Internet Explorer
layout: default
categories:
- Web development
tags:
- HTML
- JavaScript
- Tools
---
# HTML5 Elements in Internet Explorer

The HTML5 specification is still a working draft and it is estimated that it could be 2022 before it becomes a W3C Recommendation, however **HTML5 is ready to use today!**

![A HTML5 page displayed correctly in Firefox][1]  
A HTML5 test page displayed correctly by default in Firefox 3

 [1]: http://www.waynemoir.com/wp-content/uploads/2011/01/firefox.jpg "A HTML5 page displayed correctly in Firefox"

## The Caveat

From a mark-up point of the view HTML5 is supported in the latest release of all the major browsers with the exception of Internet Explorer, thankfully this issue can easily be resolved using a little JavaScript.

![A HTML5 page displayed incorrectly in Internet Explorer 8][2]  
A HTML5 test page displayed incorrectly in Internet Explorer 8

 [2]: http://www.waynemoir.com/wp-content/uploads/2011/01/ie.jpg "A HTML5 page displayed incorrectly in Internet Explorer 8"

## Measuring the impact

Being a big advocate of accessibility in websites, one of the first thoughts that come to mind when learning about this technique was “What if the user has JavaScript disabled?”. The answer of course is that any HTML5 sections of the layout will fall back to being unstyled, but how much of a problem is this?

This question can be answered by studying your analytics data which will tell you how much of an impact this will have on your visitors, hopefully providing you with enough information to make you comfortable using this work around. It is important to note that if your analytics’s software uses JavaScript to track statistics, as Google Analytics does, then you wont be capturing how many users have JavaScript disabled. An [alternative solution][3] is required for this statistic to be tracked.

 [3]: http://remysharp.com/2009/10/15/the-missing-stat-noscript/

Studying the analytics data for [Thank The Forces][4] reviled that whilst 66% of visitors to the site are using Internet Explorer, less than 1% of ALL visitors have JavaScript disabled; therefore for this website the use of this work around was deemed an acceptable solution with a minimal effect to the users.

 [4]: http://www.thanktheforces.org.uk

## Resolving the Issue

The JavaScript to fix this issue, discovered by [Sjoerd Visscher][5], is as simple as calling the following code in the head of the page.

 [5]: http://intertwingly.net/blog/2008/01/22/Best-Standards-Support#c1201006277

    document.createElement('article');
    document.createElement('aside');
    document.createElement('command');
    document.createElement('figure');
    document.createElement('footer');
    document.createElement('header');
    document.createElement('hgroup');
    document.createElement('menu');
    document.createElement('nav');
    document.createElement('section');
    document.createElement('time');
    

[View a demo page without the fix][6][View a demo page with the fix applied][7]

 [6]: http://www.waynemoir.com/wp-content/uploads/2011/01/html5-demo/html5.html
 [7]: http://www.waynemoir.com/wp-content/uploads/2011/01/html5-demo/html5iefix.html

![A HTML5 page displayed correctly in Internet Explorer 8][8]  
A HTML5 test page displayed correctly after the fix in Internet Explorer 8

 [8]: http://www.waynemoir.com/wp-content/uploads/2011/01/iefixed.jpg "A HTML5 page displayed correctly in Internet Explorer 8"