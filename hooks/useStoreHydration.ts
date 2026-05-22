import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cart-store";

export const useCartHydration = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    useCartStore.persist.rehydrate();
    setHydrated(true);
  }, []);

  return hydrated;
};
