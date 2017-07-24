webpackJsonp([310],{"./node_modules/json-loader/index.js!./.cache/json/articles-miscellaneous-installing-flask-in-virtual-environment.json":function(e,n){e.exports={data:{markdownRemark:{html:'<p>If you wish to use Flask, you are in the right place! But install Flask, only because you want to explore web development in Flask. We would always recommend Django over Flask, because it gets difficult to build large web-applications in Flask; if you are new to web development in Python.</p>\n<p>Flask is a micro-framework; and you can pick the functionality you wish to have over the basic barebone functionality you already have from a standard web-framework. But if you don\'t wish to do all the hassle and focus on building your idea; perhaps <a>Django</a> would be a better company for the road ahead.</p>\n<p>I am going to assume you have <strong>not</strong> skipped the section on installing Python 3 and using it inside a virtual environment.</p>\n<p>First make sure that you are not inside a virtual environment already. Then create a new virtual environment, named <code>py3-flask</code></p>\n<pre><code>$ mkvirtualenv py3-flask --python=/usr/bin/python3\n</code></pre>\n<p>Now, execute the <code>workon</code> command to see a list of virtual environments in your machine. This should list <code>py3-flask</code> in a line.</p>\n<p>After this, activate this environment:</p>\n<pre><code>$ workon py3-flask\n</code></pre>\n<p>Your virtual environment would be activated with a copy of Python interpreter, with Python 3 properties. You should run</p>\n<pre><code>$ python --version\n</code></pre>\n<p>to ensure that you are indeed inside a Python 3 environment.</p>\n<p>Just to be clear, if you have already installed Django following the previous section - it should <strong>not</strong> be in this environment. We are using virtual environment; to keep our installation of different frameworks separated.</p>\n<p>To be sure, run</p>\n<pre><code>pip freeze\n</code></pre>\n<p>Make sure Django is not listed in the output list generated by above command.</p>\n<p>Now, let\'s install Flask. For your peruse, here\'s the <a href="http://flask.pocoo.org/docs/0.10/installation/">official installation guide</a>. However, a lot of developers prefer installing some extra packages with Flask; for more functionality.</p>\n<p>To install just Flask, exeute</p>\n<pre><code>$ pip install flask\n</code></pre>\n<p>When you run <code>pip freeze</code> again, it should show you <code>Flask</code> in listed packages.</p>\n<p>It is cumbersome running long commands like this. Fortunately, there is something like <code>package.json</code> in Python domain as well - a list of dependencies, which the package manager can use to duplicate the environment by downloading them with proper version from central repo.</p>\n<p>The standard is to use <code>pip freeze</code> and log the output to a local file, which can be source controlled.</p>\n<pre><code>$ pip freeze > requirements.txt\n</code></pre>\n<p>Here\'s the content of <code>requirements.txt</code> from my environment, after installing those Flask packages. You may add or remove more packages as your application grows; but for now, just copy paste the content of the following in a text file in the same directory as you are in.</p>\n<pre><code>Babel==2.2.0\nFlask==0.10.1\nFlask-Babel==0.9\nFlask-Login==0.3.2\nFlask-Mail==0.9.1\nFlask-OpenID==1.2.5\nFlask-SQLAlchemy==2.1\nFlask-WTF==0.12\nFlask-WhooshAlchemy==0.56\nJinja2==2.8\nMarkupSafe==0.23\nSQLAlchemy==1.0.12\nTempita==0.5.2\nWTForms==2.1\nWerkzeug==0.11.4\nWhoosh==2.7.2\nblinker==1.4\ncoverage==4.0.3\ndecorator==4.0.9\ndefusedxml==0.4.1\nflipflop==1.0\nguess-language==0.2\nitsdangerous==0.24\npbr==1.8.1\npython3-openid==3.0.9\npytz==2015.7\nsix==1.10.0\nspeaklater==1.3\nsqlalchemy-migrate==0.10.0\nsqlparse==0.1.18\n</code></pre>\n<p>This list of packages are taken from <a href="http://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world">here</a>.</p>\n<p>Once you have saved the file, just run</p>\n<pre><code>$ pip install -r requirements.txt\n</code></pre>\n<p>The package manager would take care of installing missing packages for you! And you should commit this file with your source control system.</p>\n<p>The above set of commands assume that you have a Linux machine or Mac OSX machine; or you are using a cloud-hosted box on cloud9 or Nitrous; or maybe you are using a Vagrant box.</p>\n<p>But, if you have to use a Windows machine, do consider using Windows Powershell, instead of Windows CMD. Most of the commands would be same. In case you need any assistance, you might want to check <a href="http://stackoverflow.com/questions/17917254/how-to-install-flask-on-windows">this Stack Overflow discussion</a>.</p>',frontmatter:{title:"Installing Flask In Virtual Environment",parent:"/home/stuart/guides/src/pages/articles/miscellaneous/installing-flask-in-virtual-environment/index.md absPath of file"}}},pathContext:{slug:"/articles/miscellaneous/installing-flask-in-virtual-environment/"}}}});
//# sourceMappingURL=path---articles-miscellaneous-installing-flask-in-virtual-environment-3f73a60acb86da7919ba.js.map