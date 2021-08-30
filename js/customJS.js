

/*
    **************************************************************************************
    **************************************************************************************
    ************************                                   ***************************
    ************************            Login Style            ***************************
    ************************                                   ***************************
    **************************************************************************************
    **************************************************************************************
*/



// for invalid email
$(document).ready(function () {
    $('.error').hide();
    $('input[type=password]').focus(function () {
        var email = $('#email').val();
        if (email == '') {
            $('.error').show();
            $('.txt').css("border", "1.5px solid #E0B719");
            $('.txt').css("background", "#FFF9E3");
            return false;
        }
        if (IsEmail(email) == false) {
            $('.error').show();
            $('.txt').css("border", "1.5px solid #E0B719");
            $('.txt').css("background", "#FFF9E3");
            return false;
        }
        if (IsEmail(email) == true) {
            $('.error').hide();
            $('.txt').css("border", "1.5px solid #37B34A");
            $('.txt').css("background", "#FFFFFF");
            return false;
        }
        return false;
    });
    $('#submit').click(function () {
        var email = $('#email').val();
        if (email == '') {
            $('.error').show();
            $('.txt').css("border", "1.5px solid #E0B719");
            $('.txt').css("background", "#FFF9E3");
            return false;
        }
        if (IsEmail(email) == false) {
            $('.error').show();
            $('.txt').css("border", "1.5px solid #E0B719");
            $('.txt').css("background", "#FFF9E3");
            return false;
        }
        if (IsEmail(email) == true) {
            $('.error').hide();
            $('.txt').css("border", "1.5px solid #37B34A");
            $('.txt').css("background", "#FFFFFF");
            return false;
        }
        return false;
    });
});

function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
        return false;
    } else {
        return true;
    }
}


// for invalid password
$(document).ready(function () {
    var number = /([0-9])/;
    var alphabets = /([a-zA-Z])/;
    var capital_alphabets = /([A-Z])/;
    var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
    $('.error2').hide();
    $('.unlock-icon').hide();
    $('.lock2-icon').hide();
    $('#password').keyup(function () {
        var password = $('#password').val();
        if (password == '') {
            $('.error2').show();
            //$('.lock2-icon').show();
            $('.pswd').css("border", "1.5px solid #E0B719");
            $('.pswd').css("background", "#FFF9E3");
            return false;
        }
        if ($('#password').val().length < 8) {
            $('.error2').show();
            //$('.lock2-icon').show();
            $('.pswd').css("border", "1.5px solid #E0B719");
            $('.pswd').css("background", "#FFF9E3");
            return false;
        }
        if ($('#password').val().match(number) && $('#password').val().match(alphabets) && $('#password').val().match(capital_alphabets) && $('#password').val().match(special_characters)) {
            $('.error2').hide();
            $('.lock-icon').show();
            $('.lock2-icon').hide();
            //$('.unlock-icon').show();
            $('.pswd').css("border", "1.5px solid #40A7E3");
            $('.pswd').css("background", "white");
            return false;
        }
    });


    $('#submit').click(function () {
        var password = $('#password').val();
        var email = $('#email').val();
        if (email != '' && password == '') {
            $('.error2').show();
            $('.lock2-icon').show();
            $('.pswd').css("border", "1.5px solid #E0B719");
            $('.pswd').css("background", "#FFF9E3");
            return false;
        }
    });

    $("body").on('click', '.lock-icon, .unlock-icon, .lock2-icon', function () {
        $(this).toggleClass("abc");
        var input = $("#password");
        if (input.attr("type") === "password") {
            input.attr("type", "text");
            $('.unlock-icon').show();
            $('.lock-icon').hide();
            $('.lock2-icon').hide();
        } else {
            input.attr("type", "password");
            $('.unlock-icon').hide();
            $('.lock-icon').show();
        }
    });
});








/*
    **************************************************************************************
    **************************************************************************************
    ************************                                   ***************************
    ************************           Administration          ***************************
    ************************                                   ***************************
    **************************************************************************************
    **************************************************************************************
*/



var startDate = new Date(1991, 1 - 1, 1),
    endDate = new Date(new Date().getFullYear() - 1, 12, 31);
$(".datepicker").datepicker({
    autoclose: true,
    disableTouchKeyboard: true,
    format: "M dd, yyyy",
    startDate: startDate,
    endDate: endDate
});


$(".birthday").datepicker({
    autoclose: true,
    disableTouchKeyboard: true,
    format: "dd/ MM/ yyyy",
    startDate: startDate,
    endDate: endDate
});


$(document).ready(function () {
    var admin_option = [];
    $('.dropdown-menu admin-dropdown-menu a').on('click', function (event) {
        var $target = $(event.currentTarget), val = $target.attr('data-value'), $inp = $target.find('input'), idx;

        if ((idx = admin_option.indexOf(val)) > -1) {
            admin_option.splice(idx, 1);
            setTimeout(function () { $inp.prop('checked', false) }, 0);
        } else {
            admin_option.push(val);
            setTimeout(function () { $inp.prop('checked', true) }, 0);
        }

        $(event.target).blur();

        console.log(admin_option);
        return false;
    });
});


var $admin_fileInput = $('.admin-drag-file-input');
var $admin_droparea = $('.file-drop-area');

