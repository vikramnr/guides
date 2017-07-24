webpackJsonp([337],{"./node_modules/json-loader/index.js!./.cache/json/articles-miscellaneous-how-to-log-in-to-your-local-instance-of-free-code-camp.json":function(e,o){e.exports={data:{markdownRemark:{html:'<p>This guide will help you log in to your local FCC site using your GitHub account. This process should be similar for logging in with other social media accounts. This guide assumes you already have a local copy of FCC up and running.</p>\n<h2>TL;DR</h2>\n<ol>\n<li><a href="https://github.com/settings/developers">Register a new OAuth application</a></li>\n<li>Homepage field: <code>http://localhost:3000/</code></li>\n<li>Callback field: <code>http://localhost:3000/auth/github/callback</code></li>\n<li>Copy/paste the Client ID and Client Secret into your <code>.env</code> file</li>\n<li>Use port 3000 when viewing your local FCC site</li>\n</ol>\n<p>Free Code Camp Issue Mods and staff are on hand to assist with Pull Request related issues on our <a href="https://gitter.im/FreeCodeCamp/HelpContributors">Help Contributors Chat Room</a></p>\n<h2>Disclaimer</h2>\n<p>The output from running <code>$ gulp</code> mentions the <strong>Access Port</strong> is 3001. I have only successfully logged in with GitHub at port 3000 - the <strong>Proxy Port</strong>. If you understand how to log in using other ports, please consider submitting a pull request on this wiki.</p>\n<h2>Log In Using Your GitHub Account</h2>\n<ol>\n<li><a href="https://github.com/settings/developers">Register a new OAuth application</a> and click <strong>Register new application</strong></li>\n</ol>\n<p><em>Alternatively</em>, click your <strong>Profile Picture</strong> => <strong>Settings</strong> => <strong>Applications</strong> => <strong>Developer applications</strong> => <strong>Register new application</strong></p>\n<p><img src="//discourse-user-assets.s3.amazonaws.com/original/2X/5/55f4645c3498ceb8098afe8e8353da8f7c262548.png" alt="Register GitHub OAuth App">  </p>\n<ol>\n<li>\n<p>Fill out OAuth application fields</p>\n<ul>\n<li>\n<p><strong>Application name</strong> - choose any name, like <code>fcc-local</code></p>\n</li>\n<li>\n<p><strong>Homepage URL</strong> - set to <code>http://localhost:3000/</code></p>\n</li>\n<li>\n<p><strong>Application description</strong> - optional</p>\n</li>\n<li>\n<p><strong>Authorization callback URL</strong> - set to <code>http://localhost:3000/auth/github/callback</code></p>\n</li>\n</ul>\n</li>\n<li>\n<p>Click <strong>Register application</strong> to see the newly registered application page with your Client ID and Client Secret.</p>\n</li>\n</ol>\n<p><img src="//discourse-user-assets.s3.amazonaws.com/original/2X/c/c43ee37a9f0f228d3663bb28accedc14cca3ff56.png" alt="Client ID and Client Secret"></p>\n<ol>\n<li>Copy and paste your Client ID and Client Secret into your <code>.env</code> file.</li>\n</ol>\n<p><em>Note: your Client ID and Client Secret will be long alphanumeric values.</em></p>\n<p><img src="//discourse-user-assets.s3.amazonaws.com/original/2X/5/549aeaa6ea85e119ba5e978c708dc55c39b134b3.png" alt="Update .env file"></p>\n<h2>Tips</h2>\n<ol>\n<li>\n<p>Remove / unset with comment block the unwanted provider in <a href="https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/server/passport-providers.js">passport-provider</a>.</p>\n</li>\n<li>\n<p>Add SESSION<em>SECRET and COOKIE</em>SECRET in <code>.env</code> if you get error on express-session and cookieParser.</p>\n</li>\n</ol>\n<p> <code>COOKIE_SECRET=\'secret\' SESSION_SECRET=\'secret\'</code> </p>\n<ol>\n<li>Run command <code>node seed</code> before run <code>gulp</code> if you dont get the challenges.</li>\n</ol>\n<h2>Finished</h2>\n<p>Congratulations! You can now successfully log into your local FCC site using your GitHub account.</p>',frontmatter:{title:"How To Log In To Your Local Instance of Free Code Camp",parent:"/home/stuart/guides/src/pages/articles/miscellaneous/how-to-log-in-to-your-local-instance-of-free-code-camp/index.md absPath of file"}}},pathContext:{slug:"/articles/miscellaneous/how-to-log-in-to-your-local-instance-of-free-code-camp/"}}}});
//# sourceMappingURL=path---articles-miscellaneous-how-to-log-in-to-your-local-instance-of-free-code-camp-27acddfc9037931d3190.js.map