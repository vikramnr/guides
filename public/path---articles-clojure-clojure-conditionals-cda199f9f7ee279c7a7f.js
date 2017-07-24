webpackJsonp([1811],{"./node_modules/json-loader/index.js!./.cache/json/articles-clojure-clojure-conditionals.json":function(e,o){e.exports={data:{markdownRemark:{html:'<p>You\'re not going to get anywhere in a language if all you can do is define functions that print things and do simple arithmetic. Conditionals and logic are a fundamental part of making code that does interesting, useful things. Try and imagine a world without logic in programs: you wouldn\'t even be able to simple things, like checking if two numbers are equal!</p>\n<h2>Logical Operators</h2>\n<p>Clojure, like most languages, has 3 logical operators: <code>and</code>, <code>or</code> and <code>not</code>. These functions take booleans (<code>true</code> or <code>false</code>) as arguments, and return booleans based on what those booleans are. Like everything in a Lisp, these operators use prefix notation, which means they might look weird to you.</p>\n<pre><code>(and true false)\n; => false\n(and true true)\n; => true\n(or false false)\n; => false\n(or true false)\n; => true\n(not true)\n; => false\n(not false)\n; => true\n</code></pre>\n<p><img src="//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2" alt=":rocket:" title=":rocket:"> <a href="https://ideone.com/XfXn8T">IDEOne it!</a></p>\n<h2>If</h2>\n<p><code>if</code> allows you to execute code based on whether a boolean is <code>true</code> or <code>false</code>. <code>if</code> in Clojure looks quite weird, not because it uses prefix notation, but because there is no else keyword. If the condition is true, it evaluates the first expression. If it\'s false, it executes the second.</p>\n<pre><code>(if (= (+ 2 2) 4)\n  (println "Maths works!") ; this gets evaluated if 2 + 2 = 4\n  (println "UH OH"))       ; this gets evaluated if 2 + 2 != 4\n; => Maths works!\n;    nil\n</code></pre>\n<p>This presents a problem: what if we want to do multiple things?</p>\n<pre><code>(if (= (+ 2 2) 4)\n  (println "Maths works!")\n  (println "Maths still works!")\n  (println "UH OH"))\n; => CompilerException java.lang.RuntimeException: Too many arguments to if\n</code></pre>\n<p>Thankfully, we have the <code>do</code> function to solve this problem. <code>do</code> evaluates multiple expressions, one after the other.</p>\n<pre><code>(if (= (+ 2 2) 4)\n  (do                               ; all of this gets evaluated if 2 + 2 = 4\n    (println "Maths works!")\n    (println "Maths still works!"))\n  (println "UH OH"))\n; => Maths works!\n;    Maths still works!\n;    nil\n</code></pre>\n<p><strong>Note:</strong> since <code>if</code> is, itself, an expression, there\'s no need for a ternary operator like in many C-like languages.</p>\n<pre><code>var doesMathsWork = 2 + 2 === 4 ? "Maths works!" : "UH OH";\nconsole.log(doesMathsWork);\n// => Maths works!\n</code></pre>\n<p>Now that you look at it, doesn\'t that look so weird? This is much easier to read and understand (ignoring the lack of the word <code>else</code>):</p>\n<pre><code>(def does-maths-work (if (= (+ 2 2) 4) "Maths works!" "UH OH"))\n(println does-maths-work)\n; => Maths works!\n;    nil\n</code></pre>\n<p><img src="//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2" alt=":rocket:" title=":rocket:"> <a href="https://ideone.com/5XhcAa">IDEOne it!</a></p>\n<h2>Alternatives to If</h2>\n<p>Clojure also has some macros that behave similarly to <code>if</code>, and can sometimes be more concise.</p>\n<p><code>if-not</code> is perhaps the most simple example - it\'s <code>if</code> inverted. These two pieces of code are exactly the same:</p>\n<pre><code>(def does-maths-work (if (not (= (+ 2 2) 4)) "UH OH" "Maths works!"))\n(def does-maths-work (if-not (= (+ 2 2) 4) "UH OH" "Maths works!"))\n</code></pre>\n<p>The first expression gets evaluated if it\'s false, and the second gets evaluated if it\'s true. Notice that using <code>if-not</code> avoids nesting our condition inside <code>not</code>, which can help make our code easier to understand.</p>\n<p><code>when</code> is another useful macro. These two pieces of code are also the same:</p>\n<pre><code>(if (= (+ 2 2) 4) (do (println "Maths works!") (println "Hooray!")))\n(when (= (+ 2 2) 4) (println "Maths works!") (println "Hooray!"))\n</code></pre>\n<p><img src="//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2" alt=":rocket:" title=":rocket:"> <a href="https://ideone.com/tUVAw3">IDEOne it!</a></p>\n<p><strong>Note:</strong> There is no <code>when/else</code>. <code>when</code> <em>only</em> executes if the condition is true.</p>\n<p>Clojure has plenty of useful macros like these for all kinds of tasks. Try having a look at <a href="https://clojuredocs.org/">the Clojure documentation</a> and see if you can find any more!</p>\n<p>| <a href="//forum.freecodecamp.com/t/clojure-the-basics/18410"><img src="//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2" alt=":point_left:" title=":point_left:"> Previous</a> | <a href="//forum.freecodecamp.com/t/clojure-resources/18422"><img src="//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2" alt=":book:" title=":book:"> Home <img src="//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2" alt=":book:" title=":book:"></a> | <a href="//forum.freecodecamp.com/t/clojure-create-local-variables-with-let/18415">Next <img src="//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2" alt=":point_right:" title=":point_right:"></a>|<br>\n| <a href="//forum.freecodecamp.com/t/clojure-the-basics/18410">Summary</a> | <a href="//forum.freecodecamp.com/t/clojure-resources/18422">Table of Contents</a> | <a href="//forum.freecodecamp.com/t/clojure-create-local-variables-with-let/18415">Conditionals</a>|</p>',frontmatter:{title:"Clojure Conditionals",parent:"/home/stuart/guides/src/pages/articles/clojure/clojure-conditionals/index.md absPath of file"}}},pathContext:{slug:"/articles/clojure/clojure-conditionals/"}}}});
//# sourceMappingURL=path---articles-clojure-clojure-conditionals-cda199f9f7ee279c7a7f.js.map