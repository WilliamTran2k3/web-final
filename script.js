const body = $("body"),
    sidebar = $(".my-sidebar"),
    toggle = $(".toggle"),
    searchBox = $(".search-box"),
    modeSwitch = $(".toggle-switch"),
    modeText = $(".mode-text");
$(window).scroll(() => {
    if (!sidebar.hasClass("close")) sidebar.toggleClass("close");
});
toggle.click(() => sidebar.toggleClass("close"));
modeSwitch.click(() => {
    body.toggleClass("dark");
    if (body.hasClass("dark")) {
        modeText.text("Light Mode");
    } else {
        modeText.text("Dark Mode");
    }
});
$("#search-icon").click(() => {
    if (sidebar.hasClass("close")) {
        sidebar.toggleClass("close");
        $("#search-input").focus();
    }
});