// highlight drag area
$admin_fileInput.on('dragenter focus click', function () {
    $admin_droparea.addClass('is-active');
});

// back to normal state
$admin_fileInput.on('dragleave blur drop', function () {
    $admin_droparea.removeClass('is-active');
});

// change inner text
$admin_fileInput.on('change', function () {
    var filesCount = $(this)[0].files.length;
    var $textContainer = $(this).prev();

    if (filesCount === 1) {
        // if single file is selected, show file name
        var fileName = $(this).val().split('\\').pop();
        $textContainer.text(fileName);
    } else {
        // otherwise show number of files
        $textContainer.text(filesCount + ' files selected');
    }
});



if ($('#test').is(":checked")) {
    $('.changeme').removeClass('red');
} else {
    $('.changeme').addClass('red');
}
$('#test').change(function () {
    if ($(this).is(":checked")) {
        $('.changeme').removeClass('red');
    } else {
        $('.changeme').addClass('red');
    }
});

if ($('#test1').is(":checked")) {
    $('.changeme1').removeClass('red');
} else {
    $('.changeme1').addClass('red');
}
$('#test1').change(function () {
    if ($(this).is(":checked")) {
        $('.changeme1').removeClass('red');
    } else {
        $('.changeme1').addClass('red');
    }
});

if ($('#test2').is(":checked")) {
    $('.changeme2').removeClass('red');
} else {
    $('.changeme2').addClass('red');
}
$('#test2').change(function () {
    if ($(this).is(":checked")) {
        $('.changeme2').removeClass('red');
    } else {
        $('.changeme2').addClass('red');
    }
});

if ($('#test3').is(":checked")) {
    $('.changeme3').removeClass('red');
} else {
    $('.changeme3').addClass('red');
}
$('#test3').change(function () {
    if ($(this).is(":checked")) {
        $('.changeme3').removeClass('red');
    } else {
        $('.changeme3').addClass('red');
    }
});

if ($('#test4').is(":checked")) {
    $('.changeme4').removeClass('red');
} else {
    $('.changeme4').addClass('red');
}
$('#test4').change(function () {
    if ($(this).is(":checked")) {
        $('.changeme4').removeClass('red');
    } else {
        $('.changeme4').addClass('red');
    }
});

if ($('#test5').is(":checked")) {
    $('.changeme5').removeClass('red');
} else {
    $('.changeme5').addClass('red');
}
$('#test5').change(function () {
    if ($(this).is(":checked")) {
        $('.changeme5').removeClass('red');
    } else {
        $('.changeme5').addClass('red');
    }
});

if ($('#test6').is(":checked")) {
    $('.changeme6').removeClass('red');
} else {
    $('.changeme6').addClass('red');
}
$('#test6').change(function () {
    if ($(this).is(":checked")) {
        $('.changeme6').removeClass('red');
    } else {
        $('.changeme6').addClass('red');
    }
});

if ($('#test7').is(":checked")) {
    $('.changeme7').removeClass('red');
} else {
    $('.changeme7').addClass('red');
}
$('#test7').change(function () {
    if ($(this).is(":checked")) {
        $('.changeme7').removeClass('red');
    } else {
        $('.changeme7').addClass('red');
    }
});

if ($('#test8').is(":checked")) {
    $('.changeme8').removeClass('red');
} else {
    $('.changeme8').addClass('red');
}
$('#test8').change(function () {
    if ($(this).is(":checked")) {
        $('.changeme8').removeClass('red');
    } else {
        $('.changeme8').addClass('red');
    }
});

if ($('#test9').is(":checked")) {
    $('.changeme9').removeClass('red');
} else {
    $('.changeme9').addClass('red');
}
$('#test9').change(function () {
    if ($(this).is(":checked")) {
        $('.changeme9').removeClass('red');
    } else {
        $('.changeme9').addClass('red');
    }
});

if ($('#test10').is(":checked")) {
    $('.changeme10').removeClass('red');
} else {
    $('.changeme10').addClass('red');
}
$('#test10').change(function () {
    if ($(this).is(":checked")) {
        $('.changeme10').removeClass('red');
    } else {
        $('.changeme10').addClass('red');
    }
});

if ($('#test11').is(":checked")) {
    $('.changeme11').removeClass('red');
} else {
    $('.changeme11').addClass('red');
}
$('#test11').change(function () {
    if ($(this).is(":checked")) {
        $('.changeme11').removeClass('red');
    } else {
        $('.changeme11').addClass('red');
    }
});

if ($('#test12').is(":checked")) {
    $('.changeme12').removeClass('red');
} else {
    $('.changeme12').addClass('red');
}
$('#test12').change(function () {
    if ($(this).is(":checked")) {
        $('.changeme12').removeClass('red');
    } else {
        $('.changeme12').addClass('red');
    }
});

if ($('#test13').is(":checked")) {
    $('.changeme13').removeClass('red');
} else {
    $('.changeme13').addClass('red');
}
$('#test13').change(function () {
    if ($(this).is(":checked")) {
        $('.changeme13').removeClass('red');
    } else {
        $('.changeme13').addClass('red');
    }
});

if ($('#test14').is(":checked")) {
    $('.changeme14').removeClass('red');
} else {
    $('.changeme14').addClass('red');
}
$('#test14').change(function () {
    if ($(this).is(":checked")) {
        $('.changeme14').removeClass('red');
    } else {
        $('.changeme14').addClass('red');
    }
});

