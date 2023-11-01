/***
 *  * এখানে নোট আকারে সম্পূর্ণ অংশকে দেয়া হলো যদি কোড দেখে কাজ করতে চাই তাহলে আলাদা ফাংশনে কোড করা আছে ওখান থেকে দেখে নিতে পারি । 
 * 
 *  যে বিষয়গুলো  এই নোটে আছে 
 *  @@@ "1" FUNDAMENTALS OF JS  (variable, condition, array, loop and object) @@@@
 *  @@@ "2" ARRAY METHODS (map, foreach, filter, find)  START HERE @@@
 *  @@@ "3" DESTRUCTURING (ARRAY & OBJECT) START HERE @@@
    @@@ "4" Es6 (TEMPLATE STRING, ARROW FUNCTION, SPREAD OPERATOR) @@@@
 *
    উপরের বিষয়গুলোই নিচে আমার মতো করে সাজিয়ে বুঝার চেস্টা করেছি । এই নোট করার সময় আমি কিন্তু প্রায় সবগুলোই বুঝতে পেরেছিলাম । 
 * 


 *  @@@@@@@@@@@@@@@@@@@@@@@@ "1" FUNDAMENTALS OF JS  START HERE @@@@@@@@@@@@@@@@@@@@@@@@
 * 
 * 
    ******** ১. VARIABLE ( const and let )  ********
    ******** ২. CONDITION (>, <, >=, <=, ===, !==, ||, &&)  ********
    ******** ৩. ARRAY ********
    ******** ৪. LOOP ********
    ******** ৫. OBJECT ********
 * 
 * 
 * 
    ******** ১. VARIABLE ( const and let ) START********

    1. const ভেরিয়াবেলের মান যখন অপরিবর্তিত থাকবে তখন কনস্ ব্যবহার করা হয় । যেমন নিচের ইমেইলটা অপরিবর্তনিয় । 
    const name = "wdkammrul@gamil.com";
    console.log(name);


    2. let ভেরিয়াবেলের মান যদি পরবর্তিতে পরিবর্তন করা দরকার হয় তখন লেট ব্যবহার করতে হবে ।
    let sum = 10;
    sum += 5 
    console.log(sum) 


    ******** ১. VARIABLE ( const and let ) END********
 * 
 * 
 * 
 * 
 *  ******** ২. CONDITION (>, <, >=, <=, ===, !==, ||, &&) START ********
    * 1. || = অর অপারেটরের মাধ্যমে ২ টা শর্তের মধ্যে যদি একটা সংখ্যা ট্রু হয় তাহলে ট্রু   ফলাফল হবে । সহজ ভাবে ২ টা  শর্তের ১ টা সত্য হলেই হবে । 
    * 
    let num = 10;

    if(num > 5 || num > 15){
        console.log('condition true');
    }
    else{
        console.log('condition false')
    }

    *** Ans: condition false

    
    * 2. && = এন্ড  অপারেটরের মাধ্যমে ২ টা শর্তের মধ্যে যদি দুইটাই শর্তই  ট্রু হয় তাহলে ট্রু ফলাফল হবে । যদি ১ টা ট্রু এবং একটা ফলস হয় তাহলে ফলস ফলাফল হবে । সহজ ভাবে ২টা শর্তই সত্য হতে হবেই হবে ।

    let num = 10;

    if(num > 5 && num > 15){
        console.log('condition true');
    }
    else{
        console.log('condition false')
    }

    *** Ans: condition false 

 * 
 *  ******** ২. CONDITION END ********
 * 
 * 
 * 
    ******** ৩. ARRAY START ********

    1. ARRAY = অ্যারে হচ্ছে একধরনের ডাটা স্ট্রাকচার, যেখানে একই ধরনের বা সমবর্তন ডাটা গুলি ধারণ করা হয় এবং ইনডেক্স ব্যবহার করে তাদেরকে অ্যাক্সেস করা হয় ।
    
    const num = [10, 20, 30, 40, 50]  //............1000000+

    
    ******** ৩. ARRAY END ********
 * 
 * 
 * 
 * 
 *  ******** ৪. LOOP START (for loop) ********

    const num = [10, 20, 30, 40, 50];

    for(let i = 0; i < num.length; i++){
        console.log(num[i])
    }


    ******** ৪. LOOP END ********
 * 
 * 
 * 
 * 
 *  ******** ৫. FUNCTION START ********

    function hello (num1, num2) {
        let result = num1 * num2
        console.log(result)
    }

    hello(5, 5)

    ******** ৫. FUNCTION END ********
 * 
 * 
 * 
 * 
 * 
    ******** ৬. OBJECT START ********
    
    const person ={
        name: 'Kamrul Islam',
        age: 21,
        mobile: '01710510464'
    }

    // dot notation 
    console.log(person.name)

    // 3rd bracket notation
    console.log(person['age'])

    // access dynamic 
    const myMobile = 'mobile'


    console.log(person[myMobile])


    ******** ৬. OBJECT END ********
 * 
 * 
 * @@@@@@@@@@@@@@@@@@@@@@@@ "1" FUNDAMENTALS OF JS  END HERE @@@@@@@@@@@@@@@@@@@@@@@@
 * 
 * 
 * 
 * 
 * 
 *  @@@@@@@@ "2" ARRAY METHODS (map, foreach, filter, find)  START HERE @@@@@@@@@@@@@
 * 
 * 
    ******** ১. MAP START ********
        MAP = map মেথড ব্যবহার করে প্রতি উপাদানের জন্য একটি ফাংশন অ্যাপ্লাই করে নতুন একটি অ্যারে তৈরি করে । map রিটার্ন করা যায় । 

        const arr = [10, 20, 30, 40, 50]

        const multiply = arr.map((current, index, arr) => {
            console.log(current)
            console.log(index)
            console.log(arr)
        })

    ******** ১. MAP END  ********




    ******** ২. FOREACH START ********

        FOREACH = forEach মেথড দিয়ে অ্যারের প্রতি উপাদানের জন্য একবার একটি ফাংশন কল করে এবং অ্যারেতে কোনো পরিবর্তন করে না। foreach রিটার্ন করে না । 


    ******** ২. FOREACH END   ********
 
 

 
    ******** ৩. FILTER START   ********

    //  filter মেথড ব্যবহার করে অ্যারেতে একটি শর্ত অনুযায়ী মৌলিক উপাদানগুলি ফিল্টার করে নতুন অ্যারে তৈরি করে।

     // filter = অ্যারে রিটার্ন করে দেয় // [ { id: 1, name: 'Arefin' }, { id: 3, name: 'Samsul' } ]

    const arr = [10, 20, 30, 40, 50];

    let newArray = [] 
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 10){
            newArray.push(arr[i])
        }
    }
    console.log(newArray)


    // filter বিস্তরিতভাবে দেখি একটু  একটু সহজ ভাবে বলি মনে করি আমার কাছে নিচের ৩ টা আইডির ডাটা আছে আমি চাচ্ছি কামরুল নামের আইডিটা বাদ দিয়ে বাকি ২ টা আইডি আমার দরকার এই ক্ষেত্রে ফিল্টার করে কামরুল নামের ডাটা বাদে বাকি দুইটা ডাটা পেলাম । 

        const userData = [
            {
                id: 1, 
                name: 'Arefin'
            },
            {
                id: 2, 
                name: 'Kamrul'
            },
            {
                id: 3, 
                name: 'Samsul'
            },
        ]

        const deletedId = 2;

        const newData = userData.filter((p) => p.id !== deletedId)
        console.log(newData)

     ******** ৩. FILTER END   ***********



     ******** ৪. FIND START   ********
        // Find = যখন আমাদের একটি মাত্র ডাটা প্রয়োজন হয় তখন আমরা ফাইন্ড ব্যবহার করি । ফাইন্ড ব্যবহার করলে প্রথম ডাটাটাই দেখা যাবে । 

        // find = অবজেক্ট রিটার্ন করে দেয় ।  // { id: 2, name: 'Kamrul' }


        const userData1 = [
            {
                id: 1, 
                name: 'Arefin'
            },
            {
                id: 2, 
                name: 'Kamrul'
            },
            {
                id: 3, 
                name: 'Samsul'
            },
        ]

        const kamrulsId = 2;

        const newData1 = userData.find((p) => p.id === kamrulsId);
        console.log(newData1)

     ******** ৪. FIND END   ********


  @@@@@@@@@@@@@@@@@@@@@@@@ "2" ARRAY METHODS  END HERE @@@@@@@@@@@@@@@@@@@@@@@@@@
 
     
 




  @@@@@@@@@@ "3" DESTRUCTURING (ARRAY & OBJECT) START HERE @@@@@@@@@@@@@@@@@@@@@



  ************* ‍১. ARRAY DESTRUCTURING ‍START HERE  ************* 


    Array destructuring = হলো একটি ইমপর্ট্যান্ট JavaScript ফিচার, যা সহজেই একটি অ্যারে থেকে ডেটা বের করে তা কেটে নেওয়ার একটি পদ্ধতি।

    const numbers = [20, 30]

    const [x, y] = numbers
    console.log(x)


    // একটি অ্যারে
    const fruits = ['আপেল', 'কমলা', 'আম'];

    // Array destructuring ব্যবহার করে অ্যারে থেকে মূল্য নেওয়া
    const [firstFruit, secondFruit, thirdFruit] = fruits;

    // মূল্য নেওয়া পরীক্ষা করি
    console.log(firstFruit);  // আপেল
    console.log(secondFruit); // কমলা
    console.log(thirdFruit);  // আম

    এখানে fruits অ্যারে থেকে মূল্যগুলি নেয়া হয়েছে firstFruit, secondFruit, এবং thirdFruit ভেরিয়েবলে। এটি সহজ এবং পাওয়া মূল্য গুলি নিয়ে কাজ করার জন্য খুব ব্যবহারিত হয়। 



    ************* ‍১. ARRAY DESTRUCTURING END HERE  ************* 



    ************* ‍২. OBJECT  DESTRUCTURING START *************  

    // NOTE: Object Destructuring এর ক্ষেত্রে সিকুয়েন্স ম্যান্টেইন করতে হবে না ।

    const person = {
        name: 'kamrul',
        age: '22',
        language: ['js', 'react', 'express'],
        details: {
            hight: 5.6,
            weight: 64, 
            drink: 'mum pani'
        }
    }

    
    const {age, name, language} = person
    console.log(name)

    
    const {hight, weight, drink} = person.details;
    console.log(drink)


    ************* ‍২. OBJECT  DESTRUCTURING END *************  


    @@@@@@@@@@@@@ "3" DESTRUCTURING (ARRAY & OBJECT)  END HERE @@@@@@@@@@@@@@@@@@@@@@@@@@





    @@@@@@@ "4" Es6 (Template String, arrow function, spread operator) START HERE @@@@@@@@

    
    ************* ‍১. TEMPLATE STRING START HERE *************


    // template string  = কোনো কিছুকে ডায়নামিক করার জন্য template string ব্যবহার করবো । 

    const name = 'Kamrul'
    const age = 21
    const fatherName = "Kamal hossain";

    const about = `My name is ${name}. I am ${age} years old. My father name is ${fatherName}`
    console.log(about)


    ************* ‍১. TEMPLATE STRING END HERE *************




   ************* ‍২. ARROW FUNCTION  START ************* 

    Arrow function হলো ES6 এর একটি ফিচার যা একটি সুবিধাজনক পদ্ধতিতে ফাংশন লেখার সুযোগ প্রদান করে। এটি স্থানীয় ফাংশনের সহায়ে অনেক সংকটমুক্ত এবং সংক্ষেপে ফাংশন লেখা সহজ করে।

    ########## One. Without parameter start ############
    

    // normal function 
    function hello (){
          return "hello"
    }

    //  single arrow function (without parameter)
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




    ######### Four: multiline parameter start ###############

       // এর মাধ্যমে মাল্টিলাইন ও ফাংশন করা যাবে । তবে এক্ষেত্রে অবশ্যই রিটার্ন করতে হবে ।
       const multiline = () => {
           return 'hello'
       }
       
       console.log(multiline())

    ######### Four: multiline parameter emd  ###############



    ************* ‍২. ARROW FUNCTION  END *************  



    ************* ‍৩. SPREAD OPERATOR (object & array)  START *************
       
    স্প্রেড অপারেটর হলো একটি ES6 ফীচার যা ডাটা কপি করতে এবং মোডিফাই করতে ব্যবহৃত হয়। উদাহরণে, এটি অ্যারে এবং অবজেক্টে ব্যবহৃত হতে পারে, যাতে আপনি পূর্বের ডাটার একটি কপি তৈরি করতে পারেন। এটি কোড লেখার সময় বেশ কাজে আসতে পারে, যেখানে আপনি ডাটা মোডিফাই করতে চাচ্ছেন তবে অসল ডাটা পরিবর্তন হবে না।


    সংক্ষেপে যদি বলি, কোনো একটা অবজেক্ট বা অ্যারেকে কপি করে নতুন একটা অবজেক্ট বা অ্যারে তৈরি করার জন্য স্প্রেড অপারেটর তৈরি করা হয় । 
     
     

     ############## 1. Array Spread Operator start############### 

     const array = [10, 20, 30, 40, 50]

     const newArray = [...array, 60, 70, 80]
    // newArray.push(60) // এভাবেও পুস করে অ্যাড করা যায় অথবা উপরে 

     
     console.log('Main Array', array)  // [ 10, 20, 30, 40, 50 ]
     console.log(newArray) // [ 10, 20, 30, 40, 50, 60, 70, 80 ]


    ############## 1. Array Spread Operator end ############### 



    ############## 2. Object Spread Operator start ############### 

    const obj = {
         name: 'Kamrul', 
         age: 10
    }

    const newObject = {...obj, height: '5.6'}


    console.log(obj) // { name: 'Kamrul', age: 10 }
    console.log(newObject)  // { name: 'Kamrul', age: 10, height: '5.6' }

    ############## 2. Object Spread Operator end ############### 




    ************* ‍৩. SPREAD OPERATOR  END *************

    
   @@@@@@ "4" Es6 (Template String, arrow function, spread operator) END HERE @@@@@@@@@@@


 * 
 * 
 *  
 * 
 */