//Points (menu)
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');

//Paragraphs
var first_p = document.getElementById('first_p');
var second_p = document.getElementById('second_p');
var third_p = document.getElementById('third_p');
var fourth_p = document.getElementById('fourth_p');

one.addEventListener('click', function() {

    one.style.backgroundColor = 'white';
    two.style.backgroundColor = 'transparent';
    three.style.backgroundColor = 'transparent';
    four.style.backgroundColor = 'transparent';

    first_p.style.display = '';
    second_p.style.display = 'none';
    third_p.style.display = 'none';
    fourth_p.style.display = 'none';

});

two.addEventListener('click', function() {

    one.style.backgroundColor = 'transparent';
    two.style.backgroundColor = 'white';
    three.style.backgroundColor = 'transparent';
    four.style.backgroundColor = 'transparent';

    first_p.style.display = 'none';
    second_p.style.display = '';
    third_p.style.display = 'none';
    fourth_p.style.display = 'none';

});

three.addEventListener('click', function() {

    one.style.backgroundColor = 'transparent';
    two.style.backgroundColor = 'transparent';
    three.style.backgroundColor = 'white';
    four.style.backgroundColor = 'transparent';

    first_p.style.display = 'none';
    second_p.style.display = 'none';
    third_p.style.display = '';
    fourth_p.style.display = 'none';

});

four.addEventListener('click', function() {

    one.style.backgroundColor = 'transparent';
    two.style.backgroundColor = 'transparent';
    three.style.backgroundColor = 'transparent';
    four.style.backgroundColor = 'white';

    first_p.style.display = 'none';
    second_p.style.display = 'none';
    third_p.style.display = 'none';
    fourth_p.style.display = '';

});