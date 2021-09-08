import { useEffect } from 'react'

// triggers a callback when cliking outisde a given node (ref)

export const useOnClickOutside = (ref, callback) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) { 
        return; //if the click was triggered inside the current node, do nothing.
      }
      callback(event); //otherwise, the click was outside the node, executes the callback
    };

    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
  [ref, callback],
  );
};