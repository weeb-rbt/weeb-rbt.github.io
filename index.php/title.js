if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 1000);

}

var x = 0;

var titleText = ["&#128293;|", "&#128293; ?|", "&#128293; W|", "&#128293; WE|", "&#128293; WEE|", "&#128293; WEEB|", "&#128293; WEEB |", "&#128293; WEEB|", "&#128293; WEEB |", "&#128293; WEEB|",  "&#128293; WEEB |",  "&#128293; WEEB|",  "&#128293; WEEB |",  "&#128293; WEEB|",  "&#128293; RBT Community |",  "&#128293; RBT Community ", "&#128293; RBT Community S", "&#128293; RBT Community Se", "&#128293; RBT Community Ser", "&#128293; RBT Community Serv", "&#128293; RBT Community Serve", "&#128293; RBT Community Server", "&#128293; RBT Community Server", "&#128293; RBT Community Server", "&#128293; RBT Community Server", "&#128293; RBT Community Server", "&#128293; RBT Community Server", "&#128293; RBT Community Serve|", "&#128293; RBT Community Serv|", "&#128293; RBT Community Ser|", "&#128293; RBT Community Se|", "&#128293; RBT Community S|", "&#128293; RBT Community |", "&#128293; RBT Community|", "&#128293; WEEB|", "&#128293; WEEB|", "&#128293; WEEB|", "&#128293; WEEB |", "&#128293; WEEB .|", "&#128293; WEEB ..|", "&#128293; WEEB ...|", "&#128293; WEEB ..|", "&#128293; WEEB .|", "&#128293; RBT|", "&#128293; RB|", "&#128293; R|", "&#128293; |", "&#128293;|", "&#128293; .|", "&#128293; $|"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}

