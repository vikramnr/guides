webpackJsonp([1161],{"./node_modules/json-loader/index.js!./.cache/json/articles-javascript-javascript-stringprototypereplace.json":function(e,t){e.exports={data:{markdownRemark:{html:'<p>The <code>replace()</code> method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a <code>RegExp</code>, and the replacement can be a string or a function to be called for each match.</p>\n<h2>Syntax</h2>\n<pre><code>str.replace(regexp|substr, newSubStr|function[, flags])\n</code></pre>\n<h2>Parameters</h2>\n<p><strong>regexp (pattern)</strong></p>\n<p>A RegExp object. The match is replaced by the return value of parameter <span class="hashtag">#2</span>.</p>\n<p><strong>substr (pattern)</strong></p>\n<p>A String that is to be replaced by newSubStr.</p>\n<p><strong>newSubStr (replacement)</strong></p>\n<p>The String that replaces the substring received from parameter <span class="hashtag">#1</span>. A number of special replacement patterns are supported; see the "Specifying a string as a parameter" section below.</p>\n<p><strong>function (replacement)</strong></p>\n<p>A function to be invoked to create the new substring (to put in place of the substring received from parameter <span class="hashtag">#1</span>). The arguments supplied to this function are described in the "Specifying a function as a parameter" section below.</p>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace">MDN link</a> | <a href="https://msdn.microsoft.com/en-us/LIBRary/t0kbytzc(v=vs.94).aspx">MSDN link</a></p>\n<h2>Returns</h2>\n<p>A new string with some or all matches of a pattern replaced by a replacement.</p>\n<h2>Description</h2>\n<p>This method does not change the String object it is called on. It simply returns a new string.</p>\n<p>To perform a global search and replace, either include the g switch in the regular expression or if the first parameter is a string, include g in the flags parameter.</p>\n<h2>Examples</h2>\n<pre><code>var str = \'Twas the night before Xmas...\';\nvar newstr = str.replace(/xmas/i, \'Christmas\');\nconsole.log(newstr);  // Twas the night before Christmas...\n\nfunction f2c(s1) {\n    // Initialize pattern.\n    var test = /(\\d+(\\.\\d*)?)F\\b/g;\n\n    // Use a function for the replacement.\n    var s2 = s1.replace(test,\n      function($0,$1,$2)\n           { \n           return((($1-32) * 5/9) + "C");\n           }\n        )\n    return s2;\n}\ndocument.write(f2c("Water freezes at 32F and boils at 212F."));\n\n// Output: Water freezes at 0C and boils at 100C.\n</code></pre>',frontmatter:{title:"String.prototype.replace",parent:"/home/stuart/guides/src/pages/articles/javascript/javascript-stringprototypereplace/index.md absPath of file"}}},pathContext:{slug:"/articles/javascript/javascript-stringprototypereplace/"}}}});
//# sourceMappingURL=path---articles-javascript-javascript-stringprototypereplace-8b766c9d54c540413a36.js.map