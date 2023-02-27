let user_login=document.getElementById('user');
let admin_login=document.getElementById('admin');
let form_box=document.getElementsByClassName('form-box')[0];
let user_box=document.getElementsByClassName('user-box')[0];
let admin_box=document.getElementsByClassName('admin-box')[0];

admin_login.addEventListener('click' ,()=>{
    form_box.style.transform='translateX(100%)';
    user_box.classList.add('hidden');
    admin_box.classList.remove('hidden');
})

user_login.addEventListener('click' ,()=>{
    form_box.style.transform='translateX(0%)';
    admin_box.classList.add('hidden');
    user_box.classList.remove('hidden');
})