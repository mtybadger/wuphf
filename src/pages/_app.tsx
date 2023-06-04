import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/global.css';

const replaceDogTextWithCatText = (text: string) => {
  const dogTerms = [
    { dog: 'dog', cat: 'cat' },
    { dog: 'puppy', cat: 'kitten' },
    { dog: 'canine', cat: 'feline' },
  ];

  let newText = text;
  dogTerms.forEach((term) => {
    newText = newText.replace(new RegExp(term.dog, 'gi'), term.cat);
  });

  return newText;
};

const replaceDogImagesWithCatImages = (element: HTMLElement) => {
  const dogImages = element.querySelectorAll('img[src*="dog"], img[src*="puppy"], img[src*="canine"]');

  dogImages.forEach((img) => {
    const src = img.getAttribute('src');
    if (src) {
      img.setAttribute('src', src.replace(/(dog|puppy|canine)/gi, 'cat'));
    }
  });
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window !== 'undefined') {
        const body = document.querySelector('body');
        if (body) {
          body.innerHTML = replaceDogTextWithCatText(body.innerHTML);
          replaceDogImagesWithCatImages(body);
        }
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
};

export default MyApp;