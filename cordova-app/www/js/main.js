// Wait for device API libraries to load
function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

// device APIs are available
function onDeviceReady() {
    setTimeout(() => {
        if (navigator.connection.type == Connection.NONE) {
            window.location.href = "pages/no_connection.html";
        } else {
            window.location.href = "pages/home.html";
        }
    }, 3000);
}