webpackJsonp([2018],{"./node_modules/json-loader/index.js!./.cache/json/articles-certificates-confirm-the-ending.json":function(e,t){e.exports={data:{markdownRemark:{html:'<p><img src="//discourse-user-assets.s3.amazonaws.com/original/2X/a/a081f3fa5316b7d400a5e518bb0620eef64caa08.jpg"></p>\n<h3><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3" alt=":checkered_flag:" title=":checkered_flag:"> Problem Explanation:</h3>\n<p>The function is a whole Boolean operation. You need to return true if the first argument ends with the second argument. This means that for the problem script, it should return true for the <code>confirmEnding(\'Bastian\', \'n\');</code> case.</p>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr">str.substr()</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" alt=":speech_balloon:" title=":speech_balloon:"> Hint: 1</h2>\n<p>Take a look at how substr() works. You will be trying to get the last Nth characters.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" alt=":speech_balloon:" title=":speech_balloon:"> Hint: 2</h2>\n<p>To get the Nth-to-Last character you will use length() and turn it into a negative number.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" alt=":speech_balloon:" title=":speech_balloon:"> Hint: 3</h2>\n<p>Check that you have the proper syntax and that you use <code>===</code> to compare.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2>Spoiler Alert!</h2>\n<p><img src="//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif" alt="687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif"></p>\n<p><strong>Solution ahead!</strong></p>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3" alt=":beginner:" title=":beginner:"> Basic Code Solution:</h2>\n<pre><code>function confirmEnding(str, target) {\n  return str.substr(-target.length) === target;\n}\n</code></pre>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" alt=":rocket:" title=":rocket:"> <a href="https://repl.it/CLjU/18">Run Code</a></p>\n<h3>Code Explanation:</h3>\n<p>The <code>substr()</code> method returns the characters in a string beginning at the specified location through the optional specified number of characters. <code>substr</code> operates through the end of the string if the second optional parameter is not specified. <code>substr()</code> calculates the index of first matching character from the string\'s end if the specified location is negative. Using the <code>-</code> operator in front of <code>target.length</code> makes it negative.</p>\n<p>We use the method <code>substr()</code> with the negative value of <code>target</code>\'s length to extract the ending segment of <code>str</code> of the same size as <code>target</code>, compare it to <code>target</code>, and then return the value of this boolean expression.</p>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3" alt=":clipboard:" title=":clipboard:"> NOTES FOR CONTRIBUTIONS:</h2>\n<ul>\n<li><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" alt=":warning:" title=":warning:"> <strong>DO NOT</strong> add solutions that are similar to any existing solutions. If you think it is <strong><em>similar but better</em></strong>, then try to merge (or replace) the existing similar solution.</li>\n<li>Add an explanation of your solution.</li>\n<li>Categorize the solution in one of the following categories — <strong>Basic</strong>, <strong>Intermediate</strong> and <strong>Advanced</strong>. <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3" alt=":traffic_light:" title=":traffic_light:"></li>\n<li>Please add your username only if you have added any <strong>relevant main contents</strong>. (<img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" alt=":warning:" title=":warning:"> <strong><em>DO NOT</em></strong> <em>remove any existing usernames</em>)</li>\n</ul>\n<blockquote>\n<p>See <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3" alt=":point_right:" title=":point_right:"> <a href="http://forum.freecodecamp.com/t/algorithm-article-template/14272"><strong><code>Wiki Challenge Solution Template</code></strong></a> for reference.</p>\n</blockquote>',frontmatter:{title:"Confirm the Ending",parent:"/home/stuart/guides/src/pages/articles/certificates/confirm-the-ending/index.md absPath of file"}}},pathContext:{slug:"/articles/certificates/confirm-the-ending/"}}}});
//# sourceMappingURL=path---articles-certificates-confirm-the-ending-d038c138c45ad8caab79.js.map