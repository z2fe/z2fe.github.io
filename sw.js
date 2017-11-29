self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
        .then(function (response) {
            if (response) {
                return response;
            } else {
                if (event.request.url.endsWith('jpg')) {
                    return 'https://cn.vuejs.org/images/logo.png';
                }
                return fetch(event.request);
            }
        })
    );
});