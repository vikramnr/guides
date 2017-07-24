webpackJsonp([1897],{"./node_modules/json-loader/index.js!./.cache/json/articles-certificates-seek-and-destroy.json":function(e,o){e.exports={data:{markdownRemark:{html:'<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3" alt=":triangular_flag_on_post:" title=":triangular_flag_on_post:"> Remember to use <a><strong><code>Read-Search-Ask</code></strong></a> if you get stuck. Try to pair program <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3" alt=":busts_in_silhouette:" title=":busts_in_silhouette:"> and write your own code <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3" alt=":pencil:" title=":pencil:"></p>\n<h3><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3" alt=":checkered_flag:" title=":checkered_flag:"> Problem Explanation:</h3>\n<p>This problem is a bit tricky because you have to familiarize yourself with Arguments, as you will have to work with two <strong>or more</strong> but on the script you only see two. Many people hardcode this program for three arguments. You will remove any number from the first argument that is the same as any other other arguments.</p>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href="http://forum.freecodecamp.com/t/javascript-arguments/14283">Arguments object</a></li>\n<li><a href="http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289">Array.filter()</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" alt=":speech_balloon:" title=":speech_balloon:"> Hint: 1</h2>\n<p>You need to work with <code>arguments</code> as if it was a regular array. The best way is to convert it into one.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" alt=":speech_balloon:" title=":speech_balloon:"> Hint: 2</h2>\n<p>You need to filter, this also means you need to create a callback function. You can use various methods like: <code>indexOf()</code>, <code>includes()</code>. If you need another approach, <code>reduce()</code> might also be of use; keep reading those docs!</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" alt=":speech_balloon:" title=":speech_balloon:"> Hint: 3</h2>\n<p>To convert <code>arguments</code> into an array use this code <code>var args = Array.prototype.slice.call(arguments);</code></p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2>Spoiler Alert!</h2>\n<p><img src="//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif" alt="687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif"></p>\n<p><strong>Solution ahead!</strong></p>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3" alt=":beginner:" title=":beginner:"> Basic Code Solution:</h2>\n<pre><code>function destroyer(arr) {\n  var args = Array.prototype.slice.call(arguments);\n\n  for (var i = 0; i &#x3C; arr.length; i++) {\n    for (var j = 0; j &#x3C; args.length; j++) {\n      if (arr[i] === args[j]) {\n        delete arr[i];\n      }\n    }\n  }\n  return arr.filter(Boolean);\n}\n</code></pre>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" alt=":rocket:" title=":rocket:"> <a href="https://repl.it/CLjU/95">Run Code</a></p>\n<h3>Code Explanation:</h3>\n<ol>\n<li>\n<p>Create an array of <code>arguments</code> using <code>Array.prototype.slice.call()</code> and store it in the variable <code>args</code>. We\'ll use this to check against <code>arr</code>.</p>\n</li>\n<li>\n<p>Start a basic <code>for</code> loop to iterate through <code>arr</code>. Nest another <code>for</code> loop inside the first, changing the integer variable <code>j</code> and arr to args. This second loop will iterate through <code>args</code> .</p>\n<ul>\n<li>\n<p>Within the second loop create an <code>if</code> statement, checking strictly <code>===</code> that the current val of <code>arr[i]</code> is equal to <code>args[j]</code>.</p>\n</li>\n<li>\n<p>If the value at the current index <em>is</em> equal in both arrays, use <code>delete</code> to remove it from <code>arr</code>.</p>\n</li>\n</ul>\n</li>\n<li>\n<p>Outside of the nested loops: return the modified array using the <code>Boolean</code> object as a filter for any <code>null</code>\'s created by the <code>delete</code> operator.</p>\n</li>\n</ol>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href="http://forum.freecodecamp.com/t/javascript-arguments/14283">arguments</a></li>\n<li><a href="http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289">Array.filter()</a></li>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete">delete</a></li>\n<li><a href="http://forum.freecodecamp.com/t/javascript-boolean/14311">Boolean</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3" alt=":sunflower:" title=":sunflower:"> Intermediate Code Solution:</h2>\n<pre><code>function destroyer(arr) {\n  var args = Array.from(arguments).slice(1);\n  return arr.filter(function(val) {\n    return !args.includes(val);\n  });\n}\n</code></pre>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" alt=":rocket:" title=":rocket:"> <a href="https://repl.it/Ck2m/0">Run Code</a></p>\n<h3>Code Explanation:</h3>\n<ol>\n<li>\n<p>Declare a variable named <code>args</code> and set it equal to a new <code>Array</code> object <code>from()</code> the <code>arguments</code> passed into the function. On the same or next line, use the <code>slice()</code> method on <code>args</code> starting from the second index, 1. This separates the arguments used for filtering into their own array of <code>args</code>.</p>\n</li>\n<li>\n<p>Return the filtered array, using <code>includes()</code> in the callback function to check if <code>val</code> is <em>not</em> in <code>args</code>; returning <code>true</code> to keep the value in the original array or <code>false</code> to remove it.</p>\n</li>\n</ol>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href="http://forum.freecodecamp.com/t/javascript-arguments/14283">arguments</a></li>\n<li><a href="http://forum.freecodecamp.com/t/javascript-array-prototype-slice/14302">Array.slice()</a></li>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes">Array.includes()</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3" alt=":clipboard:" title=":clipboard:"> NOTES FOR CONTRIBUTIONS:</h2>\n<ul>\n<li><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" alt=":warning:" title=":warning:"> <strong>DO NOT</strong> add solutions that are similar to any existing solutions. If you think it is <strong><em>similar but better</em></strong>, then try to merge (or replace) the existing similar solution.</li>\n<li>Add an explanation of your solution.</li>\n<li>Categorize the solution in one of the following categories — <strong>Basic</strong>, <strong>Intermediate</strong> and <strong>Advanced</strong>. <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3" alt=":traffic_light:" title=":traffic_light:"></li>\n<li>Please add your username only if you have added any <strong>relevant main contents</strong>. (<img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" alt=":warning:" title=":warning:"> <strong><em>DO NOT</em></strong> <em>remove any existing usernames</em>)</li>\n</ul>\n<blockquote>\n<p>See <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3" alt=":point_right:" title=":point_right:"> <a href="http://forum.freecodecamp.com/t/algorithm-article-template/14272"><strong><code>Wiki Challenge Solution Template</code></strong></a> for reference.</p>\n</blockquote>',frontmatter:{title:"Seek and Destroy",parent:"/home/stuart/guides/src/pages/articles/certificates/seek-and-destroy/index.md absPath of file"}}},pathContext:{slug:"/articles/certificates/seek-and-destroy/"}}}});
//# sourceMappingURL=path---articles-certificates-seek-and-destroy-b74b71d6e1bb5e1d94fa.js.map