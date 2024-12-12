// {
//     "name": "elec",
//     "private": true,
//     "version": "0.0.0",
//     "type": "module",
//     "main": "main.cjs",
//     "scripts": {
//       "dev": "vite",
//       "build": "vite build",
//       "lint": "eslint .",
//       "preview": "vite preview",
//       "electron": "electron .",
//       "package": "electron-builder --mac --win --linux"
//     },
//     "dependencies": {
//       "axios": "^1.7.9",
//       "react": "^18.3.1",
//       "react-dom": "^18.3.1",
//       "react-hot-toast": "^2.4.1",
//       "react-router-dom": "^7.0.2"
//     },
//     "devDependencies": {
//       "@eslint/js": "^9.15.0",
//       "@types/react": "^18.3.12",
//       "@types/react-dom": "^18.3.1",
//       "@vitejs/plugin-react": "^4.3.4",
//       "autoprefixer": "^10.4.20",
//       "electron": "^33.2.1",
//       "electron-builder": "^25.1.7",
//       "eslint": "^9.15.0",
//       "eslint-plugin-react": "^7.37.2",
//       "eslint-plugin-react-hooks": "^5.0.0",
//       "eslint-plugin-react-refresh": "^0.4.14",
//       "globals": "^15.12.0",
//       "postcss": "^8.4.49",
//       "tailwindcss": "^3.4.16",
//       "vite": "^6.0.1"
//     },
//     "build": {
//       "asar": true,
//       "appId": "com.example.elec",
//       "productName": "MyApp",
//       "directories": {
//         "output": "dist",
//         "buildResources": "build"
//       },
//       "files": [
//         "dist/**/*",
//         "main.cjs",
//         "package.json"
//       ],
//       "win": {
//         "target": ["nsis", "portable"]
//       },
//       "mac": {
//         "target": ["dmg", "zip"],
//         "category": "public.app-category.utilities"
//       },
//       "linux": {
//         "target": ["AppImage", "deb", "zip"]
//       },
//       "nsis": {
//         "oneClick": false,
//         "allowToChangeInstallationDirectory": true,
//         "license": "license.txt"
//       }
//     }
//   }
  