function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("overlay").style.display = "block";

}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("overlay").style.display = "none";
}
