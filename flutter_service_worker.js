'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/config": "897240c6b3ba44f58c871268c3a71000",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6a2b5240f25015e5db9bba039db51f3b",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "eb83dd2e7b905b8b325129b306e21765",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "29c015b8f2d11ca7ddecf75245d5e178",
".git/logs/refs/heads/master": "29c015b8f2d11ca7ddecf75245d5e178",
".git/logs/refs/remotes/origin/master": "e955e19b2cae3827eea99782fa35fca1",
".git/objects/00/505526fc11b368f341d33320f4176888feb4af": "b5cfe89c03e50f1469df900f45fefa1f",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/11/471d19f02ab63b3f50c282065b70a50e9bc92a": "5b1b9e1dcefc07a9cb18cd11c58302d8",
".git/objects/14/dccd07a4fb9ef7af1259d89ba594c3d79de3ed": "abdc28a3e7f13a9745e69f4e2d943727",
".git/objects/1a/6639011ea4e399780885bf3aafd3fc2b126f04": "d84526235c5788ce13d96c5b3ad6ea39",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1b/de5de06b9cd106c5eec79c2d500ee912d4fa89": "df3ea456fb32b4a804d527cb1d1a2acc",
".git/objects/1f/5614f48f7fae668a06131dc2bac36f903b3922": "473ec4471e5695edb000272d6fa89802",
".git/objects/20/4a2de032991486faefb482c17d745cb602d3a9": "190613295259e84ddb9d70de6539bf24",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/aaea0084cd62ab73b284397640be9e0b38c9b6": "82beb454ed88bca57a34c94f9fd04031",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/32/cb359a149adbca9eb1a333ffa8fed2d67dcc21": "c074c2a1f25fe622fc3fb66b722b72f4",
".git/objects/38/4c9763dd0d0e96736bf9100bb0436840d47b81": "eb44a1630f5b91f536f31ecc3792d256",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/d7336a87eeba763ba8e261ac2506602fb4fa9c": "b052a5dc341b65d953846957249872fa",
".git/objects/41/bb5f955fee55c5ebc0f7c6d7bda8b5ae9c6be1": "ba1e9d098ae8dcc3e7153bbf1ca8b007",
".git/objects/42/6eda53ca2cb51752fb278e06fd3d7958b6e57a": "f99f7dfdf17d8df962b7a7b5367d25aa",
".git/objects/42/ea38d61e75309e70ed04134706e5ad41a20f8d": "39f84aa2bbb963dfd8e6fa639a7778ba",
".git/objects/47/ed5368da2b2eaf8ace81bc5142a1ea5b999413": "7f6b4fd3b028d0240f4dc660fe9ec813",
".git/objects/4a/3b0873ae77f8d85135cc7038ce9453ba0bab6c": "f6b475d1ca29957cab43222ce052dec9",
".git/objects/4b/7274a6568e5ecc6cb8402244c9f5ca2605b275": "a5c60812032729634cedd3333bf47359",
".git/objects/68/47417fca92602ab59d613c4cac91c37c50c29f": "39c9661d5803d139a9afd125e9b5c4d5",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/ce881129fcf7e30a7ee63e2ae48abf15bfe17f": "f29b5351e180b2873f029994dd74f65c",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/87/882a046d7948d3a285fffe14b323ae3cd8c7d4": "c67c98449e8a90b2f0a4e8129746da34",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/5990cfe4cdb1ba3f7cc818bc2ea08b9b563aa1": "3f3a2a6da319ae4496c089e15c84bb14",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/a66a72e4efd72be696b5764ee5229516c493e2": "b43ce129c2890a7e1dc70319b044f940",
".git/objects/8c/c348517458135641c17abe903b47be5f6c0162": "23e30c9e733563abd5683ab39de9f6f2",
".git/objects/8d/33a9ce3a69f18b2ac44c3893a638eb8c2acddc": "4545eede784c40b052e5fb5a141d25a2",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/93/ebf9efc9761946064098a459359313b79b7dc3": "43631f3198738ee70876e4eff2214ed3",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/94/c3e2c1511f9cd6d6c07bdc6f85aced567afb1d": "af6533552e3bb26ef39083aba3774c38",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/2efd6fa2a527ea5046e70f4f88918517040b06": "d013bd99b04ae4822a324b2bed168982",
".git/objects/af/b4496435fb9e7eeef2f8164e5bf10663c4622a": "b4a1a8ba5195cf4cf63188b3bc714a20",
".git/objects/b6/d35524f1bb3574808169f6890a2264ef8ec87a": "98a16ce60fb5f017635b50f36233ef0b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/1c9f4a2ef5fc79b69ffb422a3788ad9a989abf": "b6c0d60861d445a5118fe24bcb814d4c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6933b0226598a03d16b153c4599d043bad5582": "281d3bac3e815a381034f551ad30c38a",
".git/objects/bb/4307ad5f849e70e9ea5b3e2bf0c97f556f6fed": "307b1c7d5f7b3c6b0fde62a2da08f642",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/c1/cbfef1abbb580b9f544a61a9af798cdff13f1c": "7966f93e22789c947a61f39ce841ab8a",
".git/objects/c2/1de34cf1f522d9037453c4fa61465611bc58d3": "01719899ca8b74bffb7bb6840abd173a",
".git/objects/c4/54e7c26d618a6b57462342cb172cd1f4495976": "16dff5d0541275f1c18d27bba26353b9",
".git/objects/c5/6340298a29ef8369c49e744df7794e646b08a9": "f8ccdf5e7efc943505d9093126aa23fe",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/d187d859db75a5428c2c244ded211939531e1c": "3cb0db7ca2b72fd60474f006ef16bc7c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/ff51586ab1720617a2e957c0a7cc8fbce11dc5": "acc6442a345594211de678c22e042e01",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/0ee2dbce52bbed01b56fff0ef4f048a7c71b6f": "6b7813243b19b9f3cb7753361b0da27a",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/f30015c87c5ab22707be9ad4c2e9a39394c8d1": "127d8dded62b8c3b7ff9f0dace297fda",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/0766dd1be882befe1cb078cbe21029bb22a996": "f3b0a31bef83ae973dc74758234cb383",
".git/objects/f4/79f1f27c5f0b481c87f8ae4a760ea6a24046ac": "aae081770d3d63e434c519b5a07fe318",
".git/objects/f9/30d1e1e2d9af50662614ec95bfc2a5b20b0a8e": "0658ca185ad2f87ec49c8d3f98ed4f86",
".git/objects/f9/95ba6191a445bb9d733f652cbd7532a90f21bc": "4b92b54c9835a4d0df97ea9d9c151419",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/ORIG_HEAD": "1da6276aaa3a8d729b0d6dd35eda6a9b",
".git/refs/heads/master": "6e59b3d0aed1a9136c0d43da94746ea6",
".git/refs/remotes/origin/master": "6e59b3d0aed1a9136c0d43da94746ea6",
".git/tgitchangelist": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "75759cfa05b9bfe59267cb7bb292beb9",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/jp.png": "b7a724413be9c2b001112c665d764385",
"assets/images/kr.png": "9e2a9c7ae07cf8977e8f01200ee2912e",
"assets/images/ordem.png": "31af6161c3cc568fd3d034f79d794ec7",
"assets/NOTICES": "0b59ae76eddc4b72d5374a0e9eb20799",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/shaders/ink_sparkle.frag": "c2aefc642c7fdc288ae7f8445abf7a9c",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "06bcfff117c18ff66654c669d90e6825",
"/": "06bcfff117c18ff66654c669d90e6825",
"main.dart.js": "554881239dccaaa38198c001efc1c4ca",
"manifest.json": "2ae4b12933d75da09754324f41620797",
"version.json": "2e1e984ef4114f7b7e62dadd492b5721"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
