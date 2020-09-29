import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'shards-react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

import './index.css';

const App = () => (
  <Container>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error
      maxime magnam fugiat dolor, repellendus provident expedita nam suscipit
      eveniet blanditiis consequuntur facilis iusto aliquid libero nisi ab ut
      officia?
    </p>
    <h1>Chat</h1>
    <div>Chat window here</div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nulla
      iure sequi, iste odio atque consequuntur molestiae sapiente doloremque,
      tempore earum nisi suscipit, necessitatibus quo! Repellat accusamus
      pariatur ratione nobis!
    </p>
  </Container>
);

ReactDOM.render(<App />, document.getElementById('app'));
