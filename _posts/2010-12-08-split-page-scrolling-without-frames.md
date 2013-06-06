---
title: Split Page Scrolling Without Frames
layout: post
---

Recently I was asked to develop a solution to the problem of displaying two independently scrollable content areas side by side in the browser window. 

The current solution used in the project didn’t work very well and involved a mixture of frames and a strict doctype, which is not valid in HTML4. The solution I came up with validates to HTML4 Strict and uses JavaScript to detect the window height. 

[View Demo](http://www.waynemoir.com/wp-content/uploads/2010/12/split.page.with.no.frames.html)