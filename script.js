window.onload = function(){
    let count = 0;

    document.getElementById('counter-inc').addEventListener('click', function() {
        count++;
        document.getElementById('counter-value').textContent = count;
    });
};
