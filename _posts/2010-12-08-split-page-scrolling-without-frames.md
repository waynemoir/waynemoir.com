---
layout: post

title: Split Page Scrolling Without Frames
redirect_from: "/articles/2010/12/split-page-scrolling-without-frames/"

categories:
- Web design
---

Recently I was asked to develop a solution to the problem of displaying two independently scrollable content areas side by side in the browser window.

The current solution used in the project didn’t work very well and involved a mixture of frames and a strict doctype, which is not valid in HTML4. The solution I came up with validates to HTML4 Strict and uses JavaScript to detect the window height.

<a href="/demos/split-page-with-no-frames/" class="btn">Demo</a>