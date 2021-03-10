import React from 'react';
import { usePosition } from 'use-position';
import { useEffect } from 'react';

export const Check = () => {
  const watch = true;
  const {
    latitude,
    longitude,
    speed,
    timestamp,
    accuracy,
    error,
  } = usePosition(watch, { enableHighAccuracy: true, maximumAge: 0 });

  useEffect(() => {
    setInterval(() => {
      console.log(latitude);
      fetch('/', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          latitude,
          longitude,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }, 100000 * 10);
  }, [latitude]);

  return (
    <code>
      latitude: {latitude}
      <br />
      longitude: {longitude}
      <br />
      speed: {speed}
      <br />
      timestamp: {timestamp}
      <br />
      accuracy: {accuracy && `${accuracy}m`}
      <br />
      error: {error}
    </code>
  );
};
