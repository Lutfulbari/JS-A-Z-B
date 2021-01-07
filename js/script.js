              //                           Condition 
              //                          if statement


              if (true) {
                  console.log("IF STATEMENT EXUCUTED");
              } else {
                  console.log("Else STATEMENT EXECUTED")
              }

              console.log("IF STATEMENT EXUCUTED");

              var age = prompt();

              if (age >= 50) {
                  console.log("old!");
              } else if (age >= 30 && age < 50) {
                  console.log("under 50 but above or equal 30!");
              }
              // 30 <= age <50
              else if (age < 30 && age >= 18) {
                  console.log("under 30 but above or equal 18!");
              } else if (age < 18 && age > 0) {
                  console.log("Under 18!");
              } else {
                  console.log("Invalid Input");
              }



              //                                                NESTED STATEMENT
              //                                               find the largest number



              var n1 = prompt("First number: ");
              var n2 = prompt("Second number: ");
              var n3 = prompt("Third number: ");

              n1 = parseInt(n1);
              n2 = parseInt(n2);
              n3 = parseInt(n3);

              if (n1 >= n2) {
                  if (n1 >= n3) {
                      console.log(n1 + "is the largest!");
                  } else {
                      console.log(n3 + "is the largest!");
                  }
              } else {
                  if (n2 >= n3) {
                      console.log(n2 + "is the largest!");
                  } else {
                      console.log(n3 + "is the largest!");
                  }
              }

              //(n1 >= n2 && n1>= n3){
              //     console.log(n1 + "is the largest number");
              // }
              // else if (n2 >=n1 && n2> n3){
              //     console.log(n2 +"is the largest number!");
              // }
              // else {
              //     console.log(n3 +"is the largest number!");
              // }


              // Switch


              console.log("select an option:\na option 1 \nb. option 2\nc. option 3");

              choice = prompt();

              var text;
              switch (choice) {
                  case "a": //if ("choice==a")
                      text = "option 1 selected";
                      break;

                  case "b":
                      text = "option 2 selected";
                      break;

                  case "c":
                      text = "option 3 selected";
                      break;
                  default:
                      text = "no option selected";
              }
              console.log(text);



              //Exercise and Solution

              var number = prompt("What is your number");

              number = parseInt(number);

              var grade;

              if (number <= 100 && number >= 80) {
                  grade = "A+";
              } else if (number < 80 & number >= 70) {
                  grade = "A";
              } else if (number < 70 & number >= 60) {
                  grade = "A-";
              } else if (number < 60 & number >= 50) {
                  grade = "B";
              } else if (number < 50 & number >= 40) {
                  grade = "c";
              } else if (number < 40 & number >= 33) {
                  grade = "D";
              } else if (number < 33 & number >= 0) {
                  grade = "F";
              } else {
                  grade = "Invalid Input";
              }

              console.log("Tour Grade: " + grade);


              if (choice == "a") {
                  text = "you have selected option 1";
              } else if (choice == "b") {
                  text = "you have selected option 2";
              } else if (choice == "c") {
                  text = "you have selected option 3";
              } else {
                  text = "no selected option ";
              }

              console.log(text);


              //                                          Select an option
              //                                            1 add 
              //                                            2 subtarct 
              //                                            3 mulitply
              //                                            4 divide



              console.log("Select an option: \n1. ADD \n2. Subtract \n3. mulitply \n4. Divide");

              var num1 = prompt("Enter First Number: ");
              var num2 = prompt("Enter Second Number: ");
              var option = prompt("Choose an Operation: ");

              var result = null;

              num1 = parseInt(num1);
              num2 = parseInt(num2);
              option = parseInt(option);

              var num1Con = isNaN(num1);
              var num2Con = isNaN(num2);
              var optionCon = isNaN(option);

              // console.log(num1Con);

              if (num1Con || num2Con || optionCon) {
                  console.log("Invalid Input!");
              } else {
                  switch (option) {
                      case 1:
                          result = num1 + num2;
                          break;
                      case 2:
                          result = num1 - num2;
                          break;
                      case 3:
                          result = num1 * num2;
                          break;
                      case 4:
                          result = num1 / num2;
                          break;
                      default:
                          break;
                  }
                  if (result == null) {
                      console.log("NO Result!");
                  } else {
                      console.log("Result : " + result);
                  }
              }

              //                                               LOOPS
              //                                               While loops 




              while (true) {
                  console.log("Hello World!");
              }

              while (false) {
                  console.log("Hello World!");
              }



              var i = 1;

              while (i <= 5) {
                  console.log("value of i : " + i);
                  i++;
              }
              console.log("out of the loop");



              while (i <= 5) var i = -55;
              do {
                  console.log("value of i : " + i);
                  i++;
              } while (i <= 5);

              console.log("out of the loop");



              //                       More On While LOOP
              //                         PRINT 1 TO 10          
              //                         Sum of 1 to 10


              var i = 1;
              var sum = 0;
              var product = 1;

              while (i <= 10) {

                  // if (i === 4){
                  //     console.log("Value if i is " + i);
                  // }
                  //console.log(i);

                  sum = sum + i;
                  // sum = 0 + 1; sum -> 1
                  // sum = 1 + 2; sum -> 3
                  // sum = 3 + 3; sum -> 6
                  // sum = 6 + 1; sum -> 1
                  // sum = 0 + 1; sum -> 1

                  // 1*2*3*4*5*6*7*8*9*10*11*12*13*14*15*16*17
                  product = product * i;
                  i++;
              }

              // console.log("out of the loop");
              console.log("Result: " + sum);
              console.log("Product: " + product);


              //  FoR LOOP

              for (statement 1; statement 2; statement 3) {
                  //code to be executed
              }

              //    for / in

              //to iterate through array / string /object 

              for (X in name) {}



              //                              while loop

              var i = 1; //initialization
              while (i <= 9) { //condition
                  console.log(i); // Update
                  i++;

              }
              console.log("End of while loop!")
              console.log("Start of while loop!");


              // FOR LOOP

              for (var j = 1; j <= 5; j++) {
                  console.log(j);
              }

              for (var k = 5; k >= 1; k--) {
                  console.log(k);
              }


              //BREAK


              for (var i = 1; i <= 5; i++) {
                  if (i == 3) {
                      break;
                  }
                  console.log(i);

              }

              for (var i = 1; i <= 5; i++) {

                  console.log(i);
                  if (i == 3) {
                      break;
                  }
              }


              //Contineu        

              for (var i = 1; i <= 5; i++) {
                  if (i == 4) {
                      continue;
                  }
                  console.log(i);
              }


              for (var i = 1; i <= 10; i++) {
                  if (i % 2 == 1) {
                      continue;
                  }
                  console.log(i);
              }

              // STRING

              let name = "LUTFUL BARI";
              //let len = name.length;
              let food = ["cake", "chocklet", "Ice cream"];
              //console.log(name[0]);
              let len = food.length;

              for (var i = 0; i < len; i++) {
                  console.log('index : ${i}');
                  //console.log(name[i]);
                  console.log(food[i]);
              }

              // FOR -IN  AND FOR-OF

              //   FOR - IN  STRING / ARRAY //OBJECT
              //   FOR - off  STRING / ARRAY

              //       let name = "I am learning Javascript!";
              //       let food = ["CAKE","CHOCKLET","ICE CREAM"];
              //    object doesn`t have index
              //       let person = {
              //           name: "lutful bari musa",
              //           profession: "full stake Developer",
              //           teem: "B",
              //           age: 33,
              //       }


              // we will get index
              for (var x in name) {
                  // console.log(x);
                  console.log(`index ${x} and item ${name[x]}`);
              }


              // we will get item/value

              for (var x of name) {
                  console.log(x);
                  // console.log(`index ${x} and item ${name[x]}`);
              }


              // we will get indexes
              for (var y in food) {
                  // console.log(x);
                  console.log(`index ${y} ; and item ${food[y]}`);
              }
              // we will get items
              for (var y of food) {
                  console.log(y);
                  // console.log(`index ${y} ; and item ${food[y]}`);
              }

              for (var x in person) {
                  console.log(x);
              }



              for (var x in person) {
                  console.log(`property: ${x}
                      value: ${person[x]}`);
              }

              for (var x of person) {
                  console.log(x);
              }



              // EXERCISE AND SOLUTION

              var n = parseInt(prompt("Enter the number of terms: "));
              var sum = 0;
              var series = "";

              for (var i = 1; i <= n; i++) {
                  sum += i * i;
                  series += (i ** 2).toString();

                  if (i == n) {
                      continue;
                  }

                  series += " + ";
              }
              //console.log(i*i);
              // console.log(series);
              console.log(`${series} = ${sum}`);
              // console.log(sum); 


              //   Function   
              //   Built in Function

              alert();
              consol.log();

              // User Defined Function
              // Declatation of function


              function saySomething() {
                  console.log("Hello!");
                  console.log("I am lerning Javascript!");
                  console.log("Bohubrihi!");
              }
              // Execution of function
              saySomething();
              console.log("-----------------------");
              console.log("-----------------------");


              saySomething();
              saySomething();


              // fUNCTION PARAMETER/ARGUMENT

              //            alert("hello!")


              function saySomething(param1) {
                  // alert(`hello ${param1}!`);
                  console.log(`hello ${param1}!`);

              }
              let val = "Lutful bari musa";
              saySomething(val);
              //alert("hello");



              function saySomething(fname, lname) {
                  // alert(`hello ${param1}!`);
                  console.log(`hello ${fname } ${lname }!`);

              }
              let firstname = "Lutful bari musa";
              let lastname = "Is a Java Dev";
              saySomething(firstname, lastname);
              //alert("hello");



              function saySomething(fname = "jamiul bari", lname = "rahat") {
                  // alert(`hello ${param1}!`);
                  console.log(`hello ${fname } ${lname }!`);
              }
              let firstname = "Lutful bari musa";
              let lastname = "Is a Java Dev";
              saySomething(firstname, lastname);
              //alert("hello");



              function addNum(a = 0, b = 0) {
                  // console.log(a+b);
                  console.log(`${a} + ${b} = ${a+b}`);
                  return a + b;
                  console.log("line after return");
              }
              console.log(addNum(4, 5));
              console.log(addNum(4.5, 5.3));
              console.log(addNum(3.4, 5));
              addNum(4, 5);
              addNum(3.5, 2.3);

              let sum = addNum(3.6, 2.3);
              console.log(sum)

              // NORMAL DECLARATION

              function saySomething(name) {
                  console.log("hello lutful! " + name);
              }

              // FINCTION EXPRESSION
              let saySomething1 = function (name2) {
                  console.log(" Hello world " + name2);
              }
              //saySomething("bohubrihi");
              //saySomething1("jamiulbari");


              // ARROW FUNCTION (ES6)
              let saySomething2 = (name3, name4) => {
                  console.log("i am " + name3 + name4);
              }

              saySomething("bohubrihi");
              saySomething1("jamiul bari");
              saySomething2("python,Javascript");

              // FUNCTION ARRAY ITERATION forEach 

              var foods = ["cake", "Ice Cream", " Chocklates", "Bread"];
              var numbers = [1, 32, 23, 33, 2];

              let printEverything = (function (item, i, abc) {
                  console.log(`Index : ${i} and Item ${item}`);
                  console.log(abc);
              });

              // IST PARAMETER : ITEM
              // 2ND PARAMETER : INDEX
              // 3RD PARAMETER : WHOLE ARRAY
              foods.forEach(function (value) {
                  console.log(value);
              });
              foods.forEach(function (item, i, abc) {
                  console.log(`Index : ${i} and Item ${item}`);
                  console.log(abc);
              });
              foods.forEach();
              foods.forEach(printEverything);


              //  ARRAY ITERATION Using mapping


              var foods = ["cake", "Ice Cream", " Chocklates", "Bread"];
              var numbers = [1, 32, 23, 33, 2];

              function addSomething(item) {
                  return ` ${item} is a food`;
              }
              let arr_res = foods.map(addSomething);
              let arr_square = numbers.map(function (item) {
                  return item * item;
              })
              console.log(arr_res);
              console.log(arr_square);


              // Object Method

              let person = {
                  firstname: "lutful",
                  lastname: "Bari musa",
                  dob: "16-03-1995", // string / number /Date //////array/ object / 

                  fullname: function () { // Method
                      return `${this.firstname} ${this.lastname}`;
                  }
              }
              console.log(person.firstname);
              console.log(person.fullname());

              let str = "Bohubrihi";
              console.log(str.length);
              console.log(str.split());

              // Math Object 

              let val;

              val = Math.PI;
              val = Math.E;
              val = Math.round(3.1);
              val = Math.ceil(1.9);
              val = Math.floor(1.9);
              val = Math.sqrt(81);
              val = Math.abs(-8);
              val = Math.pow(2, 3);
              val = Math.min(1, 8, -8, 1, 3);
              val = Math.max(1, 8, -8, 1, 3);
              val = Math.random();

              val = Math.random() * 100;
              val = Math.random() * 100 + 1;
              val = Math.floor(Math.random() * 100 + 1);

              console.log(val);


              // Date Object

              let val;

              let today = new Date();
              let birthday = new Date('08-26-1996 11:25:27');

              birthday = new Date('August 25  1996');
              birthday = new Date('8/26/1996');

              val = today;
              val = today.toString();

              val = birthday;
              val = today.getMonth();
              val = today.getDate();
              val = today.getDay();
              val = today.getFullYear();
              val = today.getHours();
              val = today.getMinutes();
              val = today.getSeconds();
              val = today.getMilliseconds();
              val = today.getTime();

              //timestamp => Ampunt of seconds past since jun 1st 1970

              birthday.setMonth(2);
              birthday.setDate(24);
              birthday.setFullYear(1918);
              birthday.setHours(18);

              //console.log(val);
              console.log(birthday);

              //Glovall and local Scope with let and const ES6

              // var and let and const
              // var and const Es6

              var a = 10;
              a = a + 7;

              var a;

              let b = 7;
              b = b * 67;
              let b;

              const c = 7;

              var a = 1;
              let b = 2;
              const c = 3;
              var d = 10;

              console.log(`Global Scope: `, a, b, c)

              function test() {
                  var a = 4;
                  let b = 5;
                  const c = 6;
                  console.log(`Function Scope: `, a, b, c, d)
              }
              test();

              console.log(`Global Scope: `, a, b, c);

              if (true) {
                  var a = 7;
                  let b = 8;
                  const c = 9;
                  console.log(`If Scope: `, a, b, c);
              }
              console.log(`Global Scope: `, a, b, c);

              for (var a = 0; a < 10; a++) {
                  console.log(`lop: `, a);
              }

              console.log(`Global Scope: `, a, b, c);


              // class (Es6)
              // class is a templet for creating object


              let person1 = {
                  firstname: "fazle",
                  lastname: "rahat",
                  dob: "11-12-1996",

                  fullname: function () {
                      console.log(`${this.firstname} ${this.lastname}`);
                  }

              }

              let person2 = {
                  firstname: "moinul",
                  lastname: "rahat",
                  dob: "11-22-1995",
                  fullname: function () {
                      console.log(`${this.firstname} ${this.lastname}`);
                  }
              }
              console.log(person1);
              console.log(person2);

              // OOP jAVASCRIPT CLASSES (ES6)


              class Person {
                  constructor(fname, lname, birthday) {
                      this.firstname = fname;
                      this.lastname = lname;
                      this.dob = birthday;
                  }

                  calculateAge() {
                      let birthday = new Date(this.dob);

                      let diff = Date.now() - birthday.getTime();

                      let ageDate = new Date(diff);

                      return Math.abs(ageDate.getUTCFullYear() - 1970);
                  }
                  fullname() {
                      console.log(this.firstname, this.lastname);
                  }

              }
              let person1 = new Person("lutful", "bari", "11-13-1994");
              let person2 = new Person("Robin", "musa", "11-02-1993");
              let person3 = new Person("zamiul", "rahat", "11-17-1992");

              console.log(person1.calculateAge());
              console.log(person2.calculateAge());
              console.log(person3.calculateAge());

              console.log(person1.fullname());
              console.log(person2.fullname());
              console.log(person3.fullname());


              // SUB CLASS

              // INHERITANCE

              class Person { // base class
                  constructor(fname, lname) {
                      this.firstname = fname;
                      this.lastname = lname;
                  }
                  greeting() {
                      return `hello ${this.firstname} ${this.lastname}`;
                  }
              }
              //   class customer {
              //         constructor(){
              //             this.firstname = fname;
              //             this.lastname = lname;
              //             this.phone = phone;
              //             this.membership = membership;
              //         }
              //   }
              class customer extends Person { // SUB class
                  constructor(fname, lname, phone, membership) {
                      super(fname, lname)
                      this.phone = phone;
                      this.membership = membership;
                  }
                  fullname() {
                      console.log(this.firstname, this.lastname)
                  }
              }

              let person1 = new Person("Lutful", "Bari");
              console.log(person1);
              console.log(person1.greeting());


              let customer1 = new customer("rony", "choudhiri", "01552464940", "3333");

              console.log(customer1);
              console.log(customer1.greeting());
              console.log(customer1.fullname());


              // STATIC FUNCTION

              class Person { // base class
                  constructor(fname, lname) {
                      this.firstname = fname;
                      this.lastname = lname;
                  }
                  greeting() {
                      console.log(`hello ${this.firstname} ${this.lastname}`);
                  }
                  static test() {
                      console.log("i am sattic!");
                  }
              }

              let person1 = new Person("Lutful bari", "Musa");

              console.log(person1.greeting());
              console.log(Person.test());


              // Document Object Model
              // Tree of Elements(nodes) generated by brouser
              // JAVASCRIPT CAN MANIPULATED DOM    

              // LINK TO INDEX

              let val;
              val = this;
              val = window;
              val = window.document;
              val = document;
              val = document.all;
              val = document.all[4];
              val = document.all.length;
              val = document.head;
              val = document.body;
              val = document.doctype;
              val = document.domain;
              val = document.url;
              val = document.characterSet;
              val = document.contentType;
              val = document.contentType;

              val = document.forms;
              val = document.forms[0];
              val = document.forms[0].method;
              val = document.forms[0].action;

              val = document.links;
              val = document.links[0];
              val = document.links[0].href;
              val = document.links[0].className;
              val = document.links[0].classList;
              val = document.images;

              val = document.scripts;
              val = document.scripts[0];
              val = document.scripts[0].src;
              val = document.scripts[0].getAttribute("src");

              links = document.links;
              let linkArr = Array.from(links);

              //console.log(val);

              linkArr.forEach(function (link) {
                  console.log(link);
              });

              console.log(links);


              // Dom selector
              // document.getElementbyId()
              //Geting Element

              let val;
              val = document.getElementById('document-title');
              val = document.getElementById('document-title').id;
              val = document.getElementById('document-title').className;

              //   Changing style
              val = document.getElementById('document-title').style.background = '#444';
              val = document.getElementById('document-title').style.color = '#fff';
              val = document.getElementById('document-title').style.padding = '10px';
              val = document.getElementById('document-title').style.display = 'block';

              //   Changing Contant

              val = document.getElementById('document-title').textContent = 'New Title';
              val = document.getElementById('document-title').innerText = 'Again New title';
              val = document.getElementById('document-title').innerText = '<i>Again New Italic</i>';
              val = document.getElementById('document-title');
              val.innerText = "haha HAHA";

              // document.queryselector()

              val = document.querySelector('#document-title');

              // id
              val = document.querySelector('.title-class');
              val = document.querySelector('h3');


              val = document.querySelector('ol');
              val = document.querySelector('ol li');
              val.style.background = 'green';
              val.style.color = 'red';
              val = document.querySelector('li:last-child');
              val = document.querySelector('li:nth-child(1)');


              document.querySelector('li:nth-child(3)').innerText = "Hello";
              document.querySelector('li:nth-child(odd)').innerText = "Hello";
              document.querySelector('li:nth-child(even)').innerText = "Hello";

              console.log(val);

              // multiselector
              // Document.getElementByClassname()

              let list = document.getElementsByClassName('sample-class');
              list[0].style.background = 'red';
              list[0].style.color = 'green';
              list[0].style.padding = '20px';
              list[0].textContent = 'HELLO LUTFUL BARI';
              // console.log(list[0]);

              // console.Log([0]);
              // document.getElementByTagName()
              list = document.getElementsByTagName('li');
              list = document.querySelector('ol').getElementsByTagName('li');

              let lis = Array.from(list);

              lis.forEach(function (item) {
                  //      console.log(item);
              });
              //   console.log(list[0]);
              //   console.log(list[1]);
              //   console.log(list[3]);

              // Document.querySelectorAll()

              // id -> #
              // classname -> .
              // tagname -> nothing

              list = document.querySelectorAll('ol  li');

              lis.forEach(function (item) {
                  //      console.log(item);
              });
              let liOdd = document.querySelectorAll('li:nth-child(odd');
              let liEve = document.querySelectorAll('li:nth-child(even');

              liOdd.forEach(function (item) {
                  item.style.background = 'gray';
                  item.style.color = 'white';
              });
              liEve.forEach(function (item) {
                  item.style.background = 'red';
                  item.style.color = 'black';
              });
              console.log(list);


              // Travling the Dom

              let val;
              let list = document.querySelector('ul');
              let listItem = document.querySelector('ul li:first-child');

              val = list;
              val = listItem;

              // Get the Child Nodes

              val = list;
              val = list.childNodes;
              val = list.childNodes[0];
              val = list.childNodes[1];
              val = list.childNodes[3];
              val = list.childNodes[1].nodeName;
              val = list.childNodes[1].nodeType;

              // 1 Element
              // 2 Attribut
              // 3 Text node
              // 8 Comment
              // 9 Docment Itself
              // 10 Doctype

              val = list.childNodes;
              val = list.children;
              val = list.children[1];
              val = list.children[0].textContent = "Hello";

              val = list.children[1].children[0];
              val = list.children[1].children[0].href;

              val = list.firstChild;
              val = list.firstElementChild;
              val = list.lastChild;
              val = list.lastElementChild;

              val = list.childElementCount;

              val = listItem;

              //val = listItem.children;

              val = listItem.parentElement;
              val = listItem.parentNode;
              val = listItem.parentElement.parentElement;

              val = listItem.nextSibling.nextSibling;
              val = listItem.nextElementSibling;
              val = listItem.nextElementSibling.nextElementSibling;

              val = document.querySelector('ul li:last-child');
              val = val.previousSibling;
              val = val.previousElementSibling;

              console.log(val);

              // Adding Element to Dom
              //Create Element

              let olItem = document.createElement('li');

              //Add Id and Class

              olItem.className = 'a new another-class'
              olItem.id = "new-element"

              // Add Attribute

              olItem.setAttribute('title', ' A title to new Element')
              olItem.appendChild(document.createTextNode("Javascript"));

              document.querySelector('ol').appendChild(olItem);

              //console.log(olItem)

              let ulItem = document.createElement('li');
              let link = document.createElement('a');
              link.appendChild(document.createTextNode('Instagram'));
              link.setAttribute('href', 'http://www.instagram.com');

              ulItem.appendChild(link);

              document.querySelector('ul').appendChild(ulItem);

              console.log(ulItem);
              //console.log(link);

              // Replacing Element

              let newHeading = document.createElement('h1');
              newHeading.appendChild(document.createTextNode('H1 new Heading'));
              newHeading.className = 'sample-class';

              let oldHeading = document.querySelector('h3');

              let parent = document.querySelector('.container');
              //parent = oldHeading.parentElement;
              parent.replaceChild(newHeading, oldHeading);

              console.log(newHeading)
              console.log(oldHeading)
              console.log(parent);

              // Removed Element

              let listItems = document.querySelectorAll('li');
              let list = document.querySelector('ul');

              //listItems[0].remove(),
              //listItems[5].remove(),

              list.removeChild(listItems[5]);

              list.classList.add("test");
              list.classList.add("test-new");

              list.classList.remove('sample-class');

              //  let val = list.hasAttribute('calss');

              let val = list.hasAttribute("title");
              list.setAttribute("title", "New Title");
              list.removeAttribute("title");

              console.log(val);
              console.log(list);
              console.log(listItems);



              document.querySelector('.container').style.background = "red";

              function message(e) {

                  let val = e;

                  val = e.target; //this
                  val = e.target.id;

                  val = e.timeStamp;
                  val = e.type;

                  val = e.clientY;
                  val = e.clientX;
                  val = this;

                  this.style.background = `#${e.offsetX}`;

                  val = e.offsetY;
                  val = e.offsetX;

                  // console.log(val);
                  console.log(e.offsetX);
                  console.log(e.offsetY);
                  console.log(val);
              }



              // Event  of JavaScript
              // onclick

              //  function message(){
              //      console.log("Mouse hover button!");
              //  }

              // Event Listener

              // document.getElementById('.container').addEventListener('mousemove', message);

              document.querySelector("#name").addEventListener('focus', test);
              document.querySelector('#name').addEventListener('keyup', test2);

              function test(e) {
                  //console.log("Focused!")
                  this.style.background = 'pink';
              }

              function test2(e) {
                  //  console.log(this.value);
                  document.getElementById("demo").innerText = this.value;
                  // this.style.background = 'pink';
              }

              //   Error Handling

              console.log("before error!")

              try {
                  //test();
                  // undefined.test();
              } catch (err) {
                  //  console.log(err);
                  console.log(err.message);
                  console.log(err.name);
              } finally {
                  console.log("i am inside finally!");
              }
              console.log("After error!")
              let a = 2;
              try {
                  if (a > 15) throw " Too Big";
                  else if (a < 5) throw "Too Small";
              } catch (err) {
                  console.log(err);
              }

              // Regular Expression
              // Pattern Matching Technique

              let re;
              let str;

              re = /hello/;
              re = /Hello/;
              re = /Hello/i; // i = case insensitive

              console.log(re);
              console.log(re.source);

              str = "Hello world!";
              str = "Again Hello world!";
              str = "Hell world!";
              str = "lutfulHello world!";
              str = "again  lHello world! hello";
              str = "world";

              //exec () - Returns result in an array or null

              let result = re.exec(str);
              // TEST ( ) - TRUE /FALSE

              result = re.test(str);

              //match() - REturns Array or null
              str = "again  lHello world! hello";

              result = str.match(re);

              //serch() -Return index of the first match or -1
              str = "again";


              result = str.search(re);


              // replace - Return new string

              str = "again  lHello world! hello";
              let newstr = str.replace(re, "Hi");



              console.log(result);
              console.log(str);
              console.log(re.source);
              console.log(newstr);

              console.log(result);


              //  Litrral and meta Characters 

              let re;
              let str;

              re = /hello/;
              re = /hello/i;
              re = /hell/i;
              re = /he w ll/i;
              re = /low/i;
              re = /hello/i;
              re = /^hello$/i;
              re = /^h.ello$/i;
              re = /^h.llo$/i;

              //meta characters
              re = /^hello/i; //Must start with
              re = /hello$/i; //Must End with
              re = /world$/i; //Must End with
              re = /^hello$/i; //Must start and End with
              re = /^h.llo$/i; // Matches any character
              re = /^h*llo$/i; //o or more times
              re = /he?llo/i; //optional
              re = /he?allo/i; //optional
              re = /hello\?/; //  escaping

              str = "hello world";
              str = "hello world hello";
              str = "hello world hello";
              str = "hallo";
              str = "hillo";
              str = "h llo";
              str = "hllo";
              str = "hillo world ";
              str = "hillo world ";
              str = "hello world ";
              str = "hllo world ";
              str = "h4llo world ";
              str = "hello";
              str = "hllo";
              str = "htllo";
              str = "heallo";
              str = "hello";
              str = "hallo";
              str = "hllo";
              str = "hello";
              // str = "hallo";


              console.log(re.exec(str));

              reTest(re, str);

              function reTest(re, str) {
                  if (re.test(str)) {
                      console.log(`'${str}matches '${re.source}'`);
                  } else {
                      console.log(`'${str}' Don't match '${re.source}'`);
                  }
              }


              // Character set ,Quantifier and grouping

              let re;
              let str;

              re = /hello/;
              re = /hello/i;
              re = /hell/i;
              re = /he w ll/i;
              re = /low/i;
              re = /hello/i;
              re = /^hello$/i;
              re = /^h.ello$/i;
              re = /^h.llo$/i;

              //meta characters
              re = /^hello/i; //Must start with
              re = /hello$/i; //Must End with
              re = /world$/i; //Must End with
              re = /^hello$/i; //Must start and End with
              re = /^h.llo$/i; // Matches any character
              re = /^h*llo$/i; //o or more times
              re = /he?llo/i; //optional
              re = /he?allo/i; //optional
              re = /hello\?/; //  escaping

              // Character set using Brackets []

              re = /h[ea]llo/; // must be one of them tnside Brackets
              re = /[HA]ello/; // must be one of them tnside Brackets
              re = /[HA]ello/i; // must be one of them tnside Brackets
              re = /[^ha]ello/i; // anything except those inside brackets
              re = /^[ha]ello/; // Must started h or a
              re = /[a-z]ello/; // Must started h or a
              re = /[A-Z]ello/; // Started with upper case           
              re = /^[A-Z]ello/; // Started with upper case           
              re = /^[A-Z]/; // First latter musat ve upper csase          

              re = /^[A-Za-z]/; // First latter musat ve upper csase          
              re = /^[A-Za-z]ello/; // First latter musat ve upper csase          
              re = /[0-9]ello/; // First latter musat ve upper csase          
              re = /^[0-9]ello/; // First latter musat ve upper csase          
              re = /[^0-9]ello/; // Not digit
              re = /[0-9][0-9][0-9]ello/; // tow digit

              // bracess {}  - Quantifier

              re = /el{2}o/; // Must occer exactly 2 times
              re = /el{3}o/;
              re = /el{2,5}o/; //range
              re = /el{2,}o/; //range at list 2 times

              re = /^([0-9])[0-9][0-9][0-9][0-9][0-9][0-9]/; ////6digites

              ///parenthesses ( ----)--------Gropping

              re = /^([0-9]){3}/;
              re = /^([0-9]){10}/;

              // Bangladeshi phone number
              // Total 11 phone number


              re = /^01[0-9]{9}$/;
              re = /^\+8801[0-9]xy{9}$/; // /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9] / // ddigite
              re = /^([0-9]xy){4}/;


              str = "hello";
              str = "Aello";
              str = "tello";
              str = "tadfello";
              str = "Hello";
              str = "s";
              str = "A";
              str = "xewer";
              str = "Againg 8ello";
              str = "3ello";
              str = "32ello";
              str = "hellllo";
              str = "22244444444444ello";


              //   str = "01552464940";
              //   str = "12345678910ello";
              //   str = "+8812345678910";

              str = "2xy3xy4xy8xy2xy3xy4xy8xy";



              console.log(re.exec(str));

              reTest(re, str);

              function reTest(re, str) {
                  if (re.test(str)) {
                      console.log(`'${str}matches '${re.source}'`);
                  } else {
                      console.log(`'${str}' Don't match '${re.source}'`);
                  }
              }

              // shorthand Character

              let re;
              let str;


              re = /^01[0-9]{9}$/;
              re = /^\+8801[0-9]xy{9}$/; // /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9] / // ddigite
              re = /^([0-9]xy){4}/;
              re = /\w/; //word character    
              re = /\W/; //non word character    
              re = /\W+/; //non word character    
              re = /\d/; // digite    
              re = /\d+/; // digite    
              re = /\D/; // digite    
              re = /\s/; // Match white spacessss    
              re = /\S/; // Match NoN white spacessss    
              re = /Hello\b/; // Word Boundary     

              re = /\x(?=y)/; // I Matechsh x only if x is before y     
              re = /x(?!yz)/; // I Matechsh x only if x is before y     


              str = "(*&^w+asdfksdlfkj/"; //one or more
              str = "(_*&asdfksdlfkj/"; //one or more
              str = "01121321"; //one or more
              str = "01121  321"; //one or more
              str = "01121321"; //one or more
              str = " "; //one or more
              str = "Hello234234 lkajldkfjlsak";
              str = "Hello 234234 lkajldkfjlsak";
              str = "fasdfxyxasdf";


              console.log(re.exec(str));

              reTest(re, str);

              function reTest(re, str) {
                  if (re.test(str)) {
                      console.log(`'${str}matches '${re.source}'`);
                  } else {
                      console.log(`'${str}' Don't match '${re.source}'`);
                  }
              }


              // Example

              let re;
              let str;
              // postal Coad
              // 4700, 4000
              re = /^[0-9]{4}$/;

              str = "4444"

              // Phone number
              // 01710824848 +8801552464940 01710220202

              re = /^(\+)?(88)?01[0-9]{9}$/;

              str = "01552464940";

              // email address:::::::::
              // lutfulbari28@gamil.com
              re = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;
              str = "lutfulbari28@gmail.com";


              console.log(re.test(str));

              // Jason  syntex

              var student = {
                  name: "rajim",
                  age: 33,
                  hometown: "Dhaka"
              }

              //   var student_json = {
              //       "name": "rajim";
              //       "age": 33;
              //       "hometown": "Dhaka";
              //   }
              var student_json = JSON.stringify(student);

              console.log(student_json);

              var student_new = JSON.parse(student_json);

              console.log(student_new)



              //https://jsonlint.com
              //string 
              //number 
              //object(Json obejct) 
              //array
              // boolean 
              // Null
              // doesnt suppori undfiend date function
              var person = {
                  name: "lutful", //string
                  age: 22, //number
                  hometown: "Dhaka",
                  married: false, //Boolean
                  dob: 1995 - 03 - 12, //Date
                  test_null: null, //null
                  test_undefined: undefined, //undefined 

                  greet: function () { //function
                      console.log(`hello ${this.name}`)
                  }

              }

              //  person.greet();
              var person_json = JSON.stringify(person);
              console.log(person_json);


              // JSON.stringify() --->> js object to json string
              // JSON.parse() --->> js string to js object

              //json data

              var person1 = {
                  "name": "lutful",
                  "age": 22,
                  "hometown": "Dhaka",
                  " married": false,
              };
              //  java script object
              var person2 = {
                  name: "bari",
                  age: 23,
                  hometown: "Dhaka",
                  married: true,
              };

              console.log(person2);
              console.log(person1);

              //var person1_json = JSON.parse(person1);
              var person1_json = JSON.stringify(person1);
              var person1_ojb = JSON.parse(person1_json);
              console.log(person1_ojb);
              console.log(person1.name);
              console.log(person1.age);


              //  External 


              var xmlhttp = new XMLHttpRequest();
              xmlhttp.onreadystatechange = function () {
                  if (this.readyState == 4 && this.status == 200) {
                      var data = this.responseText;
                      //console.log(data);
                      jsonData(data);
                  }
              };
              xmlhttp.open("GET", "data.json", true);
              xmlhttp.send();

              function jsonData(json_obj) {
                  // console.log(json_obj);
                  var js_obj = JSON.parse(json_obj);
                  console.log(js_obj);

                  for (x in js_obj.persons) {
                      //console.log(x);
                      //         console.log(persons[x]);

                      var persons = js_obj.persons;
                      for (y in persons[x]) {
                          console.log(persons[x][y]);
                      }

                  }
              }

              // Asynchronous Programing
              // AJAX = Asynchronous JavaScript And XML
              // Get Data without loding the pages

              document.getElementById('get_data').addEventListener('click', loadData);

              function loadData() {
                  // Creat XHR OBJECT (XmlHttp Request)
                  //console.log("Button clicked");
                  let xhr = new XMLHttpRequest();


                  // open function
                  xhr.open("GET", "data.txt", true);
                  xhr.onload = function () {

                      // HTTP statuses
                      //200: ok
                      // 403:"Forbiden"
                      // 404:"not found"

                      if (this.status === 200) {
                          // console.log(this.responseTexta);
                          document.getElementById('output').innerHTML = `<h4>${this.responseText}</h4>`
                      }
                  }

                  xhr.open("GET", "data.txt", true);

                  xhr.onprogress = function () {
                      console.log(xhr.readyState);
                  }

                  xhr.onreadystatechange = function () {

                      // xhr.onload = function(){
                      // HTTP Statuses
                      // 200: "ok"
                      // 403: "Forbidden"
                      // 404: "Not Found"
                      // if(this.status ===200){
                      //    document.getElementById('output').innerHTML =`<h4>${this.responseText}</h4>`
                      //      }
                      //  }
                      //  console.log(this.readyState);

                      if (this.status === 200 && this.readyState === 4) {
                          console.log(this.responseText);
                      }
                  }
                  xhr.send();


                  // console.log(xhr);
              }

              //Ajax with  Data from External Serverd
              // API
              //RESTful API


              document.getElementById('get_data').addEventListener('click', loadJokes);

              function loadJokes(e) {

                  let number = document.getElementById('numberJokes').value;
                  //    console.log(number);
                  let xhr = new XMLHttpRequest();

                  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

                  xhr.onprogress = function () {
                      document.getElementById('output').innerHTML = "<h3>loading..........</h3>";
                  }



                  xhr.onload = function () {
                      if (this.status === 200) {
                          let data = JSON.parse(this.responseText);
                          let jokes = data.value;
                          let output = "<ol>";


                          jokes.forEach(function (item) {

                              //  console.log(item.joke);

                              output += `<li>${item.joke}</li>`;
                          })

                          output += "</ol>";
                          //   console.log(jokes);

                          document.getElementById('output').innerHTML = output;
                          //console.log(data);
                          // console.log(joke);
                          //  console.log(data);
                      }
                  }
                  xhr.send();
              }


              //      Callback function


              setTimeout(function () {
                  console.log("Hello world");
              }, 10000);


              let persons = [{
                      firstName: "Lutful",
                      lastName: "vari"
                  },
                  {
                      firstName: "Zamiul",
                      lastName: "bari"
                  },
              ]

              function createPerson(person) {
                  setTimeout(function () {
                      persons.push(person);
                  }, 4000);
              }

              function getPerson() {
                  setTimeout(function () {
                      let output = '';
                      persons.forEach(function (person) {
                          output += `<li>${person.firstName} ${person.lastName}</li>`
                      });
                      document.getElementById('output').innerHTML = output;

                  }, 1000);
              }


              let persons = [{
                      firstName: "Lutful",
                      lastName: "vari"
                  },
                  {
                      firstName: "Zamiul",
                      lastName: "bari"
                  },
              ]

              function createPerson(person, Callback) {
                  setTimeout(function () {
                      persons.push(person);
                      Callback();
                  }, 2000);
              }

              function getPerson() {
                  setTimeout(function () {
                      let output = '';
                      persons.forEach(function (person) {
                          output += `<li>${person.firstName} ${person.lastName}</li>`
                      });
                      document.getElementById('output').innerHTML = output;

                  }, 500);
              }
              createPerson({
                  firstName: "rony",
                  lastName: "chy"
              }, getPerson);

              // Promises
              // .then


              let persons = [{
                      firstName: "Lutful",
                      lastName: "vari"
                  },
                  {
                      firstName: "Zamiul",
                      lastName: "bari"
                  },
              ]

              // function createPerson(person, Callback) {
              //     persons.push(person);
              //     Callback();
              // }

              function createPerson(person) {
                  let prom = new Promise(function (resolve, reject) {
                      persons.push(person);
                      let erroor = false;
                      if (!error) {
                          resolve();
                      } else {
                          reject('Error!: Something wrong');
                      }

                      resolve();
                  });
                  return prom;
              }

              function getPerson() {
                  setTimeout(function () {
                      let output = '';
                      persons.forEach(function (person) {
                          output += `<li>${person.firstName} ${person.lastName}</li>`
                      });
                      document.getElementById('output').innerHTML = output;

                  }, 500);
              }
              createPerson({
                      firstName: "rony",
                      lastName: "chy"
                  })
                  .then(getPerson)
                  .catch(function (err) {
                      console.log(err);
                  });

              // FETCH API
              // FETCH API USING JAVA SCRIPT PROMISE


              document.getElementById("get_data").addEventListener('click', getData);

              // xhr.open('GET','http://api.icndb.com/jokes/random/',true);
              //ARROW FUNCTION


              function getData() {
                  console.log("Clicked")
                  fetch('http://api.icndb.com/jokes/random')
                      .then(res => res.json())
                      .then(data => {
                          console.log(data);
                      })
                      .catch(err => {
                          console.log(err);
                      })
              }