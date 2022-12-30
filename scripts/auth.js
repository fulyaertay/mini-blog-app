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
})