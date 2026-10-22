'use client';

import { useShell } from '../Shell';

export default function Subtask3() {
  const { isOdd } = useShell();

  if (!isOdd) {
    return null;
  }

  return <div>Subtask3, protected information</div>;
}
