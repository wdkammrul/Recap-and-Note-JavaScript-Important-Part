/***
 *
 * @@@@@@@@@@@@@@@@@@@@@@@@ "4" Es6 START HERE @@@@@@@@@@@@@@@@@@@@@@@@@@
 * 
 * 
 * 
 * ************* ‍১. TEMPLATE STRING *************
 * ************* ‍২. ARROW FUNCTION *************
 * ************* ‍৩. SPREAD OPERATOR  *************
 *
 *
 */

//   ************* ‍১. TEMPLATE STRING START  *************

// template string  = কোনো কিছুকে ডায়নামিক করার জন্য template string ব্যবহার করবো । 

  const name = 'Kamrul'
  const age = 21
  const fatherName = "Kamal hossain";

  const about = `My name is ${name}. I am ${age} years old. My father name is ${fatherName}`
  console.log(about)

//   ************* ‍১. TEMPLATE STRING END  *************




    // ************* ‍২. ARROW FUNCTION  START ************* 

    // Arrow function হলো ES6 এর একটি ফিচার যা একটি সুবিধাজনক পদ্ধতিতে ফাংশন লেখার সুযোগ প্রদান করে। এটি স্থানীয় ফাংশনের সহায়ে অনেক সংকটমুক্ত এবং সংক্ষেপে ফাংশন লেখা সহজ করে।

    //  ########## One. Without parameter start ############
    

    // normal function 
    // function hello (){
    //     return "hello"
    // }

    // single arrow function (without parameter)

    const hello = () => "hello"

    console.log(hello()) 


    // ########## One. Without parameter end ############



    // ######### Two: with parameter start ###############
       // সিঙ্গেল প্যারামিটারের ক্ষেত্রে (a) দিতে হয় না ।
        const withParameter = a => a*5; 
        console.log(withParameter(3))

    // ######### Two: with parameter end ###############





    // ######### Three: multiple parameter start ###############
       // multiple parameter এ অবশ্যই () ব্যবহার করতেই হবে ।

       const multipleParameter = (a, b) => a+b;
       console.log(multipleParameter(2, 4))

    // ######### Three: multiple parameter end ###############




    // ######### Four: multiline parameter start ###############

       // এর মাধ্যমে মাল্টিলাইন ও ফাংশন করা যাবে । তবে এক্ষেত্রে অবশ্যই রিটার্ন করতে হবে ।
       const multiline = () => {
          return 'hello'
       }
       
       console.log(multiline())

    // ######### Four: multiline parameter emd  ###############



    //  ************* ‍২. ARROW FUNCTION  END *************  

    
    

    //  ************* ‍৩. SPREAD OPERATOR (object & array)  START *************
       
     // স্প্রেড অপারেটর হলো একটি ES6 ফীচার যা ডাটা কপি করতে এবং মোডিফাই করতে ব্যবহৃত হয়। উদাহরণে, এটি অ্যারে এবং অবজেক্টে ব্যবহৃত হতে পারে, যাতে আপনি পূর্বের ডাটার একটি কপি তৈরি করতে পারেন। এটি কোড লেখার সময় বেশ কাজে আসতে পারে, যেখানে আপনি ডাটা মোডিফাই করতে চাচ্ছেন তবে অসল ডাটা পরিবর্তন হবে না।


     // সংক্ষেপে যদি বলি, কোনো একটা অবজেক্ট বা অ্যারেকে কপি করে নতুন একটা অবজেক্ট বা অ্যারে তৈরি করার জন্য স্প্রেড অপারেটর তৈরি করা হয় । 
     
     

   //  ############## 1. Array Spread Operator start############### 

     const array = [10, 20, 30, 40, 50]

     const newArray = [...array, 60, 70, 80]
    //   newArray.push(60) // এভাবেও পুস করে অ্যাড করা যায় অথবা উপরে 

     
     console.log('Main Array', array)  // [ 10, 20, 30, 40, 50 ]
     console.log(newArray) // [ 10, 20, 30, 40, 50, 60, 70, 80 ]


   //  ############## 1. Array Spread Operator end ############### 



   //  ############## 2. Object Spread Operator start ############### 

    const obj = {
         name: 'Kamrul', 
         age: 10
    }

    const newObject = {...obj, height: '5.6'}


    console.log(obj) // { name: 'Kamrul', age: 10 }
    console.log(newObject)  // { name: 'Kamrul', age: 10, height: '5.6' }

   //  ############## 2. Object Spread Operator end ############### 




    //  ************* ‍৩. SPREAD OPERATOR  END *************



// @@@@@@@@@@@@@@@@@@@@@@@@ "4" Es6 END HERE @@@@@@@@@@@@@@@@@@@@@@@@@@
