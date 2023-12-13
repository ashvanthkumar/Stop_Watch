let startbtn=document.getElementById('start');
let stopbtn=document.getElementById('stop');
let resetbtn=document.getElementById('reset');
let timer=0;
let s=0;
let m=0;
let h=0;

startbtn.addEventListener('click',function(){
    timer=true;
    stopwatch();
});

stopbtn.addEventListener('click',function(){
    timer=false;
    stopwatch();
});

resetbtn.addEventListener('click',function(){
    timer=false;
    s=0;
    m=0;
    h=0;
    document.getElementById('hours').innerHTML="00";
    document.getElementById('mins').innerHTML="00";
    document.getElementById('sec').innerHTML="00";
});


function stopwatch(){
    if(timer)
    {
        s++;
        if(s==60)
        {
            m++;
            s=0
        }
        if(m==60)
        {
            h++;
            m=0;
            s=0;
        }
    }
    let hr,mi,se;

    if(h<10) hr="0"+h;
    else hr=h;

    if(m<10) mi="0"+m;
    else mi=m;

    if(s<10) se="0"+s;
    else se=s;

    document.getElementById('hours').innerHTML=hr;
    document.getElementById('mins').innerHTML=mi;
    document.getElementById('sec').innerHTML=se;
    setTimeout(stopwatch,1000);
}