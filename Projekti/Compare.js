  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function myFunction1() {
    document.getElementById("myDropdownn").classList.toggle("show");
  }

  function filterFunction() {
    let input, filter, options, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    options = div.getElementsByTagName("option");
    for (i = 0; i < a.length; i++) {
      txtValue = option[i].textContent || options[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        options[i].style.display = "";
      } else {
        options[i].style.display = "none";
      }
    }
  }

  function filterFunction1() {
    let input, filter, options, i;
    input = document.getElementById("myInputt");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdownn");
    options = div.getElementsByTagName("option");
    for (i = 0; i < a.length; i++) {
      txtValue = options[i].textContent || options[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        options[i].style.display = "";
      } else {
        options[i].style.display = "none";
      }
    }
  }




 