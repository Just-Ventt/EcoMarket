const form=document.getElementById('registro-form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    const password = document.getElementById('password').value;
    const confirmarpassword = document.getElementById('confirmar-password').value;




if (password !==  confirmarpassword){
    Swal.fire({
        title: "Oops..",
        text: "Ha ocurrido un error durante el proceso",
        icon: "error"
      });
}else{
    Swal.fire({
        title: "Registro exitoso!",
        text: "Revisa tu e-mail para confirmar tus datos",
        icon: "success"
      });
    form.reset();
}
})


