! function() {
    'use strict'
    const color = (Math.floor(Math.random() * 46) + 210).toString(16) + (Math.floor(Math.random() * 46) + 210).toString(16) + (Math.floor(Math.random() * 46) + 210).toString(16);
    const dark = (Math.round((parseInt(color.substring(0, 2), 16)) * .75)).toString(16).padStart(2, "0") + (Math.round((parseInt(color.substring(2, 4), 16)) * .75)).toString(16).padStart(2, "0") + (Math.round((parseInt(color.substring(4, 6), 16)) * .75)).toString(16).padStart(2, "0");
    const dark_ooooooooo = (Math.round((parseInt(color.substring(0, 2), 16)) * .45)).toString(16).padStart(2, "0") + (Math.round((parseInt(color.substring(2, 4), 16)) * .45)).toString(16).padStart(2, "0") + (Math.round((parseInt(color.substring(4, 6), 16)) * .45)).toString(16).padStart(2, "0");


    document.documentElement.style.setProperty('--secondary', '#' + color);
    document.documentElement.style.setProperty('--accent', '#' + dark);
    document.documentElement.style.setProperty('--third', '#' + dark_ooooooooo);
}()
