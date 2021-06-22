window.onload = function(){

    const hourinput = document.querySelector("#hour");
    const minuteinput = document.querySelector("#minute");
    const secondinput = document.querySelector("#second");
    const millisecondinput = document.querySelector("#millisecond");
    const pausetbtn = document.querySelector("#stoptwatch-pause-button-id");
    const resetbtn = document.querySelector("#stoptwatch-reset-button-id");
    const startbtn = document.querySelector("#stoptwatch-start-button-id");

    let hr = 0, m = 0, s =0, watch;

    startbtn.addEventListener('click', ()=>{
     
        watch = setInterval( ()=>{
            s +=1;
            if(s == 60){
                m = m +1;
                s = 00;
            }
            if(m == 60){
                h = h+1;
                m = 00;
            }
            hourinput.innerText = h;
            minuteinput.innerText = m;
            secondinput.innerText = s;
            millisecondinput.innerText = ms;
        },1000);
    });

    pausetbtn.addEventListener('click',()=>{
        clearInterval(watch);
    });

    resetbtn.addEventListener('click',()=>{
        clearInterval(watch);
        h = 0;
        m = 0;
        s = 0;
        ms = 0;
        hour.innerText = '00';
        minute.innerText = '00';
        second.innerText = '00';
        millisecond.innerText = '00';
    });
}