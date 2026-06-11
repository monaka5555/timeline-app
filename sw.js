self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || '⏰ タイムラインアプリ';
  const options = {
    body: data.body || '',
    icon: '/timeline-app/icon.png',
    badge: '/timeline-app/icon.png',
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow('/timeline-app/'));
});