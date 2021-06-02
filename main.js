// JavaScript source code

var onSidebar = 0;
var ismouseMenu;

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
    if (onSidebar == 1) {
      //  document.getElementById('sidebarContainer').style.webkitTransform = 'scale(1,1)';
        document.getElementById('sidebarContainer').style.left = '0px';
        document.getElementById('container').style.width = '70vw';
        document.getElementById('container').style.marginLeft = '30vw';
    }
    else {
     //   document.getElementById('sidebarContainer').style.webkitTransform = 'scale(0,1)';
        document.getElementById('sidebarContainer').style.left = '-30vw';
        document.getElementById('container').style.width = '100vw';
        document.getElementById('container').style.marginLeft = '0vw';
    }
}

