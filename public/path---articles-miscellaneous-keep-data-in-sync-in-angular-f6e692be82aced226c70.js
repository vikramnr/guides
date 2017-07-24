webpackJsonp([303],{"./node_modules/json-loader/index.js!./.cache/json/articles-miscellaneous-keep-data-in-sync-in-angular.json":function(e,a){e.exports={data:{markdownRemark:{html:"<p>Say you want something to show up on the user view when you add it to the database. A new <em>thing</em> object will instantly show up in an <em>ng-repeat</em> loop in your HTML view if you simply add it to your local array with</p>\n<pre><code>$scope.awesomeThings.push(newThing);\n</code></pre>\n<p>But you'll still need to add it to your database collection. Add it to your collection with</p>\n<pre><code>$http.post('/api/things', newThing);\n</code></pre>\n<p>But wait! You'll soon realize that while all the other things in your <em>$scope.awesomeThings</em> array have unique ids assigned by MongoDB (under the <em>thing.</em>id_ property), your <em>newThing</em> object will not, which will make it hard for you at some point to make database actions on it (deleting it from your database requires you to use its <em>.</em>id_ property). So what you'll want to do after you add it to your <em>$scope.awesomeThings</em> array (because we want it to show up on the user's page immediately). Altogether, your code to add a newThing to your local array and database will look like:</p>\n<pre><code>$scope.awesomeThings.push(newThing);\n$http.post('/api/things', newThing).success(function(thatThingWeJustAdded) {\n    $scope.awesomeThings.pop(); // let's lose that id-lacking newThing \n    $scope.awesomeThings.push(thatThingWeJustAdded); // and add the id-having newThing!\n};\n</code></pre>\n<p>This updates the local array for seemingly instant results for your user and then syncs it to your database and updates the local array in the background with the database's version of your <em>newThing</em> object, unique <em>.</em>id_ and all. Notice the callback we pass to the <em>success</em> function receives the new <em>thing</em> back from the database as an argument! This way you can easily add it back to your local scope without too much overhead.</p>",frontmatter:{title:"Keep Data In Sync In Angular",parent:"/home/stuart/guides/src/pages/articles/miscellaneous/keep-data-in-sync-in-angular/index.md absPath of file"}}},pathContext:{slug:"/articles/miscellaneous/keep-data-in-sync-in-angular/"}}}});
//# sourceMappingURL=path---articles-miscellaneous-keep-data-in-sync-in-angular-f6e692be82aced226c70.js.map