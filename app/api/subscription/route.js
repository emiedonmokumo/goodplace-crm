import connectDB from "@/config/db";
import Subscription from "@/models/Subscription";
import { NextResponse } from "next/server";

// Handle POST requests
export async function POST(request) {
    try {
        // Connect to the database
        await connectDB();

        // Parse the JSON body of the request
        const { userId, plan, startDate, endDate, amount } = await request.json();

        // Convert ISO strings to Date objects
        const start = new Date(startDate);
        const end = new Date(endDate);

        // Find or create a subscription
        let subscription = await Subscription.findById(userId);

        if (subscription) {
            // Update existing subscription
            subscription.amount = amount;
            subscription.plan = plan;

            // Update startDate and endDate only if the plan is 'Platinum'
            if (plan === 'Platinum') {
                subscription.startDate = start;
                subscription.endDate = end;
            } else {
                // Clear dates if the plan is not 'Platinum'
                subscription.startDate = null;
                subscription.endDate = null;
            }

            await subscription.save();
        } else {
            // Create new subscription
            subscription = await Subscription.create({
                user: userId,
                amount,
                plan,
                startDate: plan === 'Platinum' ? start : null,
                endDate: plan === 'Platinum' ? end : null,
            });
        }

        return NextResponse.json({ message: 'Subscription updated successfully', subscription }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
    }
}

// // Handle GET requests
// export async function GET(request) {
//   try {
//     // Connect to the database
//     await connectDB();

//     // Find the subscription for the authenticated user
//     const subscription = await Subscription.findOne({ user: user._id });

//     if (!subscription) {
//       return NextResponse.json({ message: 'No subscription found' }, { status: 404 });
//     }

//     return NextResponse.json({ subscription }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
//   }
// }
