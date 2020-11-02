import { useState, useEffect } from 'react';

export default function useDirection() {
  const [direction, setDirection] = useState('ltr');

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    const bodyDir: any = body.getAttribute('dir');
    setDirection(bodyDir);
  }, []);

  return [direction];
}
