import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (

  <Section
    title="Communicate with Your Feline Companion"
    description="Finally, understand what your cat is trying to say with Meow.ai. Our groundbreaking AI-powered device translates your cat's meows into human language, bringing you closer to your furry friend."
  >
    <VerticalFeatureRow
      title="Real-Time Cat-to-Human Translation"
      description="With Meow.ai, you'll never be left wondering what your cat wants. Our advanced AI algorithms analyze your cat's meows and provide instant translations in real-time, letting you understand their needs and desires."
      image="/assets/images/cat1.svg"
      imageAlt="Real-Time Cat-to-Human Translation"
    />
    <VerticalFeatureRow
      title="Enhanced Bonding and Understanding"
      description="Meow.ai strengthens the bond between you and your cat by facilitating clear communication. By knowing exactly what your cat is trying to communicate, you can better address their needs, leading to a happier and more fulfilling relationship."
      image="/assets/images/cat2.svg"
      imageAlt="Enhanced Bonding and Understanding"
      reverse
    />
    <VerticalFeatureRow
      title="Tailored Training and Behavior Insights"
      description="Gain valuable insights into your cat's behavior patterns with Meow.ai. Our intelligent system analyzes the translated meows and provides tailored training recommendations and behavior insights, helping you address any challenges or improve their training regimen."
      image="/assets/images/cat3.svg"
      imageAlt="Tailored Training and Behavior Insights"
    />
  </Section>
);
export { VerticalFeatures };