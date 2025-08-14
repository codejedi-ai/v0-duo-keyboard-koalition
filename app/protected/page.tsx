import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function ProtectedPage() {
  const user = await currentUser();

  if (!user) {
    redirect('/sign-in');
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-12 container mx-auto px-4 py-16 mt-16">
      <div className="w-full">
        <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center">
          <span>ℹ️</span>
          This is a protected page that you can only see as an authenticated user
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start">
        <h2 className="font-bold text-2xl mb-4 text-white">Your user details</h2>
        <div className="bg-gray-900 p-4 rounded-lg">
          <p className="text-gray-300"><strong>Name:</strong> {user.firstName} {user.lastName}</p>
          <p className="text-gray-300"><strong>Email:</strong> {user.emailAddresses[0]?.emailAddress}</p>
          <p className="text-gray-300"><strong>User ID:</strong> {user.id}</p>
          <p className="text-gray-300"><strong>Created:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}