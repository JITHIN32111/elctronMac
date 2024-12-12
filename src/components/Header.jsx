import React, { useEffect, useState } from 'react';

const Header = () => {
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);

  // Check if navigation is possible (back and forward buttons)
  useEffect(() => {
    const checkNavigation = () => {
      // Check if there’s history to go back to
      setCanGoBack(window.history.length > 1);

      // There's no direct way to check for forward history using the window.history API
      setCanGoForward(false);  // You can enable this later if you're tracking forward navigation
    };

    window.addEventListener('popstate', checkNavigation); // Update buttons on navigation
    checkNavigation();  // Initial check

    return () => window.removeEventListener('popstate', checkNavigation);
  }, []);

  const handleBack = () => {
    if (canGoBack) {
      window.electronAPI.navigateBack();  // Call the navigateBack method from Electron API
    }
  };

  const handleForward = () => {
    if (canGoForward) {
      window.electronAPI.navigateForward();  // Call the navigateForward method from Electron API
    }
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-semibold">My Electron App</h1>
      <div className="flex space-x-4">
        <button
          className={`bg-gray-700 text-white px-4 py-2 rounded-md ${!canGoBack ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!canGoBack}
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className={`bg-gray-700 text-white px-4 py-2 rounded-md ${!canGoForward ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!canGoForward}
          onClick={handleForward}
        >
          Forward
        </button>
      </div>
    </header>
  );
};

export default Header;
