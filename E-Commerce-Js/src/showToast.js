export function showToast(operation,id){
    const toast=document.createElement("div");
    toast.classList.add("toast");

    //set the text content of the toastBased on the operation

    if(operation==="add"){
        toast.textContent="Added "+id+" to the list";
    }else{
        toast.textContent="Removed "+id+" from the list";
    }

    document.body.appendChild(toast);


    //Automatically remove the toast after a second

    setTimeout(()=>{
        toast.remove();
    },2000);
}