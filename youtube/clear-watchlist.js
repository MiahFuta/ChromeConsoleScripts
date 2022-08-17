var listCount = document.querySelectorAll('.style-scope .ytd-playlist-video-list-renderer #button.style-scope.yt-icon-button').length;
console.log('Atempting to clear ' + listCount + ' videos!');
setInterval(() => {
    var newListCount = document.querySelectorAll('.style-scope .ytd-playlist-video-list-renderer #button.style-scope.yt-icon-button').length;
    if (newListCount <= 0 ) { location.reload(); }
    document.querySelectorAll('.style-scope .ytd-playlist-video-list-renderer #button.style-scope.yt-icon-button')[0].click();
    document.querySelectorAll(".style-scope .ytd-menu-popup-renderer .style-scope .ytd-menu-service-item-renderer")[8].click();
}, 500);
