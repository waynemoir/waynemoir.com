---
layout: post

title: JavaScript Exercises

categories:
- Web design
---

Lately I have been focusing on developing my knowledge of JavaScript as I feel that the ability to write custom JavaScript is the weak spot in my skill set. Whilst doing so I have found [books](http://www.amazon.co.uk/Learning-JavaScript-Sparkle-Life-Pages/dp/0596521871/ref=sr_1_3?s=books&ie=UTF8&qid=1296042370&sr=1-3) and [online resources](http://www.w3schools.com/js/) to be an excellent source of knowledge. However one area that I have found both these resources to be lacking in is the reinforcement of this knowledge through practical application. To help me practice and further develop my skills I have been setting myself exercises. I am posting both these and my solutions here for future reference and to aid anyone else that may wish to practice.


## Exercise 1.1
Prompt the user to enter their name.

<div data-height="82" data-theme-id="0" data-slug-hash="CAsfm" data-user="waynemoir" data-default-tab="js" class='codepen'><pre><code>var name=prompt(&quot;Please enter your name&quot;);</code></pre>
<p>See the Pen <a href='http://codepen.io/waynemoir/pen/CAsfm'>%= penName %></a> by Wayne Moir (<a href='http://codepen.io/waynemoir'>@waynemoir</a>) on <a href='http://codepen.io'>CodePen</a></p>
</div><script async src="//codepen.io/assets/embed/ei.js"></script>




## Exercise 1.2
Use a pop-up box to welcome the user.

    var name=prompt("Please enter your name");
    alert("Hello "   name);





## Exercise 1.3
Display today’s date on the page in the following format: November 25, 2010.
	var currentTime = new Date();
	var year = currentTime.getFullYear();
	var month = currentTime.getMonth()   1;
	var day = currentTime.getDate();

	if (month == 01){
		month = "January";
	}
	else if (month == 02){
		month = "February";
	}
	else if (month == 03){
		month = "March";
	}
	else if (month == 04){
		month = "April";
	}
	else if (month == 05){
		month = "May";
	}
	else if (month == 06){
		month = "June";
	}
	else if (month == 07){
		month = "July";
	}
	else if (month == 08){
		month = "August";
	}
	else if (month == 09){
		month = "September";
	}
	else if (month == 10){
		month = "October";
	}
	else if (month == 11){
		month = "November";
	}
	else if (month == 12){
		month = "December";
	}
	document.write(month   " "   day   ", "   year   ".");




## Exercise 1.4
Display the last modified date of the document.
    var fileModified = document.lastModified;
    document.write("This file was last modified: "   fileModified);




## Exercise 1.5
Display a greeting based on the time of day. For example; Good Morning if it is in the morning or Good Afternoon if it is the afternoon.

