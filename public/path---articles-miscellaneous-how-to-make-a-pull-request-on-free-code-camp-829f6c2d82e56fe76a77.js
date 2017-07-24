webpackJsonp([342],{"./node_modules/json-loader/index.js!./.cache/json/articles-miscellaneous-how-to-make-a-pull-request-on-free-code-camp.json":function(e,o){e.exports={data:{markdownRemark:{html:'<h1>Free Code Camp Pull Request</h1>\n<p><strong>What is a Pull Request?</strong></p>\n<p>A pull request (PR) is a method of submitting proposed changes to the Free Code Camp Repo (or any Repo, for that matter). You will make changes to copies of the files which make up Free Code Camp in a personal fork, then apply to have them accepted by Free Code Camp proper.</p>\n<h2>Need Help?</h2>\n<p>Free Code Camp Issue Mods and staff are on hand to assist with Pull Request related issues on our <a href="https://gitter.im/FreeCodeCamp/HelpContributors">Help Contributors Chat Room</a></p>\n<h2>Methods</h2>\n<p>There are two methods of creating a Pull for Free Code Camp:</p>\n<ol>\n<li>Editing files via the GitHub Interface</li>\n<li>Editing files on a local clone</li>\n</ol>\n<h2>Important: ALWAYS EDIT ON A BRANCH</h2>\n<p>Take away only one thing from this document, it should be this: Never, EVER make edits to the <code>staging</code> branch. ALWAYS make a new branch BEFORE you edit files. This is critical, because if your PR is not accepted, your copy of <code>staging</code> will be forever sullied and the only way to fix it is to delete your fork and re-fork.</p>\n<h2>Editing via your Local Fork (Recommended)</h2>\n<p>This is the recommended method. Read about <a href="http://forum.freecodecamp.com/t/how-to-fork-and-maintain-a-local-instance-of-free-code-camp/19116">How to Setup and Maintain a Local Instance of Free Code Camp</a>.</p>\n<ol>\n<li>Perform the maintenance step of rebasing <code>staging</code></li>\n<li>Ensure you are on the <code>staging</code> branch using <code>git status</code>:</li>\n</ol>\n<p>`<br>\n$ git status<br>\nOn branch staging<br>\nYour branch is up-to-date with \'origin/staging\'.</p>\n<p>nothing to commit, working directory clean<br>\n`</p>\n<ol>\n<li>If you are not on staging or your working directory is not clean, resolve any outstanding files/commits and checkout staging <code>git checkout staging</code></li>\n<li>Create a branch off of <code>staging</code> with git: <code>git checkout -B branch/name-here</code> Note: Branch naming is important. Use a name like <code>fix/short-fix-description</code> or <code>feature/short-feature-description</code> Review the <a href="https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/CONTRIBUTING.md">Contribution Guidelines</a> for more detail.</li>\n<li>Edit your file(s) locally with the editor of your choice</li>\n<li>Check your <code>git status</code> to see unstaged files.</li>\n<li>Add your edited files: <code>git add path/to/filename.ext</code> You can also do: <code>git add .</code> to add all unstaged files. Take care, though, because you can accidentially add files you don\'t want added. Review your <code>git status</code> first.</li>\n<li>Commit your edits: <code>git commit -m "Brief Description of Commit"</code></li>\n<li><a href="http://forum.freecodecamp.com/t/how-to-squash-multiple-commits-into-one-with-git/13231">Squash your commits</a>, if there are more than one.</li>\n<li>Push your commits to your GitHub Fork: <code>git push -u origin branch/name-here</code></li>\n<li>Go to <a>Common Steps</a></li>\n</ol>\n<h2>Editing via the GitHub Interface</h2>\n<p><strong>Note:</strong> Editing via the GitHub Interface is not recommended, since it is not possible to update your fork via GitHub\'s interface without deleting and recreating your fork.</p>\n<ol>\n<li>Create a Fork of the FCC Repo</li>\n<li><a href="https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/">Create a branch</a> within your fork. Note: Branch naming is important. Use a name like <code>fix/short-fix-description</code> or <code>feature/short-feature-description</code> Review the <a href="https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/CONTRIBUTING.md">Contribution Guidelines</a> for more detail.</li>\n<li>Edit the file and commit the changes.</li>\n<li>Continue to Common Steps.</li>\n</ol>\n<h2>Common Steps</h2>\n<ol>\n<li>Once the edits have been committed, you will be prompted to create a pull request on your fork\'s Github Page.</li>\n<li>By default, all pull requests should be against the FCC main repo, <code>staging</code> branch.</li>\n<li>Make a clear title for your PR which succinctly indicates what is being fixed. Do not add the issue number in the title. Examples: <code>Add Test Cases to Algorithm Drop It</code> <code>Correct typo in Challenge Size Your Images</code></li>\n<li>In the body of your PR include a more detailed summary of the changes you made and why.</li>\n<li>Indicate if you have tested on a local copy of the site or not.</li>\n<li>If your PR is due to an issue, you can <a href="https://help.github.com/articles/closing-issues-via-commit-messages/">reference and close that issue</a> automatically by adding a keyword like <code>Closes #xxxx</code>, where <code>xxxx</code> is the issue number.</li>\n</ol>\n<h2>Next Steps</h2>\n<h3>If Changes are Requested</h3>\n<p>Don\'t worry, many PRs, especially first PRs, require correction or updating. If you have used the GitHub interface to create your PR, you will need to close your PR, create a new branch, and re-submit. This is because you cannot squash your commits via the GitHub interface.</p>\n<p>If you have a local copy of the repo, you can make the requested changes and amend your commit with: <code>git commit --amend</code> This will update your existing commit. When you push it to your fork you will need to do a force push to overwrite your old commit: <code>git push --force</code></p>\n<p>Be sure to post in the PR conversation that you have made the requested changes.</p>\n<h3>If your PR is accepted</h3>\n<p>Once your PR is accepted, you may delete the branch you created to submit it. This keeps your working fork clean. You can do this with a press of a button on the GitHub PR interface. You can delete the local copy of the branch with: <code>git branch -D branch/to-delete-name</code></p>\n<h3>If your PR is rejected</h3>\n<p>Don\'t despair! You should receive solid feedback from the Issue Moderators as to why it was rejected and what is needed. Please, keep contributing.</p>',frontmatter:{title:"How to Make a Pull Request on Free Code Camp",parent:"/home/stuart/guides/src/pages/articles/miscellaneous/how-to-make-a-pull-request-on-free-code-camp/index.md absPath of file"}}},pathContext:{slug:"/articles/miscellaneous/how-to-make-a-pull-request-on-free-code-camp/"}}}});
//# sourceMappingURL=path---articles-miscellaneous-how-to-make-a-pull-request-on-free-code-camp-829f6c2d82e56fe76a77.js.map