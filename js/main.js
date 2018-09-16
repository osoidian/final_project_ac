  $(document).ready(function(){
    var customers = []

    $('#reserve').click(function(){
      event.preventDefault()

      var newCustomer = new Object();
      newCustomer.name = $('#customer-name').val()
      newCustomer.count = 5
      // var count = 30
      var timeAdded = new Date()
      // var newCustomer = $('#customer-name').val()
      customers.push(newCustomer)
      $('#customers-waiting').append('<li>' + newCustomer.name + ' ' + '<span>' + timeAdded.getHours() + ':' + timeAdded.getMinutes() + '</span>' + '<p>' + newCustomer.count + '</p>' + '</li>')
      $('#customer-name').val('')
  
      setInterval(function(){
        $('p').text(newCustomer.count -= 1)
        if (newCunstomer.count < 0) {
          
        }
      }, 1000)
    })
  })
  
  // var count = 30
  

  // // Working code
  // $('#reserve').click(function(){
  //   event.preventDefault()
    
  //   var newCustomer = $('#customer-name').val()
  //   customers.push(newCustomer)
  //   $('#customers-waiting').append('<li>' + newCustomer + ' ' + '<span>' + count + '</span>' + '</li>')
  //   $('#customer-name').val('')
  //   customers.forEach(function(){
  //     setInterval(function(){
  //       $('span').text(count -= 1)
  //     }, 1000)
  //   })
  // })