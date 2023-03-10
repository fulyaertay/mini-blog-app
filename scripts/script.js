const blogs=document.querySelector('.guides');
const logoutLinks=document.querySelectorAll('.logged-out');
const loginLinks=document.querySelectorAll('.logged-in');
const accountDetails=document.querySelector('.account-details');
const getUser=(user)=>{
    if(user){
        db.collection('users').doc(user.uid).get().then(doc=>{
            let html=`
            <div>User E-mail: <strong>${user.email}</strong></div>
            <div>${doc.data().bio}</div>
        `;
        accountDetails.innerHTML=html;
        });
      

        loginLinks.forEach(item=>item.style.display='block');
        logoutLinks.forEach(item=>item.style.display='none');

    }else{
        accountDetails.innerHTML='';
        loginLinks.forEach(item=>item.style.display='none');
        logoutLinks.forEach(item=>item.style.display='block');
    }
}


//list blogs on index.html
const getBlog=(data)=>{
   if(data.length){
    let html='';
    data.forEach(doc=>{
        const blog=doc.data();
        //console.log(blog);
        const li=` 
        <li>
            <div class="collapsible-header grey lighten-5">${blog.title}</div>
            <div class="collapsible-body white"><span>${blog.content}</span></div>
      </li>
        `;
        html+=li;
        blogs.innerHTML=html;
    });
   }else{
    blogs.innerHTML='<div><img src="./img/background.jpg"/></div><h5 class="center-align">Please Sign In to See Blogs!</h5>'
   }

   
}

/* when DOM loaded, init all modals */
document.addEventListener('DOMContentLoaded',function(){
    let modals=document.querySelectorAll('.modal');
    M.Modal.init(modals);
    let blogs=document.querySelectorAll('.collapsible');
    M.Collapsible.init(blogs);
});

