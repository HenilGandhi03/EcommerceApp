# Authentication Screens

## Overview

The authentication screens have been updated to match the MCaffeine brand design and follow the project's folder structure pattern.

## File Structure

```
src/screens/Auth/
├── index.js                    # Exports for LoginScreen and SignupScreen
├── LoginScreen.js              # Main login screen component
├── SignupScreen.js             # Main signup screen component
└── components/
    ├── index.js               # Component exports
    ├── CustomInput.js         # Reusable input component with variants
    └── SocialButton.js        # Social login button component
```

## Design Features

### Colors & Theme

- Dark coffee-themed background (#2B1F17)
- Gold accent color (#D4AF37)
- Light text color for contrast (#FFFFFF)
- Muted text for secondary information (#8B8B8B)

### Login Screen

- Features the MCaffeine profile avatar placeholder
- Clean input fields with icons
- "Forgot Password?" link
- Professional login button styling
- Sign up navigation link

### Signup Screen

- MCaffeine logo with stylized "M"
- Three input fields (Name, Email, Password)
- Password visibility toggle
- Social login buttons (Facebook, Google, Apple)
- Terms of service section
- Login navigation link

## Components

### CustomInput

- Supports both login and signup variants
- Icon support for visual enhancement
- Password visibility toggle functionality
- Consistent styling across both screens

### SocialButton

- Circular buttons with brand colors
- Support for different social platforms
- Consistent gold accent theming

## Navigation

- Old authentication screens have been removed from root `/screens/`
- New screens properly exported through `/screens/Auth/index.js`
- App.js updated to use new screen imports

## Dependencies Used

- react-native-vector-icons (Feather icons)
- @react-native-async-storage/async-storage
- react-native-safe-area-context

## Next Steps

- Implement actual social login functionality
- Add form validation feedback
- Connect to backend authentication API
- Add biometric authentication option
