$("#loginButton").click(function(){

    var password1=$("#pass1").val();
    var password2=$("#pass2").val();

    if(password1!="" && password2!=""){
  
      if(password1==password2){
         alert("Sucessfully login!")
      }else{
        alert("Password mismatch!");
      }  
    }else{
        alert("Please Enter Password!")
    }
});