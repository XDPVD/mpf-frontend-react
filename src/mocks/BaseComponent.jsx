import { UserProvider } from "@context/userContext";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter } from "react-router-dom";
import theme from "@styles/theme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

function BaseComponent({ children }) {
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CookiesProvider>
            <UserProvider>{children}</UserProvider>
          </CookiesProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default BaseComponent;
