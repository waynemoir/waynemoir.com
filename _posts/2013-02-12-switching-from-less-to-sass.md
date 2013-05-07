---
title: Switching from LESS to Sass
author: wayne.moir
layout: default
categories:
- CSS
---
# 

At work we currently use the LESS preprocessor to build our CSS framework and have been finding lots of situations where Sass @extend would help us better optimise our outputted CSS. This is a short write up of the pros and cons of each for our context:

## Pro neither

*   Bootstrap is built on LESS, there is a Sass branch
*   The syntax can be easily switched: 
    *   LESS @ is directly equivalent to Sass $
    *   When writing mixins: LESS .border-radius() {} would become Sass @mixin border-radius() {}
    *   When using mixins: LESS .border-radius; would become Sass @inlcude border-radius(); OR @extend border-radius();
*   Both have a large community
*   Both are seeing active development, Sass used to be more active but LESS has recently seen a surge in development

## Pro LESS

*   With regard contributing to the projects: Sass is built with Ruby and LESS is built with JavaScript. Our JavaScript skills are stronger than our Ruby skills
*   As we currently use LESS, no additional work would be required

## Pro Sass

*   FireSass (Firefox) and Sass Inspector (Chrome) and powerful debugging tools, nothing like these exist for LESS
*   Autocompile is a standard feature in Sass, WinLESS can autocompile but has problems with @include
*   CSS3 helpers and spriting are built in to Compass
*   Sass is seen as the "jQuery of the preprocessor world" by Jonathan Verrecchia, and the community, therefore is probably the better choice for personal development
*   Sass @extend can help to optimise our CSS output, massively
*   If statements can be used to keep IE hacks in the context of the CSS module, but then pull them out at build time into a seperate CSS file
*   Sass has actual logical and looping operators in the language. if/then/else statements, for loops, while loops, and each loops
*   Sass has nicer @media support as you can name the breakpoints

## Sass FYI
*   Putting an underscore before the filename tells Sass not to generate a CSS file
*   Scout is a free GUI compiler but it does not support –debug-info, Compass.app does but costs $10. Command line supports it and is free, but its the command line

## Resources

*   [Dive deep into CSS preprocessors with Jonathan Verrecchia][1]
*   [Sass vs LESS on CSS tricks][2]
*   [Sass vs LESS on Hongkiat][3]
*   [The Sass Way Blog][4]

 [1]: http://www.youtube.com/watch?gl=GB&client=mv-google&hl=en-GB&v=FlW2vvl0yvo&nomobile=1
 [2]: http://css-tricks.com/sass-vs-less/
 [3]: http://www.hongkiat.com/blog/sass-vs-less/
 [4]: http://thesassway.com/