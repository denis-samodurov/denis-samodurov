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
        const deviceType = $('[name="appType"]:checked').val();

        var dataMap = { email: emailText, deviceType: deviceType};
        var data = JSON.stringify(dataMap);
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://us-central1-ecosystem-7665b.cloudfunctions.net/emailReceiver",
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "cache-control": "no-cache",
                "postman-token": "28e256ee-256b-278a-e98d-ac520f475ab1"
            },
            "processData": false,
            "data": data.toString()
        }

        $.ajax(settings).done(function (response) {

            console.log(response);
        }).fail(function(data, textStatus, xhr){

        });
    });
});