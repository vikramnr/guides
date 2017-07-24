webpackJsonp([1987],{"./node_modules/json-loader/index.js!./.cache/json/articles-certificates-exact-change.json":function(e,n){e.exports={data:{markdownRemark:{html:'<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3" alt=":triangular_flag_on_post:" title=":triangular_flag_on_post:"> Remember to use <a><strong><code>Read-Search-Ask</code></strong></a> if you get stuck. Try to pair program <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3" alt=":busts_in_silhouette:" title=":busts_in_silhouette:"> and write your own code <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3" alt=":pencil:" title=":pencil:"></p>\n<h3><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3" alt=":checkered_flag:" title=":checkered_flag:"> Problem Explanation:</h3>\n<ul>\n<li>You have to create a program that will handle when the register does not have enough cash or will have no cash after the transaction. Other than that it needs to return an array of the change in the form of an array, so that will be a 2D array.</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a>Data Structure Arrays</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" alt=":speech_balloon:" title=":speech_balloon:"> Hint: 1</h2>\n<ul>\n<li>It is easier to handle if you have to close the register, or if you know how much money is in your register beforehand and you will not have enough money to complete the transaction. For this it is recommended to have a function to assign this information to a variable.</li>\n</ul>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" alt=":speech_balloon:" title=":speech_balloon:"> Hint: 2</h2>\n<ul>\n<li>Life is easier when you get to know the value of each currency type in the register instead of how much money is composed of that particular currency. So be sure to watch out for that.</li>\n</ul>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" alt=":speech_balloon:" title=":speech_balloon:"> Hint: 3</h2>\n<ul>\n<li>You will have to get as much change from one type before moving to the next from greater value to lesser, and keep going until you have covered the whole change.</li>\n</ul>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2>Spoiler Alert!</h2>\n<p><img src="//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif" alt="687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif"></p>\n<p><strong>Solution ahead!</strong></p>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3" alt=":beginner:" title=":beginner:"> Beginner Code Solution:</h2>\n<pre><code>// Create an object which hold the denominations and their values\nvar denom = [\n  { name: \'ONE HUNDRED\', val: 100.00},\n  { name: \'TWENTY\', val: 20.00},\n  { name: \'TEN\', val: 10.00},\n  { name: \'FIVE\', val: 5.00},\n  { name: \'ONE\', val: 1.00},\n  { name: \'QUARTER\', val: 0.25},\n  { name: \'DIME\', val: 0.10},\n  { name: \'NICKEL\', val: 0.05},\n  { name: \'PENNY\', val: 0.01}\n];\n\nfunction checkCashRegister(price, cash, cid) {\n  var change = cash - price;\n\n  // Transform CID array into drawer object\n  var register = cid.reduce(function(acc, curr) {\n    acc.total += curr[1];\n    acc[curr[0]] = curr[1];\n    return acc;\n  }, {total: 0});\n\n  // Handle exact change\n  if (register.total === change) {\n    return \'Closed\';\n  }\n\n  // Handle obvious insufficent funds\n  if (register.total &#x3C; change) {\n    return \'Insufficient Funds\';\n  }\n\n  // Loop through the denomination array\n  var change_arr = denom.reduce(function(acc, curr) {\n    var value = 0;\n    // While there is still money of this type in the drawer\n    // And while the denomination is larger than the change reminaing\n    while (register[curr.name] > 0 &#x26;&#x26; change >= curr.val) {\n      change -= curr.val;\n      register[curr.name] -= curr.val;\n      value += curr.val;\n\n      // Round change to the nearest hundreth deals with precision errors\n      change = Math.round(change * 100) / 100;\n    }\n    // Add this denomination to the output only if any was used.\n    if (value > 0) {\n        acc.push([ curr.name, value ]);\n    }\n    return acc; // Return the current Change Array\n  }, []); // Initial value of empty array for reduce\n\n  // If there are no elements in change_arr or we have leftover change, return\n  // the string "Insufficient Funds"\n  if (change_arr.length &#x3C; 1 || change > 0) {\n    return "Insufficient Funds";\n  }\n\n  // Here is your change, ma\'am.\n  return change_arr;\n}\n\n// test here\ncheckCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);\n</code></pre>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" alt=":rocket:" title=":rocket:"> <a href="https://repl.it/CLoj/0">Run Code</a></p>\n<h3>Code Explanation:</h3>\n<p>First, the CID array is transformed into a drawer object. Then we handle the conditions of exact change and insufficient funds. Then we loop through the denomination array and update the change and values while there is still money of this type in the drawer and while the denomination is larger than the change reminaing. Then we add this denomination to the output only if any was used. Finally, if there are no elements in <code>change_arr</code> or we have leftover change, return the string "Insufficient Funds".</p>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href="http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299">JS Array Reduce</a></li>\n<li><a href="http://forum.freecodecamp.com/t/using-array-prototype-reduce-to-reduce-conceptual-boilerplate-for-problems-on-arrays/14687">JS Reduce Made Easy</a></li>\n<li><a href="http://forum.freecodecamp.com/t/javascript-loops/14681">JS Loops</a></li>\n<li><a href="http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298">JS Array Push</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3" alt=":clipboard:" title=":clipboard:"> NOTES FOR CONTRIBUTIONS:</h2>\n<ul>\n<li><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" alt=":warning:" title=":warning:"> <strong>DO NOT</strong> add solutions that are similar to any existing solutions. If you think it is <strong><em>similar but better</em></strong>, then try to merge (or replace) the existing similar solution.</li>\n<li>Add an explanation of your solution.</li>\n<li>Categorize the solution in one of the following categories — <strong>Basic</strong>, <strong>Intermediate</strong> and <strong>Advanced</strong>. <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3" alt=":traffic_light:" title=":traffic_light:"></li>\n<li>Please add your username only if you have added any <strong>relevant main contents</strong>. (<img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" alt=":warning:" title=":warning:"> <strong><em>DO NOT</em></strong> <em>remove any existing usernames</em>)</li>\n</ul>\n<blockquote>\n<p>See <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3" alt=":point_right:" title=":point_right:"> <a href="http://forum.freecodecamp.com/t/algorithm-article-template/14272"><strong><code>Wiki Challenge Solution Template</code></strong></a> for reference.</p>\n</blockquote>',frontmatter:{title:"Exact Change",parent:"/home/stuart/guides/src/pages/articles/certificates/exact-change/index.md absPath of file"}}},pathContext:{slug:"/articles/certificates/exact-change/"}}}});
//# sourceMappingURL=path---articles-certificates-exact-change-d7a3392924dd25a80fcc.js.map