if ($('#test15').is(":checked")) {
    $('.changeme15').removeClass('red');
} else {
    $('.changeme15').addClass('red');
}
$('#test15').change(function () {
    if ($(this).is(":checked")) {
        $('.changeme15').removeClass('red');
    } else {
        $('.changeme15').addClass('red');
    }
});

if ($('#test16').is(":checked")) {
    $('.changeme16').removeClass('red');
} else {
    $('.changeme16').addClass('red');
}
$('#test16').change(function () {
    if ($(this).is(":checked")) {
        $('.changeme16').removeClass('red');
    } else {
        $('.changeme16').addClass('red');
    }
});

if ($('#test17').is(":checked")) {
    $('.changeme17').removeClass('red');
} else {
    $('.changeme17').addClass('red');
}
$('#test17').change(function () {
    if ($(this).is(":checked")) {
        $('.changeme17').removeClass('red');
    } else {
        $('.changeme17').addClass('red');
    }
});



$(document).ready(function () {
    $("#permit-sublinks").hide();
    $("#edit-profile").hide();
    $("#permit").hide();
    $("#profile1").hide();
    $("#profile").hide();
    $("#beneo").hide();
    $("#hazard").hide();
    $("#general").show();
    $("#hazard-sublinks").hide();
    $("#safety-sublinks").hide();
    $("#general-hazard").hide();
    $("#clients").show(200);
    $("#client2").hide();
    $("#safety-category").hide();
    $("#besixlink").hide();
    $("#excavation1").hide();
    $("#roles").hide();
    $("#differentsite-sublinks").hide();
    $("#parameter-of-site").hide();
    $("add-building").hide();
    $("#permit-link").click(function () {
        $("#beneo").hide();
        $("#clients").hide();
        $("#hazard").hide();
        $("#client2").hide();
        $("#excavation1").hide();
        $("#roles").hide();
        $("#rapport").hide();
        $("#signature_setting").hide();
        $("#differentsite-sublinks").hide();
        $("#parameter-of-site").hide();
        $("#profile").hide();
        $("#besixlink").hide();
        $("#client2-link").show();
        $("#clients-link").show();
        $("#edit-profile").hide();
        $("#permit").show(200);
        $("#permit-sublinks").show(200);

    });
    $("#add-building-link").click(function () {
        $("#add-building").slideToggle();
    });
    $("#general-link").click(function () {
        $("#general-hazard").hide();
        $("#beneo").hide();
        $("#hazard").hide();
        $("#clients").hide();
        $("#hazard-sublinks").hide();
        $("#safety-category").hide();
        $("#client2").hide();
        $("#excavation1").hide();
        $("#roles").hide();
        $("#rapport").hide();
        $("#signature_setting").hide();
        $("#parameter-of-site").hide();
        $("#differentsite-sublinks").hide();
        $("#profile").hide();
        $("#general").show(200);
    });
    $("#hazard-link").click(function () {
        $("#general-hazard").hide();
        $("#general").hide();
        $("#beneo").hide();
        $("#clients").hide();
        $("#hazard-sublinks").hide();
        $("#safety-category").hide();
        $("#client2").hide();
        $("#excavation1").hide();
        $("#roles").hide();
        $("#rapport").hide();
        $("#signature_setting").hide();
        $("#differentsite-sublinks").hide();
        $("#parameter-of-site").hide();
        $("#profile").hide();
        $("#hazard").show(200);
    });
    $("#general-sublink").click(function () {
        $("#beneo").hide();
        $("#clients").hide();
        $("#general").hide();
        $("#hazard").hide();
        $("#client2").hide();
        $("#excavation1").hide();
        $("#roles").hide();
        $("#rapport").hide();
        $("#signature_setting").hide();
        $("#differentsite-sublinks").hide();
        $("#parameter-of-site").hide();
        $("#profile").hide();
        $("#general-hazard").show(200);
    });
    $("#safety-link").click(function () {
        $("#general-hazard").hide();
        $("#beneo").hide();
        $("#clients").hide();
        $("#general").hide();
        $("#hazard").hide();
        $("#client2").hide();
        $("#excavation1").hide();
        $("#hazard-sublinks").hide();
        $("#roles").hide();
        $("#rapport").hide();
        $("#signature_setting").hide();
        $("#differentsite-sublinks").hide();
        $("#parameter-of-site").hide();
        $("#profile").hide();
        $("#safety-category").show(200);
    });
    $("#general-hazard-link").click(function () {
        $("#beneo").hide();
        $("#clients").hide();
        $("#general").hide();
        $("#hazard").hide();
        $("#client2").hide();
        $("#excavation1").hide();
        $("#roles").hide();
        $("#rapport").hide();
        $("#signature_setting").hide();
        $("#differentsite-sublinks").hide();
        $("#parameter-of-site").hide();
        $("#hazard-sublinks").hide();
        $("#profile").hide();
        $("#general-hazard").show(200);
    });
    $("#signature-link").click(function () {
        $("#beneo").hide();
        $("#clients").hide();
        $("#general").hide();
        $("#hazard").hide();
        $("#client2").hide();
        $("#excavation1").hide();
        $("#hazard-sublinks").hide();
        $("#general-hazard").hide();
        $("#safety-category").hide();
        $("#roles").hide();
        $("#rapport").hide();
        $("#parameter-of-site").hide();
        $("#differentsite-sublinks").hide();
        $("#profile").hide();
        $("#signature_setting").show(200);
    });
    $("#roles-link").click(function () {
        $("#beneo").hide();
        $("#clients").hide();
        $("#general").hide();
        $("#hazard").hide();
        $("#client2").hide();
        $("#excavation1").hide();
        $("#hazard-sublinks").hide();
        $("#general-hazard").hide();
        $("#safety-category").hide();
        $("#rapport").hide();
        $("#differentsite-sublinks").hide();
        $("#signature_setting").hide();
        $("#parameter-of-site").hide();
        $("#profile").hide();
        $("#roles").show(200);
    });
    $("#rapport-link").click(function () {
        $("#beneo").hide();
        $("#clients").hide();
        $("#general").hide();
        $("#hazard").hide();
        $("#client2").hide();
        $("#excavation1").hide();
        $("#hazard-sublinks").hide();
        $("#general-hazard").hide();
        $("#safety-category").hide();
        $("#roles").hide();
        $("#differentsite-sublinks").hide();
        $("#signature_setting").hide();
        $("#profile").hide();
        $("#parameter-of-site").hide();
        $("#rapport").show(200);
    });
    $("#differentsite-sublinks").click(function () {
        $("#beneo").hide();
        $("#clients").hide();
        $("#general").hide();
        $("#hazard").hide();
        $("#client2").hide();
        $("#excavation1").hide();
        $("#hazard-sublinks").hide();
        $("#general-hazard").hide();
        $("#safety-category").hide();
        $("#roles").hide();
        $("#profile").hide();
        $("#signature_setting").hide();
        $("#rapport").hide();
        $("#parameter-of-site").show(200);
    });

    $("#clients-link").click(function () {
        $("#general-hazard").hide();
        $("#permit-sublinks").hide(300);
        $("#permit").hide();
        $("#beneo").hide();
        $("#hazard").hide();
        $("#hazard-sublinks").hide();
        $("#besixlink").hide();
        $("#client2").hide();
        $("#excavation1").hide();
        $("#differentsite-sublinks").hide();
        $("#parameter-of-site").hide();
        $("#profile").hide();
        $("#client2-link").show();
        $("#clients-link").show();
        $("#edit-profile").hide();
        $("#clients").show(200);
    });
    $("#client2-link").click(function () {
        $("#general-hazard").hide();
        $("#permit-sublinks").hide(300);
        $("#permit").hide();
        $("#beneo").hide();
        $("#hazard").hide();
        $("#hazard-sublinks").hide();
        $("#clients").hide();
        $("#besixlink").hide();
        $("#excavation1").hide();
        $("#parameter-of-site").hide();
        $("#profile").hide();
        $("#client2-link").show();
        $("#clients-link").show();
        $("#edit-profile").hide();
        $("#differentsite-sublinks").show(200);
        $("#client2").show(200);
    });
    $("#beneo-link").click(function () {
        $("#permit").hide();
        $("#clients").hide();
        $("#client2").hide();
        $("#besixlink").hide();
        $("#excavation1").hide();
        $("#differentsite-sublinks").hide();
        $("#parameter-of-site").hide();
        $("#profile").hide();
        $("#beneo").show(200);
    });
    $("#besixclick").click(function () {
        $("#permit").hide();
        $("#clients").hide();
        $("#client2").hide();
        $("#excavation1").hide();
        $("#differentsite-sublinks").hide();
        $("#parameter-of-site").hide();
        $("#profile").hide();
        $("#besixlink").show(200);
    });
    $("#excavationclick").click(function () {
        $("#general-hazard").hide();
        $("#beneo").hide();
        $("#clients").hide();
        $("#general").hide();
        $("#hazard").hide();
        $("#client2").hide();
        $("#hazard-sublinks").hide();
        $("#safety-category").hide();
        $("#differentsite-sublinks").hide();
        $("#parameter-of-site").hide();
        $("#profile").hide();
        $("#excavation1").show(200);
    });
    $(".profile-link").click(function () {
        $("#general-hazard").hide();
        $("#beneo").hide();
        $("#clients").hide();
        $("#general").hide();
        $("#hazard").hide();
        $("#client2").hide();
        $("#hazard-sublinks").hide();
        $("#safety-category").hide();
        $("#differentsite-sublinks").hide();
        $("#parameter-of-site").hide();
        $("#beneo").hide();
        $("#excavation1").hide();
        $("#besixlink").hide();
        $("#signature_setting").hide();
        $("#roles").hide();
        $("#rapport").hide();
        $("#client2-link").hide();
        $("#clients-link").hide();
        $("#edit-profile").show();
        $("#profile").show(200);
    });
});













