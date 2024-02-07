"use strict"

document.addEventListener('DOMContentLoaded', function () {

    let userInput = document.getElementById('userInput');
    let sport = document.getElementById('sportsUL');
    const addActivityBtn = document.getElementById('addActivityBtn');
    const deleteLastActivityBtn = document.getElementById('deleteLastActivityBtn');

    addActivityBtn.addEventListener('click', function() {
        addActivity();
    });

});

// Task 2.05 IKKI LIDUG!

function addActivity() {
    let userInputText = userInput.value.trim();

    if (userInputText !== '') {
        let newListItem = document.createElement('li');
        newListItem.innerText = userInputText;
        newListItem.classList.add('menu-item');
        sportsUL.appendChild(newListItem);

        userInput.value = '';
    } else {
        alert('Football');
    }
}

// Task 2.06: Attach Event Listener for "Delete Activity" Button

function deleteLastActivity() {
    let lastActivity = sportsUL.lastElementChild; 
    if (lastActivity) { 
        sportsUL.removeChild(lastActivity); 
    }
}

// Task 2.07: Implement deleteLastActivity Function:

function deleteLastActivity() {
    let lastActivity = sportsUL.lastElementChild; 
    
    if (lastActivity) {
        sportsUL.removeChild(lastActivity); 
    } else {
        alert('No activities to delete.'); 
    }
}

// Add activity button virker, men nok ikke som den burde.