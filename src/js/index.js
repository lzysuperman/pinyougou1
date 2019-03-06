window.onload=function () {
  show("hello")
  function show(p1) {
    setTimeout(() => {
      let num=100;
      console.log(`数组 ==== ${num}  ${p1}`);
    }, 1000);
    console.log(p1);
  }
}