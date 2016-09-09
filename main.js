console.log("Hello World");
var x = 10;
//x="hello";
//型
var i = 10;
var i = 10; //型推論
var y; //var x:any
var results;
results = [1, 2, 3];
//列挙型
var Signal;
(function (Signal) {
    Signal[Signal["Red"] = 0] = "Red";
    Signal[Signal["Blue"] = 1] = "Blue";
    Signal[Signal["Yellow"] = 2] = "Yellow";
})(Signal || (Signal = {}));
;
var result;
console.log(result === Signal.Yellow);
result = Signal.Yellow;
console.log(result === Signal['Yellow']);
console.log(Signal[2]); //Yellow
//宣言的な関数
function add(a, b) {
    if (a === void 0) { a = 10; }
    if (b) {
        return a + b;
    }
    else {
        return a + a;
    }
}
console.log(add(5, 3));
console.log(add(6, 6));
console.log(add());
//関数式
(function () {
    var add2 = function (a, b) { return a + b; };
    var add3 = function (a, b) { return a + b; };
    console.log(add2(5, 7));
    console.log(add3(8, 9));
})();
//関数のオーバロード
(function () {
    function add(a, b) {
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
var User = (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.sayHi = function () { console.log("Hi!!!! i am " + this.name); };
    return User;
}());
var tom = new User("tom");
console.log(tom.name);
tom.sayHi();
var User2 = (function () {
    function User2(name) {
        this.name = name;
    }
    User2.prototype.sayHi = function () { console.log("Hi!!!! i am " + this.name); };
    return User2;
}());
var scott = new User("scott");
console.log(scott.name);
scott.sayHi();
