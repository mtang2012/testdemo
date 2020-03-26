var b=(function () {
    var b = 1;
    var res = function () {
        console.log(b);
        return b += 1;
    }
    var result = res();
    return result;
})();
c=b;
d=b;
// console.log(c);

// console.log(d);
// var obj = {
//     a: 3,
//     b: function () 
//     {
       
//         console.log(this.a);
//         console.log(123)
//     }
// };
// obj.b();



// d=aaa();
// console.log(c); let const 、、函数声明定义一个作用域   执行时开辟内存 生成闭包
// this 指针 指向闭包 指向调用者
// console.log(d);
// 穿参数 和 两个花括号
// 函数输入 和 函数输出 函数名  

// var aaa = (function () {
//     b = 1;
//     return function () {
//         console.log(b);
//         return b += 1;
//     }

// }
// )();

// c = aaa();
// d = aaa();
// // console.log(c);  创建闭包
// // console.log(d); 匿名马上被执行函数 



// var add = (function () {
//     var c = 0;
//     return function () { return c += 1; }
// })();

// add();
// add();
// ddd = add();
// console.log(ddd);


// function aaa2(a,bbb){
//     b=1;
//    return function res(bbb){
//     b++;
//     return bbb+b;
//     };
// }
// e=aaa2(1,2);
// f=aaa2(1,2);
// console.log(c);
// console.log(d);



// a2 =function(){
//     b=1;
//    return (function (aaaa){

//     return (b++)+aaaa;
//     });
// }

// console.log(typeof a2);
// c=a2()(12);
// d=a2()(13);
// console.log(c);
// console.log(d);




// function myFunction() {
//     var a = 4;
//     return  (a * a)  ;
// }



// console.log(a=myFunction());


// var add = (function () {
//     var counter = 0;
//     return function () {return counter += 1;}
// })();
// console.log(add());
// add();
// add();
// ab=add();
// console.log(ab);




// function add(){

//     var counter=0;

//     return  function addinner(){

//         return counter += 1;
//     }

// }
console.log(add());
add();
add();
add();
console.log(add());