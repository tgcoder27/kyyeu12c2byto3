/* Định dạng tổng thể */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #222;
    color: white;
    text-align: center;
}

/* Căn giữa header và giới hạn chiều rộng */
header {
    background: black;
    padding: 15px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Logo + navigation trong một khối giới hạn */
.header-container {
    max-width: 1200px;  /* Giữ nguyên kích thước trung tâm */
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}

/* Logo */
.logo {
    font-size: 24px;
    font-weight: bold;
}

/* Navigation */
nav ul {
    list-style: none;
    display: flex;
    padding: 0;
}
nav ul li {
    margin: 0 15px;
}
nav ul li a {
    text-decoration: none;
    color: white;
    padding: 8px 12px;
    background: gold;
    border-radius: 5px;
}

/* Căn giữa banner và giữ đúng tỉ lệ */
.slideshow {
    position: relative;
    width: 100%;
    max-width: 1200px; /* Giới hạn chiều rộng */
    aspect-ratio: 16 / 9; /* Giữ nguyên tỉ lệ ảnh */
    margin: 20px auto; /* Căn giữa */
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
}

/* Ảnh nền của slider */
.slider {
    width: 100%;
    height: 100%;
    position: relative;
}
.slide {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.7s ease-in-out;
}
.slide.active {
    opacity: 1;
}

/* Nút điều hướng */
button.prev, button.next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px 15px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 5px;
}
button.prev { left: 10px; }
button.next { right: 10px; }
button.prev:hover, button.next:hover {
    background: rgba(255, 215, 0, 0.8);
}
