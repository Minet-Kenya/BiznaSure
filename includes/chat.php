<div class="toast-container position-fixed end-0 p-3">
    <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
        <div class="toast-header d-flex justify-content-center align-items-center bg-primary text-light">
            <p class="mb-0 fw-bold">Live chat</p>
            <button type="button" class="btn-close ms-auto" data-bs-theme="dark" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            <div class="toast-messages overflow-auto">
                <div class="d-flex flex-row justify-content-start mb-4">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" width="" height="" alt="avatar 1" style="width: 45px;
                                                        height: 100%">
                    <div class="p-3 ms-3" style="border-radius: 15px;
                                                        background-color: rgba(57, 192, 237,.2)">
                        <p class="small mb-0">Hello and thank you for visiting Minet BiznaSure. How can we help you today</p>
                    </div>
                </div>
                <!-- <div class="d-flex flex-row justify-content-end mb-4">
                    <div class="p-3 me-3 border" style="border-radius: 15px;
                                                        background-color: #fbfbfb">
                        <p class="small mb-0">Thank you, I really like your product.</p>
                    </div>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp" width="" height="" alt="avatar 1" style="width: 45px; height: 100%">
                </div> -->
            </div>
            <form action="" method="get" class="needs-validation" novalidate>
                <textarea class="form-control" id="message" rows="3" required></textarea>
                <label class="form-label" for="textAreaExample">Type your message</label>
                <div class="invalid-feedback">
                    Please type in a message before submitting.
                </div>
                <div class="text-end">
                    <button type="submit" class="btn btn-primary">Send</button>
                </div>
            </form>
        </div>
    </div>
</div>

<?php

$message = $_GET["message"];

// I want to make the message



?>