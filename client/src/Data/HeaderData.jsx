const HeaderData = {
  topHeader: {
    logo: "https://png.pngtree.com/png-clipart/20230819/original/pngtree-random-dice-icon-isometric-vector-picture-image_8043755.png",
    contactOptions: [{ label: "AppName", number: "1800 XXX XXX" }],
    appName: "AppName",
    languages: [
      { code: "en", name: "English" },
      { code: "ar", name: "Arabic" },
      { code: "fr", name: "French" },
      { code: "de", name: "German" },
      { code: "zh-CN", name: "Chinese" },
    ],
  },

  //

  sideHeader: {
    navItems: [
      { name: "Home", slug: "/", active: true },
      { name: "Websocket", slug: "/websocket", active: true },
      { name: "Socket.io", slug: "/socketio", active: true },
      //   { name: "How to Use", slug: "#", active: true },
    ],
  },
};

export default HeaderData;
