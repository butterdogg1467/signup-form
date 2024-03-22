document.addEventListener('DOMContentLoaded', function() {
    let password = document.querySelector('#password')
    let confirmPassword = document.querySelector('#confirmpass')
    let passwordsMustMatch = document.querySelector('.passwordsmustmatch')
    
    confirmPassword.addEventListener('input', function () {
        if (password.value != confirmPassword.value) {
            passwordsMustMatch.textContent = 'Passwords Must Match'
            
        } else {
            passwordsMustMatch.textContent = ' '
        }
    })

    password.addEventListener('input', function () {
        if (password.value != confirmPassword.value) {
            passwordsMustMatch.textContent = 'Passwords Must Match'
            
        } else {
            passwordsMustMatch.textContent = ' '
        }
    })
    
    
})

