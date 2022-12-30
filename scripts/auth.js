//create account
const accountForm=document.querySelector('#signup-form');
accountForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const mail=accountForm['signup-email'].value;
    const password=accountForm['signup-password'].value;

    auth.createUserWithEmailAndPassword(mail,password).then(result=>{
        const modal=document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        accountForm.reset();

    });
});


//logout
const logout=document.querySelector('#logout');
logout.addEventListener('click',(e)=>{
    e.preventDefault();
    auth.signOut().then(()=>{
        console.log('Logout successful');
    })
});

//login
const loginForm=document.querySelector('#login-form');
loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log('login successful');
    const mail=loginForm['login-email'].value;
    const password=loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(mail,password).then((result)=>{
        const modal=document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    })

})