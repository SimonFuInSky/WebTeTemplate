// Content Contact Form
// ---------------------------------------------------------------------------------------
$(function () {

    $('#contact-form').submit(function (event) {

        var dataString = $('#contact-form').serialize();
        //alert (dataString); return false;

        $.ajax({
            type:"POST",
            url:"assets/php/contact-form.php",
            data:dataString,
            success:function () {
                $('#contact-form').append("<div class=\"alert alert-success fade in\"><button class=\"close\" data-dismiss=\"alert\" type=\"button\">&times;</button><strong>Contact Form Submitted!</strong> We will be in touch soon.</div>");
                $('#contact-form')[0].reset();
            }
        });
        return false;
    });
});

// Content Contact Form Support
// ---------------------------------------------------------------------------------------
$(function () {

    $('#contact-form-support').submit(function (event) {

        var dataString = $('#contact-form-support').serialize();
        /*if ($('#contact-form-support #select').val() == 'Select Your Theme') {
            $('#contact-form-support .input-select-theme .btn-default').css('border-color', 'red');
            return false;
        } else {
            $('#contact-form-support .input-select-theme .btn-default').css('border-color', '#ececec');
        }*/
        //alert (dataString); return false;

        $.ajax({
            type:"POST",
            url:"assets/php/contact-form-support.php",
            data:dataString,
            success:function () {
                $('#contact-form-support').append("<div class=\"alert alert-success fade in\"><button class=\"close\" data-dismiss=\"alert\" type=\"button\">&times;</button><strong>Contact Form Submitted!</strong> We will be in touch soon.</div>");
                $('#contact-form-support')[0].reset();
            }
        });
        return false;
    });
});

// Subscribe Form
// ---------------------------------------------------------------------------------------
$(function () {

    $('#form-subscribe').submit(function (event) {

        var dataString = $('#form-subscribe').serialize();
        //alert (dataString);return false;

        $.ajax({
            type:"POST",
            url:"assets/php/subscribe-form.php",
            data:dataString,
            success:function () {
                $('.form-subscribe').append("<div class=\"alert alert-success fade in\"><button class=\"close\" data-dismiss=\"alert\" type=\"button\">&times;</button><strong>Email Submitted!</strong></div>");
                $('.form-subscribe')[0].reset();
            }
        });
        return false;
    });
});


