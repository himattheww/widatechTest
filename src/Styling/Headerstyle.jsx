const header = {
    position: "fixed", // kalau di scroll tetap lengket
    width: "100%",
    zIndex: 1000,
    fontFamily: "Roboto, sans-serif",
    backgroundColor: "#5d4037", // Warna cokelat hangat
  };
  
  const logo = {
    justifyContent: "flex-start",
    marginRight: "10px", // Jarak antara logo dan teks
    height: "40px", // Ukuran tinggi logo
  };
  
  const typhographyx = {
    justifyContent: "flex-start",
    flexgrow: 1,
    fontFamily: "Roboto, sans-serif",
    fontWeight: 700, // Ketebalan font yang lebih kuat
    fontSize: "1.5rem", // Ukuran font yang lebih besar untuk menonjolkan merek
    color: "#ffffff", // Teks berwarna putih agar kontras dengan latar belakang
    marginLeft: "10px", // Jarak antara logo dan teks
  };
  
  const buttonn = {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 500,
    fontSize: "1rem",
    color: "white",
    "&:hover": {
      backgroundColor: "#6d4c41",
    },
    marginLeft: "10px", // Jarak antara tombol-tombol
  };
  
  const toolbar = {
    width: "100%", // Menyesuaikan lebar Toolbar dengan lebar layar
    display: "flex", // Menggunakan flex untuk mengatur logo dan teks DogShop
    alignItems: "center", // Menyatukan logo dan teks DogShop secara vertikal
  };
  
  export const headerStyle = {
    header,
    typhographyx,
    buttonn,
    logo,
    toolbar,
  };
  