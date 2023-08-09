import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { auth, currentUser } from "@clerk/nextjs";
import { prisma } from "@/prisma/client";
import { absoluteUrl } from "@/lib/utils";

const homeUrl = absoluteUrl("/");

export async function POST(req: Request) {
  try {
    const { price, title, description, type } = await req.json();
    const { userId } = auth();
    const user = await currentUser();

    if (!userId || !user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // get user subscription from prisma
    const userSubscription = await prisma.userSubscription.findUnique({
      where: {
        userId,
      },
    });

    // if userSubscription and stripeCustomerId exist in prisma then create a billingPortal to manage the subscription
    if (userSubscription && userSubscription.stripeCustomerId) {
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: userSubscription.stripeCustomerId,
        return_url: homeUrl,
      });

      return new NextResponse(JSON.stringify({ url: stripeSession.url }));
    }

    // if userSubscription does not exist in prisma then create stripe checkout session for subscription
    const stripeSession = await stripe.checkout.sessions.create({
      success_url: homeUrl + "success",
      cancel_url: homeUrl,
      payment_method_types: ["card"],
      mode: "subscription",
      billing_address_collection: "auto",
      customer_email: user.emailAddresses[0].emailAddress,
      line_items: [
        {
          price_data: {
            currency: "CAD",
            product_data: {
              name: title,
              description: description,
            },
            unit_amount: price * 100,
            recurring: {
              interval: type,
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId,
      },
    });

    return new NextResponse(JSON.stringify({ url: stripeSession.url }));
  } catch (error: any) {
    console.log("[STRIPE_ERROR]", error);
    return new NextResponse(error.message, { status: 500 });
  }
}
