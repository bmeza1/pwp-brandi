// navbar

$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function (){

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    })
});























// Contact Form
$(document).ready(function(){
    document.getElementById("contact")
    $("#contact").validate({
        debug:true,
        errorClass: "alert alert-danger",
        ErrorLabelContainer: "#output-area",
        errorElement:"div",
        //rules here define what is god or bad outfit
        //each rule starts with th form inout element's NAME attribute
        rules: {
            name: {
                required: true
            },
            email: {
                email: true,
                required: true
            },
            message: {
                required: true,
                maxlength: 2000
            },
        },
        messages: {
            name: {
                required: "Name is a required field"
            },
            email: {
                email: "Please provide a valid email",
                required: "Email is required field"
            },
            message: {
                required: "Message is a required field",
                maxlength: "Message must be 2000 characters or less"
            }
        },
        submitHandler: (form) => {
            $("#contact").ajaxSubmit({
                type: "POST",
                url: $("#contact").attr('action'),
                success: (ajaxOutput) => {
                    $("#output-area").css("display", "")
                    $("#output-area").html(ajaxOutput)

                    if($(".alert-success" >= 1)){
                        $("#contact")[0].reset()
                    }
                }
            })
        }
    })
})

