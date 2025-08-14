import { auth, currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Check if user is authenticated
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized - Please sign in to access this endpoint' },
        { status: 401 }
      );
    }

    // Get the current user details
    const user = await currentUser();
    
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Prepare user data response
    const userDetails = {
      userId: user.id,
      email: user.emailAddresses[0]?.emailAddress || '',
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      username: user.username || '',
      imageUrl: user.imageUrl || '',
      createdAt: user.createdAt,
      lastSignInAt: user.lastSignInAt,
      // Additional user metadata if needed
      metadata: {
        publicMetadata: user.publicMetadata,
        privateMetadata: user.privateMetadata,
        unsafeMetadata: user.unsafeMetadata,
      },
      // Phone numbers if available
      phoneNumbers: user.phoneNumbers.map(phone => ({
        phoneNumber: phone.phoneNumber,
        verified: phone.verification?.status === 'verified'
      })),
      // External accounts (OAuth providers)
      externalAccounts: user.externalAccounts.map(account => ({
        provider: account.provider,
        emailAddress: account.emailAddress,
        username: account.username
      }))
    };

    return NextResponse.json(userDetails, { status: 200 });
    
  } catch (error) {
    console.error('Error in restricted API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Optional: Add other HTTP methods if needed
export async function POST() {
  const { userId } = await auth();
  
  if (!userId) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  return NextResponse.json(
    { message: 'POST method available for authenticated users', userId },
    { status: 200 }
  );
}