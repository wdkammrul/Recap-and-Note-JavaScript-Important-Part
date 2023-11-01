/***
 * 
    @@@@@@@@@@@@@@@ "5" JavaScript ShoreCurt START HERE  @@@@@@@@@@@@@@@


    ######## 1. FALSY VALUE (0, '', null, undefined, nan, false) START ###########
    ######## 2. TRUTHY ('12', 1, true, {}, []) VALUE START ################
    ######## 3. TERNARY OPERATOR START #############
  


    ###### 1. FALSY VALUE (0, '', null, undefined, nan, false) START #############


    "Falsy" মানে হলো এমন একটি মান যা শক্তিশালী অথবা সত্য হয়না। JavaScript-এ, কিছু মান   স্বয়ংক্রিয়ভাবে "মিথ্যা" হিসেবে পরিচিত হয় এবং তাদেরকে "falsy values" বলা হয়। 
    
        1. 0: সাধারিত সংখ্যা 0.
        2. '' (একটি ফাঁকা স্ট্রিং): খালি স্ট্রিং.
        3. null: একটি খালি মান.
        4. undefined: একটি অনির্ধারিত মান.
        5. NaN: "Not-a-Number" মান.
        6. false এর বুলিয়ান মান = ০ বা false 


    ################## 1. FALSY VALUE END ####################



    ################## 2. TRUTHY ('12', 1, true, {}, []) VALUE START ####################
  

    "Truthy" মানে হলো এমন একটি মান যা শক্তিশালী অথবা সত্য। JavaScript-এ, কিছু মান স্বয়ংক্রিয়ভাবে "সত্য" হিসেবে পরিচিত হয় এবং তাদেরকে "truthy values" বলা হয়।

    যেমন:

        1. true: বুলিয়ান মান true.
        2. সাধারিত সংখ্যা (যেমন, 1, 2, -1, ইত্যাদি): যে কোনও সংখ্যা যা 0 না হয়।
        3. খালি স্ট্রিং নয় (অর্থাৎ, একটি অকেক অক্ষর বা স্পেস থাকতে পারে): যে কোনও অকেক অক্ষর বা স্পেস থাকলে এটি truthy হয়।
        4. একটি অবজেক্ট: যেকোনও অবজেক্ট হলে এটি truthy হয়।
        5. একটি অ্যারে: যেকোনও অ্যারে হলে এটি truthy হয়।


    ################## 2. TRUTHY VALUE END ####################
 *
 *  
 */




    // ################## 3.TERNARY OPERATOR START ####################

    // টার্নারি অপারেটর হলো একটি শর্টহ্যান্ড অপারেটর, যা একটি কন্ডিশনাল এক্সপ্রেশন বা কন্ডিশনাল অপারেটর হিসেবেও পরিচিত। এটি সাধারিতভাবে একটি কন্ডিশন চেক করে এবং সত্য হলে একটি ভ্যালু ফেটচ করে, অন্যথায় অন্য একটি ভ্যালু ফেটচ করে।


    // if কন্ডিশন ব্যবহার করে শর্ত । 
        const money = 40; 

        if(money < 50){
            console.log("gurta jabo na")   // gurta jabo na 
        }
        else{
            console.log("gurta jabo")
        }


    // TERNARY OPERATOR দিয়ে  উপরের কাজটাই ১ লাইনে করা যাবে দেখি । 

        const money1 = 40; 

        const tour = money1 < 50 ? "gurta jabo na" : "gurta jabo"

        console.log(tour)  // gurta jabo na 

    


     // login and logout করার জন্য tarnary operator যখন ২টা শর্ত থাকে তখন tarnary ব্যবহার করা হয় ।

     const user = null;

     user?console.log('logout'):console.log('login'); //login


    //  যদি ১ টা শর্ত থাকে তখন && ব্যবহার করা যায় ।
     const user1 = true 
     user1 && console.log("logout") // logout

    // ################## 3.TERNARY OPERATOR END ####################



    // ################## 4. CONVERT STRING TO NUMBER START  ####################


      // সাধারণ নিয়ম 
        const num1 = "40"

        const numInt = parseInt(num1)

        console.log(typeof numInt)



      // শর্টকার্ট উপায় শুধুমাত্র + চিহ্ন ব্যবহার করেই স্ট্রিং থেকে নাম্বারে রুপান্তর করা ।
        const num2 = "40"

        const numInt2 = +num2 
        
        console.log(typeof numInt2)


    // ################## 4. CONVERT STRING TO NUMBER END  ####################




    // ################## 5. CONVERT NUMBER TO STRING START   ####################
 

      // শর্টকার্ট উপায় শুধুমাত্র + চিহ্ন ব্যবহার করেই স্ট্রিং থেকে নাম্বারে রুপান্তর করা 

        const number1 = 40

        const numberFloat1 = number1+"" 
        
        console.log(typeof numberFloat1) //string



       

    // ################## 5. CONVERT NUMBER TO STRING END  ####################



    // ################## 6. OR || AND && OPERATOR START  ####################


     //  যদি ১ টা শর্ত থাকে তখন && ব্যবহার করা যায় ।
       const user2 = true 
        user2 && console.log("logout") // logout



    // নিচে অর অপারেটরের মাধ্যমে যদি নাম থাকে তাহলে নাম দেখাবে যদি না থাকে তাহলে নাম নেই দেখাবে 

    const userName = "kamrul"

    const newName = userName || 'name nai'
    
    console.log(newName)

    // ################## 6. OR || AND && OPERATOR END  ####################
  


    






    // @@@@@@@@@@@@@@@ "5" JAVASCRIPT SHORTCUTS END HERE  @@@@@@@@@@@@@@@