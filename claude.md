# Claude.md - Airbnb Clone Project

## Project Overview
This is an Airbnb clone React Native application that has been migrated to Expo for easier development and deployment.

## Technology Stack
- **Framework**: Expo SDK 53
- **React Native**: 0.79.0
- **React**: 19.0.0
- **Navigation**: React Navigation v6 (Bottom Tabs)
- **Icons**: Expo Vector Icons
- **Architecture**: New Architecture enabled (Fabric & TurboModules)

## Development Commands

### Start Development Server
```bash
npm start
# or
expo start
```

### Platform-Specific Development
```bash
npm run android    # Start Android development
npm run ios        # Start iOS development
npm run web        # Start web development
```

### Testing
```bash
npm test           # Run Jest tests
```

### Build & Deploy
```bash
npm run eject      # Eject from Expo (if needed)
```

## Project Structure
```
├── expo/
│   └── AppEntry.js         # Expo entry point
├── screens/
│   ├── Explore.js         # Main explore screen
│   ├── Saved.js           # Saved listings screen
│   ├── Trips.js           # User trips screen
│   ├── Inbox.js           # Messages screen
│   └── Profile.js         # User profile screen
├── assets/
│   ├── airbnb.png         # App logo
│   ├── icon.png           # App icon
│   ├── splash.png         # Splash screen
│   └── adaptive-icon.png  # Android adaptive icon
├── App.js                 # Main app component with navigation
├── app.json              # Expo configuration
└── package.json          # Dependencies and scripts
```

## Navigation Structure
The app uses React Navigation v6 with a bottom tab navigator containing:
- **Explore**: Main screen for browsing listings
- **Saved**: User's saved/favorited listings
- **Trips**: User's booking history and upcoming trips
- **Inbox**: Messages and notifications
- **Profile**: User account settings and information

## Key Features
- Bottom tab navigation with custom icons
- Expo-compatible architecture
- React Native New Architecture support
- Cross-platform compatibility (iOS, Android, Web)
- Modern React hooks-based components

## Development Notes

### Migration from React Navigation v4 to v6
- Replaced `createBottomTabNavigator` and `createAppContainer` with new v6 APIs
- Updated navigation options syntax
- Migrated to function components with hooks

### Expo Integration
- Added Expo SDK with all necessary dependencies
- Configured `app.json` for Expo development
- Set up proper entry point via `expo/AppEntry.js`
- Enabled New Architecture for better performance

### Dependencies Upgraded
- React Native: 0.61.5 → 0.79.0
- React: 16.12.0 → 19.0.0
- Navigation: v4 → v6
- Vector Icons: react-native-vector-icons → @expo/vector-icons
- Build tools: Updated to latest versions

## Known Issues & Fixes
- Used `--legacy-peer-deps` for npm install due to peer dependency conflicts
- Some dependency warnings are expected during migration period
- New Architecture is enabled but may need testing on physical devices

## Getting Started
1. Install dependencies: `npm install --legacy-peer-deps`
2. Start development server: `npm start`
3. Open Expo Go app on your device or use simulator
4. Scan QR code or enter URL to load the app

## Future Enhancements
- Add EAS Build configuration for production builds
- Implement over-the-air updates
- Add more Expo plugins for native functionality
- Update to latest stable React Native version when available

- DONT RUN COMMANDS IN TERMINAL, JUST GIVE ME INSTRUCTIONS TO RUN THE COMMANDS YOU WANT ME TO RUN
