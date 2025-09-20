"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { LoadingCanvas } from "@/app/board/[boardId]/_components/loading-canvas";

interface RoomProps {
  children: ReactNode;
  roomId: string;
}
export function Room({ children, roomId }: RoomProps) {
  return (
    <LiveblocksProvider
      publicApiKey={
        "pk_dev_GO-VNlds7VdHFpeDRZlgD_0OZkI712JbcT_DFfiRZ8TxOTPP6urMUHIS6w1UZwfK"
      }
    >
      <RoomProvider id={roomId} initialPresence={{}}>
        <ClientSideSuspense fallback={<LoadingCanvas/>}>
          {() => children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
