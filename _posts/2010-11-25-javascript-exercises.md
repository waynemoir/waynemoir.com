---
layout: post

title: JavaScript Exercises
redirect_from: "/articles/2010/11/javascript-exercises/"

categories:
- Web design
---

Lately I have been focusing on developing my knowledge of JavaScript as I feel that the ability to write custom JavaScript is the weak spot in my skill set. Whilst doing so I have found [books](http://www.amazon.co.uk/Learning-JavaScript-Sparkle-Life-Pages/dp/0596521871/ref=sr_1_3?s=books&ie=UTF8&qid=1296042370&sr=1-3) and [online resources](http://www.w3schools.com/js/) to be an excellent source of knowledge. However one area that I have found both these resources to be lacking in is the reinforcement of this knowledge through practical application. To help me practice and further develop my skills I have been setting myself exercises. I am posting both these and my solutions here for future reference and to aid anyone else that may wish to practice.


## Exercise 1.1
Prompt the user to enter their name.

<div data-height="85" data-theme-id="0" data-slug-hash="CAsfm" data-user="waynemoir" data-default-tab="js" class='codepen'><pre><code>var name=prompt(&quot;Please enter your name&quot;);</code></pre>
<p>See the Pen <a href='http://codepen.io/waynemoir/pen/CAsfm'>%= penName %</a> by Wayne Moir (<a href='http://codepen.io/waynemoir'>@waynemoir</a>) on <a href='http://codepen.io'>CodePen</a></p>
</div><script async src="//codepen.io/assets/embed/ei.js"></script>




## Exercise 1.2
Use a pop-up box to welcome the user.

<div data-height="105" data-theme-id="2540" data-slug-hash="LyGDe" data-user="waynemoir" data-default-tab="js" class='codepen'><pre><code>var name=prompt(&quot;Please enter your name&quot;);
alert(&quot;Hello &quot;   name);</code></pre>
<p>See the Pen <a href='http://codepen.io/waynemoir/pen/LyGDe'>%= penName %</a> by Wayne Moir (<a href='http://codepen.io/waynemoir'>@waynemoir</a>) on <a href='http://codepen.io'>CodePen</a></p>
</div><script async src="//codepen.io/assets/embed/ei.js"></script>





## Exercise 1.3
Display today’s date on the page in the following format: November 25, 2010.

<div data-height="268" data-theme-id="2540" data-slug-hash="ikobF" data-user="waynemoir" data-default-tab="js" class='codepen'><pre><code>var currentTime = new Date();
				var year = currentTime.getFullYear();
				var month = currentTime.getMonth() + 1;
				var day = currentTime.getDate();

				if (month == 01){
					month = &quot;January&quot;;
				}
				else if (month == 02){
					month = &quot;February&quot;;
				}
				else if (month == 03){
					month = &quot;March&quot;;
				}
				else if (month == 04){
					month = &quot;April&quot;;
				}
				else if (month == 05){
					month = &quot;May&quot;;
				}
				else if (month == 06){
					month = &quot;June&quot;;
				}
				else if (month == 07){
					month = &quot;July&quot;;
				}
				else if (month == 08){
					month = &quot;August&quot;;
				}
				else if (month == 09){
					month = &quot;September&quot;;
				}
				else if (month == 10){
					month = &quot;October&quot;;
				}
				else if (month == 11){
					month = &quot;November&quot;;
				}
				else if (month == 12){
					month = &quot;December&quot;;
				}
				document.write(month + &quot; &quot; + day + &quot;, &quot; + year + &quot;.&quot;);</code></pre>
<p>See the Pen <a href='http://codepen.io/waynemoir/pen/ikobF'>%= penName %</a> by Wayne Moir (<a href='http://codepen.io/waynemoir'>@waynemoir</a>) on <a href='http://codepen.io'>CodePen</a></p>
</div><script async src="//codepen.io/assets/embed/ei.js"></script>




## Exercise 1.4
Display the last modified date of the document.

<div data-height="108" data-theme-id="2540" data-slug-hash="DaGqj" data-user="waynemoir" data-default-tab="js" class='codepen'><pre><code>var fileModified = document.lastModified;
document.write(&quot;This file was last modified: &quot; + fileModified);</code></pre>
<p>See the Pen <a href='http://codepen.io/waynemoir/pen/DaGqj'>%= penName %</a> by Wayne Moir (<a href='http://codepen.io/waynemoir'>@waynemoir</a>) on <a href='http://codepen.io'>CodePen</a></p>
</div><script async src="//codepen.io/assets/embed/ei.js"></script>




## Exercise 1.5
Display a greeting based on the time of day. For example; Good Morning if it is in the morning or Good Afternoon if it is the afternoon.

<div data-height="268" data-theme-id="2540" data-slug-hash="rxnEy" data-user="waynemoir" data-default-tab="js" class='codepen'><pre><code>				var currentTime = new Date();
				var hour = currentTime.getHours();
				if (hour &gt;= 6 &amp;&amp; hour &lt;= 12 ){
					document.write(&quot;Morning&quot;);
				} else if (hour &gt;= 13 &amp;&amp; hour &lt;= 18 ){
					document.write(&quot;Afternoon&quot;);
				} else if (hour &gt;= 18 &amp;&amp; hour &lt;= 22 ){
					document.write(&quot;Evening&quot;);
				} else {
					document.write(&quot;Night&quot;);
				}</code></pre>
<p>See the Pen <a href='http://codepen.io/waynemoir/pen/rxnEy'>%= penName %</a> by Wayne Moir (<a href='http://codepen.io/waynemoir'>@waynemoir</a>) on <a href='http://codepen.io'>CodePen</a></p>
</div><script async src="//codepen.io/assets/embed/ei.js"></script>