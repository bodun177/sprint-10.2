'use client';

import { createContext, useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const ShellContext = createContext({ isOdd: false });

export function useShell() {
  return useContext(ShellContext);
}

export default function Shell({ children }) {
  const router = useRouter();
  const [value, setValue] = useState('');

  const number = Number(value);
  const isOdd = value !== '' && Number.isInteger(number) && Math.abs(number) % 2 === 1;

  const handleLinkClick = (event) => {
    if (!isOdd) {
      event.preventDefault();
    }
  };

  const handleCheckbox = (event) => {
    if (event.target.checked) {
      router.push('/subtask4');
    }
  };

  return (
    <ShellContext.Provider value={{ isOdd }}>
      <div>
        <h1 className="mb-4">React Practical</h1>
        <h2 className="mb-3">The topic {`'Routes'`}</h2>
        <Link
          href="/subtask3"
          onClick={handleLinkClick}
          className="text-blue-500 underline"
        >
          Show protected information if{' '}
        </Link>
        <input
          type="number"
          className="border w-20"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />{' '}
        is odd
        <div>
          Go to the component programmatically, by checking the box:
          <input type="checkbox" onChange={handleCheckbox}></input>
        </div>
        {children}
      </div>
    </ShellContext.Provider>
  );
}
