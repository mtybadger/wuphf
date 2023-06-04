```tsx
// src/templates/Base.tsx
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';
import { ThemeProvider } from '../context/ThemeContext'; // Import ThemeProvider
import { ToggleThemeButton } from '../components/ToggleThemeButton'; // Import ToggleThemeButton

const Base = () => (
  <ThemeProvider> {/* Wrap the app with ThemeProvider */}
    <div className="antialiased text-gray-600">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <ToggleThemeButton /> {/* Add the ToggleThemeButton component */}
      <Hero />
      <VerticalFeatures />
      <Banner />
      <Footer />
    </div>
  </ThemeProvider>
);

export { Base };
```

I have updated the `src/templates/Base.tsx` file to include the `ThemeProvider` and `ToggleThemeButton` components. The `ThemeProvider` wraps the entire app to provide the theme context, and the `ToggleThemeButton` component is added to allow users to toggle between light and dark themes.