/*
    **************************************************************************************
    **************************************************************************************
    ************************                                   ***************************
    ************************      Responsable Des Travaux      ***************************
    ************************                                   ***************************
    **************************************************************************************
    **************************************************************************************
*/

/**********************************  Main Page  *****************************************/


$(document).ready(function () {
    $("#profile").hide();
    $("#profile1").hide();
    $("#edit-profile1").hide();
    $("#logout").hide();
    $("#rdt-permit").show(200);


    $("#permit-link").click(function () {
        $("#profile").hide();
        $("#profile1").hide();
        $("#rdt-permit").show(200);
    });
    $("#workers-link").click(function () {
        $("#rdt-permit").hide();
        $("#profile1").hide();
        $("#profile").show(200);
    });
    $("#move").click(function () {
        $("#rdt-permit").hide();
        $("#profile").hide();
        $("#edit-profile1").show();
        $("#logout").show();
        $("#permit-link").hide();
        $("#workers-link").hide();
        $("#observation-link").hide();
        $("#profile1").show(200);
    });
});



var $rdt_fileInput1 = $('.rdt-drag-file-input');
var $rdt_file_droparea = $('.file-drop-area');

// highlight drag area
$rdt_fileInput1.on('dragenter focus click', function () {
    $rdt_file_droparea.addClass('is-active');
});

