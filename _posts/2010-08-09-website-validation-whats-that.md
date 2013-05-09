---
title: Website Validation, Whats That?
layout: default
categories:
- Web development
tags:
- Thoughts
- Opinions
---
# Website Validation, Whats That?

Despite HTML validation being a hot topic in web design circles for [more than seven years][1] I still meet a large number of web developers who are not aware of what website validation is, or why it is important. 

 [1]: http://simplebits.com/notebook/2002/10/20/october-20-2002/

![A list of html errors on a website showing little thought towards validation][2]

 [2]: http://www.waynemoir.com/wp-content/uploads/2010/08/website-validation-problems.png "A list of html errors on a website showing little thought towards validation"

During the course of my career I have been brought onto many projects rife with unnecessary and unwanted cross browser inconsistencies where these same developers have all but admitted defeat. The reality of this is that a large majority of the problems on these projects are positioning issues that could have been avoided with the use of valid HTML and a CSS reset.

The reason for this is simple, when a page does not validate to [W3C standards][3] the browser is given the freedom to interpret the error how it sees fit. When given this freedom it is easy to see why different browsers and often even different versions of the same browser behave differently when presented with the same source code.

 [3]: http://validator.w3.org/

For me this reason alone justifies the importance of HTML validation, however validation brings with it a number of additional benefits worth noting, these include:

*   Faster loading and reduced bandwidth usage
*   A solid foundation for accessibility
*   Improved search engine rankings
*   Easier to maintain mark-up

In addition to this, a lot of the time validation is something that is very easy to do. Often all that is needed to achieve validation is to add a closing tag here, move this element there, change that element to an equivalent that isn’t depreciated, and so on.

For the task of HTML validation itself I use and thoroughly recommend [HTML Tidy for Firefox][4] as the easiest way to make validation part of your daily life.

 [4]: https://addons.mozilla.org/en-US/firefox/addon/249/

For anyone looking for more information on HTML validation, I recommend the following resources:

*   [Why Validate?][5]
*   [Ten reasons to learn and use web standards][6]
*   [Use web standards or don’t bother redesigning][7]

 [5]: http://validator.w3.org/docs/why.html
 [6]: http://www.456bereastreet.com/archive/200512/ten_reasons_to_learn_and_use_web_standards/
 [7]: http://www.456bereastreet.com/archive/200601/failed_redesigns_use_web_standards_or_dont_bother_redesigning/