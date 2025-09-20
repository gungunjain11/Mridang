"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

interface CartItem {
  id: string
  name: string
  nameHi: string
  price: number
  originalPrice: number
  artisan: {
    name: string
    nameHi: string
    location: string
  }
  image: string
  quantity: number
  category: string
}

interface WishlistItem {
  id: string
  name: string
  nameHi: string
  price: number
  originalPrice: number
  artisan: {
    name: string
    nameHi: string
    location: string
  }
  image: string
  category: string
  rating: number
  reviewCount: number
  tags: string[]
  inStock: boolean
}

interface CartStore {
  items: CartItem[]
  wishlist: WishlistItem[]
  addToCart: (item: Omit<CartItem, "quantity">) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  addToWishlist: (item: WishlistItem) => void
  removeFromWishlist: (id: string) => void
  isInWishlist: (id: string) => boolean
  getTotalItems: () => number
  getTotalPrice: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      wishlist: [],

      addToCart: (item) => {
        const existingItem = get().items.find((i) => i.id === item.id)
        if (existingItem) {
          set((state) => ({
            items: state.items.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)),
          }))
        } else {
          set((state) => ({
            items: [...state.items, { ...item, quantity: 1 }],
          }))
        }
      },

      removeFromCart: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }))
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(id)
          return
        }
        set((state) => ({
          items: state.items.map((item) => (item.id === id ? { ...item, quantity } : item)),
        }))
      },

      clearCart: () => {
        set({ items: [] })
      },

      addToWishlist: (item) => {
        const exists = get().wishlist.find((i) => i.id === item.id)
        if (!exists) {
          set((state) => ({
            wishlist: [...state.wishlist, item],
          }))
        }
      },

      removeFromWishlist: (id) => {
        set((state) => ({
          wishlist: state.wishlist.filter((item) => item.id !== id),
        }))
      },

      isInWishlist: (id) => {
        return get().wishlist.some((item) => item.id === id)
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },

      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0)
      },
    }),
    {
      name: "mridang-cart-storage",
    },
  ),
)
