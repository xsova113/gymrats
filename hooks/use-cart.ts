import { Product } from "@/type";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartStore {
  items: Product[];
  addItem: (data: Product[]) => void;
  removeItem: (id: string) => void;
  removeAllItems: () => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data) => {
        const currentItems = get().items;

        set({ items: [...currentItems, ...data] });
      },
      removeItem: (id) => {
        if (get().items.length === 0) return;

        const index = get().items.findIndex((item) => item.id === id);
        let newItems = [...get().items];

        if (index >= 0) {
          newItems.splice(index, 1);
        } else {
          console.log("Error removing item");
        }

        set({ items: newItems });
      },
      removeAllItems: () => {
        set({ items: [] });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
