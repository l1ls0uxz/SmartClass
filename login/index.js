$('#loginForm').submit(function(e){
    e.preventDefault();

    var email = $('#email').val();
    var password = $('#password').val();
    
    $.ajax({
        method: 'POST',
        url: '/api/login/Login',
        data: {email: email, password: password},
        success: function(data){
            if(data.userId){
                alert('Login Successful' + data.userId);
                window.location.href = '/dashboard';
            }else{
                alert('Login Failed');
            }
        },
        error: function(err){
            console.error(err);
        }
    });
});