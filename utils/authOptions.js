import Credentials from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';
import connectDB from "@/config/db";
import User from "@/models/User";

export const authOptions = {
    providers: [
        Credentials({
            credentials: {
                email: {
                    label: 'email',
                    type: 'email'
                },
                password: {
                    label: 'password',
                    type: 'text'
                },
            },
            authorize: async (credentials) => {
                await connectDB();

                const user = await User.findOne({ 'credentials.email': credentials.email });
                if (!user) {
                    throw new Error("No user found");
                    // The return statement after throwing an error will not be reached
                    return null;
                }

                // Compare the provided password with the stored hashed password using bcryptjs
                const isPasswordValid = await bcrypt.compare(credentials.password, user.credentials.password);
                if (!isPasswordValid) {
                    throw new Error("Invalid password");
                    // The return statement after throwing an error will not be reached
                    return null;
                }

                // If the password is valid, return the user object
                return {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                };
            }
        })
    ],
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // Example: 30 days
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.email = token.email;
            }
            return session;
        },
    }
};
