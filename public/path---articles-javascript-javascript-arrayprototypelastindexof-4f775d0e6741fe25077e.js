webpackJsonp([1245],{"./node_modules/json-loader/index.js!./.cache/json/articles-javascript-javascript-arrayprototypelastindexof.json":function(e,t){e.exports={data:{markdownRemark:{html:'<p>The <code>lastIndexOf()</code> method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at <code>fromIndex</code>.</p>\n<p><strong>Syntax</strong></p>\n<pre><code>arr.lastIndexOf(searchElement[, fromIndex = arr.length - 1])\n</code></pre>\n<h2>Parameters</h2>\n<ul>\n<li>\n<p><strong>searchElement</strong></p>\n<ul>\n<li>Element to locate in the array.</li>\n</ul>\n</li>\n<li>\n<p><strong>fromIndex</strong></p>\n<ul>\n<li><em>Optional</em>. The index at which to start searching backwards. Defaults to the array\'s length minus one, i.e. the whole array will be searched. If the index is greater than or equal to the length of the array, the whole array will be searched. If negative, it is taken as the offset from the end of the array. Note that even when the index is negative, the array is still searched from back to front. If the calculated index is less than 0, -1 is returned, i.e. the array will not be searched.</li>\n</ul>\n</li>\n</ul>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf">MDN link</a> | <a href="https://msdn.microsoft.com/en-us/LIBRary/ff679972(v=vs.94).aspx">MSDN link</a></p>\n<h2>Returns</h2>\n<p>The index of the last occurrence of <code>searchElement</code> in the array, or -1 if <code>searchElement</code> is not found.</p>\n<h2>Description</h2>\n<p><code>lastIndexOf</code> compares <code>searchElement</code> to elements of the Array using strict equality (the same method used by the ===, or triple-equals, operator).</p>\n<h2>Remarks</h2>\n<p>The search occurs in descending index order (last member first). To search in ascending order, use the <code>indexOf</code> method.</p>\n<p>The optional <code>fromIndex</code> argument specifies the array index at which to begin the search. If <code>fromIndex</code> is greater than or equal to the array length, the whole array is searched. If <code>fromIndex</code> is negative, the search starts at the array length plus <code>fromIndex</code>. If the computed index is less than 0, -1 is returned.</p>\n<h2>Examples</h2>\n<pre><code>var array = [2, 5, 9, 2];\narray.lastIndexOf(2);     // 3\narray.lastIndexOf(7);     // -1\narray.lastIndexOf(2, 3);  // 3\narray.lastIndexOf(2, 2);  // 0\narray.lastIndexOf(2, -2); // 0\narray.lastIndexOf(2, -1); // 3\n\n// Create an array.\nvar ar = ["ab", "cd", "ef", "ab", "cd"];\n\n// Determine the first location, in descending order, of "cd".\ndocument.write(ar.lastIndexOf("cd") + "&#x3C;br/>");\n\n// Output: 4\n\n// Find "cd" in descending order, starting at index 2.\ndocument.write(ar.lastIndexOf("cd", 2) + "&#x3C;br/>");\n\n// Output: 1\n\n// Search for "gh" (which is not found).\ndocument.write(ar.lastIndexOf("gh")+ "&#x3C;br/>");\n\n// Output: -1\n\n// Find "ab" with a fromIndex argument of -3.\n// The search in descending order starts at index 3,\n// which is the array length minus 2.\ndocument.write(ar.lastIndexOf("ab", -3) + "&#x3C;br/>");\n// Output: 0\n</code></pre>',frontmatter:{title:"Array.prototype.lastIndexOf",parent:"/home/stuart/guides/src/pages/articles/javascript/javascript-arrayprototypelastindexof/index.md absPath of file"}}},pathContext:{slug:"/articles/javascript/javascript-arrayprototypelastindexof/"}}}});
//# sourceMappingURL=path---articles-javascript-javascript-arrayprototypelastindexof-4f775d0e6741fe25077e.js.map