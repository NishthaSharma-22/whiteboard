import { Liveblocks } from "@liveblocks/node";
import { api } from "@/convex/_generated/api";
import { auth, currentUser } from "@clerk/nextjs/server";
import { fetchQuery } from "convex/nextjs"; // use this instead of ConvexHttpClient

const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY!,
});

export async function POST(request: Request) {
  try {
    const { orgId, userId } = await auth();
    const user = await currentUser();

    if (!userId || !user) {
      return new Response("Unauthorized!", { status: 403 });
    }

    const { room } = await request.json();

    const board = await fetchQuery(api.board.get, { id: room });

    if (!board || board.orgId !== orgId) {
      return new Response("Unauthorized!", { status: 403 });
    }

    const userInfo = {
      name: user.firstName || "Anonymous",
      picture: user.imageUrl,
    };

    const session = liveblocks.prepareSession(user.id, { userInfo });

    if (room) {
      session.allow(room, session.FULL_ACCESS);
    }

    const { status, body } = await session.authorize();
    return new Response(body, { status });
  } catch (err) {
    console.error("liveblocks auth error", err);
    return new Response("Internal server error", { status: 500 });
  }
}