document.addEventListener("DOMContentLoaded", function(){
    let button = document.querySelector('.realbut');
    button.addEventListener('click', function(e){
        e.preventDefault();
        button.style.backgroundColor = 'green';
        document.querySelector('#fb').innerHTML = 'Correct!';
    });

    let button3 = document.querySelectorAll('.but');
    for (let i=0; i<button3.length; i++)
    {
        button3[i].addEventListener('click', function(e){
            e.preventDefault();
            button3[i].style.backgroundColor = 'red';
            document.querySelector('#fb').innerHTML = 'Incorrect';
        });
    }

    let button2 = document.querySelector('.realbut2');
    button2.addEventListener('click', function(e){
        e.preventDefault();
        button2.style.backgroundColor = 'green';
        document.querySelector('#fb4').innerHTML = 'Correct!';
    });

    let button4 = document.querySelectorAll('.but2');
    for (let i=0; i<button4.length; i++)
    {
        button4[i].addEventListener('click', function(e){
            e.preventDefault();
            button4[i].style.backgroundColor = 'red';
            document.querySelector('#fb4').innerHTML = 'Incorrect';
        });
    }


    document.querySelector('#but2').addEventListener('click', function(e){
        e.preventDefault();
        let ans = document.querySelector('.input1');
        if (ans.value === 'Switzerland'){
            ans.style.backgroundColor = 'green';
            document.querySelector('#fb2').innerHTML = 'Correct!';
        }
        else{
            ans.style.backgroundColor = 'red';
            document.querySelector('#fb2').innerHTML = 'Incorrect';
        }
    });

    document.querySelector('#but3').addEventListener('click', function(e){
        e.preventDefault();
        let ans2 = document.querySelector('.input2');
        if (ans2.value === "Revenant"){
            ans2.style.backgroundColor = 'green';
            document.querySelector('#fb3').innerHTML = 'Correct!';
        }
        else{
            ans2.style.backgroundColor = 'red';
            document.querySelector('#fb3').innerHTML = 'Incorrect';
        }
    });
});