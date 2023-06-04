import { ReactNode } from 'react';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="text-center flex flex-col p-4 sm:text-left sm:flex-row sm:items-center sm:justify-between sm:p-12 bg-primary-100 rounded-md">
    <div className="text-2xl font-semibold">
      <div className="text-gray-900">{props.title}</div>
      <div className="text-primary-500">{props.subtitle}</div>
    </div>

    <div className="whitespace-no-wrap mt-3 sm:mt-0 sm:ml-2">
      {/* Add the mainButton class to the button */}
      {React.cloneElement(props.button, { className: 'mainButton' })}
    </div>
  </div>
);

export { CTABanner };

// Add the following CSS to your styles.css file
/*
.mainButton {
  padding: 2rem 4rem;
  font-size: 2rem;
  height: 10rem;
}

@media (min-width: 640px) {
  .mainButton {
    padding: 1.5rem 3rem;
    font-size: 1.5rem;
    height: 8rem;
  }
}

@media (min-width: 768px) {
  .mainButton {
    padding: 1rem 2rem;
    font-size: 1.25rem;
    height: 6rem;
  }
}

// And so on for lg, xl, and 2xl breakpoints
*/