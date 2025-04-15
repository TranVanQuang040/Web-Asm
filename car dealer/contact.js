document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const responseMessage = document.getElementById("response-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Ngăn trang web tải lại

        // Hiển thị thông báo thành công
        responseMessage.classList.remove("hidden");

        // Xóa nội dung form sau khi gửi
        form.reset();

        // Ẩn thông báo sau 5 giây
        setTimeout(() => {
            responseMessage.classList.add("hidden");
        }, 5000);
    });
});
