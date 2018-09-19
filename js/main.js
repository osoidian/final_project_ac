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
      if ($('#customer-name').val() != '') {
        customers.push(newCustomer)
        var date = new Date()
        var $customer = $("<li data-customer-id='" + newCustomer.id + "'>")
        var $timeAdded = $('<span>').text(date.toLocaleTimeString())
        var $customerTimer = $('<span class="timer">').text(newCustomer.count)
        $customer.append(newCustomer.name + ' ')
        $customer.append($timeAdded)
        $customer.append($customerTimer)
        $('#customers-waiting').append($customer)
        $('#customer-name').val('')
      } else {
        alert('Please enter your name to be placed in the queue.')
      }

      var intervalId = setInterval(function(){
        $('li[data-customer-id="' + newCustomer.id + '"] span[class="timer"]').text(newCustomer.count -= 1)
        if (newCustomer.count <= 0) {
          clearInterval(intervalId)
          $('h2').text('Currently serving:' + ' ' + newCustomer.name )
          $('li[data-customer-id="' + newCustomer.id + '"]').remove()
        }
      }, 1000)
      customerId++
    })
  })


/*getHours() + ':' + date.getMinutes - from line 15. Found a better option*/

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
