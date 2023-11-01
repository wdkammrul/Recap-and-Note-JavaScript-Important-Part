

//  @@@@@@@@@@@@@@@@@@@@@@@@ "2" ARRAY METHODS  START HERE @@@@@@@@@@@@@@@@@@@@@@@@

/**
 * 
 * 
  ******** ১. MAP ********
  ******** ২. FOREACH  ********
  ******** ৩. FILTER ********
  ******** ৪. FIND ********
 * 
 * 
 */


//   ******** ১. MAP START ********
    // MAP = map মেথড ব্যবহার করে প্রতি উপাদানের জন্য একটি ফাংশন অ্যাপ্লাই করে নতুন একটি অ্যারে তৈরি করে। map রিটার্ন করা যায় । 

    // const arr = [10, 20, 30, 40, 50]

    // const multiply = arr.map((current, index, arr) => {
    //     // console.log(current)
    //     // console.log(index)
    //     console.log(arr)
    // })

//   ******** ১. MAP END********



//   ******** ২. FOREACH START ********

    // FOREACH = forEach মেথড দিয়ে অ্যারের প্রতি উপাদানের জন্য একবার একটি ফাংশন কল করে এবং অ্যারেতে কোনো পরিবর্তন করে না। foreach রিটার্ন করে না । 
    // কোনো একটা ফাংশনকে একধিক জায়গার ব্যবহার করার প্রয়োজন হলে রিটার্ন করতে হয় । 

    // const arr = [10, 20, 30, 40, 50];

    // const multiply = arr.forEach((current, index, arr) => {
    //   // console.log(current)
    //   // console.log(index)
    //   console.log(arr);
    // });
    
//   ******** ২. FOREACH END   ********



//   ******** ৩. FILTER START   ********

    //  filter মেথড ব্যবহার করে অ্যারেতে একটি শর্ত অনুযায়ী মৌলিক উপাদানগুলি ফিল্টার করে নতুন অ্যারে তৈরি করে।

    // filter = অ্যারে রিটার্ন করে দেয় // [ { id: 1, name: 'Arefin' }, { id: 3, name: 'Samsul' } ]

    const arr = [10, 20, 30, 40, 50];

    // এখানে ফরলুপ চালিয়ে যেই কাজ করা হলো সেইম কাজটাই ফিলটারের মাধ্যমে ১ লাইনে করা যাবে 
    // let newArray = [] 
    // for(let i = 0; i < arr.length; i++){
    //     if(arr[i] > 10){
    //         newArray.push(arr[i])
    //     }
    // }

    const newArray = arr.filter((current) => current > 10)

    // console.log(newArray)


   
    // filter বিস্তরিতভাবে দেখি => একটু সহজ ভাবে বলি, মনে করি, আমার কাছে নিচের ৩ টা আইডির ডাটা আছে আমি চাচ্ছি কামরুল নামের আইডিটা বাদ দিয়ে বাকি ২ টা আইডি আমার দরকার এই ক্ষেত্রে ফিল্টার করে কামরুল নামের ডাটা বাদে বাকি দুইটা ডাটা পেলাম । 

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

//   ******** ৩. FILTER END   ********




//   ******** ৪. FIND START   ********
    // Find = যখন আমাদের একটি মাত্র ডাটা প্রয়োজন হয় তখন আমরা ফাইন্ড ব্যবহার করি । ফাইন্ড ব্যবহার করলে প্রথম ডাটাটাই দেখা যাবে । 

    // find = অবজেক্ট রিটার্ন করে দেয় ।  // { id: 2, name: 'Kamrul' }

   const arr1 = [10, 20, 30, 40, 50];

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

//   ******** ৪. FIND END   ********




//  @@@@@@@@@@@@@@@@@@@@@@@@ "2" ARRAY METHODS  END HERE   @@@@@@@@@@@@@@@@@@@@@@@@
    
    
