function newHead() {
    let head = prompt('Enter New Heading');
    let inp = document.createElement('INPUT');
    inp.setAttribute("type", "text");
    inp.setAttribute("title", head);
    inp.setAttribute("placeholder", head);
    inp.setAttribute("class", "w3-input w3-margin");

    let form = document.getElementById("ch2_input");
    form.appendChild(inp);
}

let max_fields      = 10;
let wrapper         = $(".input_fields_wrap");
let add_button      = $(".add_field_button");
let remove_button   = $(".remove_field_button");

$(add_button).click(function(e){
    e.preventDefault();
    let total_fields = wrapper[0].childNodes.length;
    if(total_fields < max_fields){
        $(wrapper).append('<input type="text" name="answer[]" class="field-long" />');
    }
});
$(remove_button).click(function(e){
    e.preventDefault();
    let total_fields = wrapper[0].childNodes.length;
    if(total_fields>1){
        wrapper[0].childNodes[total_fields-1].remove();
    }
});

let app = angular.module('tempApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.back = "This"
});
