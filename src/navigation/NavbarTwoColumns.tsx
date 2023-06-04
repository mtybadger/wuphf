To integrate the theme toggle functionality into the NavbarTwoColumns component, we'll need to import the ThemeContext and ToggleThemeButton component, and then add the ToggleThemeButton to the navbar. Here's the updated code:

```tsx
import { ReactNode, useContext } from 'react';
import Link from 'next/link';
import { ThemeContext } from '../ThemeContext'; // Import ThemeContext
import ToggleThemeButton from '../ToggleThemeButton'; // Import ToggleThemeButton

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => {
  const { theme } = useContext(ThemeContext); // Get the theme from ThemeContext

  return (
    <div className={`flex flex-wrap justify-between items-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
      <div>
        <Link href="/">
          <a>{props.logo}</a>
        </Link>
      </div>

      <nav>
        <ul className="navbar flex items-center font-medium text-xl">
          {props.children}
          <li>
            <ToggleThemeButton /> {/* Add the ToggleThemeButton to the navbar */}
          </li>
        </ul>
      </nav>

      <style jsx>
        {`
          .navbar :global(li:not(:first-child)) {
            @apply mt-0;
          }

          .navbar :global(li:not(:last-child)) {
            @apply mr-5;
          }
        `}
      </style>
    </div>
  );
};

export { NavbarTwoColumns };
```

In this updated code, we've imported the ThemeContext and ToggleThemeButton components. We then use the useContext hook to get the current theme from the ThemeContext. Based on the theme, we conditionally apply the text color to the navbar. Finally, we add the ToggleThemeButton component to the navbar.