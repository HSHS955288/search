/*search*/
function searchG() {
    let word = $("#word").val();
    window.location.href = 'https://www.google.com.tw/search?q=' + word + getAuth(1);
}
function searchB() {
    let word = $("#word").val();
    window.location.href = 'https://www.bing.com/search?q=' + word;
}
function searchY() {
    let word = $("#word").val();
    window.location.href = 'https://tw.search.yahoo.com/search?p=' + word;
}
function searchP() {
    let word = $("#word").val();
    window.location.href = 'https://pixabay.com/images/search/' + word;
}
function searchYT() {
    let word = $("#word").val();
    window.location.href = 'https://www.youtube.com/results?search_query=' + word;
}
function meet() {
    let word = $("#word").val();
    window.location.href = ' https://meet.google.com/' + word + getAuth(0);
}

/*Sortcut */
function doc() {
    window.location.href = ' https://docs.google.com/document' + getAuth(0);
}
function slide() {
    window.location.href = ' https://docs.google.com/presentation' + getAuth(0);
}
function sheet() {
    window.location.href = ' https://docs.google.com/spreadsheets' + getAuth(0);
}
function form() {
    window.location.href = ' https://docs.google.com/forms' + getAuth(0);
}
function classroom() {
    window.location.href = ' https://classroom.google.com' + getAuth(0);
}
function jamboard() {
    window.location.href = ' https://jamboard.google.com' + getAuth(0);
}
function map() {
    window.location.href = ' https://www.google.com/maps' + getAuth(0);
}
function earth() {
    window.location.href = ' https://earth.google.com/web/' + getAuth(0);
}