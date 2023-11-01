/***
 * 
 * @@@@@@@@@@@@@@@@@@@@@@@@ "3" DESTRUCTURING (ARRAY & OBJECT) START HERE @@@@@@@@@@@@@@@@@@@@@@@@@@
 * 
 * ************* ‍১. ARRAY DESTRUCTURING ************* 
 * ************* ‍২. OBJECT  DESTRUCTURING ************* 
 * 
 * 
 */


//  ************* ‍১. ARRAY DESTRUCTURING ‍START   ************* 

    // Array destructuring = হলো একটি ইমপর্ট্যান্ট JavaScript ফিচার, যা সহজেই একটি অ্যারে থেকে ডেটা বের করে তা কেটে নেওয়ার একটি পদ্ধতি।

    // ARRAY DESTRUCTURING এর ক্ষেত্রে সিকুয়েন্স  ম্যান্টেইন করতেই হবে । মানি ইনডেক্স ফলো করতে হবে । কিন্তু অবজেক্টের ক্ষেত্রে সিকুয়েন্স ম্যান্টেইন করতে হবে না । 

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

    // এখানে fruits অ্যারে থেকে মূল্যগুলি নেয়া হয়েছে firstFruit, secondFruit, এবং thirdFruit ভেরিয়েবলে। এটি সহজ এবং পাওয়া মূল্য গুলি নিয়ে কাজ করার জন্য খুব ব্যবহারিত হয়। 

    

//  ************* ‍১. ARRAY DESTRUCTURING END   ************* 




// ************* ‍২. OBJECT  DESTRUCTURING START *************  

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




// ************* ‍২. OBJECT  DESTRUCTURING END *************  




//  @@@@@@@@@@@@@@@@@@@@@@@@ "3" DESTRUCTURING (ARRAY & OBJECT)  END HERE @@@@@@@@@@@@@@@@@@@@@@@@@@