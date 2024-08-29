document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("noScriptHide").style.display = "";
    setupDarkMode();
    setupEnterKeyPress();
    setupRetrieveButtonAnimation();
});


function setupDarkMode() {
    const modeToggle = document.getElementById('modeToggle');
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    // Check for saved user preference, if any, on load
    if (localStorage.getItem("theme")) {
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-mode");
        }
    } else if (prefersDarkScheme.matches) {
        document.body.classList.add("dark-mode");
    }

    // Listen for Toggle Button
    modeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        // If dark mode is selected
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
}

function setupEnterKeyPress() {
    const urlInput = document.getElementById("urlInput");
    urlInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("retrieveButton").click();
        }
    });
}

function setupRetrieveButtonAnimation() {
    const retrieveButton = document.getElementById("retrieveButton");
    retrieveButton.addEventListener("click", function() {
        retrieveButton.classList.add("button-click");
        setTimeout(() => {
            retrieveButton.classList.remove("button-click");
        }, 150);
    });
}

function getAll() {
    const retrieveButton = document.getElementById("retrieveButton");
    retrieveButton.classList.add("button-click");
    
    const subdomains = new Map([
        [['i', "i1", "i2", "i3", "i4", "img"], getThumbnail],
        [["i-vi_webp"], getiViWebpThumbnail],
        [["i1-vi_webp"], geti1ViWebpThumbnail],
        [["i2-vi_webp"], geti2ViWebpThumbnail],
        [["i3-vi_webp"], geti3ViWebpThumbnail],
        [["i4-vi_webp"], geti4ViWebpThumbnail],
        [["img-vi_webp"], getimgViWebpThumbnail],
        [["img-youtube"], getimgyoutubeThumbnail],
        [["img-youtube-vi_webp"], getimgyoutubeViWebpThumbnail]
    ]);

    for (const [subarr, func] of subdomains) {
        subarr.forEach(id => document.getElementById(id).innerHTML = "Testing...");
        subarr.forEach(func);
    }

    setTimeout(() => {
        retrieveButton.classList.remove("button-click");
    }, 300);
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

// ... (rest of the existing functions remain the same)

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
