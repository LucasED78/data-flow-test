import { useEffect } from 'react';
import './App.css';
import StreamBuilder from './components/StreamBuilder';
import DataFlow from './flow';
import _counter from './flow/streams/counter';

function App({ DataFlow$ = DataFlow }) {
  return (
    <StreamBuilder
      streams={[DataFlow$.Streams.counter]}
    >
      {
        ([counter]) => {
          return (
            <>
              { counter.initial }
  
              <button onClick={() => DataFlow$.Actions.increment()}>
                increment
              </button>
            </>
          )
        }
      }
    </StreamBuilder>
  );
}

export default App;
