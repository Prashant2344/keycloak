import React, { useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";

const client = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT,
});

const useAuth = () => {
  const isRun = useRef(false);
  const [token, setToken] = useState(null);
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    if (isRun.current) return;
    isRun.current = true;
    client
  .init({
    onLoad: "login-required",
    checkLoginIframe: false, // disable session iframe checks for dev
    pkceMethod: "S256",      // modern OIDC flow
    silentCheckSsoRedirectUri: window.location.origin + "/silent-check-sso.html",
  })
  .then((authenticated) => {
    setLogin(authenticated);
    setToken(client.token);
    if (authenticated) {
      console.log("User is authenticated ✅");
      console.log("Token:", client.token);
    } else {
      console.log("User is NOT authenticated ❌");
    }
  })
  .catch((err) => {
    console.error("Keycloak init error:", err);
  });

  }, []);
  console.log("isLogin", isLogin);
  return [isLogin, token];
};

export default useAuth;