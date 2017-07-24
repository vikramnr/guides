webpackJsonp([339],{"./node_modules/json-loader/index.js!./.cache/json/articles-miscellaneous-how-to-install-the-mean-stack-on-mac-osx.json":function(e,o){e.exports={data:{markdownRemark:{html:'<p>To install MongoDB, you should have Mac OS X 10.6 (Snow Leopard) or above. To find out which version of OS X you own, click the  icon in the top left corner of your screen and select <code>About This Mac</code>.</p>\n<p><img src="//forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=2" alt=":warning:" title=":warning:"> <strong>WARNING:</strong> do a Time Machine backup before carrying out any of the following steps!</p>\n<h2>Step 1: installing MongoDB</h2>\n<p>The easiest way to install MongoDB on OS X is using <a href="http://brew.sh/">HomeBrew</a>. If you haven\'t used HomeBrew before, simply execute the following command in a Terminal window:</p>\n<pre><code>ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n</code></pre>\n<p>After HomeBrew is successfully installed, follow up with this command:</p>\n<pre><code>brew update &#x26;&#x26; brew install mongodb\n</code></pre>\n<p>HomeBrew will automatically install all the dependencies for you.</p>\n<h2>Step 2: installing Node.js</h2>\n<p>Again, we\'ll let HomeBrew do the heavy lifting:</p>\n<pre><code>brew install node\n</code></pre>\n<p>The npm executable is already included in the Node.js package.</p>\n<p>Before continuing, let\'s make sure Node.js modules can be found by others (<img src="//forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=2" alt=":warning:" title=":warning:"> <strong>CAUTION</strong>: it\'s best to copy and paste these commands, as you\'d lose the original contents of your <code>.bashrc</code> file if you typed <code>></code> in place of <code>>></code>):</p>\n<pre><code>echo \'export NODE_PATH="./node_modules:/usr/local/lib/node_modules"\' >> ~/.bashrc &#x26;&#x26; source ~/.bashrc\n</code></pre>\n<p>To check if the configuration is in effect, execute:</p>\n<pre><code>echo $NODE_PATH\n</code></pre>\n<p>You should see <code>./node_modules:/usr/local/lib/node_modules</code> printed out below your command.</p>\n<p>If you use a different shell than Bash, simply replace <code>~/.bashrc</code> with your shell configuration file.</p>\n<h2>Step 3: installing fullstack tools</h2>\n<pre><code>npm install -g express yo grunt grunt-cli generator-angular-fullstack bower\n</code></pre>\n<h2>Step 4: generating a fullstack app</h2>\n<p>Make a directory for your Back End Project projects. Assuming your desktop is your de facto workspace:</p>\n<pre><code>mkdir ~/Desktop/Back End Projects &#x26;&#x26; cd ~/Desktop/Back End Projects\n</code></pre>\n<p>Now that all the preparations are in place, it\'s time for the main event:</p>\n<pre><code>yo angular-fullstack\n</code></pre>\n<p>Answer the questions according to checklist items <span class="hashtag">#13-23</span> of <a href="http://www.freecodecamp.com/challenges/get-set-for-our-back-end-development-projects">Challenge: Get Set for Back End Projects</a>. Consult <span class="hashtag">#24-27</span> if you run into errors. This will download ~350MB worth of files into your current directory.</p>\n<p>Before going any further, we need to fix a <a href="https://github.com/clnhll/guidetobasejumps#fixing-exportsupdate">known issue</a> in some generated files:</p>\n<pre><code>echo "sed -i \'\' -e \'s/_.merge/_.extend/\' server/api/*/*.controller.js" > \\\nfix-exports-update.sh &#x26;&#x26; chmod +x fix-exports-update.sh &#x26;&#x26; \\\n./fix-exports-update.sh\n</code></pre>\n<p>You need to run <code>./fix-exports-update.sh</code> every time you generate a new API endpoint (until they fix this upstream, that is).</p>\n<h2>Step 5: initialising local Git repository</h2>\n<p>Tell Git not to track your database:</p>\n<pre><code>echo "data" >> .gitignore\n</code></pre>\n<p>Turn the directory in which your application is located into a Git repository by running the following commands:</p>\n<pre><code>git init &#x26;&#x26; git add . &#x26;&#x26; git commit -am \'initial commit\'\n</code></pre>\n<h2>Step 6: starting MongoDB</h2>\n<p>To start MongoDB for the first time in your app\'s directory, run the following commands in your terminal:</p>\n<pre><code>mkdir data &#x26;&#x26; echo \'mongod --config /usr/local/etc/mongod.conf --dbpath=data --rest "$@" --httpinterface\' > mongod.sh &#x26;&#x26; chmod a+x mongod.sh &#x26;&#x26; ./mongod.sh\n</code></pre>\n<p>From this point on you can simply start MongoDB by executing <code>./mongod.sh</code>. A few things to note:</p>\n<ul>\n<li>The <code>.conf</code> file directs <code>mongod</code> to write messages to a log file instead of stdout. To view the log, run the following in a separate Terminal tab: <code>less /usr/local/var/log/mongodb/mongo.log</code>.</li>\n<li>Since we\'re not on Cloud9, we don\'t need the <code>--nojournal</code> option. Journaling lets you recover the database in case of a <code>mongod</code> crash.</li>\n<li>You have to make a clean database for each project. If you copied the <code>data</code> directory over from an earlier project, <code>mongod</code> will fail to start. If that\'s the case, just <code>rm -rf data &#x26;&#x26; mkdir data &#x26;&#x26; ./mongod.sh</code>.</li>\n</ul>\n<h2>Step 7: starting Grunt</h2>\n<p>Open a new Terminal tab by pressing <code>⌘T</code>, and run the following command:</p>\n<pre><code>grunt serve\n</code></pre>\n<p>Grunt should automatically open your new Angular site\'s index page as soon as it finishes starting up.</p>\n<p>Now you should be able to follow the rest of the Challenge instructions to push to GitHub and Heroku. Just ignore the part about SSH key (#33-36) and replace <code>~/workspace</code> with your app directory\'s path.</p>\n<h2>Footnote</h2>\n<p>The above steps were tested under the following configuration:</p>\n<ul>\n<li>OS X 10.10.5</li>\n<li>zsh 5.0.8 (x86_64-apple-darwin14.3.0)</li>\n<li>node v0.12.7</li>\n<li>npm 2.11.3</li>\n</ul>',frontmatter:{title:"How To Install the Mean Stack On Mac Osx",parent:"/home/stuart/guides/src/pages/articles/miscellaneous/how-to-install-the-mean-stack-on-mac-osx/index.md absPath of file"}}},pathContext:{slug:"/articles/miscellaneous/how-to-install-the-mean-stack-on-mac-osx/"}}}});
//# sourceMappingURL=path---articles-miscellaneous-how-to-install-the-mean-stack-on-mac-osx-954e7ba555c1d248fe10.js.map