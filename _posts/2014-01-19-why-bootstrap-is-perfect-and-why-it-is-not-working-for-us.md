---
layout: post

title: Why Bootstrap is perfect and why it is not working for us

categories:
- Visual design
- Interaction design
---

In may 2012 I joined a newly formed User Experience team in a company that had previously survived without any design influence. Building this team from the ground up gave us great freedom in deciding how we wanted to work, but came with significant cultural baggage.

Driving cultural change will be both the biggest challenge and the biggest reward for the team, it will be a very long and difficult road and successful travel will depend on building relationships, trust and buy-in.

Our first step down this road was the introduction of a common visual and interaction design language: a component and pattern library. The natural evolution of the style guide this tool provides guidance on the way components and patterns should look, information on how they should work, descriptions of the problems they are best suited to solve and all the code necessary to create them.



## Starting from scratch
Having decent technical skills within the team we decided to dive straight in and write our own CSS framework on which to build this library. During this time developers would approach us daily asking if various components were available to use on existing pages, when the answer was no we scrambled to put something together before a stand alone solution was built and value in the library was diminished. Chasing after development like this lead to many wrong turns. Many components were developed that appeared flexible on the surface but proved unworkable as time went on, interactions were janky, design decisions were not backed by user research and nothing had the level of polish you would expect from professionals.

This lead to our framework having an unstable base, we were releasing new versions daily and any release could bring with it a breaking change requiring existing implementations to be revisited. It was a dangerous time; developers were becoming nervous about taking each new release, we were risking getting into a version lock internally and our framework being dead in the water.

In the meantime the company's products weren't standing still. Design work for new features was required and our small team was split between taking on project work that directly impacted the experience of the end products or developing components to move the library towards its MVP.

Work on the framework slowed, <a href="http://gettingreal.37signals.com/ch04_Ignore_Details_Early_On.php">too much time was being spent working on the details too early on</a>. We didn't have a year long sprint zero to iron out the details involved in building a solid framework before it was picked up for use in production, we needed a serious leg up to get ourselves ahead of the development so we could stop playing catch up, stop focusing so heavily on code and deliverables, and start focusing on improving actual experiences.




## Bootstrap hand holding
So we put our custom framework aside, we adopted Bootstrap and the difference was like night and day. Straight off the block we went from feeling overwhelmed and reactive to having a solid component library.

Bootstrap gave us our common language and it gave us a code base that wasn't going to fundamentally change from one day to the next. So we built upon it, adding custom components, plug-ins and additional documentation. What we were heading towards and what Bootstrap had showed us we needed was a total front end framework.

Critically Bootstrap gave us instant company wide impact and made the rest of the business stand up and take note, change was coming. The first project undertaken with it was delivered faster, smoother and with a more consistent interface than any project previously. The second was better still, everything was perfect, we were moving ahead of development and finally had room to breath.

The business as a whole had started to buy into our vision and was seeing the benefits in the form of ease of maintenance, reduced development time, speed of moving straight from paper prototypes to production code and the ability for employees to move between teams with greater ease.  Our library was firmly routed as the go to means for tackling visual and interaction design problems within the business.




## Not all roses
Bootstrap version 2.1.0 was the latest version available at the time and is what we based the component library on. Out of the box Bootstrap came heavily styled, this styling didn't fit in with the vision for the product so we set about bring the styling on brand.

The Bootstrap variables alone proved to be insufficient for the level of customizations required so we settled on a structure that left the core files alone to prevent ourselves getting into a version lock and overrode the default styling with more CSS where required. The cost of this came in the file size and the complexity of the compiled CSS, with so many overrides required this quickly spiraled out of control.

The many different variations of components Bootstrap provides, such as the different form layout methods and grid systems, were a godsend when we started out. Practically everything we needed was already available so we could hit the ground running, but this flexibility quickly become a nightmare for maintaining visual consistency within the application. Too much flexibility was hurting us.

Switching out our in-house framework for Bootstrap in our products was hard. Our vague class names like "denied" felt like a good idea at the time but were a nightmare to locate in the code base. Replacing these with equally vague Bootstrap class names was painful, this was a lesson we learned too late to do anything about this time round but going forwards every component we add to our library will be name spaced. I would recommend watching <a href="http://www.youtube.com/watch?v=xbpnqbM6cRk">When Bootstrap Attacks by Pamela Fox</a> for a more in depth look at this issue.

Eventually we learned to let go, we concluded that Bootstraps goals and our goals were different enough that we shouldn't worry about locking into a particular version. Instead we should back away slowly by editing the core files as required to change styles, remove component variations that don't belong in our library and "name space all the things".



## Context is everything
I believe that for us, for version 1, Bootstrap was the right choice at the right time. Perhaps a less stylistic framework like Inuit.css might have worked better for longer but Bootstrap did exactly what it was designed to do; "kick start development of web applications and sites" and it did that amazing well.

What happened was that our context changed, we are no longer in the first iteration kick starting phase. Our ball is rolling, we have a solid idea of how we will iterate future versions of the library and a solid base for the UI oriented members of the team to work from. Giving the reset of the team room to focus on all the parts of UX that are not UI.

Thanks Bootstrap