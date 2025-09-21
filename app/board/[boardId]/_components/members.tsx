"use client";
import { UserAvatar } from "./avatar";
import { useOthers, useSelf } from "@liveblocks/react/suspense";

export const Members = () => {
  const users = useOthers();
  const currentUser = useSelf();
  const MAX_SHOWN_USERS = 2;

  const hasMoreUsers = users.length > MAX_SHOWN_USERS;

  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
      <div className="flex gap-x-2">
        {users.slice(0, MAX_SHOWN_USERS).map(({ connectionId, info }) => (
          <UserAvatar
            key={connectionId}
            src={info?.picture}
            name={info?.name}
            fallback={info?.name?.[0] || "N"}
          />
        ))}
      </div>
    </div>
  );
};
