window.onload = ()=>{

    const urlinput = document.querySelector("#url-input-id");
    const urloutput = document.querySelector("#url-output-id");
    const urlencodebtn = document.querySelector("#url-encode-button-id");
    const urldecodebtn = document.querySelector("#url-decode-button-id");
    urlencodebtn.onclick = event =>{
        urloutput.value = encodeURIComponent(urlinput.value);
    };
    urldecodebtn.onclick = event =>{
        urloutput.value = decodeURIComponent(urlinput.value);
    };
};