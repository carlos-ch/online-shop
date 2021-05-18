import React, { useEffect, useState } from 'react';

const useLocalStorage = (key, value) => {
  const [localStore, setLocalStore] = useState(() => {
    let newValue;
    try {
      // new value is the stored value in browser.
      // if store in browser is empty, then set newValue to value from props
      newValue = JSON.parse(localStorage.getItem(key) || JSON.stringify(value));
    } catch (error) {
      console.log(error);
      newValue = value;
    }
    return newValue;
  });
  useEffect(() => {
    // set localStorage to stringified value
    localStorage.setItem(key, JSON.stringify(localStore));
    console.log({ localStore });
  }, [localStore]);

  return [localStore, setLocalStore];
};

export default useLocalStorage;
