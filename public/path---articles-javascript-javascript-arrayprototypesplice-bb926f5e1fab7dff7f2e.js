webpackJsonp([1235],{"./node_modules/json-loader/index.js!./.cache/json/articles-javascript-javascript-arrayprototypesplice.json":function(e,n){e.exports={data:{markdownRemark:{html:"<p>This method changes array's content by removing existing elements and/or adding new elements.</p>\n<h2>Syntax</h2>\n<pre><code>array.splice(start, deleteCount[, item1[, item2[, ...]]])\n</code></pre>\n<h2>Parameters</h2>\n<table>\n<thead>\n<tr>\n<th>Parameter</th>\n<th>Description</th>\n<th>Necessity</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>start</td>\n<td>Index at which to start changing the array.</td>\n<td>Required</td>\n</tr>\n<tr>\n<td>deleteCount</td>\n<td>An integer indicating the number of old array elements to remove. If deleteCount is 0, no elements are removed. In this case, you should specify at least one new element.</td>\n<td>Required</td>\n</tr>\n<tr>\n<td>itemN</td>\n<td>The element to add to the array. If you don't specify any elements, splice() will only remove elements from the array.</td>\n<td>Optional</td>\n</tr>\n</tbody>\n</table>\n<p><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice\">MDN link</a> | <a href=\"https://msdn.microsoft.com/en-us/LIBRary/wctc5k7s(v=vs.94).aspx\">MSDN link</a></p>\n<h2>Returns</h2>\n<p>An array containing the deleted elements. If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned.</p>\n<h2>Examples</h2>\n<pre><code>var arr = new Array(\"4\", \"11\", \"2\", \"10\", \"3\", \"1\");\narr.splice(2, 2, \"21\", \"31\");\ndocument.write(arr);\n\n// Output: 4,11,21,31,3,1\n\nvar myFish = ['angel', 'clown', 'mandarin', 'surgeon'];\n\n// removes 0 elements from index 2, and inserts 'drum'\nvar removed = myFish.splice(2, 0, 'drum');\n// myFish is ['angel', 'clown', 'drum', 'mandarin', 'surgeon']\n// removed is [], no elements removed\n\n// removes 1 element from index 3\nremoved = myFish.splice(3, 1);\n// myFish is ['angel', 'clown', 'drum', 'surgeon']\n// removed is ['mandarin']\n</code></pre>",frontmatter:{title:"javaScript Arrayprototypesplice",parent:"/home/stuart/guides/src/pages/articles/javascript/javascript-arrayprototypesplice/index.md absPath of file"}}},pathContext:{slug:"/articles/javascript/javascript-arrayprototypesplice/"}}}});
//# sourceMappingURL=path---articles-javascript-javascript-arrayprototypesplice-bb926f5e1fab7dff7f2e.js.map