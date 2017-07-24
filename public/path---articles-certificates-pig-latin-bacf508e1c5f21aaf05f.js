webpackJsonp([1920],{"./node_modules/json-loader/index.js!./.cache/json/articles-certificates-pig-latin.json":function(e,t){e.exports={data:{markdownRemark:{html:'<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3" alt=":triangular_flag_on_post:" title=":triangular_flag_on_post:"> Remember to use <a><strong><code>Read-Search-Ask</code></strong></a> if you get stuck. Try to pair program <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3" alt=":busts_in_silhouette:" title=":busts_in_silhouette:"> and write your own code <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3" alt=":pencil:" title=":pencil:"></p>\n<h3><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3" alt=":checkered_flag:" title=":checkered_flag:"> Problem Explanation:</h3>\n<p>You need to create a program that will translate from English to Pig Latin. Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay". If a word begins with a vowel you just add "way" to the end. It might not be obvious but you need to remove all the consonants up to the first vowel in case the word does not start with a vowel.</p>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href="http://en.wikipedia.org/wiki/Pig_Latin">Pig Latin</a></li>\n<li><a href="http://forum.freecodecamp.com/t/javascript-string-prototype-match/15941">JS String Prototype Match</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" alt=":speech_balloon:" title=":speech_balloon:"> Hint: 1</h2>\n<p>You will probably want to use regular expressions. This will allow you to convert the words easily.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" alt=":speech_balloon:" title=":speech_balloon:"> Hint: 2</h2>\n<p>If the first character is a vowel, then take that whole word and add \'way\' at the end. Otherwise comes the tricky part, take the consonant(s) before the first vowel and move it to the end and add \'ay\'. This might be confusing but, it is not just the first consonant but all of them before the first vowel.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3" alt=":speech_balloon:" title=":speech_balloon:"> Hint: 3</h2>\n<p>You will need to use everything you know about string manipulation to get the last part right. However, it can be done with <code>substr</code> alone.</p>\n<blockquote>\n<p><em>try to solve the problem now</em></p>\n</blockquote>\n<h2>Spoiler Alert!</h2>\n<p><img src="//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif" alt="687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif"></p>\n<p><strong>Solution ahead!</strong></p>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3" alt=":beginner:" title=":beginner:"> Basic Code Solution:</h2>\n<pre><code>function translatePigLatin(str) {\n  // Create variables to be used\n  var pigLatin = \'\';\n  var regex = /[aeiou]/gi;\n\n  // Check if the first character is a vowel\n  if (str[0].match(regex)) {\n    pigLatin = str + \'way\';\n\n  } else {\n\n    // Find how many consonants before the first vowel.\n    var vowelIndice = str.indexOf(str.match(regex)[0]);\n\n    // Take the string from the first vowel to the last char\n    // then add the consonants that were previously omitted and add the ending.\n    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + \'ay\';\n  }\n\n  return pigLatin;\n}\n\n// test here\ntranslatePigLatin("consonant");\n</code></pre>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" alt=":rocket:" title=":rocket:"> <a href="https://repl.it/CLmt/0">Run Code</a></p>\n<h3>Code Explanation:</h3>\n<ul>\n<li>Make an empty string to hold your Pig Latin word.</li>\n<li>Assign your appropriate regular expression to a variable.</li>\n<li>If the first character is a vowel, just add <strong>way</strong> to end of string and return it.</li>\n<li>\n<p>If the first character is not a vowel:</p>\n<ul>\n<li>Find number of consonants before first vowel with help of <code>indexOf()</code>, <code>match()</code> and regex.</li>\n<li>Start Pig Latin string with first vowel till the end.</li>\n<li>Add letters before first vowel to end of string.</li>\n<li><code>substr()</code> is used for string manipulation here.</li>\n<li>Add <strong>ay</strong> to end of string and return it.</li>\n</ul>\n</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a>JS Regex Resources</a></li>\n<li><a href="http://forum.freecodecamp.com/t/javascript-string-prototype-indexof/15936">JS String Prototype IndexOf</a></li>\n<li><a href="http://forum.freecodecamp.com/t/javascript-string-prototype-substr/15945">JS String Prototype Substr</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3" alt=":sunflower:" title=":sunflower:"> Intermediate Code Solution:</h2>\n<pre><code>function translatePigLatin(str) {\n  function check(obj) {\n      return [\'a\',\'i\',\'u\',\'e\',\'o\'].indexOf(str.charAt(obj)) == -1 ? check(obj + 1) : obj;\n  }\n\n  return str.substr(check(0)).concat((check(0) === 0 ? \'w\' : str.substr(0, check(0))) + \'ay\');\n}\n\n// test here\ntranslatePigLatin("consonant");\n</code></pre>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" alt=":rocket:" title=":rocket:"> <a href="https://repl.it/CLmw/0">Run Code</a></p>\n<h3>Code Explanation:</h3>\n<ul>\n<li>This is a declarative as well as recursive approach to this problem.</li>\n<li><code>check()</code> is a function which checks for first letter of string to be in the array of vowels, <code>[\'a\',\'i\',\'u\',\'e\',\'o\']</code>.</li>\n<li>In case of consonants, <code>check()</code> calls itself on the next characters until finding the first vowel.</li>\n<li>It\'ll return the index of whatever it finds to be the last initial consonant i.e., Schmidtsville\'s would be 3.</li>\n<li>Then, letters up until that index are removed from the string and concatenated with either that same chunk of removed string or <strong>w</strong> accordingly, and then <strong>ay</strong> regardless.</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href="http://forum.freecodecamp.com/t/javascript-string-prototype-charat/15932">JS String Prototype CharAt</a></li>\n<li><a href="http://forum.freecodecamp.com/t/javascript-string-prototype-concat/15935">JS String Prototype Concat</a></li>\n</ul>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3" alt=":rotating_light:" title=":rotating_light:"> Advanced Code Solution:</h2>\n<pre><code>function translatePigLatin(str) {\n    var strArr = [];\n    var tmpChar;\n\n    // check if the char is consonant using RegEx\n    function isConsonant(char) {\n        return !/[aeiou]/.test(char);\n    }\n\n    // return initial str + "way" if it starts with vowel\n    // if not - convert str to array\n    if (!isConsonant(str.charAt(0)))\n        return str + "way";\n    else\n        strArr = str.split("");\n\n    // push all consonats to the end of the array\n    while (isConsonant(strArr[0])) {\n        tmpChar = strArr.shift();\n        strArr.push(tmpChar);\n    }\n // convert array to string and concatenate "ay" at the end  \n return strArr.join("")+"ay";\n}\n\n// test here\ntranslatePigLatin("consonant");\n</code></pre>\n<p><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3" alt=":rocket:" title=":rocket:"> <a href="https://repl.it/CLmv/0">Run Code</a></p>\n<h3>Code Explanation:</h3>\n<ul>\n<li><code>isConsonant()</code> is used to check if a character is a consonant.</li>\n<li>If first character is vowel, add <strong>way</strong> to end of string and return it.</li>\n<li>\n<p>If first character is not a vowel:</p>\n<ul>\n<li>Split string into array using <code>split()</code>.</li>\n<li>Push all consonants to end of array with help of <code>shift()</code> and <code>push()</code>.</li>\n<li>Convert array to string using <code>join()</code> and add <strong>ay</strong> to end of string. Return it.</li>\n</ul>\n</li>\n</ul>\n<h4>Relevant Links</h4>\n<ul>\n<li><a href="http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944">JS String Prototype Split</a></li>\n<li><a href="http://forum.freecodecamp.com/t/javascript-array-prototype-shift/14301">JS Array Prototype Shift</a></li>\n<li><a href="http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298">JS Array Prototype Push</a></li>\n<li><a href="http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292">JS Array Prototype Join</a></li>\n</ul>\n<h3><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/trophy.png?v=3" alt=":trophy:" title=":trophy:"> Credits:</h3>\n<p>If you found this page useful, you may say thanks to the contributors by copying and pasting the following line in the main chat:</p>\n<p><strong><code>Thanks @Rafase282 @sabahang @aganita @Hallaathrad for your help with Algorithm: Pig Latin</code></strong></p>\n<h2><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3" alt=":clipboard:" title=":clipboard:"> NOTES FOR CONTRIBUTIONS:</h2>\n<ul>\n<li><img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" alt=":warning:" title=":warning:"> <strong>DO NOT</strong> add solutions that are similar to any existing solutions. If you think it is <strong><em>similar but better</em></strong>, then try to merge (or replace) the existing similar solution.</li>\n<li>Add an explanation of your solution.</li>\n<li>Categorize the solution in one of the following categories — <strong>Basic</strong>, <strong>Intermediate</strong> and <strong>Advanced</strong>. <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3" alt=":traffic_light:" title=":traffic_light:"></li>\n<li>Please add your username only if you have added any <strong>relevant main contents</strong>. (<img src="https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3" alt=":warning:" title=":warning:"> <strong><em>DO NOT</em></strong> <em>remove any existing usernames</em>)</li>\n</ul>\n<blockquote>\n<p>See <img src="https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3" alt=":point_right:" title=":point_right:"> <a href="http://forum.freecodecamp.com/t/algorithm-article-template/14272"><strong><code>Wiki Challenge Solution Template</code></strong></a> for reference.</p>\n</blockquote>',frontmatter:{title:"Pig Latin",parent:"/home/stuart/guides/src/pages/articles/certificates/pig-latin/index.md absPath of file"}}},pathContext:{slug:"/articles/certificates/pig-latin/"}}}});
//# sourceMappingURL=path---articles-certificates-pig-latin-bacf508e1c5f21aaf05f.js.map