---
title: Why Bootstrap worked for us, and why it isnt
layout: post
---

One year ago almost to the day I made the move from small CSS to big CSS

started custom inhouse framework, but this gave us instant Modularized and nestable components. = not geinventing the wheel
expected to deliver from day one, instant impact significant enough show the benifits of a consistant ui and core framework
competent design team, but newly established. 101 things to do. bigger wins through consistancy (js duplication, file structure, ui appearance)
Faster development 
tested by 1000s, more dev power to fix (see bug handling)
quick win for creating common layouts (admin, see bootstrap template) giving us more time to focus on complicated an bespoke ux wins 
standard approach when developing in the front-end helps maintainability and promotes re-usability.
showed us exactly what the front end needed 'total front end framework'


compiled file size (CSS)
complications of overrides (.btn) to prevent version lock
LESS weaknesses
inflexibiliy of the grid system (csswizardy grids)
bug handling
flexibility of components (forms, fixed/fluid grid) a godsend as what you want is already there (x-domain), but a nightmare for consistany (in-app). difficult to remove form and gird styles that have no place in your app but to keep others

grid system = not usual complaint of unsymantic (http://www.wearecube.ch/limitations-of-twitter-bootstrap/). this type of grid is exactly what you need. but this is not flexible enough!

ie7 support. v3 drops it, we need it. inuit doesnt do it but shows the cost

doesnt go far enough, jquery ui for datepicker, jqgrid, select2. compatibility with plugins already established in the business means that alot of the core bootstrap components we are not taking advantage of

started as twitters style guide, we need to dial it back from 11. simaltaniously goes too far (css) and not far enough (date picker etc) for a web app

# Not hating bootstrap
did exactly what it was designed to do. "designed to kickstart development of webapps and sites"
now the ball is rolling, we have outgrown it


where now
foundation or the like is just swapping one devil for the other

going inuit.css





"Mike Donahue • It's not fair to blame a framework for sites that look alike. The lack of skill or ambition on the part of the designer/developer. As the saying goes "It's poor musician that blames his instrument." 

Frameworks are meant to built up from, not as solutions as is. Any framework has unlimited potential in the the hands of a skilled craftsman.""