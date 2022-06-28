burger = document.getElementById("burger");
navlinks = document.getElementById("navLinks");


burger.addEventListener("click",function(){

    var x = burger.classList.toggle('fa-times')
    if (x == true)
    {
        navlinks.style.display = 'block';
    }
    else
    {
        navlinks.style.display = 'none';

    }
    
})

