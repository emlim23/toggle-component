Toggle Component

A simple toggle component inspired by the https://egghead.io/lessons/react-make-compound-react-components-flexible tutorial and using Styled Components (https://www.styled-components.com)

To install

```
npm i toggle-component
```
```
yarn add toggle-component
```

To use in project:

import first
```javascript
import Toggle from 'toggle-component';
```

Just the toggle button:
```javascript
render(){
  return <Toggle onToggle={<your call back here>}>
          <Toggle.Button />
        </Toggle>
}
```

With optional Toggle On and Off elements
```javascript
import Toggle from 'toggle-component';

render(){
  return <Toggle onToggle={<your call back here>}>
          <Toggle.On>This button is On</Toggle.On>
          <Toggle.Off>This button is Off</Toggle.Off>
          <Toggle.Button />
        </Toggle>
}
```
