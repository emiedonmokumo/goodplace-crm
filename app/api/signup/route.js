import connectDB from "@/config/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
import transporter from "@/utils/transporter"; // Adjust the path if needed
import dotenv from "dotenv";

dotenv.config();

export async function POST(req) {
  try {
    const { bio, company, team, credentials } = await req.json();

    await connectDB();

    // Create a new user
    const newUser = await User.create({
      bio,
      company,
      team,
      credentials,
    });

    // Generate a verification code
    const verificationCode = Math.floor(1000 + Math.random() * 9000);

    // Update the user with the verification code
    newUser.credentials.verificationCode = verificationCode;
    await newUser.save();

    // Email options for verification code
    const mailOptions = {
      from: process.env.ADMIN_MAIL, // Sender address
      to: newUser.credentials.email, // Recipient email
      subject: "Your Verification Code", // Subject line
      text: `Your verification code is: ${verificationCode}`, // Plain text body
    };

    // Send the verification email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
          { message: "Error sending email", error: error.message },
          { status: 500 }
        );
      }
    });

    return NextResponse.json(
      { message: "User created successfully and verification code sent" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Something went wrong", error: error.message },
      { status: 500 }
    );
  }
}
