import { mutation } from "./_generated/server";
import { v } from "convex/values";

const images = ["/boards/img1.png", "/boards/img2.webp"];

export const create = mutation({
  args: {
    orgId: v.string(),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("unauthorized");

    const randomImage = images[Math.floor(Math.random() * images.length)];
    const board = await ctx.db.insert("boards", {
      title: args.title,
      orgId: args.orgId,
      authorId: identity.subject,
      authorName: identity.name!,
      imageUrl: randomImage,
    });
    return board;
  },
});

export const remove = mutation({
  args: { id: v.id("boards") },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized!!");
    }
    const userId = identity.subject;
    const alsoFavorite = await ctx.db
      .query("userFavorites")
      .withIndex("by_user_board", (q) =>
        q.eq("userId", userId).eq("boardId", args.id)
      )
      .unique();
    if (alsoFavorite) {
      await ctx.db.delete(alsoFavorite._id);
    }
    await ctx.db.delete(args.id);
  },
});

export const update = mutation({
  args: { id: v.id("boards"), title: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    const title = args.title.trim();

    if (!identity) {
      throw new Error("Unauthorized!!");
    }
    if (!title) {
      throw new Error("Title is needed.");
    }

    if (title.length > 60) {
      throw new Error("Title has to be less than 60 characters.");
    }

    const board = await ctx.db.patch(args.id, {
      title,
    });
    return board;
  },
});

export const favorite = mutation({
  args: { id: v.id("boards"), orgId: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("unauthorized!!");
    }
    const board = await ctx.db.get(args.id);

    if (!board) {
      throw new Error("board not found!");
    }
    const userId = identity.subject;
    const existingFavorite = await ctx.db
      .query("userFavorites")
      .withIndex("by_user_board", (q) =>
        q.eq("userId", userId).eq("boardId", board._id)
      )
      .unique();
    if (existingFavorite) {
      throw new Error("favorite board already exists!");
    }
    await ctx.db.insert("userFavorites", {
      userId,
      boardId: board._id,
      orgId: args.orgId,
    });
    return board;
  },
});

export const notFavorite = mutation({
  args: { id: v.id("boards"), orgId: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("unauthorized!!");
    }
    const board = await ctx.db.get(args.id);

    if (!board) {
      throw new Error("board not found!");
    }
    const userId = identity.subject;
    const existingFavorite = await ctx.db
      .query("userFavorites")
      .withIndex("by_user_board", (q) =>
        q.eq("userId", userId).eq("boardId", board._id)
      )
      .unique();
    if (!existingFavorite) {
      throw new Error("favorite board not found!");
    }
    await ctx.db.delete(existingFavorite._id);
    return board;
  },
});
