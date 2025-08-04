import { create } from "zustand";
import { persist } from "zustand/middleware";
import { WishlistItem } from "@/types";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
  category: string;
};

type StoreState = {
  cart: CartItem[];
  totalItems: number;
  subtotal: number;
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
};

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      cart: [],
      totalItems: 0,
      subtotal: 0,

      addToCart: (product, quantity) =>
        set((state) => {
          const existingItem = state.cart.find(
            (item) => item.product.id === product.id
          );

          const newCart = existingItem
            ? state.cart.map((item) =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              )
            : [...state.cart, { product, quantity, category: "" }];

          return {
            cart: newCart,
            totalItems: newCart.reduce((sum, item) => sum + item.quantity, 0),
            subtotal: newCart.reduce(
              (sum, item) => sum + item.product.price * item.quantity,
              0
            ),
          };
        }),

      removeFromCart: (productId) =>
        set((state) => {
          const newCart = state.cart.filter(
            (item) => item.product.id !== productId
          );
          return {
            cart: newCart,
            totalItems: newCart.reduce((sum, item) => sum + item.quantity, 0),
            subtotal: newCart.reduce(
              (sum, item) => sum + item.product.price * item.quantity,
              0
            ),
          };
        }),

      updateQuantity: (productId, quantity) =>
        set((state) => {
          const newCart = state.cart.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item
          );
          return {
            cart: newCart,
            totalItems: newCart.reduce((sum, item) => sum + item.quantity, 0),
            subtotal: newCart.reduce(
              (sum, item) => sum + item.product.price * item.quantity,
              0
            ),
          };
        }),

      clearCart: () => set({ cart: [], totalItems: 0, subtotal: 0 }),
    }),
    {
      name: "cart-storage",
    }
  )
);

interface WishlistStore {
  items: WishlistItem[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],

      addToWishlist: (product: Product) => {
        const { items } = get();
        const isExisting = items.some((item) => item.id === product.id);

        if (!isExisting) {
          const wishlistItem: WishlistItem = {
            ...product,
            dateAdded: new Date().toISOString(),
            description: "",
            category: "",
            rating: 0,
            reviews: 0,
            inStock: true,
          };

          set({ items: [...items, wishlistItem] });
        }
      },

      removeFromWishlist: (productId: string) => {
        const { items } = get();
        set({ items: items.filter((item) => item.id !== productId) });
      },

      isInWishlist: (productId: string) => {
        const { items } = get();
        return items.some((item) => item.id === productId);
      },

      clearWishlist: () => set({ items: [] }),
    }),
    {
      name: "wishlist-storage",
    }
  )
);
