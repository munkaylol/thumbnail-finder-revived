document.getElementById("noScriptHide").style.display = "";

function getAll() {
    var subdomains = [
        "i",
        "i1",
        "i2",
        "i3",
        "i4",
        "img"
    ];
    var subdowmainsi_vi_webp = [
        "i-vi_webp"
    ];
    var subdowmainsi1_vi_webp = [
        "i1-vi_webp"
    ];
    var subdowmainsi2_vi_webp = [
        "i2-vi_webp"
    ];
    var subdowmainsi3_vi_webp = [
        "i3-vi_webp"
    ];
    var subdowmainsi4_vi_webp = [
        "i4-vi_webp"
    ];
    var subdowmainsimg_vi_webp = [
        "img-vi_webp"
    ]
    var subdowmainsimg_youtube = [
        "img-youtube"
    ]
    var subdowmainsimg_youtube_vi_webp = [
        "img-youtube-vi_webp"
    ]
    
    for (var a in subdomains) {
        document.getElementById(subdomains[a]).innerHTML = "Testing..."
        getThumbnail(subdomains[a])
    }
    for (var a in subdowmainsi_vi_webp) {
        document.getElementById(subdowmainsi_vi_webp[a]).innerHTML = "Testing..."
        getiViWebpThumbnail(subdowmainsi_vi_webp[a])
    }
    for (var a in subdowmainsi1_vi_webp) {
        document.getElementById(subdowmainsi1_vi_webp[a]).innerHTML = "Testing..."
        geti1ViWebpThumbnail(subdowmainsi1_vi_webp[a])
    }
    for (var a in subdowmainsi2_vi_webp) {
        document.getElementById(subdowmainsi2_vi_webp[a]).innerHTML = "Testing..."
        geti2ViWebpThumbnail(subdowmainsi2_vi_webp[a])
    }
    for (var a in subdowmainsi3_vi_webp) {
        document.getElementById(subdowmainsi3_vi_webp[a]).innerHTML = "Testing..."
        geti3ViWebpThumbnail(subdowmainsi3_vi_webp[a])
    }
    for (var a in subdowmainsi4_vi_webp) {
        document.getElementById(subdowmainsi4_vi_webp[a]).innerHTML = "Testing..."
        geti4ViWebpThumbnail(subdowmainsi4_vi_webp[a])
    }
    for (var a in subdowmainsimg_vi_webp) {
        document.getElementById(subdowmainsimg_vi_webp[a]).innerHTML = "Testing..."
        getimgViWebpThumbnail(subdowmainsimg_vi_webp[a])
    }
    for (var a in subdowmainsimg_youtube) {
        document.getElementById(subdowmainsimg_youtube[a]).innerHTML = "Testing..."
        getimgyoutubeThumbnail(subdowmainsimg_youtube[a])
    }
    for (var a in subdowmainsimg_youtube_vi_webp) {
        document.getElementById(subdowmainsimg_youtube_vi_webp[a]).innerHTML = "Testing..."
        getimgyoutubeViWebpThumbnail(subdowmainsimg_youtube_vi_webp[a])
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

function getiViWebpThumbnail(s) {
    var xhr = new XMLHttpRequest();
    var id = getIDFromUrl(document.getElementById("urlInput").value);
    xhr.open("GET", "https://archive.org/wayback/available?url=https://" + "i" +".ytimg.com/" + "vi_webp" + "/" + id + "/*");
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

function geti1ViWebpThumbnail(s) {
    var xhr = new XMLHttpRequest();
    var id = getIDFromUrl(document.getElementById("urlInput").value);
    xhr.open("GET", "https://archive.org/wayback/available?url=https://" + "i1" +".ytimg.com/" + "vi_webp" + "/" + id + "/*");
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

function geti2ViWebpThumbnail(s) {
    var xhr = new XMLHttpRequest();
    var id = getIDFromUrl(document.getElementById("urlInput").value);
    xhr.open("GET", "https://archive.org/wayback/available?url=https://" + "i2" +".ytimg.com/" + "vi_webp" + "/" + id + "/*");
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

function geti3ViWebpThumbnail(s) {
    var xhr = new XMLHttpRequest();
    var id = getIDFromUrl(document.getElementById("urlInput").value);
    xhr.open("GET", "https://archive.org/wayback/available?url=https://" + "i3" +".ytimg.com/" + "vi_webp" + "/" + id + "/*");
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

function geti4ViWebpThumbnail(s) {
    var xhr = new XMLHttpRequest();
    var id = getIDFromUrl(document.getElementById("urlInput").value);
    xhr.open("GET", "https://archive.org/wayback/available?url=https://" + "i4" +".ytimg.com/" + "vi_webp" + "/" + id + "/*");
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

function getimgViWebpThumbnail(s) {
    var xhr = new XMLHttpRequest();
    var id = getIDFromUrl(document.getElementById("urlInput").value);
    xhr.open("GET", "https://archive.org/wayback/available?url=https://" + "img" +".ytimg.com/" + "vi_webp" + "/" + id + "/*");
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

function getimgyoutubeThumbnail(s) {
    var xhr = new XMLHttpRequest();
    var id = getIDFromUrl(document.getElementById("urlInput").value);
    xhr.open("GET", "https://archive.org/wayback/available?url=https://" + "img" +".youtube.com/" + "vi" + "/" + id + "/*");
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

function getimgyoutubeViWebpThumbnail(s) {
    var xhr = new XMLHttpRequest();
    var id = getIDFromUrl(document.getElementById("urlInput").value);
    xhr.open("GET", "https://archive.org/wayback/available?url=https://" + "img" +".youtube.com/" + "vi_webp" + "/" + id + "/*");
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
