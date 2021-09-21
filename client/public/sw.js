const cacheName = "pwa-v1";
const appShellFiles = [
  "/favicon.ico",
  "/banner/banner.png",
  "/banner/banner.webp",
  "/fonts/Source_Sans_Pro/SourceSansPro-Black.ttf",
  // TODO: other font files,
  "/logos/logo.png",
  "/logos/logo.webp",
  // TODO: other logos
];

self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
  e.waitUntil(
    (async () => {
      const cache = await cache.open(cacheName);
      await cache.addAll(appShellFiles);
    })()
  );
});

self.addEventListener("fetch", (e) => {
  console.log(`[Service Worker] Fetched resource ${e.request.url}`);
});
