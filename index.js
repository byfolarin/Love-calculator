// function clickElement() {
//     const yourName = document.getElementById('idann').value;
//     const partnersName = document.getElementById('baby').value;

//     if (yourName.trim() === '' || partnersName.trim() === '') {
//         alert('Please enter both your name and your partner\'s name.');
//         return;
//     } 

//     const loveScore = calculateLoveScore(yourName, partnersName);

//     displayLoveScore(loveScore);
// }

// function calculateLoveScore(yourName, partnersName) {

//     return Math.floor(Math.random() * 100) + 1;
// }

// function displayLoveScore(loveScore) {
//     const finalDiv = document.querySelector('.final-div');
//     const p = document.createElement('p');
//     p.textContent = `Your love score is ${loveScore}%`;
//     finalDiv.innerHTML = '';
//     finalDiv.appendChild(p);
// }


const buttonClick = document.querySelector("#true-click");

buttonClick.addEventListener("click", () => {
    const firstName = document.querySelector("#idann").value;
    const secondName = document.querySelector("#baby").value;

    if (firstName.trim() === "" || secondName.trim() === "") {
        alert("Please enter your names");
    } else {
        const loveScore = Math.floor(Math.random() * 100) + 1;
        displayLoveScore(loveScore, firstName, secondName);
    }
});

function displayLoveScore(loveScore, firstName, secondName) {
    const finalDiv = document.querySelector('.final-div');
    const p = document.createElement('p');

    if (loveScore >= 50) {
         p.textContent = "The love between " + firstName + " and " + secondName + " is " + loveScore + "%. You deserve each other.";
    } else {
        p.textContent = "The love between " + firstName + " and " + secondName + " is " + loveScore + "%. Well, you both still have time to reconsider.";
    }

    finalDiv.innerHTML = '';
    finalDiv.appendChild(p);
}






