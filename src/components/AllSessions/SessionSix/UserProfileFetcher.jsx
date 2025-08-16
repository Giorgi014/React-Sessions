import { useState, useEffect } from 'react';

const UserProfileFetcher = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      setIsError(false);
      setUserData(null);

      try {
        const response = await fetch('https://randomuser.me/api/');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        setUserData(data.results[0]);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [refreshTrigger]);

  const handleRefresh = () => {
    setRefreshTrigger(prev => !prev);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Random User Profile
      </h1>
      
      {isLoading && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      )}
      
      {isError && !isLoading && (
        <div className="text-center py-8">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <p>Failed to fetch user data. Please try again.</p>
          </div>
        </div>
      )}
      
      {userData && !isLoading && !isError && (
        <div className="text-center">
          <img
            src={userData.picture.large}
            alt={`${userData.name.first} ${userData.name.last}`}
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-200"
          />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {userData.name.title} {userData.name.first} {userData.name.last}
          </h2>
          <p className="text-gray-600 mb-4">
            📧 {userData.email}
          </p>
          <div className="text-sm text-gray-500 space-y-1">
            <p>📱 {userData.phone}</p>
            <p>📍 {userData.location.city}, {userData.location.country}</p>
          </div>
        </div>
      )}
      
      <div className="text-center mt-6">
        <button
          onClick={handleRefresh}
          disabled={isLoading}
          className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white font-semibold py-2 px-4 rounded transition duration-200 cursor-pointer"
        >
          {isLoading ? 'Loading...' : 'Fetch New User'}
        </button>
      </div>
    </div>
  );
}

export default UserProfileFetcher;