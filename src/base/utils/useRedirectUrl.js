import { useState } from "react";

import { useHistory } from "react-router-dom";

// Ut eleifend, enim ut aliquam pretium, ligula ante aliquam elit, in maximus nisi lectus sit amet massa. Sed euismod faucibus lacus
function useRedirectUrl() {
  // To use push (redirect) and current url
  const history = useHistory();

  // url as State attribute
  const [url, setUrl] = useState(history.location.pathname); // initial state: current url

  // Redirect to (/path)
  const redirectTo = (url) => {
    history.push(url);
    setUrl(url);
  };

  return [url, redirectTo];
}

export default useRedirectUrl;
