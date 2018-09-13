  var customers = []
  var count = 30
  
  $('#reserve').click(function(){
    event.preventDefault()
    var newCustomer = $('#customer-name').val()
    customers.push(newCustomer)
    $('#customers-waiting').append('<li>' + newCustomer + ' ' + '<span>' + count + '</span>' + '</li>')
    $('#customer-name').val('')
    customers.forEach(function(){
      setInterval(function(){
        $('span').text(count -= 1)
      }, 1000)
    })
  })

  // var count=setInterval(timer, 1000);
  //   function timer(){
  //     console.log(count -= 1)
  //   }
// var min = new Date()
  // var sec = new Date()
  // var minnow = min.getMinutes()
  // var secnow = sec.getSeconds()
  // console.log(minnow + ':' + secnow)

  // var count=30;

  // var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

  // function timer()
  // {
  //   console.log(count=count-1)
  //   // if (count <= 0)
  //   // {
  //   //    clearInterval(counter);
  //   //    //counter ended, do something here
  //   //    return;
  //   // }

  // //Do code for showing the number of seconds here
  // }
