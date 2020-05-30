JS 
1. let(수정가능) var(variable: 수정가능) const(상수, 수정불가한 숫자)
3년전쯤 let과 const가 생겼다.




#Object (dictionary)
let info = {
  age: 28,
  city: "seoul",
  job: "developer"
};

console.log(info.job); - 이렇게 불러도되고
info.age = 28;  --- 수정할때도 이렇게 가능

console.log(info["age"]); - 이것도 된다.
console.log(info[city]); XX key로 부를때는 따옴표를 넣어줘야한다.
 

 *JS Format
 cosole.log(`Hello ${name} you are ${age} years old`);
 백틱을 넣었을때만 ${variable} 사용 가능하다.

 *JS function
 const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  mul: function(a, b) {
    return a * b;
  },
  div: function(a, b) {
    return a / b;
  }
};

console.log(calculator.mul(300, 99));



*HTML과 동작하는 JS - JavaScript DOM function
Documnet Object Module
JS는 HTML의 모든 요소를 가져온다. 그리고 객체로 바꾼다.

let title = document.getElementById(".title")
title.innerHTML = "HI! JY"
*DOM의 설명 - (Mozilla)
DOM - 문서 객체 모델
웹 페이지(즉, HTML의 태그로 구성된 요소들)를 프로그래밍 언어로 접근
할 수 있또록 방법을 제공하는것이다. 프로그래밍언어(ex : JavaScript) 로 접근하여
문서 구조, 스타일 내용등을 변경하도록 돕는다.
# Python DOM example
import xml.dom.minidom as m
doc = m.parse("C:\\Projects\\Py\\chap1.xml");
doc.nodeName # DOM property of document object;
p_list = doc.getElementsByTagName("para");
https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/%EC%86%8C%EA%B0%9C

window.addEventListener("resize", handleResize);
window.addEventListener("resize", handleResize());
두가지 차이...


















