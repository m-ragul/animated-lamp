document.getElementById('loginForm').addEventListener('submit', function(event) 
{
    event.preventDefault();

    var nameInput = document.getElementById('name').value;
    var emailInput = document.getElementById('email').value;
    var passwordInput = document.getElementById('password').value;
    var cnfPasswordInput = document.getElementById('cnfPassword').value;

    var nameRegex = /^[A-Za-z]+$/;
    var emailRegex = /^[^\s@]+@(gmail\.com|[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/;
    var passwordLengthRegex = /^.{8,16}$/;



    if (nameInput.trim() === '' || emailInput.trim() === '' || passwordInput.trim() === '' || cnfPasswordInput.trim() === '')
    {
        alert('All fields are required.');
    } 
    else if(!nameRegex.test(nameInput))
    {
        alert("Name should contain only alphabets");
    }
    else if(!emailRegex.test(emailInput))
    {
        alert("Invalid E-mail");
    }
    else if(!passwordLengthRegex.test(passwordInput))
    {
        alert('Password should be between 8 and 16 characters');
    }
    else if (passwordInput !== cnfPasswordInput) 
    {
        alert('Passwords do not match.');
    } 
    else 
    {
        alert('Form submitted successfully!');
        document.body.style.backgroundColor = 'lightgreen';
        //var elements = document.getElementsByClassName("flex-box");

        //elements.style.backgroundColor = 'lightgreen';

    }
});

/*function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('div.btn').addEventListener('click', function() {
      document.body.style.backgroundColor = getRandomColor();
    });
  });    */

