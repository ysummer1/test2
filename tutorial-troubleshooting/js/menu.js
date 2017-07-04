//this is my js file//

/*document.write(25 + 6);
document.write("Is my script working?");
*/

function myFunction() {
    var x = document.getElementById('menu');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    }

    else {
        x.style.display = 'none';
    

}

window.onresize = function(){ location.reload(); }
