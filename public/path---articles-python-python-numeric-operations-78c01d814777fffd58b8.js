webpackJsonp([164],{"./node_modules/json-loader/index.js!./.cache/json/articles-python-python-numeric-operations.json":function(t,e){t.exports={data:{markdownRemark:{html:'<p><a href="https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex">Python Docs - Numeric Operations</a></p>\n<p>Python fully supports mixed arithmetic: when a binary arithmetic operator has operands of different numeric types, the operand with the "narrower" type is widened to that of the other, where integer is narrower than floating point, which is narrower than complex. Comparisons between numbers of mixed type use the same rule. [2] The constructors int(), float(), and complex() can be used to produce numbers of a specific type.</p>\n<p>All numeric types (except complex) support the following operations, sorted by ascending priority (all numeric operations have a higher priority than comparison operations):</p>\n<table>\n<thead>\n<tr>\n<th>Operation</th>\n<th>Results</th>\n<th>Notes</th>\n<th>Full documentation</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>x + y</code></td>\n<td>sum of x and y</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td><code>x - y</code></td>\n<td>difference of x and y</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td><code>x * y</code></td>\n<td>product of x and y</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td><code>x / y</code></td>\n<td>quotient of x and y</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td><code>x // y</code></td>\n<td>floored quotient of x and y</td>\n<td>(1)</td>\n<td></td>\n</tr>\n<tr>\n<td><code>x % y</code></td>\n<td>remainder of x / y</td>\n<td>(2)</td>\n<td></td>\n</tr>\n<tr>\n<td><code>-x</code></td>\n<td>x negated</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td><code>+x</code></td>\n<td>x unchanged</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td><code>abs(x)</code></td>\n<td>absolute value or magnitude of x</td>\n<td></td>\n<td><a href="https://docs.python.org/3/library/functions.html#abs"><code>abs()</code></a></td>\n</tr>\n<tr>\n<td><code>int(x)</code></td>\n<td>x converted to integer</td>\n<td>(3)(6)</td>\n<td><a href="https://docs.python.org/3/library/functions.html#int"><code>int()</code></a></td>\n</tr>\n<tr>\n<td><code>float(x)</code></td>\n<td>x converted to floating point</td>\n<td>(4)(6)</td>\n<td><a href="https://docs.python.org/3/library/functions.html#float"><code>float()</code></a></td>\n</tr>\n<tr>\n<td><code>complex(re, im)</code></td>\n<td>a complex number with real part re, imaginary part im. im defaults to zero.</td>\n<td>(6)</td>\n<td><a href="https://docs.python.org/3/library/functions.html#complex"><code>complex()</code></a></td>\n</tr>\n<tr>\n<td><code>c.conjugate()</code></td>\n<td>conjugate of the complex number c</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td><code>divmod(x, y)</code></td>\n<td>the pair (x // y, x % y)</td>\n<td>(2)</td>\n<td><a href="https://docs.python.org/3/library/functions.html#divmod"><code>divmod()</code></a></td>\n</tr>\n<tr>\n<td><code>pow(x, y)</code></td>\n<td>x to the power y</td>\n<td>(5)</td>\n<td><a href="https://docs.python.org/3/library/functions.html#pow"><code>pow()</code></a></td>\n</tr>\n<tr>\n<td><code>x ** y</code></td>\n<td>x to the power y</td>\n<td>(5)</td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<p><strong>Notes:</strong></p>\n<ol>\n<li>\n<p>Also referred to as integer division. The resultant value is a whole integer, though the result\'s type is not necessarily int. The result is always rounded towards minus infinity: <code>1//2</code> is <code>0</code>, <code>(-1)//2</code> is <code>-1</code>, <code>1//(-2)</code> is <code>-1</code>, and <code>(-1)//(-2)</code> is <code>0</code>.</p>\n</li>\n<li>\n<p>Not for complex numbers. Instead convert to floats using <code>abs()</code> if appropriate.</p>\n</li>\n<li>\n<p>Conversion from floating point to integer may round or truncate as in C; see functions <a href="https://docs.python.org/3/library/math.html#math.floor"><code>math.floor()</code></a> and <a href="https://docs.python.org/3/library/math.html#math.ceil"><code>math.ceil()</code></a> for well- defined conversions.</p>\n</li>\n<li>\n<p><code>float</code> also accepts the strings <code>“nan”</code> and <code>“inf”</code> with an optional prefix <code>“+”</code> or <code>“-”</code> for Not a Number (NaN) and positive or negative infinity.</p>\n</li>\n<li>\n<p>Python defines <code>pow(0, 0)</code> and <code>0 ** 0</code> to be <code>1</code>, as is common for programming languages.</p>\n</li>\n<li>\n<p>The numeric literals accepted include the digits 0 to 9 or any Unicode equivalent (code points with the <code>Nd</code> property).</p>\n</li>\n</ol>\n<blockquote>\n<p>See <a href="http://www.unicode.org/Public/8.0.0/ucd/extracted/DerivedNumericType.txt">Unicode Derived Numeric Type</a> for a complete list of code points with the <code>Nd</code> property.</p>\n</blockquote>',frontmatter:{title:"Python Numeric Operations",parent:"/home/stuart/guides/src/pages/articles/python/python-numeric-operations/index.md absPath of file"}}},pathContext:{slug:"/articles/python/python-numeric-operations/"}}}});
//# sourceMappingURL=path---articles-python-python-numeric-operations-78c01d814777fffd58b8.js.map