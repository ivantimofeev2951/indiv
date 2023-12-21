document.addEventListener("DOMContentLoaded", function(){
    let button = document.querySelector("button[type='submit']");
    button.addEventListener('click', function(e) {
      e.preventDefault();
      alert('Данные записаны');
    });
  });