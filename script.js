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
$("input").attr("spellcheck", false);
const trig = $(".my-nav-bottom-link").toArray(); // Lay tat ca the nav
let lastClickElement = trig[0]; // Biến lưu lại phần tử vừa click, mặc định là trang home. Tối ưu thay vì dùng loop để duyệt và tìm
let preClickElement = trig[0]; // Biến lưu lại phần tử vừa click, mặc định là trang home. Tối ưu thay vì dùng loop để duyệt và tìm
// Gan su kien click cho cac the
trig.forEach((element) => {
    $(element).on("click", () => {
        // Xử lý trường hợp khi đang ở setting nhưng click vào setting một lần nữa thì mặc định trả lại trạng thái active ở trang hiện tại
        if (
            element === lastClickElement &&
            $(element).hasClass("has-sub-menu")
        ) {
            $(preClickElement).addClass("active");
            $(element).toggleClass("active");
            lastClickElement = preClickElement;
            return;
        }
        $(lastClickElement).removeClass("active"); // Xóa trạng thái active của thẻ đã click trước đó
        console.log("last", $(lastClickElement));
        if ($(element).hasClass("has-sub-menu")) {
            $(element).addClass("active");
        } else {
            if (!$(element).hasClass("active")) {
                $(element).addClass("active");
            }
        }
        preClickElement = lastClickElement;
        lastClickElement = element; // Ghi lại thẻ vừa click để xóa
    });
});