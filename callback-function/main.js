function hello(callback, lastname) {
  // console.log(callback, 'lastname=', lastname);
  // console.log('hello ' + callback(lastname));
}

function getName() {
  return 'jun'; 
}

const getFullName = function() {
  return 'Jun5572'
}

//関数getNameの戻り値が下の関数helloの引数に渡る
hello(getName);


hello(getFullName);

//アロー関数
hello((name) => {
  return 'JUN' + name;
}, '5572');
  
//関数の末尾に()は、その関数が実行されることを意味する。
//jsは関数もオブジェクトとして扱うことができる。





function doSomething(a, b, callback) {
  console.log(a, b, callback);
  const result = callback(a, b);
  console.log(result);
}

function multiply(a, b) {
  return a * b;
}

function plus(a, b) {
  return a + b;
}

doSomething(2, 2, multiply);
doSomething(5, 2, plus);