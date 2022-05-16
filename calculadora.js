var result
var element = document.querySelector('h1')
    function soma() {
        var num1 = document.getElementById('n1').value;
        var num2 = document.getElementById('n2').value;
        result = parseInt(num1) + parseInt(num2);
        element.innerHTML = result;
    }
    function subtracao() {
        var num1 = document.getElementById('n1').value;
        var num2 = document.getElementById('n2').value;
        result = parseInt(num1) - parseInt(num2);
        element.innerHTML = result;
    }
    function multiplicacao() {
        var num1 = document.getElementById('n1').value;
        var num2 = document.getElementById('n2').value;
        result = parseInt(num1) * parseInt(num2);
        element.innerHTML = result;
    }
    function divisao(){
        var num1 = document.getElementById('n1').value;
        var num2 = document.getElementById('n2').value;
        result = parseInt(num1) / parseInt(num2);
        element.innerHTML = result;
    }