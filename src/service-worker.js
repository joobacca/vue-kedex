import constants from './constants';

const { POKE_API } = constants;

const CACHE_NAME = 'POKEMON';

// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', (e) => {
  // const { request } = e;
  // const url = new URL(request.url);
  const { request } = e;
  if (!request.url.startsWith(POKE_API)) return;
  const resource = global.caches.match(request).then((response) => {
    if (response) return response;

    return fetch(request)
      .then((responseNetwork) => {
        if (!responseNetwork || !responseNetwork.ok) return responseNetwork;

        const responseCache = responseNetwork.clone();

        global.caches
          .open(CACHE_NAME)
          .then((cache) => cache.put(request, responseCache));

        return responseNetwork;
      })
      .catch(() => {
        if (e.request.mode === 'navigate') {
          return global.caches.match('./');
        }

        return null;
      });
  });

  e.respondWith(resource);
});
