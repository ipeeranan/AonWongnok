
function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
      alert("Not a valid e-mail address");
      return false;
    }
  }
  
  function validation(reg) {
    str = document.reg;
    if (str.name.value.trim() == " ") {
      alert("Please try again!");
      str.name.focus();
      return false;
    }
  }
  
  $(function () {
    $('#mainform').submit(function (event) {
      var form = $('#mainform')[0];
      if (form.checkValidity() === false) {
        event.preventDefault();
      }
      $(this).addClass('was-validated');
    });
  
  
  
    var Email = document.getElementById("Email")
      , confirm_Email = document.getElementById("confirm_Email");
  
    function validateEmail() {
      if (Email.value != confirm_Email.value) {
        confirm_Email.setCustomValidity("discrepancy!");
      } else {
        confirm_Email.setCustomValidity('');
      }
    }
  
    Email.onchange = validateEmail;
    confirm_Email.onkeyup = validateEmail;
  
  });