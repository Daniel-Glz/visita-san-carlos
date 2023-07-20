import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/vendors/fontawesome/css/all.min.css";
import "@/assets/vendors/tevily-icons/style.css";
import "@/assets/vendors/dm-sans-font/stylesheet.css";
import "@/assets/vendors/reey-font/stylesheet.css";

//Custom CSS
import '@/assets/styles/globals.css';
import '@/assets/styles/style-responsive.css';
import '@/assets/styles/style.css';
import ContextProvider from '@/context/ContextProvider';

const App = ({ Component, pageProps }) => {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}

export default App;