// back to normal state
$rdt_fileInput1.on('dragleave blur drop', function () {
    $rdt_file_droparea.removeClass('is-active');
});

// change inner text
$rdt_fileInput1.on('change', function () {
    var filesCount = $(this)[0].files.length;
    var $textContainer = $(this).prev();

    if (filesCount === 1) {
        // if single file is selected, show file name
        var fileName = $(this).val().split('\\').pop();
        $textContainer.text(fileName);
    } else {
        // otherwise show number of files
        $textContainer.text(filesCount + ' files selected');
    }
});



$(document).ready(function () {
    var $progressbar1 = $(".progress-width1");
    var $progressbar2 = $(".progress-width2");
    var $progressbar3 = $(".progress-width3");

    var value1 = document.getElementById("pbv1").innerText;
    var value2 = document.getElementById("pbv2").innerText;
    var value3 = document.getElementById("pbv3").innerText;

    $progressbar1.css("width", value1);
    $progressbar2.css("width", value2);
    $progressbar3.css("width", value3);

    $('#pbv1').on('change', function () {
        value1 = this.value;
        $progressbar1.css("width", value1);
    });

    $('#pbv2').on('change', function () {
        value2 = this.value;
        $progressbar2.css("width", value2);
    });

    $('#pbv3').on('change', function () {
        value3 = this.value;
        $progressbar3.css("width", value3);
    });
});










/*
    **************************************************************************************
    **************************************************************************************
    ************************                                   ***************************
    ************************             Super Admin           ***************************
    ************************                                   ***************************
    **************************************************************************************
    **************************************************************************************
*/




$(".datepicker").datepicker({
    autoclose: true,
    disableTouchKeyboard: true,
    format: "M dd, yyyy",
    startDate: startDate,
    endDate: endDate
});

$(".birthday").datepicker({
    autoclose: true,
    disableTouchKeyboard: true,
    format: "dd/ MM/ yyyy",
    startDate: startDate,
    endDate: endDate
});


$(document).ready(function () {
    var superAdmin_option = [];
    $('.sup-dropdown-menu a').on('click', function (event) {

        var $target = $(event.currentTarget), val = $target.attr('data-value'), $inp = $target.find('input'), idx;

        if ((idx = superAdmin_option.indexOf(val)) > -1) {
            superAdmin_option.splice(idx, 1);
            setTimeout(function () { $inp.prop('checked', false) }, 0);
        } else {
            superAdmin_option.push(val);
            setTimeout(function () { $inp.prop('checked', true) }, 0);
        }

        $(event.target).blur();

        console.log(superAdmin_option);
        return false;
    });
});


var $superAdmin_fileInput = $('.sup-drag-file-input');
var $superAdmin_droparea = $('.file-drop-area');

// highlight drag area
$superAdmin_fileInput.on('dragenter focus click', function () {
    $superAdmin_droparea.addClass('is-active');
});

// back to normal state
$superAdmin_fileInput.on('dragleave blur drop', function () {
    $superAdmin_droparea.removeClass('is-active');
});

// change inner text
$superAdmin_fileInput.on('change', function () {
    var filesCount = $(this)[0].files.length;
    var $textContainer = $(this).prev();

    if (filesCount === 1) {
        // if single file is selected, show file name
        var fileName = $(this).val().split('\\').pop();
        $textContainer.text(fileName);
    } else {
        // otherwise show number of files
        $textContainer.text(filesCount + ' files selected');
    }
});


$.fn.betta_pw_fld = function (pwfld_sel, hiddenfld_sel) {

    // this is the form the plugin is called on
    $(this).each(function () {

        // the plugin accepts the css selector of the pw field (pwfld_sel)
        var pwfld = $(this).find(pwfld_sel);

        // on keyup, do the masking visually while filling a field for actual use
        pwfld.off('keyup.betta_pw_fld');
        pwfld.on('keyup.betta_pw_fld', function () {

            // if they haven't typed anything...just stop working
            var pchars = $(this).val();
            if (pchars == '') return;

            // we'll need the hidden characters too (for backspace and form submission)
            var hiddenfld = $(this).parents('form').find(hiddenfld_sel);
            var hchars = hiddenfld.val();

            // use these placeholders to build our password values
            // this one will have all asterisks except the last char
            var newval = '';

            // this one will have the actual pw in it, but we'll hide it
            var newhpw = '';

            // in this block, we're in a "keydown" event...
            // let's get the characters entered
            // loop over them and build newval and newhpw appropriately
            for (i = 0; i < pchars.length - 1; i++) {
                if (pchars[i] == '*') {
                    newhpw += hchars[i];
                } else {
                    newhpw += pchars[i];
                }
                newval += '*';
            }

            // we want to see the last character...
            var lastchar = pchars[pchars.length - 1];
            if (lastchar == '*') {
                newval += hchars[pchars.length - 1];
                newhpw += hchars[pchars.length - 1];
            } else {
                newval += pchars[pchars.length - 1];
                newhpw += pchars[pchars.length - 1];
            }

            // set the updated (masked), visual pw field
            $(this).val(newval);

            // keep the pw hidden and ready for form submission in a hidden input
            hiddenfld.val(newhpw);
        });
    });
};


