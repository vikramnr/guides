---
title: "Java Docs: instanceof operator"
parent: "java"
---

# The Java instanceof operator

The `instanceof` operator allows you to check the validity of a `IS A` relationship. If at any point of time, we are not sure about this and we want to validate this at runtime, we can do the following:

     //assuming vehicle is an instance of Class `Car` the expression inside the 'if' will  return true
     if( vehicle instanceof Car ) {
       //do something if vehicle is a Car
     }