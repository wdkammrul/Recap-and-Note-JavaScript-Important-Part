// 1. এখানে ম্যাপের কাজটা কি বিস্তারিত বুঝতে চাচ্ছি ।
//   ******** ১. MAP START ********
// MAP = map মেথড ব্যবহার করে প্রতি উপাদানের জন্য একটি ফাংশন অ্যাপ্লাই করে নতুন একটি অ্যারে তৈরি করে।  map রিটার্ন করা যায় । 

const arr = [10, 20, 30, 40, 50];


// ৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥ এই লাইনে p কেনো আসলো ।  এখানে (current, index, arr) এর কাজ কি এবং কিভাবে কাজ করে । 
const multiply = arr.map((current, index, arr) => {
  // console.log(current)
  // console.log(index)
  console.log(arr);
});

//   ******** ১. MAP END********










//   ******** ৩. FILTER START   ********

    //  filter মেথড ব্যবহার করে অ্যারেতে একটি শর্ত অনুযায়ী মৌলিক উপাদানগুলি ফিল্টার করে নতুন অ্যারে তৈরি করে।

    const arr1 = [10, 20, 30, 40, 50];

    // এখানে ফরলুপ চালিয়ে যেই কাজ করা হলো সেইম কাজটাই ফিলটারের মাধ্যমে ১ লাইনে করা যাবে 
    // let newArray = [] 
    // for(let i = 0; i < arr.length; i++){
    //     if(arr[i] > 10){
    //         newArray.push(arr[i])
    //     }
    // }

    const newArray = arr1.filter((current) => current > 10)

    console.log(newArray)


    // filter বিস্তরিতভাবে দেখি একটু 

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


    // ৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥৥ এই লাইনে p কেনো আসলো । 
    const newData = userData.filter((p) => p.id !== deletedId)
    console.log(newData)

//   ******** ৩. FILTER END   ********



     // login and logout করার জন্য tarnary operator 

     const user = null;

     user?console.log('logout'):console.log('login');


     



