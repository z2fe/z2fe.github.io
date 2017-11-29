self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
        .then(function (response) {
            if (response) {
                return response;
            }
            return 'https://cn.vuejs.org/images/logo.png';
        });
    );
});