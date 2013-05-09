---
title: Disadvantages to Lazy Loading
layout: default
categories:
- Web development
tags:
- Thoughts
- Opinions
---
# Disadvantages to Lazy Loading

[Lazy loading][1] for images is a great idea, **in theory**. Deferring the loading of images until such time as they are required means a shorter initial loading time for the user, great! Reducing unnecessary traffic if the user leaves the page before reaching the end of the article means smaller hosting bills, brilliant! However in my experience the story doesn’t really go to plan.

 [1]: http://en.wikipedia.org/wiki/Lazy_loading

[PhotoTuts ][2]is a website that provides very useful and well written photography articles. Despite this I don’t spend anywhere near the amount to time I could, or would like to, visiting the site and always leave frustrated. The reason for this? The lazy image loader.

 [2]: http://photo.tutsplus.com/

Images are a fairly essential part of PhotoTuts, because of this I’m sure the hosting bill must be huge so I can understand why they use lazy loading images. For many maybe this works perfectly, but for me a lot of the time the images fail to load at all. Sometimes it seems it is down to the lazy loading script failing to detect where I am on the page, in this case the images eventually load after a lot of frantic scrolling. Other times despite my best efforts the images refuse to load and I am forced to refresh the page and cross my fingers. This spoils the user experience for me to the point where I think twice about visiting the site even when I otherwise wouldn’t hesitate to do so.

Whether this problem is unique to the site, the script or my particular browsing set-up I couldn’t say. What I do know is that as a user it is far easier for me to be lazy and simply visit a different site than attempt to trouble shoot the issue, and so that is what I do.

Am I the only one that experiences this frustration?