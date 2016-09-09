
console.log("Hello World");

var x:number=10;
//x="hello";

//型

var i:number=10;
var i =10; //型推論

var y; //var x:any

var results:number[];
results=[1,2,3];

//列挙型

enum Signal{ Red=0,Blue=1,Yellow=2 };

var result:Signal;

console.log(result===Signal.Yellow);
result=Signal.Yellow;
console.log(result===Signal['Yellow']);
console.log(Signal[2]); //Yellow

//宣言的な関数

function add(a:number=10,b?:number):number{
		if(b){ return a+b; }
		else{ return a+a; }
}
console.log(add(5,3));
console.log(add(6,6));
console.log(add());


//関数式
(function(){
  var add2= function (a:number ,b:number):number{ return a+b; }
  var add3 = (a:number,b:number):number=>a+b;

  console.log(add2(5,7));
  console.log(add3(8,9));
})();



//関数のオーバロード

(function(){
function add(a: number, b: number): number; // シグネチャ
function add(a: string, b: string): string;

function add(a: any, b: any): any {
    if (typeof a === "string" && typeof b === "string") {
        return a + " " + b;
    }
    return a + b;
}

console.log(add(5, 3)); // 8
console.log(add("hello", "world")); // hello world

//console.log(add("hello",3));	//シグネチャにない組み合わせのためコンパイルエラー発生


})();

//クラス


class User {
	public name:string;
	constructor(name:string) {this.name=name;}

	public sayHi():void {console.log("Hi!!!! i am "+this.name);}
}


var tom =new User("tom");
console.log(tom.name);
tom.sayHi();


class User2 {
   constructor(public name:string) {}

	public sayHi():void {console.log("Hi!!!! i am "+this.name);}
}

var scott =new User("scott");
console.log(scott.name);
scott.sayHi();
