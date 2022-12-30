/* when DOM loaded, init all modals */
document.addEventListener('DOMContentLoaded',function(){
    let modals=document.querySelectorAll('.modal');
    M.Modal.init(modals);
    let blogs=document.querySelectorAll('.collapsible');
    M.Collapsible.init(blogs);
})