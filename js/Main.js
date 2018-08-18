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
        // do your things
        return false;
    });

    var addMessage = firebase.functions().httpsCallable('emailReciever');
    $(document).on("click", "#sendUserMail", function () {
        const emailText = $('input[name="email"]').val();
        console.log(emailText);
        addMessage({email: emailText}).then(function(result) {
            console.log("OK 200");
        }).catch(function(error) {
            console.log("ERROR");
        });
    });
});