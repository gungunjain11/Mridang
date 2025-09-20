"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

interface User {
  id: string
  email: string
  name: string
  type: "customer" | "artisan"
  craftType?: string
  location?: string
  avatar?: string
  phone?: string
  registrationTime: string
  lastLoginTime: string
}

interface AuthStore {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (userData: Omit<User, "id" | "lastLoginTime">) => void
  logout: () => void
  updateUser: (updates: Partial<User>) => void
  checkAuth: () => boolean
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: (userData) => {
        const user: User = {
          ...userData,
          id: `user_${Date.now()}`,
          lastLoginTime: new Date().toISOString(),
        }

        set({
          user,
          isAuthenticated: true,
          isLoading: false,
        })
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        })

        // Clear other stored data
        localStorage.removeItem("mridang-cart-storage")
        localStorage.removeItem("userBookings")
      },

      updateUser: (updates) => {
        const currentUser = get().user
        if (currentUser) {
          set({
            user: { ...currentUser, ...updates },
          })
        }
      },

      checkAuth: () => {
        const state = get()
        return state.isAuthenticated && state.user !== null
      },
    }),
    {
      name: "mridang-auth-storage",
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.isLoading = false
        }
      },
    },
  ),
)
