var CACHE = "arcade-v26";
/* No "./" entry: the fetch handler folds it into "./index.html" so the two
   entry points can never drift apart. */
var FILES = ["./index.html","./decant.html","./blocks.html","./towers.html","./gridiron.html","./hatchery.html","./cascade.html","./sudoku.html","./glider.html","./holdfast.html","./verdict.html","./app.css",
             "./manifest.json","./apple-touch-icon.png","./icon-192.png","./icon-512.png"];

/* addAll() is all-or-nothing: one file that has not finished deploying yet
   fails the whole install, the new worker never activates, and the phone
   keeps serving the previous build's menu - missing whatever game was just
   added. Cache the files one at a time so a straggler costs one file, not
   the update. */
function warm(c){
  return Promise.all(FILES.map(function(f){
    return c.add(f).catch(function(){});
  }));
}

self.addEventListener("install", function(e){
  e.waitUntil(caches.open(CACHE).then(warm));
  self.skipWaiting();
});
self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.map(function(k){ if(k !== CACHE) return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});

/* The icons are the only files here that never change, so they are the only
   ones served from the cache first. Everything else - pages, the shared
   stylesheet, the manifest - goes to the network first and falls back to the
   cache when offline, so a new build is never pinned behind a stale copy. */
function isStaticAsset(url){
  return /\.png$/.test(url.pathname);
}

/* The home screen launches at "./" and every in-game back link points at
   "./index.html". They are the same document, so give them the same cache
   key - otherwise one entry can go stale while the other is current and the
   menu changes depending on how you arrived at it. */
function cacheKey(request){
  var url = new URL(request.url);
  if(url.pathname.slice(-1) === "/") return new Request(url.pathname + "index.html");
  return request;
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

  var key = cacheKey(e.request);
  e.respondWith(
    fetch(e.request).then(function(res){
      if(res && res.ok){
        var copy = res.clone();
        caches.open(CACHE).then(function(c){ c.put(key, copy); });
      }
      return res;
    }).catch(function(){
      return caches.match(key).then(function(hit){
        // an uncached page request offline still gets the menu rather than an error
        return hit || (e.request.mode === "navigate" ? caches.match("./index.html") : undefined);
      });
    })
  );
});
