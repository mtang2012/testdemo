// var aaa =function(){

//     var bb=0;




//     (function () {

        
//         console.log(bb);

//         bb = bb+1;
//         return ;
//     }());
   
//     return bb;
// };

// var cc= aaa;
// console.log("这是"+cc()) ;
// // console.log(cc()) ;
// console.log(cc()) ;


// function count() {
//     var arr = [];
//     for (var i=1; i<=3; i++) {
//         arr.push(function (i) {
//             return i * i;
//         }(i));
//     }
//     return arr;
// }

// var results = count();
// console.log(typeof results)
// console.log(results[0]);
// console.log(results[1]);
// console.log(results[2]);


function Student(name) {
    // this= {} ;
    this.name = name;
    this.cbn= 1234;
    // Student.prototype={ constructor: Student };
    console.log(this);

    return this.cbn;
    
}
console.log(Student.prototype.constructor===Student);

var xiaoming= new Student("汤");
var tang= Student("汤");
console.log(tang); 


// console.log(Student.constructor);
// console.log(typeof  Student.constructor);
// Student.prototype.hello = function () {
//     console.log('Hello, ' + this.name + '!');
// };
// var s=new Student("fdfd")
// var xiaoming = new Student('小明');
// xiaoming.name; // '小明'
// xiaoming.hello(); // Hello, 小明!

// var tang = new Student('汤');

// console.log(xiaoming.hello===tang.hello);
// console.log(xiaoming.__proto__.constructor);
// console.log(xiaoming.cbn );
// console.log(Student.__proto__);


// function User(name) {
//     // this = {};（隐式创建）
  
//     // 添加属性到 this
//     this.name = name;
//     this.isAdmin = false;
  
//     // return this;（隐式返回）
//   }