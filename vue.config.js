module.exports = {
    pwa: {
      name: 'Warehouse PWA', // Nombre de la app
      themeColor: '#42b983', // Color del tema para la barra de navegación
      msTileColor: '#000000', // Color para dispositivos Windows
      appleMobileWebAppStatusBarStyle: 'black-translucent', // Estilo de barra de estado en iOS
      workboxOptions: {
        skipWaiting: true, // Fuerza que el Service Worker se active inmediatamente
        clientsClaim: true, // Hace que el SW reclame clientes inmediatamente después de la activación
      },
      manifestOptions: {
        background_color: '#ffffff', // Color de fondo para el icono de la app
      },
    },
  }
  