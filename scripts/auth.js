//watching auth status
auth.onAuthStateChanged(k=>{
    if(k){
        db.collection('blogs').onSnapshot(snapshot=>{
            getBlog(snapshot.docs);
            getUser(k);
        });
    }else{
        //console.log("hata");
        getBlog([]);
        getUser();
    }

})

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

//create blog

const createBlogForm=document.querySelector('#create-form');
createBlogForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    db.collection('blogs').add({
        title:createBlogForm['title'].value,
        content:createBlogForm['content'].value
    }).then(()=>{
        const modal=document.querySelector('#modal-create');
        M.Modal.getInstance(modal).close();
        createBlogForm.reset();
    }).catch(err=>{
        console.log(err.message);
    })
})
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