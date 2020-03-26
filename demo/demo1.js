 const name = "The Window";
// var that2=this;
console.log(that2);//{}
console.log(that2);//{}
  var object1 = {
    name : "My Object",
    bbb  :  this,
    ddd  : function(){ console.log(this) },
    getNameFunc : function(){
      var that = this;//
      var name = "my object 2";
      // console.log(that===that2);//ture
      // console.log(name);//The Window
      // console.log(that.name);//My Object
      // console.log(this.name);// My Object
        var result=function(){
            console.log(this);//Object [global]
            return this.name  //undefined
        }
      return result;
      // return function(){
      //   return this.name;   
      // };
    }
  };
  ffff=object1.ddd;
  ffff();
  console.log(object1.getNameFunc()());
