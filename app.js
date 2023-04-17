document.getElementById("noScriptHide").style.display = "";

function getAll() {
    var subdomains = [
        "i",
        "i2",
        "i3",
        "i4",
        "img"
    ];
    
    for (var a in subdomains) {
        document.getElementById(subdomains[a]).innerHTML = "Testing..."
        getThumbnail(subdomains[a])
    }
}

function getThumbnail(s) {
    var xhr = new XMLHttpRequest();
    var id = getIDFromUrl(document.getElementById("urlInput").value);
    xhr.open("GET", "https://archive.org/wayback/available?url=https://" + s +".ytimg.com/vi/" + id + "/*");
    xhr.send();
    xhr.onload = async function () {
        try {
            var json = JSON.parse(xhr.responseText);
            if (json.archived_snapshots.closest !== undefined) {
                document.getElementById(s).innerHTML = "<a href='" + json.archived_snapshots.closest.url + "'>Archived</a>"
            } else {
                document.getElementById(s).innerHTML = "Not Archived"
            }
        } catch (error) {
            setTimeout(function() {
                getThumbnail(s);
            }, 3000)
        }
    }
}

function getIDFromUrl(string) {
    if (string.split("v=").length > 1) {
        var id = string.split("v=")[string.split("v=").length - 1].substring(0,11);
        return id;
    } else if (string.split(".be/").length > 1) {
        var id = string.split(".be/")[string.split(".be/").length - 1].substring(0,11);
        return id;
    } else {
        return string;
    }
}