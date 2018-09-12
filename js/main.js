$(document).ready(function(){
  // // alert('connected')
  // var min = new Date()
  // var sec = new Date()
  // var minnow = min.getMinutes()
  // var secnow = sec.getSeconds()
  // console.log(minnow + ':' + secnow)
  var count=30;

  var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

  function timer()
  {
    console.log(count=count-1)
    // if (count <= 0)
    // {
    //    clearInterval(counter);
    //    //counter ended, do something here
    //    return;
    // }

  //Do code for showing the number of seconds here
  }
})
