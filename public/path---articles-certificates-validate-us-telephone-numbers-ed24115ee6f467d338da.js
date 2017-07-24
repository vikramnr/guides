webpackJsonp([1818],{"./node_modules/json-loader/index.js!./.cache/json/articles-certificates-validate-us-telephone-numbers.json":function(e,t){e.exports={data:{markdownRemark:{html:'<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3" alt=":triangular_flag_on_post:" title=":triangular_flag_on_post:"> Remember to use <a><strong><code>Read-Search-Ask</code></strong></a> if you get stuck. Try to pair program <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3" alt=":busts_in_silhouette:" title=":busts_in_silhouette:"> and write your own code <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3" alt=":pencil:" title=":pencil:"></p>\n<h3><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3" alt=":checkered_flag:" title=":checkered_flag:"> Problem Explanation:</h3>\n<p>The task is not that hard to understand, implementing it is the hardest part. You have a to validate a US phone number. This means there is a certain amount of numbers required, while you don\'t need to put the country code, you will still need the area code and use one of the few formats allowed.</p>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp">RegExp</a></li>\n<li><a href="http://regexpal.com/">regexpal.com</a></li>\n<li><a href="https://regex101.com/#javascript">regex101.com/</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" alt=":speech_balloon:" title=":speech_balloon:"> Hint: 1</h2>\n<p>There is no way around it, you will need to brush up your regular expressions skills.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" alt=":speech_balloon:" title=":speech_balloon:"> Hint: 2</h2>\n<p>Try using a site from the previous list to test the regex live while you create it.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" alt=":speech_balloon:" title=":speech_balloon:"> Hint: 3</h2>\n<p>Start by trying to get it to validate each format from the example, each one should take a new line, once you get to select them all, then add examples that should not be selected and make sure they are not selected.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2>Spoiler Alert!</h2>\n<p><img src="//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif" alt="687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif"></p>\n<p><strong>Solution ahead!</strong></p>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3" alt=":beginner:" title=":beginner:"> Basic Code Solution:</h2>\n<pre><code>function telephoneCheck(str) {\n   var regex = /^(1\\s?)?(\\(\\d{3}\\)|\\d{3})[\\s\\-]?\\d{3}[\\s\\-]?\\d{4}$/;\n   return regex.test(str);\n}\ntelephoneCheck("555-555-5555");\n</code></pre>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" alt=":rocket:" title=":rocket:"> <a href="https://repl.it/CLo9/0">Run Code</a></p>\n<h3>Code Explanation:</h3>\n<ul>\n<li><code>^</code> denotes the beginning of the string <code>(1\\s?)?</code> checks allows for a "1" or a "1 " at the beginning.</li>\n<li><code>\\d{n}</code> checks for exactly n number of digits so <code>(\\(\\d{3}\\)|\\d{3})</code> checks for three digits that are allowed to be between parenthesis.</li>\n<li><code>[\\s\\-]?</code> checks for spaces or dashes between the groups of digits.</li>\n<li><code>$</code> denotes the end of the string. In this case the beginning and end of the string are used in the regex to prevent it from matching any longer string that might contain a valid phone number (eg. "s 555 555 5555 a").</li>\n<li>Lastly we use <code>regex.test(str)</code> to test if the string adheres to the regular expression and return <code>true</code> or <code>false</code>.</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a>Regex Resources</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3" alt=":sunflower:" title=":sunflower:"> Intermediate Code Solution:</h2>\n<pre><code>function telephoneCheck(str) {\n  var re = /^(?:(?:\\+?1\\s*(?:[.-]\\s*)?)?(?:\\(\\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\\s*\\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\\s*(?:[.-]\\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\\s*(?:[.-]\\s*)?([0-9]{4})$/;\n  return re.test(str);\n}\ntelephoneCheck("555-555-5555");\n</code></pre>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" alt=":rocket:" title=":rocket:"> <a href="https://repl.it/CLoa/0">Run Code</a></p>\n<h3>Code Explanation:</h3>\n<p>This is an example of a very comprehensive and robust solution to validating US phone numbers client side. In such cases it might be much better and easier to implement this library <a href="https://github.com/googlei18n/libphonenumber">libphonenumber</a>.</p>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test">Regex.test()</a></li>\n<li><a href="https://github.com/googlei18n/libphonenumber">libphonenumber</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3" alt=":clipboard:" title=":clipboard:"> NOTES FOR CONTRIBUTIONS:</h2>\n<ul>\n<li><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" alt=":warning:" title=":warning:"> <strong>DO NOT</strong> add solutions that are similar to any existing solutions. If you think it is <strong><em>similar but better</em></strong>, then try to merge (or replace) the existing similar solution.</li>\n<li>Add an explanation of your solution.</li>\n<li>Categorize the solution in one of the following categories — <strong>Basic</strong>, <strong>Intermediate</strong> and <strong>Advanced</strong>. <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3" alt=":traffic_light:" title=":traffic_light:"></li>\n<li>Please add your username only if you have added any <strong>relevant main contents</strong>. (<img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" alt=":warning:" title=":warning:"> <strong><em>DO NOT</em></strong> <em>remove any existing usernames</em>)</li>\n</ul>\n<blockquote>\n<p>See <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3" alt=":point_right:" title=":point_right:"> <a href="http://forum.freecodecamp.com/t/algorithm-article-template/14272"><strong><code>Wiki Challenge Solution Template</code></strong></a> for reference.</p>\n</blockquote>',frontmatter:{title:"Validate Us Telephone Numbers",parent:"/home/stuart/guides/src/pages/articles/certificates/validate-us-telephone-numbers/index.md absPath of file"}}},pathContext:{slug:"/articles/certificates/validate-us-telephone-numbers/"}}}});
//# sourceMappingURL=path---articles-certificates-validate-us-telephone-numbers-ed24115ee6f467d338da.js.map