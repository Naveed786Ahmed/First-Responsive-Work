
document.getElementById("search").onclick = function () {

    let str = "AbCdEfIjKlMnOpQrStUvWxYz";
    let ran = "";
    for (let i = 0; i < 10; i++) {
        let random = Math.floor(Math.random() * str.length);
        ran += str[random]
    }
    document.getElementById("pass").value = ran;

    if (document.getElementById("number").checked) {
        let strs = "AbCdE1234fIjK456lMnOpQr7890StUvWxYz";
        let ran = "";

        for (let i = 0; i < 10; i++) {
            let random = Math.floor(Math.random() * strs.length);
            ran += strs[random]
        }
        document.getElementById("pass").value = ran;
    }

    else if (document.getElementById("symbols").checked) {
        let strb = "Ab123Cd!@#$Ef456Ij%^&*KlMnOp()+Qr789StUv/*-WxYz";
        let ran = "";

        for (let i = 0; i < 10; i++) {
            let random = Math.floor(Math.random() * strb.length);
            ran += strb[random]
        }
        document.getElementById("pass").value = ran;
    }
}

function myFunction() {
    let copyText = document.getElementById("pass");

    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert("Copied the Password: " + copyText.value);
}