$('#myForm').betta_pw_fld('.stylishPassword', '.hiddenPassword');
$('#myForm1').betta_pw_fld('.stylishPassword', '.hiddenPassword');



$(document).ready(function () {
    $("#permit-sublinks").hide();
    $("#permit").hide();
    $("#beneo").hide();
    $("#hazard").hide();
    $("#roles").hide();
    $("#general").show();
    $("#rapport").hide();
    $("#signature").hide();
    $("#excavation").hide();
    $("#hazard-sublinks").hide();
    $("#safety-sublinks").hide();
    $("#general-hazard").hide();
    $("#safety-category").hide();
    $("#edit-profile-link").hide();
    $("#profile").hide();
    $("#sup-clients").show(200);
    $(".profile-link").click(function () {
        $("#beneo").hide();
        $("#sup-clients").hide();
        $("#permit").hide();
        $("#sup-clients-link").removeClass('active');
        $("#permit-link").removeClass('active');
        $("#edit-profile-link").addClass('active');
        $("#permit-sublinks").hide(200);
        $("#sup-clients-link").hide();
        $("#edit-profile-link").show();
        $("#profile").show(200);
    });
    $("#permit-link").click(function () {
        $("#sup-clients-link").show();
        $("#profile").hide();
        $("#beneo").hide();
        $("#sup-clients").hide();
        $("#permit").show(200);
        $("#edit-profile-link").hide();
        $("#permit-sublinks").show(200);
    });
    $("#general-link").click(function () {
        $("#general-hazard").hide();
        $("#hazard").hide();
        $("#sup-clients").hide();
        $("#excavation").hide();
        $("#signature").hide();
        $("#roles").hide();
        $("#rapport").hide();
        $("#hazard-sublinks").hide();
        $("#safety-sublinks").hide();
        $("#safety-category").hide();
        $("#general").show(200);
    });
    $("#hazard-link").click(function () {
        $("#general-hazard").hide();
        $("#general").hide();
        $("#sup-clients").hide();
        $("#signature").hide();
        $("#roles").hide();
        $("#rapport").hide();
        $("#excavation").hide();
        $("#hazard-sublinks").hide();
        $("#safety-sublinks").hide();
        $("#safety-category").hide();
        $("#hazard").show(200);
    });
    $("#safety-link").click(function () {
        $("#general-hazard").hide();
        $("#sup-clients").hide();
        $("#general").hide();
        $("#hazard").hide();
        $("#roles").hide();
        $("#rapport").hide();
        $("#signature").hide();
        $("#excavation").hide();
        $("#hazard-sublinks").hide();
        $("#safety-sublinks").hide();
        $("#safety-category").show(200);
    });
    $("#signature-link").click(function () {
        $("#general-hazard").hide();
        $("#sup-clients").hide();
        $("#general").hide();
        $("#hazard").hide();
        $("#roles").hide();
        $("#rapport").hide();
        $("#excavation").hide();
        $("#hazard-sublinks").hide();
        $("#safety-sublinks").hide();
        $("#safety-category").hide();
        $("#signature").show(200);
    });
    $("#roles-link").click(function () {
        $("#general-hazard").hide();
        $("#sup-clients").hide();
        $("#general").hide();
        $("#hazard").hide();
        $("#rapport").hide();
        $("#excavation").hide();
        $("#signature").hide();
        $("#hazard-sublinks").hide();
        $("#safety-sublinks").hide();
        $("#safety-category").hide();
        $("#roles").show(200);
    });
    $("#rapport-link").click(function () {
        $("#general-hazard").hide();
        $("#sup-clients").hide();
        $("#general").hide();
        $("#hazard").hide();
        $("#excavation").hide();
        $("#signature").hide();
        $("#roles").hide();
        $("#hazard-sublinks").hide();
        $("#safety-sublinks").hide();
        $("#safety-category").hide();
        $("#rapport").show(200);
    });
    $("#excavation-safety-link").click(function () {
        $("#safety-category").hide();
        $("#excavation").show(200);
        $("#safety-sublinks").show(200);
    });
    $("#general-sublink").click(function () {
        $("#general-hazard").show(200);
    });
    $("#general-hazard-link").click(function () {
        $("#hazard").hide();
        $("#hazard-sublinks").show(200);
        $("#general-hazard").show(200);
    });
    $("#sup-clients-link").click(function () {
        $("#edit-profile-link").hide();
        $("#permit").hide();
        $("#permit-sublinks").hide(200);
        $("#beneo").hide();
        $("#sup-clients").show(200);
    });
    $("#beneo-link").click(function () {
        $("#sup-clients").hide();
        $("#beneo").show(200);
    });
});






