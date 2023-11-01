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

    



// @@@@@@@@@@@@@@@@@@@@@@@@ "4" Es6 END HERE @@@@@@@@@@@@@@@@@@@@@@@@@@
