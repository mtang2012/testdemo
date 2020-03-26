// var momsPromise = new Promise(function(resolve, reject) {
//     momsSavings = 20000;
//     priceOfPhone = 60000;
//     if (momsSavings > priceOfPhone) {
//       resolve({
//         brand: "iphone",
//         model: "6s"
//       });
//     } else {
//       reject("我们没有足够的储蓄，让我们多存点钱吧。");
//     }
//   });
//   momsPromise.then(function(value) {
//     console.log("哇，我得到这个电话作为礼物 ", JSON.stringify(value));
//   });
//   momsPromise.catch(function(reason) {
//     console.log("妈妈不能给我买电话，因为 ", reason);
//   });
//   momsPromise.finally(function() {
//     console.log(
//       "不管妈妈能不能给我买个电话，我仍然爱她"
//     );
//   });

// const p1 = new Promise(function(resolve,reject){
//     resolve('success1');
//     resolve('success2');
// }); 
// const p2 = new Promise(function(resolve,reject){  
//     resolve('success3'); 
//     reject('reject');
// });

// console.log(p1);

// p1.then(function(value){  
//     console.log(value); // success1
// });
// p2.then(function(value){ 
//     console.log(value); // success3
// });


// const p = new Promise(function(resolve,reject){
//     resolve(1);
//   }).then(function(value){ // 第一个then // 1
//     console.log(value);
//     return value * 2;
//   }).then(function(value){ // 第二个then // 2
//     console.log(value);
//     return Promise.resolve(value*2);
//   }).then(function(value){ // 第三个then // undefined
//     console.log(value);
//     return Promise.resolve('resolve'); 
//   }).then(function(value){ // 第四个then // resolve
//     console.log(value);
//     return Promise.reject('reject'); 
//   }).then(function(value){ // 第五个then //reject:reject
//     console.log('resolve:' + value);
//   }, function(err) {
//     console.log('reject:' + err);
//   });
// function aaa(abc, callback) {
//     setTimeout(function () {
//         console.log("第二个输出");
//         ab = abc + 10;
//         callback();//为了将callback在ab之后执行，将回调函数放在函数体内部
//     }, 3300);
//     console.log("haha第一个执行")
//     function callback() {
//         console.log("第三个执行");

//     }
// }

// aaa(12);



// function aaa(abc, callback) {
//     setTimeout(function () {
//         console.log("第二个输出");
//         ab = abc + 10;
//         callback();//为了将callback在ab之后执行，将回调函数放在函数体内部
//     }, 3300);
//     console.log("haha第一个执行")


// }
// function callback() {
//     console.log("第三个执行")
// }
// aaa(12, callback);

// var p1 = new Promise(function (resolve, reject) {

//     setTimeout(function () {
//         console.log("第二个输出");
//     resolve("成功被输出");
//     reject("失败啦"); 
//     }, 3300);
//     console.log("haha第一个执行");
//     // resolve("成功被输出");
//     // reject("失败啦"); 这两个的位置很关键
// }).then(function (resolve) {
//     setTimeout(function () {
//         console.log("第三个输出");

//     }, 3300);
//     console.log(resolve);

// })

// var p1 = new Promise(function (resolve, reject) {

//     setTimeout(function () {
//     console.log("第二个输出");
//     resolve("成功被输出");
//     reject("失败啦"); 
//     }, 3300);
//     console.log("haha第一个执行");
//     // resolve("成功被输出");
//     // reject("失败啦"); 这两个的位置很关键
// }).then(function (resolve) {
//     setTimeout(function () {
//         console.log("第三个输出");

//     }, 3300);
//     console.log(resolve);

// })

function p1 () {
    return new Promise(function(resolve){
        setTimeout(function () {
            console.log("第二个输出");
            resolve("我是第几个");
        }, 3300);
        console.log("我是第一个");
    }) 
}
async function aaa() {
    console.log(await p1());
    return Promise.resolve("我是成功执行的");
}

aaa().then(function(value){
console.log(value);
});

// aaa().then(function (value) {
//     setTimeout(function () {
//         console.log("第三个输出");
//         // resolve("成功被输出");
//         // console.log(aaa());
//         // reject("失败啦"); 
//         console.log(value);
//     }, 3300)
// }
// );


// function testAwait(){
//     return new Promise((resolve) => {
//         setTimeout(function(){
//            console.log("testAwait");
//            resolve();
//         }, 1000);
//     });
//  }
  
//  async function helloAsync(){
//     await testAwait();
//     console.log("helloAsync");
//   }
//  helloAsync();
 // testAwait
 // helloAsync