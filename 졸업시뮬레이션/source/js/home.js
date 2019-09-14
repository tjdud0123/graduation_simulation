$(document).ready(function () {
    $('a.login-window').click(function () {

        // Getting the variable's value from a link 
        var loginBox = $(this).attr('href');

        //Fade in the Popup and add close button
        $(loginBox).fadeIn(300);

        //Set the center alignment padding + border
        var popMargTop = ($(loginBox).height() + 24) / 2;
        var popMargLeft = ($(loginBox).width() + 24) / 2;

        $(loginBox).css({
            'margin-top': -popMargTop,
            'margin-left': -popMargLeft
        });

        // Add the mask to body
        $('body').append('<div id="mask"></div>');
        $('#mask').fadeIn(300);

        return false;
    });
 
    // When clicking on the button close or the mask layer the popup closed
    $('a.close, #mask').live('click', function () {
        $('#mask , .login-popup').fadeOut(300, function () {
            $('#mask').remove();
        });
        return false;
    });
});

var userId;
var password;

//server
var url="http://127.0.0.1:5000/"
function get_server(param = ""){
    http = new XMLHttpRequest();
    http.open("GET",url+param,false);
    http.send();
    return http.responseText;
}


function user_in() {
    //아이디값 저장
    userId = document.getElementById('userid').value;
    password = document.getElementById('password').value;
    var login_succ = get_server("login/"+userId+"/"+password);
    if(login_succ=='success'){
        window.location.href = 'select.html';
    }
    else if(login_succ=='wrong'){
        alert("잘못된 패스워드입니다.");
    }
}

function blockfunc(){
document.getElementById('idcon').style.display='block';
}
