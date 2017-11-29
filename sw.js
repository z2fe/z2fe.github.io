self.addEventListener('fetch', function (event) {
    if (/\.jpg/.test(event.request.url)) {
        event.respondWith(fetch('https://cn.vuejs.org/images/logo.png'))
    }
});