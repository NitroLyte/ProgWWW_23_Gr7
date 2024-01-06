  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function myFunction1() {
    document.getElementById("myDropdownn").classList.toggle("show");
  }

  function filterFunction() {
    let input, filter, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

  function filterFunction1() {
    let input, filter, a, i;
    input = document.getElementById("myInputt");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdownn");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }