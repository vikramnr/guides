webpackJsonp([1899],{"./node_modules/json-loader/index.js!./.cache/json/articles-certificates-return-largest-numbers-in-arrays.json":function(e,t){e.exports={data:{markdownRemark:{html:'<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3" alt=":triangular_flag_on_post:" title=":triangular_flag_on_post:"> Remember to use <a><strong><code>Read-Search-Ask</code></strong></a> if you get stuck. Try to pair program <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3" alt=":busts_in_silhouette:" title=":busts_in_silhouette:"> and write your own code <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3" alt=":pencil:" title=":pencil:"></p>\n<h3><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3" alt=":checkered_flag:" title=":checkered_flag:"> Problem Explanation:</h3>\n<p>You will get an array that contains sub arrays of numbers and you need to return an array with the largest number from each of the sub arrays.</p>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" alt=":speech_balloon:" title=":speech_balloon:"> Hint: 1</h2>\n<p>You will need to keep track of the array with the answer and the largest number of each sub-array.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" alt=":speech_balloon:" title=":speech_balloon:"> Hint: 2</h2>\n<p>You can work with multidimensional arrays by <code>Array[Index][SubIndex]</code></p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" alt=":speech_balloon:" title=":speech_balloon:"> Hint: 3</h2>\n<p>Pay close attention to the timing of the storing of variables when working with loops</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2>Spoiler Alert!</h2>\n<p><img src="//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif" alt="687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif"></p>\n<p><strong>Solutions ahead!</strong></p>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3" alt=":beginner:" title=":beginner:"> Basic Code Solution:</h2>\n<p><strong>(Procedural approach)</strong></p>\n<pre><code>function largestOfFour(arr) {\n  var results = [];\n  for (var n = 0; n &#x3C; arr.length; n++) {\n    var largestNumber = arr[n][0];\n    for (var sb = 1; sb &#x3C; arr[n].length; sb++) {\n      if (arr[n][sb] > largestNumber) {\n        largestNumber = arr[n][sb];\n      }\n    }\n\n    results[n] = largestNumber;\n  }\n\n  return results;\n}\n</code></pre>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" alt=":rocket:" title=":rocket:"> <a href="https://repl.it/CLjU/734">Run Code</a></p>\n<h3>Code Explanation:</h3>\n<ul>\n<li>Create a variable to store the <em>results</em> as an array.</li>\n<li>Create an outer loop to iterate through the outer array.</li>\n<li>Create a second variable to hold the largest number and initialise it with the first number. This must be outside an inner loop so it won\'t be reassigned until we find a larger number.</li>\n<li>Create said inner loop to work with the sub-arrays.</li>\n<li>Check if the element of the sub array is larger than the currently stored largest number. If so, then update the number in the variable.</li>\n<li>After the inner loop, save the largest number in the corresponding position inside of the <code>results</code> array.</li>\n<li>And finally return said array.</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href="http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained">For loops</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3" alt=":sunflower:" title=":sunflower:"> Intermediate Code Solution:</h2>\n<p><strong>(Declarative approach)</strong></p>\n<pre><code>function largestOfFour(arr) {\n  return arr.map(function(group){\n    return group.reduce(function(prev, current) {\n      return (current > prev) ? current : prev;\n    });\n  });\n}\n</code></pre>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" alt=":rocket:" title=":rocket:"> <a href="https://repl.it/CLjU/733">Run Code</a></p>\n<h3>Code Explanation:</h3>\n<ul>\n<li>we map all items within the main array to a new array using <code>Array.prototype.map()</code> and return this array as the final result</li>\n<li>within each inner array, we reduce its contents down to a single value using <code>Array.prototype.reduce()</code></li>\n<li>the callback function passed to the reduce method takes the previous value and the current value and compares the two values</li>\n<li>if the current value is higher than the previous value we set it as the new previous value for comparison with the next item within the array or returns it to the map method callback if it\'s the last item</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href="http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294">Array.prototype.map()</a></li>\n<li><a href="http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299">Array.prototype.reduce()</a></li>\n<li><a href="http://forum.freecodecamp.com/t/javascript-ternary-operator/15973">Ternary Operators</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3" alt=":rotating_light:" title=":rotating_light:"> Advanced Code Solution:</h2>\n<p><strong>(Declarative approach)</strong></p>\n<pre><code>function largestOfFour(arr) {\n  return arr.map(Function.apply.bind(Math.max, null));\n}\n</code></pre>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" alt=":rocket:" title=":rocket:"> <a href="https://repl.it/CLjU/17">Run Code</a></p>\n<h3>Code Explanation:</h3>\n<p>TL;DR: We build a special callback function (using the <code>Function.bind</code> method), that works just like <code>Math.max</code> but also has <code>Function.prototype.apply</code>\'s ability to take arrays as its arguments <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/smiley.png?v=3" alt=":smiley:" title=":smiley:"></p>\n<ul>\n<li>We start by mapping through the elements inside the main array. Meaning each one of the inner arrays.</li>\n<li>Now the need a callback function to find the max of each inner array provided by the map.</li>\n</ul>\n<p>So we want to create a function that does the work of <code>Math.max</code> and accepts input as an array (which by it doesn\'t by default).</p>\n<p>In other words, it would be really nice and simple if this worked by itself:</p>\n<p><code>Math.max([9, 43, 20, 6]); // Resulting in 43</code></p>\n<p>Alas, it doesn\'t.</p>\n<ul>\n<li>To do the work of accepting arguments in the shape of an array, there is this <code>Function.prototype.apply</code> method, but it complicates things a bit by <em>invoking</em> the <em>context</em> function.  </li>\n</ul>\n<p>i.e. <code>Math.max.apply(null, [9, 43, 20, 6]);</code> would invoke something like a <code>Max.max</code> method. What we\'re looking for... almost.</p>\n<p>Here we\'re passing <code>null</code> as the <em>context</em> of the <code>Function.prototype.apply</code> method as <code>Math.max</code> doesn\'t need any context.</p>\n<ul>\n<li>\n<p>Since <code>arr.map</code> expects a callback function, not just an expression, we create a function out of the previous expression by using the <code>Function.bind</code> method.</p>\n</li>\n<li>\n<p>Since, <code>Function.prototype.apply</code> is a static <em>method</em> of the same <code>Function</code> <em>object</em>, we can call <code>Function.prototype.bind</code> on <code>Function.prototype.apply</code> i.e. <code>Function.prototype.apply.bind</code>.</p>\n</li>\n<li>\n<p>Now we pass the <em>context</em> for the <code>Function.prototype.apply.bind</code> call (in this case we want <code>Math.max</code>so we can gain its functionality).</p>\n</li>\n<li>\n<p>Since the embedded <code>Function.prototype.apply</code> method will also require a context as it\'s 1st argument, we need to pass it a bogus <em>context</em>.</p>\n<ul>\n<li>\n<p>So, we pass <code>null</code> as the 2nd param to <code>Function.prototype.apply.bind</code> which gives a <em>context</em> to the <code>Math.max</code> method.</p>\n</li>\n<li>\n<p>Since, <code>Math.max</code> is independent of any <em>context</em>, hence, it ignores the bogus <em>context</em> given by <code>Function.prototype.apply</code> method call.</p>\n</li>\n<li>\n<p>Thus, our <code>Function.prototype.apply.bind(Math.max, null)</code> makes a new function accepting the <code>arr.map</code> values i.e. the inner arrays.</p>\n</li>\n</ul>\n</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href="http://forum.freecodecamp.com/t/javascript-math-max/14682">Math.max</a></li>\n<li><a href="http://devdocs.io/#q=js+Function+apply">Function.prototype.apply on DevDocs</a></li>\n<li><a href="http://devdocs.io/#q=js+Function+bind">Function.bind on DevDocs</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3" alt=":clipboard:" title=":clipboard:"> NOTES FOR CONTRIBUTIONS:</h2>\n<ul>\n<li><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" alt=":warning:" title=":warning:"> <strong>DO NOT</strong> add solutions that are similar to any existing solutions. If you think it is <strong><em>similar but better</em></strong>, then try to merge (or replace) the existing similar solution.</li>\n<li>Add an explanation of your solution.</li>\n<li>Categorize the solution in one of the following categories — <strong>Basic</strong>, <strong>Intermediate</strong> and <strong>Advanced</strong>. <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3" alt=":traffic_light:" title=":traffic_light:"></li>\n<li>Please add your username only if you have added any <strong>relevant main contents</strong>. (<img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" alt=":warning:" title=":warning:"> <strong><em>DO NOT</em></strong> <em>remove any existing usernames</em>)</li>\n</ul>\n<blockquote>\n<p>See <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3" alt=":point_right:" title=":point_right:"> <a href="http://forum.freecodecamp.com/t/algorithm-article-template/14272"><strong><code>Wiki Challenge Solution Template</code></strong></a> for reference.</p>\n</blockquote>',frontmatter:{title:"Return Largest Numbers In Arrays",parent:"/home/stuart/guides/src/pages/articles/certificates/return-largest-numbers-in-arrays/index.md absPath of file"}}},pathContext:{slug:"/articles/certificates/return-largest-numbers-in-arrays/"}}}});
//# sourceMappingURL=path---articles-certificates-return-largest-numbers-in-arrays-9f0780114338a1103380.js.map