

window.onload = ()=>{
    console.log('script loaded');
}

/* let testElement = document.getElementsByClassName('test');
console.log(testElement[0]);

testElement[0].onclick = ()=> {
    console.log("something");
    testElement[0].style.backgroundColor = 'pink';
} */

//NOTE TO SELF: .getElementsByClassName returns an array of elements even if the array only contains 1 element. If no index is given for that array, then the event listener function attempts to work on the array, rather than an element. An index must be provided.
//NOTE TO SELF: the type="text/javascript" attribute was preventing the js file from loading in the browser, and I switched from using the async keyword to the defer keyword so I can keep the script tag in the head element (tidier imo).

/*
testElement[0].addEventListener('click', function() {
    console.log("something1")
    testElement[0].style.backgroundColor = 'pink';
});*/

let aboutMeHeadings = document.getElementsByClassName('headingAndArrows');

/*
workExperienceHeading.onclick = ()=> {
    if (arrowDirection === 'down') {
        workExperienceHeading.getElementsByClassName('leftArrow')[0].innerHTML = '&uarr; &nbsp;';
        workExperienceHeading.getElementsByClassName('rightArrow')[0].innerHTML = '&nbsp; &uarr;'; 
        arrowDirection = 'up';
    } else if (arrowDirection === 'up') {
        workExperienceHeading.getElementsByClassName('leftArrow')[0].innerHTML = '&darr; &nbsp;';
        workExperienceHeading.getElementsByClassName('rightArrow')[0].innerHTML = '&nbsp; &darr;'; 
        arrowDirection = 'down'; 
    }
}

whereHeading.onclick = ()=> {
    if (arrowDirection === 'down') {
        whereHeading.getElementsByClassName('leftArrow')[0].innerHTML = '&uarr; &nbsp;';
        whereHeading.getElementsByClassName('rightArrow')[0].innerHTML = '&nbsp; &uarr;'; 
        arrowDirection = 'up';
    } else if (arrowDirection === 'up') {
        whereHeading.getElementsByClassName('leftArrow')[0].innerHTML = '&darr; &nbsp;';
        whereHeading.getElementsByClassName('rightArrow')[0].innerHTML = '&nbsp; &darr;'; 
        arrowDirection = 'down'; 
    }
}
*/

//-------------------------------------------------------------------------------------------------------------------------------------
/*

  function arrowDirectionChange(targetHeading) {
    
    let arrowIndex = 0;
    if (targetHeading === workExperienceHeading) {
        arrowIndex = 0;
    } else if (targetHeading === whereHeading) {
        arrowIndex = 1;
    } else if (targetHeading === studyHeading) {
        arrowIndex = 2;
    } else if (targetHeading === hobbiesHeading) {
        arrowIndex = 3;
    }
    console.log(targetHeading.getElementsByClassName('leftArrow')[arrowIndex].innerHTML === "↑ &nbsp;");
    if  (arrowDirection === 'down') {
        targetHeading.getElementsByClassName('leftArrow')[arrowIndex].innerHTML = '&uarr; &nbsp;';
        document.getElementsByClassName('rightArrow')[arrowIndex].innerHTML = '&nbsp; &uarr;'; 
        arrowDirection = 'up';
    } else if (arrowDirection === 'up') {
            documnent.getElementsByClassName('leftArrow')[arrowIndex].innerHTML = '&darr; &nbsp;';
            document.getElementsByClassName('rightArrow')[arrowIndex].innerHTML = '&nbsp; &darr;'; 
            
    }
};

workExperienceHeading.onclick = ()=> arrowDirectionChange(workExperienceHeading); */


/* I forgot that "is equal to" is === and assigning new values is = */


function arrowDirectionChange(targetHeading) {
    if (targetHeading.getElementsByClassName('leftArrow')[0].innerHTML === '↓ &nbsp;') {
        targetHeading.getElementsByClassName('leftArrow')[0].innerHTML = '&uarr; &nbsp;';
        targetHeading.getElementsByClassName('rightArrow')[0].innerHTML = '&nbsp; &uarr;';
    } else if (targetHeading.getElementsByClassName('leftArrow')[0].innerHTML === '↑ &nbsp;') {
        targetHeading.getElementsByClassName('leftArrow')[0].innerHTML = '&darr; &nbsp;';
        targetHeading.getElementsByClassName('rightArrow')[0].innerHTML = '&nbsp; &darr;';
    }
} 

for(let i = 0; i < aboutMeHeadings.length; i++){
    aboutMeHeadings[i].onclick = ()=> arrowDirectionChange(aboutMeHeadings[i]);
}