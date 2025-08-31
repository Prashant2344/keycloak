# Keycloak Authentication Setup

## Environment Variables

Create a `.env` file in the root of this project with the following variables:

```bash
VITE_KEYCLOAK_URL=http://localhost:8080
VITE_KEYCLOAK_REALM=master
VITE_KEYCLOAK_CLIENT=demo-client
```

## Keycloak Server Setup

1. **Start Keycloak Server**: Make sure your Keycloak server is running on the specified URL
2. **Create Realm**: Create a new realm or use the default 'master' realm
3. **Create Client**: 
   - Go to Clients → Create
   - Set Client ID: `demo-client`
   - Set Client Protocol: `openid-connect`
   - Set Access Type: `public`
   - Add Valid Redirect URIs: `http://localhost:5173/*` (for development)
   - Add Web Origins: `http://localhost:5173` (for development)

## Running the Application

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Open browser to `http://localhost:5173`

## Features

- **Public Page**: Shows login button for unauthenticated users
- **Protected Page**: Shows user information and logout button for authenticated users
- **Automatic Token Refresh**: Tokens are automatically refreshed every minute
- **Silent SSO**: Supports silent authentication checks
- **Error Handling**: Proper error handling for authentication failures

## Authentication Flow

1. User visits the app → redirected to Keycloak login
2. After successful login → redirected back to app
3. User sees protected content with their information
4. User can logout → redirected back to public page
5. Tokens are automatically refreshed in the background
