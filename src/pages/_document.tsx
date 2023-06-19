import Document, { Html, Head, Main, NextScript } from 'next/document';

import { AppConfig } from '../utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          {/* Step 2: Update the title to "Hello World" */}
          <title>Hello World</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

// The above code updates the page title to "Hello World" as per the plan.
// The developer should now follow steps 3 and 4 to verify the change in the local development environment and commit and push the changes to the repository.