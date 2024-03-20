let i = 0;
function timeout(){
    i += 1;
    postMessage(i);

    setTimeout("timeout()" ,500)


}

timeout()