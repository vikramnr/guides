webpackJsonp([248],{"./node_modules/json-loader/index.js!./.cache/json/articles-miscellaneous-stringprototypelastindexof.json":function(e,n){e.exports={data:{markdownRemark:{html:"<p>The <code>lastIndexOf()</code> method returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found. The calling string is searched backward, starting at <code>fromIndex</code>.</p>\n<h2>Syntax</h2>\n<pre><code>str.lastIndexOf(searchValue[, fromIndex])\n</code></pre>\n<h2>Parameters</h2>\n<p><strong>searchValue</strong></p>\n<p>A string representing the value to search for.</p>\n<p><strong>fromIndex</strong></p>\n<p>Optional. The location within the calling string to start the search at, indexed from left to right. It can be any integer. The default value is <code>str.length</code>. If it is negative, it is treated as 0. If <code>fromIndex > str.length</code>, <code>fromIndex</code> is treated as <code>str.length</code>.</p>\n<p><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf\">MDN link</a> | <a href=\"https://msdn.microsoft.com/en-us/LIBRary/6d20k718(v=vs.94).aspx\">MSDN link</a></p>\n<h2>Returns</h2>\n<p>Returns the last occurrence of a substring in the string.</p>\n<h2>Description</h2>\n<p>Characters in a string are indexed from left to right. The index of the first character is 0, and the index of the last character is <code>stringName.length - 1</code>.</p>\n<p>The <code>lastIndexOf()</code> method is case sensitive. For example, the following expression returns <code>-1</code>:</p>\n<h2>Examples</h2>\n<pre><code>'canal'.lastIndexOf('a');     // returns 3\n'canal'.lastIndexOf('a', 2);  // returns 1\n'canal'.lastIndexOf('a', 0);  // returns -1\n'canal'.lastIndexOf('x');     // returns -1\n'Blue Whale, Killer Whale'.lastIndexOf('blue'); // returns -1\n\nvar anyString = 'Brave new world';\n\nconsole.log('The index of the first w from the beginning is ' + anyString.indexOf('w'));\n// logs 8\nconsole.log('The index of the first w from the end is ' + anyString.lastIndexOf('w')); \n// logs 10\nconsole.log('The index of \"new\" from the beginning is ' + anyString.indexOf('new'));\n// logs 6\nconsole.log('The index of \"new\" from the end is ' + anyString.lastIndexOf('new'));\n// logs 6\n\nvar str = \"time, time\";\n\nvar s = \"\";\ns += \"time is at position \" + str.lastIndexOf(\"time\");\ns += \"&#x3C;br />\";\ns += \"abc is at position \" + str.lastIndexOf(\"abc\");\n\ndocument.write(s);\n\n// Output:\n// time is at position 6\n// abc is at position -1\n</code></pre>",frontmatter:{title:"Stringprototypelastindexof",parent:"/home/stuart/guides/src/pages/articles/miscellaneous/stringprototypelastindexof/index.md absPath of file"}}},pathContext:{slug:"/articles/miscellaneous/stringprototypelastindexof/"}}}});
//# sourceMappingURL=path---articles-miscellaneous-stringprototypelastindexof-c7ab0f39573721722c2e.js.map