webpackJsonp([1167],{"./node_modules/json-loader/index.js!./.cache/json/articles-javascript-javascript-stringlength.json":function(e,t){e.exports={data:{markdownRemark:{html:"<p>The <code>length</code> property represents the length of a string.</p>\n<h2>Syntax</h2>\n<pre><code>str.length\n</code></pre>\n<p><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length\">MDN link</a> | <a href=\"https://msdn.microsoft.com/en-us/LIBRary/3d616214(v=vs.94).aspx\">MSDN link</a></p>\n<h2>Description</h2>\n<p>This property returns the number of code units in the string. UTF-16, the string format used by JavaScript, uses a single 16-bit code unit to represent the most common characters, but needs to use two code units for less commonly-used characters, so it's possible for the value returned by length to not match the actual number of characters in the string.</p>\n<p>For an empty string, length is 0.</p>\n<p>The static property <code>String.length</code> returns the value 1.</p>\n<h2>Examples</h2>\n<pre><code>var x = 'Mozilla';\nvar empty = '';\n\nconsole.log('Mozilla is ' + x.length + ' code units long');\n/* \"Mozilla is 7 code units long\" */\n\nconsole.log('The empty string has a length of ' + empty.length);\n/* \"The empty string has a length of 0\" */\n\nvar str = \"every good boy does fine\";\n        var start = 0;\n        var end = str.length - 1;\n        var tmp = \"\";\n        var arr = new Array(end);\n\n        while (end >= 0) {\n            arr[start++] = str.charAt(end--);\n        }\n\n// Join the elements of the array with a \n        var str2 = arr.join('');\n        document.write(str2);\n\n// Output: enif seod yob doog yreve\n</code></pre>",frontmatter:{title:"javaScript Stringlength",parent:"/home/stuart/guides/src/pages/articles/javascript/javascript-stringlength/index.md absPath of file"}}},pathContext:{slug:"/articles/javascript/javascript-stringlength/"}}}});
//# sourceMappingURL=path---articles-javascript-javascript-stringlength-d5be9100e92d64c9c0c0.js.map