// JavaScript source code

var onSidebar = 0;
var ismouseMenu;
var ScrWidth;

function entermouseMenu() {
    ismouseMenu = 1;
}
function leavemouseMenu() {
    ismouseMenu = 0;
}

function clickBatang() {
    if (ismouseMenu==0) {
        onSidebar = 0;
        updateSidebar();
    }
}

function menubutton() {
    if (onSidebar == 1) {
       onSidebar = 0;
        updateSidebar();
    }
    else {
        onSidebar = 1;
        updateSidebar();
    }
}

function updateSidebar() {  
    ScrWidth = screen.width;
    if (onSidebar == 1) {
        if (ScrWidth > 600) {
          
            document.getElementById('sidebarContainer').style.left = '0px';
            document.getElementById('container').style.width = '70vw';
            document.getElementById('container').style.marginLeft = '30vw';
        }
        else {
            
        }

    }
    else {

        document.getElementById('sidebarContainer').style.left = '-130vw';

        document.getElementById('container').style.width = '100vw';
        document.getElementById('container').style.marginLeft = '0vw';
    }
}


