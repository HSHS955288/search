let search = ["Google", "Bing", "Yahoo", "Youtube", "Pixabay", "Meet"];

if ($.cookie("search") == undefined) {
    $.cookie("search", 0);
}
if ($.cookie("auth") == undefined) {
    $.cookie("auth", 0);
}
setTimeout(() => {
    $("#searchDropDownbtn").html(search[$.cookie("search")] + " ▼");
    $("#authDropDownbtn").html(String(parseInt($.cookie("auth")) + 1) + " ▼");
}, 500);



function setSearch(idx) {
    $.cookie("search", idx);
    $("#searchDropDownbtn").html(search[$.cookie("search")] + " ▼");
}
function setAuth(idx) {
    $.cookie("auth", idx);
    $("#authDropDownbtn").html(String(parseInt($.cookie("auth")) + 1) + " ▼");
}

function submit() {
    let word = $("#word").val();
    if (word != "") {
        if (checkURL(word)) {
            window.location.href=word;
        } else {
            switch ($.cookie("search")) {
                case "0":
                    searchG();
                    break;
                case "1":
                    searchB();
                    break;
                case "2":
                    searchY();
                    break;
                case "3":
                    searchYT();
                    break;
                case "4":
                    searchP();
                    break;
                case "5":
                    meet();
                    break;
                default:
                    $.cookie("search", 0);
            }
        }

    }
}

function getAuth(idx) {
    if (idx == 0) {
        return "?authuser=" + $.cookie("auth");
    } else {
        return "&authuser=" + $.cookie("auth");
    }
}

function checkURL(URL) {
    var str = URL;
    var Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
    var objExp = new RegExp(Expression);
    if (objExp.test(str) == true) {
        return true;
    } else {
        return false;
    }
}
