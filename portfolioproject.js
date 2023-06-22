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

//workExperienceHeading.onclick = ()=> arrowDirectionChange(workExperienceHeading);

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

/* function collapseExpandSegment(targetSegment) {
    console.log(targetSegment.style);
    if (targetSegment.style.display === 'block') {
         targetSegment.style.display = 'none';
    } else if (targetSegment.style.display === 'none') {
         targetSegment.style.display = 'block';
    }
 }; */

//-------------------------------------------------------------------------------------------------------------------------------------

//Following code for About Me section---------------------------------------------------------------------------------------------

let aboutMeHeadings = document.getElementsByClassName('headingAndArrows');
let aboutMeParagraphs = document.getElementsByClassName('paragraph');
let aboutMeInfos = document.getElementsByClassName('info');

            //I forgot that "is equal to" is === and assigning new values is =

function aboutMeArrowDirectionChange(targetHeading) {
    if (targetHeading.getElementsByClassName('leftArrow')[0].innerHTML === '↓ &nbsp;') {
        targetHeading.getElementsByClassName('leftArrow')[0].innerHTML = '&uarr; &nbsp;';
        targetHeading.getElementsByClassName('rightArrow')[0].innerHTML = '&nbsp; &uarr;';
        targetHeading.parentNode.style.height='fit-content';
    } else if (targetHeading.getElementsByClassName('leftArrow')[0].innerHTML === '↑ &nbsp;') {
        targetHeading.getElementsByClassName('leftArrow')[0].innerHTML = '&darr; &nbsp;';
        targetHeading.getElementsByClassName('rightArrow')[0].innerHTML = '&nbsp; &darr;';
        targetHeading.parentNode.style.height='100%';
    }
};

            //NOTE: I used the .className property here instead of the .classList one, because .classList is not supported in earlier version of IE browser.

function toggleParagraphHiddenClass(target) {
    if (target.className === 'paragraph hidden') {
        target.className = 'paragraph';
    } else {
        target.className = 'paragraph hidden';
    };
};


for (let i = 0; i < aboutMeInfos.length; i++) {
    aboutMeInfos[i].onclick = ()=> {
        aboutMeArrowDirectionChange(aboutMeHeadings[i]);
        toggleParagraphHiddenClass(aboutMeParagraphs[i]);
    };
};


//Following code for Projects section ---------------------------------------------------------------------------------------------

let projectDetailsToggles = document.getElementsByClassName('projectDetailsToggle');
let allProjectInfoPs = document.getElementsByClassName('projectInfoPs');

function projectsArrowDirectionChange(targetHeading) {
    if (targetHeading.getElementsByClassName('leftArrow')[0].innerHTML === '↓ &nbsp;') {
        targetHeading.getElementsByClassName('leftArrow')[0].innerHTML = '&uarr; &nbsp;';
        targetHeading.getElementsByClassName('rightArrow')[0].innerHTML = '&nbsp; &uarr;';
        targetHeading.getElementsByClassName('showDetails')[0].innerHTML = 'Hide Project Details';
    } else if (targetHeading.getElementsByClassName('leftArrow')[0].innerHTML === '↑ &nbsp;') {
        targetHeading.getElementsByClassName('leftArrow')[0].innerHTML = '&darr; &nbsp;';
        targetHeading.getElementsByClassName('rightArrow')[0].innerHTML = '&nbsp; &darr;';
        targetHeading.getElementsByClassName('showDetails')[0].innerHTML = 'Show Project Details';
    }
};

function toggleProjectInfoPsHiddenClass(target) {
    if (target.className === 'projectInfoPs hidden') {
        target.className = 'projectInfoPs';
    } else {
        target.className = 'projectInfoPs hidden';
    };
};

for (let i = 0; i < projectDetailsToggles.length; i++) {
    projectDetailsToggles[i].onclick = ()=> {
        projectsArrowDirectionChange(projectDetailsToggles[i]);
        toggleProjectInfoPsHiddenClass(allProjectInfoPs[i]);
    };
};