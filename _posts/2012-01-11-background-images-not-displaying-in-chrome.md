---
title: Background Images Not Displaying in Chrome
layout: default
categories:
- Web development
tags:
- CSS
---
# Background Images Not Displaying in Chrome

Recently I switched my default browser from Firefox to Chrome, in doing so came across a strange issue with background images not displaying on a number of sites when using Chrome. Investigation into this showed that the image to the path and was correct, as was the CSS to display it.

![Chrome and Firefox Background Image][1]

 [1]: http://www.waynemoir.com/wp-content/uploads/2012/01/chrome-firefox-background-image.jpg "Chrome and Firefox Background Image"

The problem came down to the fact that in the CSS the background-image was only being attached to the body element, this was sufficient for every other browser I tried but Chrome required the background-image also be attached to the html before the image would load.

    /* Not working */
    body &#123;
        background-image: url&#40;../images/bg-primary.jpg&#41;; 
    &#125; 
    &nbsp;
    /* Working */
    html, 
    body &#123;
        background-image: url&#40;../images/bg-primary.jpg&#41;; 
    &#125;