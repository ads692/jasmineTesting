/**
 * form.js contains the function that handles submitting
 * the contact form information through an email to the product owner.
 * 
 * @author AN051810
 */

//$(document).ready(function() {
  $('#contactform').submit(function(eventSubmit) {
    var name    = document.getElementById('inputName')
    var email   = document.getElementById('inputEmail')
    var message = document.getElementById('inputMessage')
    if (!name.value || !email.value || !message.value) {
      alert("Please check your entries");
      return false;
    } else {
        $.ajax({
              method: 'POST',
              url: '//formspree.io/aditya.murthy@cerner.com',
              data: $('#contactform').serialize(),
              datatype: 'json'
        });
      eventSubmit.preventDefault();  
      $(this).get(0).reset();
    }
  });
//});