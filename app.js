document.getElementById('btn3').addEventListener('click', function () {
    document.getElementById('ans1').innerHTML = 'Correct';
    document.getElementById('btn3').style.backgroundColor = 'green';
    var myParent = document.getElementsByTagName('h3')[0];
    var myImage = document.createElement('img');
    myImage.src = './gifs/giphy.gif';
    myParent.appendChild(myImage);
    myImage.style.marginLeft = "400px";
});

let incorrect = document.querySelectorAll('.btn');
for (let i = 0; i < incorrect.length; i++) {
    incorrect[i].addEventListener('click', function () {
        document.getElementById('ans1').innerHTML = 'Incorrect';
        incorrect[i].style.backgroundColor = 'red';
        var myParent = document.getElementsByTagName('h3')[0];
        var myImage = document.createElement('img');
        myImage.src = './gifs/giphy2.gif';
        myParent.appendChild(myImage);
        myImage.style.marginLeft = "400px"
    });
}

document.getElementById('btnn').addEventListener('click', function () {
    let check = document.getElementById('answer').value;
    if (check.toLowerCase().trim() === 'sudan') {
        document.getElementById('ans2').innerHTML = 'Correct';
        document.getElementById('answer').style.backgroundColor = 'green';
        var myParent = document.getElementsByTagName('h3')[1];
        var myImage = document.createElement('img');
        myImage.src = './gifs/giphy.gif';
        myParent.appendChild(myImage);
        myImage.style.marginLeft = "400px";
    }
    else {
        document.getElementById('ans2').innerHTML = 'Incorrect';
        document.getElementById('answer').style.backgroundColor = 'red';
        var myParent = document.getElementsByTagName('h3')[1];
        var myImage = document.createElement('img');
        myImage.src = './gifs/giphy2.gif';
        myParent.appendChild(myImage);
        myImage.style.marginLeft = "400px"
    }
});

