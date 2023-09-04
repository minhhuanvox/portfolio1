
// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky header 
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.screenY >= document.scrollingElement.scrollHeight);
}
// Ngăn chặn sự kiện mặc định khi người dùng nhấn phím Ctrl+U
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'u') {
        event.preventDefault(); // Ngăn chặn sự kiện mặc định
    }
});
// Ngăn chặn nhấn chuột phải để xem mã nguồn
window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Lấy tham chiếu đến nút tải xuống
const downloadButton = document.getElementById('downloadButton');

// Đăng ký sự kiện click cho nút tải xuống
downloadButton.addEventListener('click', () => {
    // Đường dẫn đến tệp tin cần tải xuống
    const fileUrl = './files/VoMinhHuan_WebDeveloperIntern.pdf';

    // Tạo một phần tử a (link) ẩn để tải xuống tệp tin
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'VoMinhHuan_WebDeveloperIntern.pdf'; // Tên tệp tin mà người dùng sẽ nhìn thấy khi tải xuống
    link.click();
});