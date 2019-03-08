"use strict";

window.onload = function () {
  show("hello");

  function show(p1) {
    setTimeout(function () {
      var num = 100;
      console.log("\u6570\u7EC4 ==== ".concat(num, "  ").concat(p1));
    }, 1000);
    console.log(p1);
  }
};