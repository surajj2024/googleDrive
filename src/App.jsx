import { useState } from "react";
import "./App.css";
import Header from "./components/header/Index";
import Sidebar from "./components/sidebar/Index";

function App() {
  const [user, setUser] = useState({
    displayName: "David Rakosi",
    email: "david@cleverprogrammer.com",
    emailVerified: true,
    phoneNumber: null,
    photoURL:
      "https://lh6.googleusercontent.com/-KyLTWqvDIHQ/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclcWGWqkt6YUAan32YO4CSR07Y2jw/s96-c/photo.jpg",
  });

  // Authentication

  return (
    <div>
      {/* Header */}
      <Header userPhoto={user.photoURL} />
      <Sidebar />
      {/* auth = true
        sidebar
        filesView
        sideIcons
    */}

      {/* No auth: login */}
    </div>
  );
}

export default App;
