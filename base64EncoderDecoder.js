window.onload = ()=>{

    const base64input = document.querySelector("#base64-input-id");
    const base64output = document.querySelector("#base64-output-id");
    const base64encodebtn = document.querySelector("#base64-encode-button-id");
    const base64decodebtn = document.querySelector("#base64-decode-button-id");
    base64encodebtn.onclick = function(){
        base64output.value = btoa(base64input.value);
    };
    base64decodebtn.onclick = event =>{
        base64output.value = atob(base64input.value);
    };
};


