$('#infoForAppleBeta').css("visibility", "hidden");
$('input[name="appType"]').on("change", function () {
    if($('[name="appType"]:checked').val() === 'apple'){
        $('#infoForAppleBeta').css("visibility", "visible");
    }else{
        $('#infoForAppleBeta').css("visibility", "hidden");
    }
});