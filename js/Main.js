$(document).ready(function() {
    $('#infoForAppleBeta').css("visibility", "hidden");
    $('input[name="appType"]').on("change", function () {
        if($('[name="appType"]:checked').val() === 'apple'){
            $('#infoForAppleBeta').css("visibility", "visible");
        }else{
            $('#infoForAppleBeta').css("visibility", "hidden");
        }
    });

    $(document).on('submit', '#betaForm', function() {
        return false;
    });

    $(document).on("click", "#sendUserMail", function () {
        const emailText = $('input[name="email"]').val();
        console.log(emailText);
        const deviceType = $('[name="appType"]:checked').val();
        console.log(deviceType);

        var dataMap = { email: emailText, deviceType: deviceType};
        var data = JSON.stringify(dataMap);

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });

        xhr.open("POST", "https://us-central1-ecosystem-7665b.cloudfunctions.net/emailReceiver");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("cache-control", "no-cache");

        xhr.send(data);
    });
});