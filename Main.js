let massN = ['1','2','3','4','5','6','7','8','9','0'];

document.addEventListener('keydown', function(event) {
    switch(event.key)
    {
        case ' ': numb_display.value = " ";
            break;
        case 'Enter': numb_display.value = eval(numb_display.value);
            break;
        case 'Backspace': numb_display.value = numb_display.value.slice(0, numb_display.value.length-1);
            break;
        case 'Shift' && '+': numb_display.value += '+';
            break;
        case '-': numb_display.value += '-';
            break;
        case 'Shift' && '*': numb_display.value += '*';
            break;
        case '/': numb_display.value += '/';
            break;
    }
    for(let i of massN) if (i === event.key) numb_display.value += i;
})

function inp_numb(numb)
{
    let numb_display  = document.getElementById("numb_display");   
    numb_display.value += numb;
}
