webpackJsonp([1327],{"./node_modules/json-loader/index.js!./.cache/json/articles-java-java-introduction.json":function(e,a){e.exports={data:{markdownRemark:{html:'<h1>Java Introduction</h1>\n<p><strong>What is Java?</strong></p>\n<p><a href="https://www.oracle.com/java/index.html">Java</a> is a programming language developed by <a href="https://en.wikipedia.org/wiki/Sun_Microsystems">Sun Microsystems</a> in 1995, which got later acquired by <a href="http://www.oracle.com/index.html">Oracle</a>. It\'s now a full platform with lots of standard APIs, open source APIs, tools, huge developer community and is used to build the most trusted enterprise solutions by big and small companies alike. <a href="https://www.android.com/">Android</a> application development is done fully with Java and its ecosystem. To know more about Java, read <a href="https://java.com/en/download/faq/whatis_java.xml">this</a> and <a href="http://tutorials.jenkov.com/java/what-is-java.html">this</a>.</p>\n<h2>Version</h2>\n<p>The latest version is <a href="http://www.oracle.com/technetwork/java/javase/overview/java8-2100321.html">Java 1.8</a> or Java 8, which was released in 2014 with <a href="http://www.oracle.com/technetwork/java/javase/8-whats-new-2157071.html">various improvements</a> over the previous version, Java 7. This year, Oracle has a target to release Java 9. But for all intents and purposes, we will use Java 8 in this wiki for all tutorials.</p>\n<p>Java is also divided into several "Editions" :</p>\n<ul>\n<li><a href="http://www.oracle.com/technetwork/java/javase/overview/index.html">SE</a> - Standard Edition - for desktop and standalone server applications</li>\n<li><a href="http://www.oracle.com/technetwork/java/javaee/overview/index.html">EE</a> - Enterprise Edition - for developing and executing Java components that run embedded in a Java server</li>\n<li><a href="http://www.oracle.com/technetwork/java/embedded/javame/overview/index.html">ME</a> - Micro Edition - for developing and executing Java applications on mobile phones and embedded devices</li>\n</ul>\n<h2>Installation : JDK or JRE ?</h2>\n<p>Download the latest Java binaries from the <a href="http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html">official website</a>. Here you may face a question, which one to download, JDK or JRE? JRE stands for Java Runtime Environment, which is the platform dependent Java Virtual Machine to run Java codes, and JDK stands for Java Development Kit, which consists of most of the development tools, most importantly the compiler <code>javac</code>, and also the JRE. So, for an average user JRE would be sufficient, but since we would be developing with Java, we would download the JDK.</p>\n<h2>Platform specific installation instructions</h2>\n<h3>Windows</h3>\n<ul>\n<li>Download the relevant <a href="https://en.wikipedia.org/wiki/Windows_Installer">.msi</a> file (x86 / i586 for 32bits, x64 for 64bits)</li>\n<li>Run the .msi file. Its a self extracting executable file which will install Java in your system!</li>\n</ul>\n<h3>Linux</h3>\n<ul>\n<li>Download the relevant <a href="http://www.cyberciti.biz/faq/linux-unix-bsd-extract-targz-file/">tar.gz</a> file for your system and install :</li>\n</ul>\n<p><code>bash $ tar zxvf jdk-8uversion-linux-x64.tar.gz</code>   </p>\n<ul>\n<li><a href="https://en.wikipedia.org/wiki/List_of_Linux_distributions#RPM-based">RPM based Linux platforms</a> download the relevant <a href="https://en.wikipedia.org/wiki/RPM_Package_Manager">.rpm</a> file and install :</li>\n</ul>\n<p><code>bash $ rpm -ivh jdk-8uversion-linux-x64.rpm</code>   </p>\n<ul>\n<li>Users have the choice to install an open source version of Java, OpenJDK or the Oracle JDK. While OpenJDK is in active development and in sync with Oracle JDK, they just differ in <a href="http://openjdk.java.net/faq/">licensing</a> stuff. However few developers complain of the stability of Open JDK. Instructions for <strong>Ubuntu</strong> :</li>\n</ul>\n<p>Open JDK installation :<br>\n<code>bash sudo apt-get install openjdk-8-jdk</code> </p>\n<p>Oracle JDK installation :<br>\n<code>bash sudo add-apt-repository ppa:webupd8team/java sudo apt-get update sudo apt-get install oracle-java8-installer</code> </p>\n<h3>Mac</h3>\n<ul>\n<li>Either download Mac OSX .dmg executable from Oracle Downloads</li>\n<li>Or use <a href="http://brew.sh/">Homebrew</a> to <a href="http://stackoverflow.com/a/28635465/2861269">install</a> :</li>\n</ul>\n<p><code>bash brew tap caskroom/cask brew install brew-cask brew cask install java</code> </p>\n<h3>Verify Installation</h3>\n<p>Verify Java has been properly installed in your system by opening Command Prompt (Windows) / Windows Powershell / Terminal (Mac OS and *Unix) and checking the versions of Java runtime and compiler :</p>\n<pre><code>$ java -version\njava version "1.8.0_66"\nJava(TM) SE Runtime Environment (build 1.8.0_66-b17)\nJava HotSpot(TM) 64-Bit Server VM (build 25.66-b17, mixed mode)\n\n$ javac -version\njavac 1.8.0_66\n</code></pre>\n<p><strong>Tip</strong> : If you get an error such as "Command Not Found" on either <code>java</code> or <code>javac</code> or both, dont panic, its just your system PATH is not properly set. For Windows, see <a href="http://stackoverflow.com/questions/15796855/java-is-not-recognized-as-an-internal-or-external-command">this StackOverflow answer</a> or <a href="http://javaandme.com/">this article</a> on how to do it. Also there are guides for <a href="http://stackoverflow.com/questions/9612941/how-to-set-java-environment-path-in-ubuntu">Ubuntu</a> and <a href="http://www.mkyong.com/java/how-to-set-java_home-environment-variable-on-mac-os-x/">Mac</a> as well. If you still can\'t figure it out, dont worry, just ask us in our <a href="https://gitter.im/FreeCodeCamp/java">Gitter room</a>!</p>\n<h2>JVM</h2>\n<p>Ok now since we are done with the installations, let\'s begin to understand first the nitty gritty of the Java ecosystem. Java is an <a href="http://stackoverflow.com/questions/1326071/is-java-a-compiled-or-an-interpreted-programming-language">interpreted and compiled</a> language, that is the code we write gets compiled to bytecode and interpreted to run . We write the code in .java files, Java compiles them into <a href="https://en.wikipedia.org/wiki/Java_bytecode">bytecodes</a> which are run on a Java Virtual Machine or JVM for execution. These bytecodes typically has a .class extension.</p>\n<p>Java is a pretty secure language as it doesn\'t let your program run directly on the machine. Instead, your program runs on a Virtual Machine called JVM. This Virtual Machine exposes several APIs for low level machine interactions you can make, but other than that you cannot play with machine instructions explicitely. This adds a huge bonus of security.</p>\n<p>Also, once your bytecode is compiled it can run on any Java VM. This Virtual Machine is machine dependent, i.e it has different implementations for Windows, Linux and Mac. But your program is guranteed to run in any system thanks to this VM. This philosophy is called <a href="https://en.wikipedia.org/wiki/Write_once,_run_anywhere">"Write Once, Run Anywhere"</a>.</p>\n<h2>Hello World!</h2>\n<p>Let\'s write a sample Hello World application. Open any editor / IDE of choice and create a file <code>HelloWorld.java</code>.</p>\n<pre><code>public class HelloWorld {\n\n    public static void main(String[] args) {\n        // Prints "Hello, World" to the terminal window.\n        System.out.println("Hello, World");\n    }\n\n}\n</code></pre>\n<p><strong>N.B.</strong> Keep in mind in Java file name should be the <strong>exact same name of the public class</strong> in order to compile!</p>\n<p>Now open the terminal / Command Prompt, and compile the file :</p>\n<pre><code>$ javac HelloWorld.java\n</code></pre>\n<p>Now run the file using <code>java</code> command!</p>\n<pre><code>$ java HelloWorld\nHello, World\n</code></pre>\n<p>Congrats! Your first Java program has run successfully. Here we are just printing a string passing it to the API <code>System.out.println</code>. We will cover all the concepts in the code, but you are welcome to take a <a href="https://docs.oracle.com/javase/tutorial/getStarted/application/">closer look</a>! If you have any doubt or need additional help, feel free to contact us anytime in our <a href="https://gitter.im/FreeCodeCamp/java">Gitter Chatroom</a>!</p>\n<h2>Documentation</h2>\n<p>Java is heavily <a href="https://docs.oracle.com/javase/8/docs/">documented</a>, as it supports huge amounts of API\'s. If you are using any major IDE such as Eclipse or IntelliJ IDEA, you would find the Java Documentation included within.</p>',frontmatter:{title:"Java Introduction",parent:"/home/stuart/guides/src/pages/articles/java/java-introduction/index.md absPath of file"}}},pathContext:{slug:"/articles/java/java-introduction/"}}}});
//# sourceMappingURL=path---articles-java-java-introduction-4a93cfc57e36e116e7e7.js.map