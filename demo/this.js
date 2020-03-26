var obj = {

    foo: function () {return 1;}
  };
  
  var foo = obj.foo();
console.log(foo);
function aaa(){


    console.log(this);
}

var b= new aaa();
var c=aaa();
var d=aaa;
console.log(typeof aaa);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);

var name = "The Window";
  var object1 = {
    name : "My Object",
    getNameFunc : function(){
      var that = this;
      return function(){
        return this.name; 
      };
    }
  };
  console.log(object1.getNameFunc()());