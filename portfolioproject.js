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

function arrowDirectionChange(targetHeading) {
    if (targetHeading.getElementsByClassName('leftArrow')[0].innerHTML === '↓ &nbsp;') {
        targetHeading.getElementsByClassName('leftArrow')[0].innerHTML = '&uarr; &nbsp;';
        targetHeading.getElementsByClassName('rightArrow')[0].innerHTML = '&nbsp; &uarr;';
        document.getElementsByClassName('informationBlock')[0].style.justifyContent ='flex-start'; 
    } else if (targetHeading.getElementsByClassName('leftArrow')[0].innerHTML === '↑ &nbsp;') {
        targetHeading.getElementsByClassName('leftArrow')[0].innerHTML = '&darr; &nbsp;';
        targetHeading.getElementsByClassName('rightArrow')[0].innerHTML = '&nbsp; &darr;';
        document.getElementsByClassName('informationBlock')[0].style.justifyContent ='center';
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
        arrowDirectionChange(aboutMeHeadings[i]);
        toggleParagraphHiddenClass(aboutMeParagraphs[i]);
    };
};

//Following code for Projects section ---------------------------------------------------------------------------------------------

            //.taskOutcome - contained by .projectPic, .taskSourceCode - contained by .projectTitle, and .taskOutline - contained by .outsideLink are all also .tooltips.

let tooltipTriggers = document.getElementsByClassName('tooltipTrigger');
let tooltips = document.getElementsByClassName('tooltip');

function removeTooltipHiddenClass(target) {
        target.className = 'tooltip';
};

function addTooltipHiddenClass(target) {
    target.className = 'tooltip hidden';
};

for (let i = 0; i < tooltipTriggers.length; i++) {
    tooltipTriggers[i].onmouseover = ()=> {
        removeTooltipHiddenClass(tooltips[i]);
    };
};

for (let i = 0; i < tooltipTriggers.length; i++) {
    tooltipTriggers[i].onmouseout = ()=> {
        addTooltipHiddenClass(tooltips[i]);
    };
};