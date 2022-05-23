document.addEventListener("DOMContentLoaded", sf1);
function sf1() {
    errorElement = document.getElementById("reason");
    if ( errorElement == null )
        document.getElementById("username").focus();
}
