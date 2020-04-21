
const extension = document.getElementById("extension");
const wrench = document.getElementById("wrench");
const lo_extension = document.getElementById("lo_extension");
const lo_wrench = document.getElementById("lo_wrench");
const lo_extension_field = document.getElementById("length-of-extension");
const lo_wrench_field = document.getElementById("length-of-wrench");
const og_field = document.getElementById("original-torque");
const answer_container = document.getElementById("answer")
const selected_col = '#000B3F'

function calculate_extension() {
    var low_el = document.getElementById("length-of-wrench");
    var loe_el = document.getElementById("length-of-extension");
    var og_el = document.getElementById("original-torque");
    
    var low_val = Number.isNaN(low_el.value) ? "NIL" : parseFloat(low_el.value);
    
    alert(low_val);
    
  }


function input_focused(input) {
    
    de_highlight_wrench();

    switch (input.id) {
        
        case 'length-of-wrench':
            wrench.style.fill = selected_col;
            lo_wrench.style.stroke = selected_col;
            break;
        case 'length-of-extension':
            extension.style.fill = selected_col;
            lo_extension.style.stroke = selected_col
            break;
        
    }
    

}

function de_highlight_wrench() {
    extension.style.fill = '#C4C4C4';
    wrench.style.fill = '#C4C4C4';
    lo_extension.style.stroke = '#C4C4C4';
    lo_wrench.style.stroke = '#C4C4C4';
}

function tf_changed(tf){
    var answer = 0.0;
    if (lo_extension_field.value && lo_wrench_field.value && og_field.value) {
        var lo_ext = parseFloat(lo_extension_field.value);
        var lo_w = parseFloat(lo_wrench_field.value);
        var og = parseFloat(og_field.value);

        var full_length = lo_w + lo_ext;
        var factor = lo_w / full_length;
        
        answer = og * (lo_w / full_length);
        answer_container.innerHTML = Math.round(answer);
        answer_container.classList.add('show');

    }else {
        answer_container.classList.remove('show');
    }

   
}