/*
    **************************************************************************************
    **************************************************************************************
    ************************                                   ***************************
    ************************             Travailleur           ***************************
    ************************                                   ***************************
    **************************************************************************************
    **************************************************************************************
*/





$(document).ready(function () {
    $(".fa-plus").hide();
    $(".fa-minus0").click(function () {
        $("#01-toggle").slideToggle();
        $(".fa-plus0").show();
        $(".fa-minus0").hide();
    });
    $(".fa-plus0").click(function () {
        $("#01-toggle").slideToggle();
        $(".fa-plus0").hide();
        $(".fa-minus0").show();
    });
    $(".minus1").click(function () {
        $("#02-toggle").slideToggle();
        $(".plus1").show();
        $(".minus1").hide();
    });
    $(".plus1").click(function () {
        $("#02-toggle").slideToggle();
        $(".plus1").hide();
        $(".minus1").show();
    });
    $(".minus2").click(function () {
        $("#03-toggle").slideToggle();
        $(".plus2").show();
        $(".minus2").hide();
    });
    $(".plus2").click(function () {
        $("#03-toggle").slideToggle();
        $(".plus2").hide();
        $(".minus2").show();
    });
    $(".minus3").click(function () {
        $("#04-toggle").slideToggle();
        $(".plus3").show();
        $(".minus3").hide();
    });
    $(".plus3").click(function () {
        $("#04-toggle").slideToggle();
        $(".plus3").hide();
        $(".minus3").show();
    });
    $(".minus4").click(function () {
        $("#05-toggle").slideToggle();
        $(".plus4").show();
        $(".minus4").hide();
    });
    $(".plus4").click(function () {
        $("#05-toggle").slideToggle();
        $(".plus4").hide();
        $(".minus4").show();
    });
    $(".minus5").click(function () {
        $("#06-toggle").slideToggle();
        $(".plus5").show();
        $(".minus5").hide();
    });
    $(".plus5").click(function () {
        $("#06-toggle").slideToggle();
        $(".plus5").hide();
        $(".minus5").show();
    });
    $(".minus6").click(function () {
        $("#07-toggle").slideToggle();
        $(".plus6").show();
        $(".minus6").hide();
    });
    $(".plus6").click(function () {
        $("#07-toggle").slideToggle();
        $(".plus6").hide();
        $(".minus6").show();
    });
    $(".minus7").click(function () {
        $("#08-toggle").slideToggle();
        $(".plus7").show();
        $(".minus7").hide();
    });
    $(".plus7").click(function () {
        $("#08-toggle").slideToggle();
        $(".plus7").hide();
        $(".minus7").show();
    });
});

$(document).ready(function () {
    $("#profile").hide();
    $("#profile1").hide();
    $("#disconnect").hide();
    $("#trav-permit").show(200);

    $("#permit-link").click(function () {
        $("#profile").hide();
        $("#profile1").hide();
        $("#disconnect").hide();
        $("#trav-permit").show(200);
    });

    $("#edit-profile").click(function () {
        $("#trav-permit").hide();
        $("#profile").hide();
        $("#disconnect").show(200);
        $("#profile1").show(200);
    });
});



var $trav_fileInput = $('.trav-drag-file-input');
var $trav_droparea = $('.file-drop-area');

// highlight drag area
$trav_fileInput.on('dragenter focus click', function () {
    $trav_droparea.addClass('is-active');
});

// back to normal state
$trav_fileInput.on('dragleave blur drop', function () {
    $trav_droparea.removeClass('is-active');
});

// change inner text
$trav_fileInput.on('change', function () {
    var filesCount = $(this)[0].files.length;
    var $textContainer = $(this).prev();

    if (filesCount === 1) {
        // if single file is selected, show file name
        var fileName = $(this).val().split('\\').pop();
        $textContainer.text(fileName);
    } else {
        // otherwise show number of files
        $textContainer.text(filesCount + ' files selected');
    }
});








/*
    **************************************************************************************
    **************************************************************************************
    ************************                                   ***************************
    ************************             Utilisateur           ***************************
    ************************                                   ***************************
    **************************************************************************************
    **************************************************************************************
*/

/**************************************   Page 44  **************************************/

$(document).ready(function(){
    $('.arrow-toggle-right').hide();
    $('#expand-row').hide();
    $('#tbl-44 tr').click(function() {
        $('#tbl-44 tr').removeClass('active-row');
        $(this).toggleClass('active-row');
    });
    $('.arrow-toggle-down').click(function(){
        $(this).hide();
        $('.arrow-toggle-right').show();
        $('#expand-row').show(300);
        $(this).parents("tr").addClass('border-bottom-radius-10');
    });
    $('.arrow-toggle-right').click(function(){
        $(this).hide();
        $('.arrow-toggle-down').show();
        $('#expand-row').hide(300);
        $(this).parents("tr").removeClass('border-bottom-radius-10');
    });
});



/**************************************   Page 48  **************************************/


