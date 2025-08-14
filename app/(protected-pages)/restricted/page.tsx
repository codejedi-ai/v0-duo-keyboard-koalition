'use client';

import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Hero } from "@/components/Hero";
import { Shield, User, Mail, Calendar, Key } from 'lucide-react';

interface UserApiResponse {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  lastSignInAt: string;
  imageUrl: string;
  username: string;
}

export default function RestrictedPage() {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();
  const [apiData, setApiData] = useState<UserApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in');
    }
  }, [isLoaded, isSignedIn, router]);

  const fetchUserData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/restricted/user-details');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setApiData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch user data');
    } finally {
      setLoading(false);
    }
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Loading...</h2>
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Hero />
      <div className="w-full overflow-x-hidden flex-grow container mx-auto px-4 py-8">
        <section className="px-4 mb-16 max-w-7xl mx-auto w-full">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-12 h-12 text-primary mr-3" />
                <h1 className="text-4xl font-bold text-white">Restricted Area</h1>
              </div>
              <p className="text-gray-400 text-lg">
                This page is only accessible to authenticated members of the Koalition.
              </p>
            </div>

            {/* User Information Card */}
            <Card className="bg-gray-900 border-gray-800 mb-8">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <User className="w-5 h-5 mr-2 text-primary" />
                  Your Account Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-300">
                    <User className="w-4 h-4 mr-2 text-primary" />
                    <span className="font-medium">Name:</span>
                    <span className="ml-2">{user.firstName} {user.lastName}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-4 h-4 mr-2 text-primary" />
                    <span className="font-medium">Email:</span>
                    <span className="ml-2">{user.emailAddresses[0]?.emailAddress}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Key className="w-4 h-4 mr-2 text-primary" />
                    <span className="font-medium">User ID:</span>
                    <span className="ml-2 font-mono text-sm">{user.id}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    <span className="font-medium">Member since:</span>
                    <span className="ml-2">{new Date(user.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* API Test Section */}
            <Card className="bg-gray-900 border-gray-800 mb-8">
              <CardHeader>
                <CardTitle className="text-white">Test Restricted API</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Click the button below to test the restricted API endpoint that fetches your user details.
                </p>
                
                <Button 
                  onClick={fetchUserData} 
                  disabled={loading}
                  className="mb-4"
                >
                  {loading ? 'Loading...' : 'Fetch User Data from API'}
                </Button>

                {error && (
                  <div className="bg-red-900/20 border border-red-800 rounded-lg p-4 mb-4">
                    <p className="text-red-400">Error: {error}</p>
                  </div>
                )}

                {apiData && (
                  <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-3">API Response:</h3>
                    <pre className="text-gray-300 text-sm overflow-auto">
                      {JSON.stringify(apiData, null, 2)}
                    </pre>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="text-center">
              <div className="space-x-4">
                <Button 
                  variant="outline" 
                  onClick={() => router.push('/profile')}
                >
                  View Profile
                </Button>
                <Button 
                  variant="secondary" 
                  onClick={() => router.push('/')}
                >
                  Return Home
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}