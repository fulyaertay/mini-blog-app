const blogs=document.querySelector('.guides');
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
    blogs.innerHTML='<h5 class="center-align">Please Sign In</h5>'
   }

   
}

/* when DOM loaded, init all modals */
document.addEventListener('DOMContentLoaded',function(){
    let modals=document.querySelectorAll('.modal');
    M.Modal.init(modals);
    let blogs=document.querySelectorAll('.collapsible');
    M.Collapsible.init(blogs);
});

