```javascript
import { Base } from '../templates/Base';

// Update the Base component to receive a title prop
const Index = () => <Base title="Hello World" />;

export default Index;
```

In order to update the title of the front page, we need to pass the new title as a prop to the `Base` component. In this case, we pass the title "Hello World" to the `Base` component. You will also need to update the `Base` component to accept and use the `title` prop for the `<title>` HTML tag.