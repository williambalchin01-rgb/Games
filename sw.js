var CACHE = "arcade-v10";
var FILES = ["./","./index.html","./decant.html","./blocks.html","./towers.html","./gridiron.html","./app.css",
             "./manifest.json","./apple-touch-icon.png","./icon-192.png","./icon-512.png"];

self.addEventListener("install", function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(FILES); }));
  self.skipWaiting();
});
self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.map(function(k){ if(k !== CACHE) return caches.delete(k); }));
  }));
  self.clients.claim();
});

/* The icons are the only files here that never change, so they are the only
   ones served from the cache first. Everything else - pages, the shared
   stylesheet, the manifest - goes to the network first and falls back to the
   cache when offline, so a new build is never pinned behind a stale copy. */
function isStaticAsset(url){
  return /\.png$/.test(url.pathname);
}

self.addEventListener("fetch", function(e){
  if(e.request.method !== "GET") return;

  var url = new URL(e.request.url);
  if(url.origin !== self.location.origin) return;

  if(isStaticAsset(url)){
    e.respondWith(caches.match(e.request).then(function(hit){
      return hit || fetch(e.request).then(function(res){
        var copy = res.clone();
        caches.open(CACHE).then(function(c){ c.put(e.request, copy); });
        return res;
      });
    }));
    return;
  }

  e.respondWith(
    fetch(e.request).then(function(res){
      var copy = res.clone();
      caches.open(CACHE).then(function(c){ c.put(e.request, copy); });
      return res;
    }).catch(function(){
      return caches.match(e.request).then(function(hit){
        // an uncached page request offline still gets the menu rather than an error
        return hit || (e.request.mode === "navigate" ? caches.match("./index.html") : undefined);
      });
    })
  );
});
