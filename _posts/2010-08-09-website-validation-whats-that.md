---
layout: post

title: Website Validation, Whats That?
redirect_from: "/articles/2010/08/website-validation-whats-that/"

categories:
- Web Design
---

Despite HTML validation being a hot topic in web design circles for [more than seven years](http://simplebits.com/notebook/2002/10/20/october-20-2002/) I still meet a large number of web professionals who are not aware of what HTML validation is or why it is important.

![A list of html errors on a page showing little thought towards validation](/img/content/website-validation-problems.png)

During the course of my career I have been brought onto many projects rife with unnecessary and unwanted cross browser inconsistencies where these same developers have all but admitted defeat. The reality of this is that a large majority of the problems on these projects are basic layout issues that could have been avoided with the use of valid HTML.

The reason for this is that when a page does not validate to [W3C standards](http://validator.w3.org/) the browser is given the freedom to interpret the error how it sees fit. When given this freedom it is easy to see why different browsers and often different versions of the same browser, behave differently when presented with the same source code.

For me this reason alone justifies the importance of HTML validation, however validation brings with it a number of additional benefits worth noting, these can include:

*   Faster loading and reduced bandwidth usage
*   A solid foundation for accessibility
*   Improved search engine rankings
*   Easier maintenance

In addition to this, a lot of the time validation is something that is very easy to do. Often all that is needed to achieve validation is to add a closing tag here, move this element there, change that element to an equivalent that isn’t depreciated, and so on.

For the task of HTML validation itself I use and thoroughly recommend [HTML Tidy for Firefox](https://addons.mozilla.org/en-US/firefox/addon/249/) as the easiest way to make validation part of your daily life.

For anyone looking for more information on HTML validation, I recommend the following resources:

*   [Why Validate?](http://validator.w3.org/docs/why.html)
*   [Ten reasons to learn and use web standards](http://www.456bereastreet.com/archive/200512/ten_reasons_to_learn_and_use_web_standards/)
*   [Use web standards or don’t bother redesigning](http://www.456bereastreet.com/archive/200601/failed_redesigns_use_web_standards_or_dont_bother_redesigning/)