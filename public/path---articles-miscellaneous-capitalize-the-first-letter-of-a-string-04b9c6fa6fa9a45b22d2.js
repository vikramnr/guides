webpackJsonp([438],{"./node_modules/json-loader/index.js!./.cache/json/articles-miscellaneous-capitalize-the-first-letter-of-a-string.json":function(e,t){e.exports={data:{markdownRemark:{html:'<p>To capitalize the first letter of a random string, you should follow these steps:</p>\n<ol>\n<li>Get the first letter of the string;</li>\n<li>Convert the first letter to uppercase;</li>\n<li>Get the remainder of the string;</li>\n<li>Concatenate the first letter capitalized with the remainder of the string and return the result;</li>\n</ol>\n<h2>1. Get the First Letter of the String</h2>\n<p>You should use <a href="http://forum.freecodecamp.com/t/javascript-string-prototype-charat/15932">charAt()</a> method, at <em>index 0</em>, to select the first character of the string.</p>\n<pre><code>var string = "freeCodecamp";\n\nstring.charAt(0); // Returns "f"\n</code></pre>\n<blockquote>\n<p>NOTE: <code>charAt</code> is preferable than using <code>[ ]</code> (bracket notation) as <code>str.charAt(0)</code> returns an empty string (<em><code>\'\'</code></em>) for <code>str = \'\'</code> instead of <code>undefined</code> in case of <code>\'\'[0]</code>.</p>\n</blockquote>\n<h2>2. Convert the First Letter to uppercase</h2>\n<p>You may use <a href="http://forum.freecodecamp.com/t/javascript-string-prototype-touppercase/15950">toUpperCase()</a> method and convert the calling string to upper case.</p>\n<pre><code>var string = "freeCodecamp";\n\nstring.charAt(0).toUpperCase(); // Returns "F"\n</code></pre>\n<h2>3. Get the Remainder of the String</h2>\n<p>You may use <a href="https://github.com/freecodecamp/freecodecamp/wiki/js-array-prototype-slice">slice()</a> method and get the remainder of the string (from the second character, <em>index 1</em>, to the end of the string).</p>\n<pre><code>var string = "freeCodecamp";\n\nstring.slice(1); // Returns "reeCodecamp"\n</code></pre>\n<h2>4. Return the result adding the first letter and the remainder of the string</h2>\n<p>You should create a function that accepts a string as only argument and returns the concatenation of the first letter capitalized <code>string.charAt(0).toUpperCase()</code> and the remainder of the string <code>string.slice(1)</code>.</p>\n<pre><code>var string = "freeCodecamp";\n\nfunction capitalizeFirstLetter(str) {\n  return str.charAt(0).toUpperCase() + str.slice(1);\n}\n\ncapitalizeFirstLetter(string); // Returns "FreeCodecamp"\n</code></pre>\n<p>Or you may add that function to the <code>String.prototype</code> for using it directly on a string using the following code (<em>so that the method is not enumerable but can be overwritten or deleted later</em>):</p>\n<pre><code>var string = "freeCodecamp";\n\n/* this is how methods are defined in prototype of any built-in Object */\nObject.defineProperty(String.prototype, \'capitalizeFirstLetter\', {\n    value: function () {\n        return this.charAt(0).toUpperCase() + this.slice(1);\n    },\n    writable: true, // so that one can overwrite it later\n    configurable: true // so that it can be deleted later\n});\n\nstring.capitalizeFirstLetter(); // Returns "FreeCodecamp"\n</code></pre>\n<h3>Source</h3>\n<p><a href="http://stackoverflow.com/questions/1026069/capitalize-the-first-letter-of-string-in-javascript/1026087#1026087">stackoverflow - Capitalize the first letter of string in JavaScript</a></p>',frontmatter:{title:"Capitalize the First Letter of a String",parent:"/home/stuart/guides/src/pages/articles/miscellaneous/capitalize-the-first-letter-of-a-string/index.md absPath of file"}}},pathContext:{slug:"/articles/miscellaneous/capitalize-the-first-letter-of-a-string/"}}}});
//# sourceMappingURL=path---articles-miscellaneous-capitalize-the-first-letter-of-a-string-04b9c6fa6fa9a45b22d2.js.map