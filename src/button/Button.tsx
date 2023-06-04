```tsx
// Import the necessary Tailwind CSS classes
import 'tailwindcss/tailwind.css';

type IButtonProps = {
  xl?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  // Replace the blue-500 color with brown-500 for the button background
  return (
    <div className="text-white bg-brown-500 inline-block rounded-md text-center font-extrabold text-xl py-4 px-6">
      {props.children}
    </div>
  );
};

export { Button };
```