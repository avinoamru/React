import React from "react";

const Classes = () => (
  <section>
    <h3>Python Classes/Objects</h3>

    <p>
      Python is an object oriented programming language. Almost everything in
      Python is an object, with its properties and methods. A Class is like an
      object constructor, or a "blueprint" for creating objects.
      <br></br>
      Create a Class To create a class, use the keyword class:
      <br></br>
      Example Create a class named MyClass, with a property named x:
      <br></br>
      class MyClass: x = 5<br></br>
      Create Object Now we can use the class named MyClass to create objects:
      <br></br>
      Example Create an object named p1, and print the value of x:
      <br></br>
      p1 = MyClass() print(p1.x)
    </p>
  </section>
);

export default Classes;
