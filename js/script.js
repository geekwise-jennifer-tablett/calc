var calc_body;
//var input_element_container;
var input_element;
//var top_container;
var top_buttons
var clear_button;
var percent_button;
var division_button;
var backspace_button;
var equal_button
//var number_container;
var number_buttons;
//var operator_container;
var operator_buttons;

//array for intergers
number_buttons = [
    '7',
    '8',
    '9',
    '4',
    '5',
    '6',
    '1',
    '2',
    '3',
    '0',
    '.',
    '()'
 ];


//array for right side operations
operator_buttons = [
    '*',
    '-',
    '+'
];

//calculator body design
  calc_body = document.createElement('div');

//creating input
input_element = document.createElement('input');
input_element.setAttribute('id','display');

//setting id for containers
// input_element_container = document.createElement('div');
// input_element_container.setAttribute('id','input_element_container');

// top_container = document.createElement('div');
// top_container.setAttribute('id','top_container');

// number_container = document.createElement('div');
// number_container.setAttribute('id','number_container');

// operator_container = document.createElement('div');
// operator_container.setAttribute('id','operator_container');

//create elements
var create_numbers_element = function(element_type, element_id){
    var element = document.createElement(element_type);
    element.setAttribute('id',element_id);
    calc_body.appendChild(element);
};

var create_operators_element = function(operator_element_type,operator_element_id){
    var operator_element = document.createElement(operator_element_type);
    operator_element.setAttribute('id',operator_element_id);
    calc_body.appendChild(operator_element);
};

//recognizes keyboard data
var check_keyboard_value = function(value_to_check){
    return value_to_check.match(/\d/gi);  
};


var listen_for_keycode = function(){
    document.body.addEventListener('keydown',function(event){
        //console.log(event.code);
        //console.log(event.keyCode);
        
        key_pressed = event.code.match(/\d/gi);
        
        if(event.code.match(/digit/gi)){
           //number_button_    
           console.log(key_pressed);
           console.log(document.getElementById(('number_button_'+
                        parseInt(key_pressed[0]-1)
            )));
            
            
            var current_key_number_pressed = document.getElementById(('number_button_'+parseInt(key_pressed[0]-1)));
            
            display.value += event.code.match(/\d/gi); 
        }
    })
};

//when webpage loads
document.addEventListener('DOMContentLoaded',function(event){
    
    listen_for_keycode();
    
    document.body.appendChild(calc_body);
    //calc_body.appendChild(input_element_container);
    calc_body.appendChild(input_element);
    //calc_body.appendChild(top_container);
    //calc_body.appendChild(number_container);
    //calc_body.appendChild(operator_container);
    
    
    
   var display = document.getElementById('display');
   
 
    
    //loop for buttons
    for(var i=0; i<number_buttons.length; i++){
        create_numbers_element('button','number_button_'+i);
        var current_number_element = document.getElementById('number_button_'+i);
        
        //click for display
        current_number_element.addEventListener('click',function(event){
            display.value =  display.value += this.textContent;
        });
        
        current_number_element.textContent = number_buttons[i];
    };
    
    
    //loop for operator buttons
    for(var i=0; i<operator_buttons.length;  i++){
        create_operators_element('button','operator_button_'+i);
        var current_operator_element = document.getElementById('operator_button_'+i);
        
        //click for operator function
        current_operator_element.addEventListener('click',function(event){
             display.value = display.value += this.textContent;
        });
        
        current_operator_element.textContent = operator_buttons[i];
        
    };
    
   
   
   //create other buttons
    create_numbers_element('button','clear_button');
    create_numbers_element('button','percent_button');
    create_numbers_element('button','division_button');
    create_numbers_element('button','backspace_button');
    create_numbers_element('button','equal_button');
    
    
    var clear_button = document.getElementById('clear_button');
    var backspace_button = document.getElementById('backspace_button');
    var percent_button = document.getElementById('percent_button');
    var division_button = document.getElementById('division_button');
    var equal_button = document.getElementById('equal_button');
    
//for multiply button i class="fa fa-times" aria-hidden="true"
//for percetn button i class="fa fa-percent" aria-hidden="true"
//for division button 
// for delete button i class="fa fa-arrow-circle-left" aria-hidden="true"
    
    clear_button.textContent = 'AC';
    percent_button.textContent = '%';
    division_button.textContent = '/';
    backspace_button.textContent = 'B';
    equal_button.textContent = '=';
    
   
    //making equal button work
    equal_button.addEventListener('click',function (equation) {
     
     if(display.value.length === 0){
         display.value = 0;
     }
     
     display.value = eval(display.value);
     console.log(this);
        
    });
    
    //making clear button work
    clear_button.addEventListener('click',function(event){
       // document.getElementById()
        //    display.value = '';
        console.log(this);
        display.value = null;
    });
    
    //making backspace button work
 backspace_button.addEventListener('click',function(event){
            console.log(display.value);
            var current_value = display.value.split('');
            var new_value = new String;

            for(var i =0; i < display.value.length - 1 ; i++){
            	 new_value += current_value[i]; 
            }

            display.value = new_value;
            
        });
        

//  var current_number

   
    // backspace_button.addEventListener('click',function(event) {
    // display.value = document.getElementById('current_number_element').value; 
    // display.value = this.length-1;
    // newnum=this.substring(0,current_number_element);
    // document.getElementById('current_number_element').value=newnum;
   
    //   if(display.value == display.value.length){
    //       display.value.length - 1
    //   }; 
    //   lnth=.length-1;
    //   =numbers.substring(0,lnth);
    //   document.getElementById('num1').value=newnum;
//});

   //making percentage work
   var percent_button = document.getElementById('percent_button');
    percent_button.addEventListener('click',function() {
         
         
        var a = document.getElementById('display').value;
        // var b = document.getElementById('percent_button').value;
        var o = (a/100);
        // document.getElementById('input_element').value = o;
        display.value = o;
        console.log(o);
    
 
    })
});
