$(document).ready(function () {
    var $Tous_btn = $("#Tous-les-documents-btn");
    $('.tous-les-documents-checkbox').click(function () {
        if ($(this).prop("checked") == true) {
            $(this).parents("tr").children("td").addClass("selected-row");
            $Tous_btn.css('display', 'flex');
        }
        else if ($(this).prop("checked") == false) {
            $(this).parents("tr").children("td").removeClass("selected-row");
        }
    });
});


$(document).ready(function () {
    $('.qr-sidebar div').click(function () {
        $('.qr-sidebar div').removeClass('active');
        $(this).addClass('active');
    });

    $("#Informations-générales").show();
    $("#Identification-des-dangers").hide();
    $("#Mesure-de-Protection").hide();
    $("#Levage-de-charges").hide();
    $("#Equipement-de-protection").hide();
    $("#Mesure-de-Protection-sublinks").hide();
    $("#Autre-document-obligatoire").hide();
    $("#Remarque-Signature").hide();

    $("#Informations-générales-link").click(function () {
        $("#Identification-des-dangers").hide();
        $("#Mesure-de-Protection").hide();
        $("#Equipement-de-protection").hide();
        $("#Mesure-de-Protection-sublinks").hide();
        $("#Autre-document-obligatoire").hide();
        $("#Remarque-Signature").hide();
        $("#qr-code").show();
        $("#Informations-générales").show(200);
    });
    $("#Identification-des-dangers-link").click(function () {
        $("#Informations-générales").hide();
        $("#Mesure-de-Protection").hide();
        $("#Mesure-de-Protection-sublinks").hide();
        $("#Equipement-de-protection").hide();
        $("#Autre-document-obligatoire").hide();
        $("#Remarque-Signature").hide();
        $("#qr-code").show();
        $("#Identification-des-dangers").show(200);
    });
    $("#Mesure-de-Protection-link").click(function () {
        $("#Informations-générales").hide();
        $("#Identification-des-dangers").hide();
        $("#qr-code").hide();
        $("#Equipement-de-protection").hide();
        $("#Autre-document-obligatoire").hide();
        $("#Remarque-Signature").hide();
        $("#Mesure-de-Protection").show(200);
        $("#Mesure-de-Protection-sublinks").show(200);
    });
    $("#Consignation-des-énergies-link").click(function () {
        $("#Consignation-des-énergies").show(200);
    });
    $("#Equipement-de-protection-link").click(function () {
        $("#Informations-générales").hide();
        $("#Identification-des-dangers").hide();
        $("#qr-code").show(300);
        $("#Mesure-de-Protection").hide();
        $("#Mesure-de-Protection-sublinks").hide(200);
        $("#Autre-document-obligatoire").hide();
        $("#Remarque-Signature").hide();
        $("#Equipement-de-protection").show(200);
    });
    $("#Autre-document-obligatoire-link").click(function () {
        $("#Informations-générales").hide();
        $("#Identification-des-dangers").hide();
        $("#qr-code").show();
        $("#Mesure-de-Protection").hide();
        $("#Equipement-de-protection").hide();
        $("#Mesure-de-Protection-sublinks").hide(200);
        $("#Remarque-Signature").hide();
        $("#Autre-document-obligatoire").show(200);
    });
    $("#Remarque-Signature-link").click(function () {
        $("#Informations-générales").hide();
        $("#Identification-des-dangers").hide();
        $("#qr-code").show();
        $("#Mesure-de-Protection").hide();
        $("#Equipement-de-protection").hide();
        $("#Mesure-de-Protection-sublinks").hide(200);
        $("#Autre-document-obligatoire").hide();
        $("#Remarque-Signature").show(200);
    });

});


/**************************************   Page 95  **************************************/


$(document).ready(function () {
    var $progressbar1 = $(".progress-width1");
    var $progressbar2 = $(".progress-width2");
    var $progressbar3 = $(".progress-width3");

    var value1 = document.getElementById("pbv1").innerText;
    var value2 = document.getElementById("pbv2").innerText;
    var value3 = document.getElementById("pbv3").innerText;

    $progressbar1.css("width", value1);
    $progressbar2.css("width", value2);
    $progressbar3.css("width", value3);

    $('#pbv1').on('change', function() {
        value1 = this.value;
        $progressbar1.css("width", value1);
    });
    
    $('#pbv2').on('change', function() {
        value2 = this.value;
        $progressbar2.css("width", value2);
    });

    $('#pbv3').on('change', function() {
        value3 = this.value;
        $progressbar3.css("width", value3);
    });
});



/**************************************   Utilisateur Page  **************************************/



$(document).ready(function(){
    $("#dashboard").show();
    $("#permit").hide();
    $("#observation").hide();
    $("#profile").hide();
    $("#dashboard-link").click(function(){
        $("#dashboard").show(200);
        $("#permit").hide();
        $("#observation").hide();
        $("#profile").hide();
    });
    $("#permit-link").click(function(){
        $("#dashboard").hide();
        $("#permit").show(200);
        $("#observation").hide();
        $("#profile").hide();
    });
    $("#observation-link").click(function(){
        $("#dashboard").hide();
        $("#permit").hide();
        $("#observation").show(200);
        $("#profile").hide();
    });
    $("#profile-link").click(function(){
        $("#dashboard").hide();
        $("#permit").hide();
        $("#observation").hide();
        $("#profile").show(200);
    });
});
