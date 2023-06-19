import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-600">
    {/* Update the title to "Hello World" */}
    <Meta title="Hello World" description={AppConfig.description} />
    <Hero />
    <VerticalFeatures />
    <Banner />
    <Footer />
  </div>
);

export { Base };