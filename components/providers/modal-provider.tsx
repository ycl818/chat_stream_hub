"use client";

import { CreateServerModal } from "@/components/modals/create-server-modal";
import { useEffect, useState } from "react";
// 2:59 explain why modal use-client

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false); // prevent hydration error(server and client could conflict)

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateServerModal />
    </>
  );
};
