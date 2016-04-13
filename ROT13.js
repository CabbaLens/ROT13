function encrypt() {
    var secret = document.getElementById("encrypti").value;
    var d = rot(secret);
    document.getElementById("encryptr").innerHTML = d;
}
function decrypt() {
    var secret = document.getElementById("decrypti").value;
    var d = rot(secret);
    document.getElementById("decryptr").innerHTML = d;
}
function rot(s) {
    return s.replace(/[a-zA-Z]/g, function (c) {
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
}
