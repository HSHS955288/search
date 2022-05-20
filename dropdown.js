
/*DropDown btn1*/
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showSearchDropDown() {
    document.getElementById("searchDropDown").classList.toggle("show");
}

/*DropDown btn2*/
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showAuthDropDown() {
    document.getElementById("authDropDown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn2')) {
        var dropdowns = document.getElementsByClassName("dropdown-content2");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }

    if (!event.target.matches('.dropbtn1')) {
        var dropdowns = document.getElementsByClassName("dropdown-content1");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }

}