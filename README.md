# Airbnb Clone - React Native + Expo

A modern React Native application that replicates the Airbnb mobile app interface, built with Expo SDK 53 and the latest React Native architecture.

## 📱 Features

- **Bottom Tab Navigation**: Explore, Saved, Trips, Inbox, and Profile screens
- **Modern UI**: Clean interface inspired by Airbnb's mobile app
- **Cross-Platform**: Runs on iOS, Android, and Web
- **Expo Ready**: Easy development and deployment with Expo tools
- **New Architecture**: Built with React Native's New Architecture for better performance

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- Expo Go app on your mobile device (for testing)

### Installation

```bash
# Clone the repository
git clone https://github.com/iagocavalcante/Airbnb.git
cd Airbnb

# Install dependencies
npm install --legacy-peer-deps

# Start the development server
npm start
```

### Running the App

```bash
# Start Expo development server
npm start

# Run on specific platforms
npm run ios       # iOS simulator
npm run android   # Android emulator
npm run web       # Web browser
```

## 🛠 Tech Stack

- **Framework**: Expo SDK 53
- **React Native**: 0.79.0
- **React**: 19.0.0
- **Navigation**: React Navigation v6
- **Icons**: Expo Vector Icons
- **Testing**: Jest
- **Architecture**: New Architecture (Fabric + TurboModules)

## 📁 Project Structure

```
├── expo/
│   └── AppEntry.js         # Expo entry point
├── screens/
│   ├── Explore.js         # Main explore screen
│   ├── Saved.js           # Saved listings
│   ├── Trips.js           # User trips
│   ├── Inbox.js           # Messages
│   └── Profile.js         # User profile
├── assets/
│   ├── airbnb.png         # App logo
│   ├── icon.png           # App icon
│   └── splash.png         # Splash screen
├── App.js                 # Main app component
├── app.json              # Expo configuration
└── package.json          # Dependencies
```

## 🎨 Screenshots

The app includes the following main screens:
- **Explore**: Browse and discover listings
- **Saved**: View favorited properties
- **Trips**: Manage bookings and travel history
- **Inbox**: Messages and notifications
- **Profile**: Account settings and user info

## 🔧 Development

### Scripts

```bash
npm start          # Start Expo dev server
npm test           # Run Jest tests
npm run ios        # Run on iOS
npm run android    # Run on Android
npm run web        # Run on web
npm run eject      # Eject from Expo (if needed)
```

### Adding New Features

1. Create new screen components in the `screens/` directory
2. Add navigation routes in `App.js`
3. Update icons and assets in the `assets/` directory
4. Test on multiple platforms using Expo Go

## 📱 Testing

### On Device
1. Install Expo Go from App Store/Google Play
2. Run `npm start`
3. Scan the QR code with Expo Go (Android) or Camera app (iOS)

### On Simulators
- **iOS**: Requires Xcode and iOS Simulator
- **Android**: Requires Android Studio and AVD
- **Web**: Opens automatically in your default browser

## 🚀 Deployment

### Expo Application Services (EAS)
```bash
# Install EAS CLI
npm install -g @expo/eas-cli

# Configure EAS
eas build:configure

# Build for production
eas build --platform all
```

### Building APK/IPA
```bash
# Android APK
eas build --platform android --profile preview

# iOS IPA
eas build --platform ios --profile preview
```

## 🔄 Migration Notes

This project has been migrated from a legacy React Native setup to modern Expo:

- **React Native**: 0.61.5 → 0.79.0
- **React**: 16.12.0 → 19.0.0
- **Navigation**: v4 → v6
- **Icons**: react-native-vector-icons → @expo/vector-icons
- **Build System**: React Native CLI → Expo CLI

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Iago Cavalcante**
- GitHub: [@iagocavalcante](https://github.com/iagocavalcante)

## 🙏 Acknowledgments

- Inspired by Airbnb's mobile application design
- Built with Expo's amazing development tools
- Thanks to the React Native community for continuous improvements

---

Made with ❤️ using React Native and Expo
