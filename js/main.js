  $(document).ready(function(){
    var customers = []
    var customerId = 1
    $('#reserve').click(function(){
      event.preventDefault()

      var newCustomer = {
        id: customerId,
        name: $('#customer-name').val(),
        count: 10
      }
      customers.push(newCustomer)
      var date = new Date()
      var $customer = $("<li data-customer-id='" + newCustomer.id + "'>")
      var $timeAdded = $('<span>').text(date.getHours() + ':' + date.getMinutes())
      var $customerTimer = $('<p>').text(newCustomer.count)
      $customer.append(newCustomer.name + ' ')
      $customer.append($timeAdded)
      $customer.append($customerTimer)
      $('#customers-waiting').append($customer)
      $('#customer-name').val('')
  
      var intervalId = setInterval(function(){
        $('li[data-customer-id="' + newCustomer.id + '"] p').text(newCustomer.count -= 1)
        if (newCustomer.count <= 0) {
          clearInterval(intervalId)
        }
      }, 1000)
      customerId++
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