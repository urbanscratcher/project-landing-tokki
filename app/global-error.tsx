"use client";
import React, { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const GlobalError = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div>something went wrong</div>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
};

export default GlobalError;
