webpackJsonp([395],{"./node_modules/json-loader/index.js!./.cache/json/articles-miscellaneous-equality-vs-identity-operator.json":function(e,a){e.exports={data:{markdownRemark:{html:"<p>In JavaScript there are 2 operators that could be used to compare two values: <em>==</em> and <em>===</em>. They seem to be exactly the same but they work differently and in some cases they will give different results.</p>\n<h2>Equity operator</h2>\n<p>Equality operator (==) compares two values after all necessary type conversions. Let's take a look at a few examples:</p>\n<pre><code>0 == ''             // -> true\nfalse == 'false'    // -> false\n</code></pre>\n<p>In the first example both 0 and '' (empty string) undergo automatic conversion. They are both converted to false giving:</p>\n<pre><code>false == false\n</code></pre>\n<p>Which is obviously <em>true</em>. In the second example <em>'false'</em>, a non-empty String is evaluated to true making the whole expression false.</p>\n<h2>Identity operator</h2>\n<p>In comparison, identity operator (===) will return true if and only if both values that are being compared are of the same type and have the same value. If we try to compare values of two different types, it will always return <em>false</em>.</p>\n<pre><code>false === 0            // -> false\n0 === ''              // -> false\n5 === 5                  // -> true\n</code></pre>\n<p>To be precise, === checks whether two variables reference the same object, or in case of value types (like <em>int</em>, <em>double</em>, <em>String</em>, <em>bool</em>, etc.) if they both have the same value.</p>\n<pre><code>var array1 = [ 5, 6, 7 ];\nvar array2 = [ 5, 6, 7 ];\nvar array3 = array2;\n\narray1 === array2      // -> false\narray1 == array2      // -> false\n\narray2 === array3      // -> true\narray2 == array3      // -> true\n</code></pre>\n<p>Both <em>array1</em> and <em>array2</em> have the same type and they are equal but comparison <em>array1 === array2</em> returns false as they refer to different objects. <em>array2 === array3</em> returns true as both variables refer to the same object.</p>\n<h2>Which operator should I use?</h2>\n<p>It's important to understand the difference between <em>==</em> and <em>===</em> but which operator should be used?</p>\n<p>When using <em>==</em> operator JavaScript will perform all conversions necessary to compare two values. It seems to be really convenient but effects of this conversion might be confusing and cause very difficult to track bugs.</p>\n<p>Douglas Crockford, author of the book <em>JavaScript: The Good Parts</em> suggests that <em>===</em> should be used everywhere, instead of <em>==</em> operator to avoid potential bugs. In most of the cases you should follow this advice, unless you specifically want to take advantage of automatic type conversion.</p>",frontmatter:{title:"Equality Vs Identity Operator",parent:"/home/stuart/guides/src/pages/articles/miscellaneous/equality-vs-identity-operator/index.md absPath of file"}}},pathContext:{slug:"/articles/miscellaneous/equality-vs-identity-operator/"}}}});
//# sourceMappingURL=path---articles-miscellaneous-equality-vs-identity-operator-a3590a89aa6d810cac5c.js.map