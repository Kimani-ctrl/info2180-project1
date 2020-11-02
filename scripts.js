window.onload=function(){
    (document.getElementsByTagName("button")[0]).onclick=function(event){
        event.preventDefault();
        if ((document.getElementsByTagName("input")[0]).value===""){
            (document.getElementsByClassName("message")[0]).innerHTML="Please enter a valid email address";
        }
        else{
            (document.getElementsByClassName("message")[0]).innerHTML="Thank you! your email address have been added to our mailing list!"
        }
    }
}