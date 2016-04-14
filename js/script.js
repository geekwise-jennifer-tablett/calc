function pushButton(buttonValue) {
     if (buttonValue == 'C') {
          document.getElementById('screen').value = '';
     }
     else {
          document.getElementById('screen').value += buttonValue;
     }
}
function calculate(equation) {
     var answer = eval(equation);
     document.getElementById('screen').value = answer;
}


















/*var get_input_id = function('id'){
    return document.getElementById('id')
};

//adding
document.getElementById(id+'_result').focus();
        return true;
var num_but = valueof('i');

//subtraction

//when number button clicked add to display
calc_body.addEventListener('click',function(event){
    if (num_but){
        display.value = 'i';
    }
});
   
    */
