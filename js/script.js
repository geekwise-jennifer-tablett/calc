var create_input_tag;
var read_input_tag;
var update_input_tag;
var delete_input_tag;

var create_element = function(){
    
    var element = document.createElement();
    element.style.display = 'block';
    
    return element;
    
};

var attach_element = function(){
    
    document.body.appendChild(num_but);
    
};


document.addEventListener('DOMContentLoaded',function(event){
    
    create_input_tag = create_element('input');
    read_input_tag = create_element('input');
    update_input_tag = create_element('input');
    delete_input_tag = create_element('input');
    
    create_input_tag.placeholder = '+';
    delete_input_tag.placeholder = '-';
    update_input_tag.placeholder = '=';
    
    attach_element(create_input_tag);
    attach_element(read_input_tag);
    attach_element(update_input_tag);
    attach_element(delete_input_tag);
    
    create_input_tag.addEventListener('click',function(event){
        
        if(){
            
            var new_element = document.createElement('value');
            new_element.setAttribute('id', create_input_tag.value);
            new_element.textContent = create_input_tag.value;
            
            attach_element(new_element);
            
        };
        
    });
        
    update_input_tag.addEventListener('click',function(event){
        
        if(){
            
            var element_to_update = document.getElementById(update_input_tag.value);
            
            
        };
        
        
    });
    
    
});






/*var element = document.num_but('num_but');
var display
var calc_body
var num_but

calc_body.num_but.addEventListener("click",function(){
    this.value;
     if(display.innerHTML === "") {
            
            display.innerHTML = display.innerHTML.concat("");
            
        }
}); 







document.addEventListener('DOMContentLoaded',function(event){
   
  var display = getElementById('result');
    
    console.log(event);
});





/*
var num_but = valueof('i');


//when number button clicked add to display
calc_body.addEventListener('click',function(event){
    if (num_but){
        display.value = 'i';
    }
});
   
    

*/