webpackJsonp([1238],{"./node_modules/json-loader/index.js!./.cache/json/articles-javascript-javascript-arrayprototypemap.json":function(e,t){e.exports={data:{markdownRemark:{html:'<p>The method <code>map</code> of the Array prototype allows you to grab a hold of each element inside an array and apply a function to them. After <strong>map</strong> finishes iterating through the array, it will return a <strong>new array</strong> with the results of applying the function to the aforementioned elements.</p>\n<h2>The syntax is as follows:</h2>\n<p><code>myAwesomeArray.map(myAwesomeFunction)</code></p>\n<p>Since <strong>map</strong> doesn\'t mutate the original array, it should be used as a value, stored inside a variable, passed in as a <strong>returned value</strong> inside a function (the most common case) and many other things. Let\'s learn a little bit of what this powerful function can do! Say we have an array of names and we want to create a new array with these names but <strong>UPPERCASED</strong>.</p>\n<pre><code>var names = ["Leia", "Anakin", "Luke", "Obi Wan Kenobi"];\nvar uppercaseNames = names.map(function(name) {\n  return name.toUpperCase();\n};\n</code></pre>\n<p>Now if we <code>console.log(uppercaseNames)</code> we will get this:</p>\n<p><code>Array(4) -> ["LEIA", "ANAKIN", "LUKE", "OBI WAN KENOBI"]</code></p>\n<p>But how does it work? Let\'s dive more into it.</p>\n<h2>Let\'s talk about the callback parameters</h2>\n<p>The callback is the function that the Array.map() method accepts, it can be an anonymous function or an already declared function with the following parameters which, by the way, you can name as you please:</p>\n<p>1- <strong>currentValue</strong>: As the name suggest, it\'s the current element of the array being evaluated and waiting for your function to replace it with a new value in the new array (same index of course).</p>\n<p>2- <strong>index</strong>: It equals to the numeric index of currentValue, say you are in "Anakin", that means index, at the time, will equal to <strong>1</strong>.</p>\n<p>3- <strong>array</strong>: The array that\'s calling the method, in this case, it\'s referring to <strong>names</strong>.</p>\n<p>Examples work better than loose explanations, now we can make our callback function turn.</p>\n<p><code>["Leia", "Anakin", "Luke", "Obi Wan Kenobi"]</code> into <code>["My name is Leia, I\'m #1", "My name is Anakin, I\'m #2", "My name is Luke, I\'m #3", "And last but not less important, I\'m #4 Obi Wan Kenobi"]</code></p>\n<p>Sounds interesting and complex huh? It\'s actually not if you put the first two parameters to use.</p>\n<pre><code>var jediMasters = ["Leia", "Anakin", "Luke", "Obi Wan Kenobi"];\nvar jediMastersSayHi = jediMasters.map(function(jediName, jediIndex) {\n  if (jediName === "Obi Wan Kenobi") {\n    return "And last but not less important, I\'m #" + (jediIndex + 1) + " " + jediName;\n  } else {\n    return "My name is " + jediName + ", I\'m #" + (jediIndex + 1);\n  }\n}); // We\'re done mapping, now console.log the whole thing.\n</code></pre>\n<p>If we now console out the values of the two arrays, we get this:</p>\n<p><img src="//discourse-user-assets.s3.amazonaws.com/original/2X/4/4aa89d7b3d1df11e84f95035a1c05f9680111775.png" alt="Map in action"></p>\n<p>If you are asking why one of the values in the string concatenation is <code>(jediIndex + 1)</code>, that\'s because <strong>indices are 0-based</strong>, we would get 0, 1, 2 and 3 for our Jedi\'s and that\'s not cool. Check that IF statement just sitting there, what does it do? Simple, it checks if the current Jedi is Obi Wan, if it is, then the new value of that element of the array (the new one) should be different from the rest.</p>\n<p>It\'s important to note that <strong>we can write the function outside the map method</strong> and call it with the name\'s function. Let\'s one more time re-write our code and see how we can achieve this (I think it\'s cleaner):</p>\n<pre><code>function sayHi(jedi, index) {\n  if (jedi === "Obi Wan Kenobi") {\n    return "And last but not less important, I\'m #" + (index + 1) + " " + jedi;\n  } else {\n    return "My name is " + jedi + ", I\'m #" + (index + 1);\n  }\n}\n\nvar jediMasters = ["Leia", "Anakin", "Luke", "Obi Wan Kenobi"];\nvar jediMastersSayHi = jediMasters.map(sayHi); // We\'re done mapping, now console.log the whole thing.\n</code></pre>\n<p>We can use map in strings and other types of objects if we use <code>Array.prototype.call(objectToBeMapped, callbackFunction)</code>, for more examples, go look other sites and practise it.</p>',frontmatter:{title:"javaScript Arrayprototypemap",parent:"/home/stuart/guides/src/pages/articles/javascript/javascript-arrayprototypemap/index.md absPath of file"}}},pathContext:{slug:"/articles/javascript/javascript-arrayprototypemap/"}}}});
//# sourceMappingURL=path---articles-javascript-javascript-arrayprototypemap-05d78008830e0d5b6350.js.map