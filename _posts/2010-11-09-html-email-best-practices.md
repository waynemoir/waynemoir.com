---
title: HTML E-mail Best Practices
layout: default
categories:
- Web development
tags:
- HTML Email
- Tools
---
# HTML E-mail Best Practices

HTML e-mail, and in particular newsletters, is an area that is very challenging to design and code. The biggest obstacle is that there are so many different clients available for reading email, each of which can display the same e-mail in vastly different ways. Even when the HTML e-mail is displayed properly by the software, the user preferences can be modified extensively; making the final layout even more difficult to predict. This makes testing HTML e-mail a far more challenging task than testing the cross browser compatibility of web sites.

HTML support in e-mail clients is a long way behind HTML support in browsers in terms of standards and support for them. This means that when coding HTML e-mail the rules of semantic clean mark-up and the separation of content and presentation go straight out the window if any kind of cross client compatibility is hoped to be achieved.

In my experience following the best practices below provides the greatest chance of success.

## Content

*   Use a consistent senders name and e-mail address. Avoid using a fictional or irrelevant sender’s name, instead communicate with your recipient personally.
*   Write an attractive subject line, [The Art of the Subject Line][1].
*   Mark your newsletters in a consistent way to make it easier for your readers to recognize your newsletter. For example by using a tag line at the beginning of the subject line.
*   Write an attention grabbing headline, [How to Write Headlines That Work][2].
*   Include a clear and specific reminder of how subscribers got onto your list. This gives context for your message and reduces the likelihood of your message being marked as spam.
*   Ensure that all copy is well-formatted, making the message easier to read and easier to act on.
*   Never put a link before important information, users that follow the link will be left at the target location without context and may mark the message as spam.
*   Prioritise content, start with the most valuable information. Your reader should be able to glance at the top of the e-mail and know immediately if it’s worth reading.
*   Ensure all images use the alt, height, and width attributes.
*   Consider the purpose of the e-mail and include a clear call to action based on this.
*   Always check the ‘spam score’ of your newsletters before sending, [SpamCheck][3].
*   Test your newsletters before sending them, once they have been sent they cant be taken back.

 [1]: http://www.imediaconnection.com/content/6909.asp
 [2]: http://www.copyblogger.com/how-to-write-headlines-that-work/
 [3]: http://spamcheck.sitesell.com/

## Design

*   Include a prominent unsubscribe link.
*   Ensure the e-mail design provides a visual connection to the brand.
*   Many people don’t actually open their email; they instead view them in the preview panel. Always design your emails to a maximum width of 600px.

## Coding

*   Tables for layout is a necessary evil as HTML compatibility across clients is inconsistent.
*   CSS support is poor, compatibility is improved across clients by using inline CSS. [Guide to CSS support in e-mail clients][4]
*   Many e-mail clients ignore background colours specified in CSS, use a container table for body background colours.
*   Borders don’t work.
*   Some e-mail clients overwrite link colours with their defaults, this can be avoid by specifying the style inline and in a redundant span inside the a tag. 
        
        Wayne Moir>
        
        

*   Images should be stored on a web server and linked to rather that included in the e-mail in order to reduce the possibility of image blocking. [Image Blocking in E-mail Clients][5]
*   Avoid using JavaScript, most e-mail clients will disable it anyway.
*   Use the target=”_blank” attribute for the a tags, so that people who read with web mail services don’t have the requested page appear within their web mail interface.

 [4]: http://www.campaignmonitor.com/css/
 [5]: http://www.campaignmonitor.com/blog/post/2559/current-conditions-and-best-pr-1/

## Other

*   Motivate your users to add you to their white lists.
*   Always insert the current date in the content, if the date isn’t mentioned or is provided incorrectly the spam score will be increased.
*   Verify your subscribers with sign up confirmation. This means that when a user subscribes to your mailing list, they will be sent an e-mail with a link that they must click on to confirm their subscription. This provides a way of validating the e-mail address and reduces the possibility of being reported as spam.

## Inspiration

*   [Templates Gallery – Campaign Monitor][6]
*   [Beautiful E-mail Newsletters][7]
*   [Gallery – Campaign Monitor][8]
*   [Showcase Of 30 Sweet E-mail Newsletter Designs – Spyre Studios][9]
*   [The Basics for E-mail Template Design – DesignM.ag][10]

 [6]: http://www.campaignmonitor.com/templates/
 [7]: http://www.beautiful-email-newsletters.com/
 [8]: http://www.campaignmonitor.com/gallery/
 [9]: http://spyrestudios.com/showcase-of-email-newsletter-designs/
 [10]: http://designm.ag/resources/the-basics-for-email-template-design/

## Resources

*   [Principles of Beautiful HTML E-mail – SitePoint][11]
*   [E-mail design guidelines – Campaign Monitor][12]
*   [How to Code HTML E-mail Newsletters – SitePoint][13]
*   [20 E-mail Design Best Practices and Resources for Beginners – Nettuts ][14]
*   [E-mail Newsletter Design: Guidelines And Examples – Smashing Magazine][15]
*   [UK Election E-mail Newsletters Rated – Jakob Nielsen][16]
*   [Best Practices For Bulletproof E-Mail Delivery – Smashing Magazine][17]
*   [The getting started checklist for new clients – Campaign Monitor][18]
*   [31 content tips and ideas for your B2B e-mail newsletter – E-mail-Marketing-Reports][19]
*   [10 Definitive Tips for Writing Captivating E-mails – Six Revisions][20]
*   [Design and Build E-mail Newsletters Without Losing Your Mind (and Soul) – Smashing Magazine][21]
*   [Guide to Creating E-mail Newsletters – Webdesigner Depot][22]
*   [10 Design Lessons From HTML E-mail Templates That Actually Sell – Design Shack][23]
*   [How To Code HTML E-mail Newsletters – Reach Customers Online][24]

 [11]: http://articles.sitepoint.com/article/principles-beautiful-html-email
 [12]: http://www.campaignmonitor.com/design-guidelines/
 [13]: http://articles.sitepoint.com/article/code-html-email-newsletters
 [14]: http://net.tutsplus.com/tutorials/html-css-techniques/20-email-design-best-practices-and-resources-for-beginners/
 [15]: http://www.smashingmagazine.com/2010/02/15/email-newsletters-guidelines-and-examples/
 [16]: http://www.useit.com/alertbox/uk-email-newsletters.html
 [17]: http://www.smashingmagazine.com/2007/10/16/best-practices-for-bulletproof-e-mail-delivery/
 [18]: http://www.campaignmonitor.com/resources/entry/559/the-getting-started-checklist-for-new-clients/
 [19]: http://www.email-marketing-reports.com/newsletters/content.htm
 [20]: http://sixrevisions.com/project-management/10-definitive-tips-for-writing-captivating-emails/
 [21]: http://www.smashingmagazine.com/2010/01/19/design-and-build-an-email-newsletter-without-losing-your-mind/
 [22]: http://www.webdesignerdepot.com/2009/11/a-guide-to-creating-email-newsletters/
 [23]: http://designshack.co.uk/articles/graphics/10-design-lessons-from-html-email-templates-that-actually-sell
 [24]: http://www.reachcustomersonline.com/2010/01/23/09.27.00/