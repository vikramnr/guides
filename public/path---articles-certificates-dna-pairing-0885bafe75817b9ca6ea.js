webpackJsonp([1992],{"./node_modules/json-loader/index.js!./.cache/json/articles-certificates-dna-pairing.json":function(e,t){e.exports={data:{markdownRemark:{html:'<div class="lightbox-wrapper">[![](//discourse-user-assets.s3.amazonaws.com/optimized/2X/2/2798a83aaaa34ec2b18f4b8ec122b76c264a9d67_1_368x500.jpg)\n<div class="meta"><span class="filename">usiNBDU.jpg</span><span class="informations">450x611 47.1 KB</span><span class="expand"></span></div>](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2798a83aaaa34ec2b18f4b8ec122b76c264a9d67.jpg "usiNBDU.jpg") </div>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3" alt=":triangular_flag_on_post:" title=":triangular_flag_on_post:"> Remember to use <a><strong><code>Read-Search-Ask</code></strong></a> if you get stuck. Try to pair program <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3" alt=":busts_in_silhouette:" title=":busts_in_silhouette:"> and write your own code <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3" alt=":pencil:" title=":pencil:"></p>\n<h3><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3" alt=":checkered_flag:" title=":checkered_flag:"> Problem Explanation:</h3>\n<ul>\n<li>You will get a DNA strand sequence and you need to get the pair and return it as a 2D array of the base pairs. Keep in mind that the provided strand should be first always.</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href="http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298">Array.push()</a></li>\n<li><a href="http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944">String.split()</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" alt=":speech_balloon:" title=":speech_balloon:"> Hint: 1</h2>\n<ul>\n<li>There are two base case, A-T and C-G, these go both way. You can use regular expression, if statements of anything that you can think of.</li>\n</ul>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" alt=":speech_balloon:" title=":speech_balloon:"> Hint: 2</h2>\n<ul>\n<li>I would recommend using a switch, as it makes things a lot smoother.</li>\n</ul>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" alt=":speech_balloon:" title=":speech_balloon:"> Hint: 3</h2>\n<ul>\n<li>The result must be an array of arrays, so keep that in mind when pushing things.</li>\n</ul>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2>Spoiler Alert!</h2>\n<p><img src="//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif" alt="687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif"></p>\n<p><strong>Solution ahead!</strong></p>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3" alt=":beginner:" title=":beginner:"> Basic Code Solution:</h2>\n<pre><code>function pairElement(str) {\n  // Return each strand as an array of two elements, the original and the pair.\n  var paired = [];\n\n  // Function to check with strand to pair.\n  var search = function(char) {\n    switch (char) {\n      case \'A\':\n        paired.push([\'A\', \'T\']);\n        break;\n      case \'T\':\n        paired.push([\'T\', \'A\']);\n        break;\n      case \'C\':\n        paired.push([\'C\', \'G\']);\n        break;\n      case \'G\':\n        paired.push([\'G\', \'C\']);\n        break;\n    }\n  };\n\n  // Loops through the input and pair.\n  for (var i = 0; i &#x3C; str.length; i++) {\n    search(str[i]);\n  }\n\n  return paired;\n}\n\n// test here\npairElement("GCG");\n</code></pre>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" alt=":rocket:" title=":rocket:"> <a href="https://repl.it/CLmz/0">Run Code</a></p>\n<h3>Code Explanation:</h3>\n<ul>\n<li>The program is very simple, the best solution that I have come up with is to use a switch to catch all the possible four elements. Using if statements would take too much code. You could also use Regular Expressions.</li>\n<li>Since we have to the original and the pair, I decided to take all four cases instead of the base two.</li>\n<li>Create an empty array and use the <code>search</code> function to push the right values to the array and return them.</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a>Switch Statements</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3" alt=":sunflower:" title=":sunflower:"> Intermediate Code Solution:</h2>\n<pre><code>function pairElement(str) {\n  //define a map object with all pair possibilities \n  var map = {T:\'A\', A:\'T\', G:\'C\', C:\'G\'};\n  //split str into a char Array\n  strArr = str.split(\'\');\n  //replace each Array item with a 2d Array using map\n  for (var i=0;i&#x3C;strArr.length;i++){\n    strArr[i]=[strArr[i], map[strArr[i]]];\n  }\n return strArr;\n}\n\n// test here\npairElement("GCG");\n</code></pre>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" alt=":rocket:" title=":rocket:"> <a href="https://repl.it/CLnA/0">Run Code</a></p>\n<h2>Code Explanation:</h2>\n<ul>\n<li>First define an object with all pair possibilities, this allows us to easily find by key or value.</li>\n<li>Split <code>str</code> into a characters array so we can use each letter to find its pair.</li>\n<li>Use a loop to go throw the array of characters and replace each character by an array of the pair, thus creating 2d arrays.</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a>Bracket Notation for objects</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3" alt=":clipboard:" title=":clipboard:"> NOTES FOR CONTRIBUTIONS:</h2>\n<ul>\n<li><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" alt=":warning:" title=":warning:"> <strong>DO NOT</strong> add solutions that are similar to any existing solutions. If you think it is <strong><em>similar but better</em></strong>, then try to merge (or replace) the existing similar solution.</li>\n<li>Add an explanation of your solution.</li>\n<li>Categorize the solution in one of the following categories — <strong>Basic</strong>, <strong>Intermediate</strong> and <strong>Advanced</strong>. <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3" alt=":traffic_light:" title=":traffic_light:"></li>\n<li>Please add your username only if you have added any <strong>relevant main contents</strong>. (<img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" alt=":warning:" title=":warning:"> <strong><em>DO NOT</em></strong> <em>remove any existing usernames</em>)</li>\n</ul>\n<blockquote>\n<p>See <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3" alt=":point_right:" title=":point_right:"> <a href="http://forum.freecodecamp.com/t/algorithm-article-template/14272"><strong><code>Wiki Challenge Solution Template</code></strong></a> for reference.</p>\n</blockquote>',frontmatter:{title:"Dna Pairing",parent:"/home/stuart/guides/src/pages/articles/certificates/dna-pairing/index.md absPath of file"}}},pathContext:{slug:"/articles/certificates/dna-pairing/"}}}});
//# sourceMappingURL=path---articles-certificates-dna-pairing-0885bafe75817b9ca6ea.js.map