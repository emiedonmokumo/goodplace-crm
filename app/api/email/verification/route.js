// app/api/verify/code/route.js
import connectDB from "@/config/db";
import User from "@/models/User";

export async function POST(request) {
  try {
    // Connect to the database
    await connectDB();

    // Parse the JSON body of the request
    const { email, verificationCode } = await request.json();

    // Find the user by email in the nested credentials object
    const user = await User.findOne({ 'credentials.email': email });

    if (!user) {
      return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 });
    }

    // Check if the verification code matches
    if (user.credentials.verificationCode === verificationCode) {
      user.credentials.isVerified = true;
      user.credentials.verificationCode = undefined;
      await user.save();

      return new Response(JSON.stringify({ message: 'Email verified successfully', userId: user._id }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ message: 'Invalid verification code' }), { status: 400 });
    }
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error verifying code', error: error.message }), { status: 500 });
  }
}
