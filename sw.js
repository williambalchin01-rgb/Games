var CACHE = "decant-v4";
var FILES = ["./","./index.html","./manifest.json","./apple-touch-icon.png","./icon-192.png","./icon-512.png"];

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

/* The page itself goes to the network first and falls back to the cache, so a
   new build lands on the next visit instead of being pinned to whatever was
   cached. Icons and the manifest are content-addressed by name and rarely
   change, so they stay cache-first for speed and offline use. */
self.addEventListener("fetch", function(e){
  if(e.request.method !== "GET") return;

  var url = new URL(e.request.url);
  var isPage = e.request.mode === "navigate" ||
               (url.origin === self.location.origin && /\/(index\.html)?$/.test(url.pathname));

  if(isPage){
    e.respondWith(
      fetch(e.request).then(function(res){
        var copy = res.clone();
        caches.open(CACHE).then(function(c){ c.put(e.request, copy); });
        return res;
      }).catch(function(){
        return caches.match(e.request).then(function(hit){
          return hit || caches.match("./index.html");
        });
      })
    );
    return;
  }

  e.respondWith(caches.match(e.request).then(function(hit){
    return hit || fetch(e.request).then(function(res){
      var copy = res.clone();
      caches.open(CACHE).then(function(c){ c.put(e.request, copy); });
      return res;
    }).catch(function(){ return caches.match("./index.html"); });
  }));
});
