webpackJsonp([351],{"./node_modules/json-loader/index.js!./.cache/json/articles-miscellaneous-how-to-fork-and-maintain-a-local-instance-of-free-code-camp-on-mac-and-linux.json":function(e,o){e.exports={data:{markdownRemark:{html:'<p>If you plan to write a <a>Pull Request for Free Code Camp</a>, you will almost certainly need a local copy of the site. Having a local copy of the site will give you additional capability with Git that are not available via the GitHub browser interface, including updating your fork and rebasing/squashing commits.</p>\n<p>This guide will cover how to fork the FCC project, clone a local copy, and how to maintain your fork. All Git commands will be given for the command line, which we strongly recommend that you use, but most commands can be executed in a graphical Git environment as well.</p>\n<p>If you\'re using Windows, <a href="https://forum.freecodecamp.com/t/how-to-clone-and-setup-the-free-code-camp-website-on-a-windows-pc/19366">use this guide instead</a>.</p>\n<h2>Need Help?</h2>\n<p>Free Code Camp Issue Mods and staff are on hand to assist with Pull Request related issues on our <a href="https://gitter.im/FreeCodeCamp/HelpContributors">Help Contributors Chat Room</a></p>\n<h2>Setting Up your System</h2>\n<ol>\n<li>Install <a href="https://git-scm.com/">Git</a> or your favorite Git client</li>\n<li>(Optional) <a href="https://help.github.com/articles/generating-ssh-keys/">Setup an SSH Key</a> for Github.<br>\nUsing SSH can greatly speed up your interactions with GitHub, since you will not be prompted for your password.</li>\n<li>Create a parent projects directory on your system. For the purposes of this document we will assume it is <code>/mean/</code></li>\n</ol>\n<h2>Forking Free Code Camp</h2>\n<ol>\n<li>Navigate to the top level Free Code Camp repository: <code>https://github.com/FreeCodeCamp/freecodecamp</code></li>\n<li>Click the "Fork" Button in the upper right hand corner of the interface. <a href="https://help.github.com/articles/fork-a-repo/">More Details Here</a>.</li>\n<li>After the project is forked, you will be taken to your copy of the FCC repo at <code>username/freecodecamp</code></li>\n</ol>\n<h2>Cloning Your Fork</h2>\n<ol>\n<li>From your fork of FCC, copy the HTTPS or SSH (if you installed SSH Keys) clone URL</li>\n<li>Open a Bash Shell/Command Line/Terminal to your projects directory (IE: <code>/mean/</code>)</li>\n<li>Clone your fork of git:</li>\n</ol>\n<p><code>git clone https://github.com/yourUserName/FreeCodeCamp.git</code></p>\n<p>This will download the entire FCC repo to your projects directory.</p>\n<p><code>bash $ git clone https://github.com/yourUserName/FreeCodeCamp.git Cloning into \'FreeCodeCamp\'... remote: Counting objects: 37294, done. remote: Compressing objects: 100% (13/13), done. remote: Total 37294 (delta 5), reused 0 (delta 0), pack-reused 37281 Receiving objects: 100% (37294/37294), 18.69 MiB | 3.99 MiB/s, done. Resolving deltas: 100% (26053/26053), done. Checking connectivity... done. Checking out files: 100% (573/573), done.</code> </p>\n<h3>Setting up your Upstream</h3>\n<ol>\n<li>Change directory to the new <code>FreeCodeCamp</code> directory</li>\n<li>Add a remote to the official FCC repo:</li>\n</ol>\n<p><code>git remote add upstream https://github.com/FreeCodeCamp/FreeCodeCamp.git</code></p>\n<p>Congratulations, you now have a local copy of the FCC repo!</p>\n<h2>Maintaining your Fork</h2>\n<p>Now that you have a copy of your fork, there is work you will need to do to keep it current.</p>\n<h2>Rebasing from Upstream</h2>\n<p>Do this every time prior to creating a branch for a PR:</p>\n<ol>\n<li>Make sure you are in the <code>staging</code> branch</li>\n</ol>\n<p><code>bash $ git status On branch staging Your branch is up-to-date with \'origin/staging\'.</code> </p>\n<ol>\n<li>If you are not on staging, resolve any outstanding files/commits and checkout staging<br>\n<code>git checkout staging</code></li>\n<li>Do a pull with rebase against <code>upstream</code>:</li>\n</ol>\n<p><code>git pull --rebase upstream staging</code></p>\n<p>This will pull down all of the changes on the official staging without making an additional commit in your local repo.<br>\n4. (Optional) Force push your updated staging to your GitHub fork</p>\n<p><code>git push origin staging --force</code></p>\n<p>This will overwrite the staging branch on your fork.</p>\n<p><code>bash $ git push origin staging --force Counting objects: 99, done. Delta compression using up to 12 threads. Compressing objects: 100% (38/38), done. Writing objects: 100% (38/38), 16.14 KiB | 0 bytes/s, done. Total 38 (delta 25), reused 0 (delta 0) To git@github.com:yourUserName/FreeCodeCamp.git f7a525c..8a2271d staging -> staging</code></p>',frontmatter:{title:"How to Fork and Maintain a Local Instance of Free Code Camp on Mac and Linux",parent:"/home/stuart/guides/src/pages/articles/miscellaneous/how-to-fork-and-maintain-a-local-instance-of-free-code-camp-on-mac-and-linux/index.md absPath of file"}}},pathContext:{slug:"/articles/miscellaneous/how-to-fork-and-maintain-a-local-instance-of-free-code-camp-on-mac-and-linux/"}}}});
//# sourceMappingURL=path---articles-miscellaneous-how-to-fork-and-maintain-a-local-instance-of-free-code-camp-on-mac-and-linux-6aad3e108c8b19d3bbdc.js.map