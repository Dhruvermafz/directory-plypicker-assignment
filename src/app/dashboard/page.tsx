"use client"
import React from "react"
import axios from "axios"
import { useRouter } from "next/router"
import { useToast } from "@/components/ui/use-toast"

function Page() {
    const router = useRouter()
    const {toast} = useToast()

    const handleLogout = async () => {
        try {
            await axios.get("/api/user/logout")
            toast({
                description: "Logout out successfully",
                variant: 'default'
            })

            router.push("/login")
        } catch (error) {
            console.error("Error during logout:", error)

            toast({
                title: "Error",
                description: "An error occurred during logout",
                variant: 'destructive',
            })
        }
    }
    return (
        <div className="flex flex-col items-center mt-8">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <hr className="w-full my-2 border-gray-300" />
      <h2 className="text-xl font-semibold my-4">Profile Page</h2>
      <hr className="border-gray-300" />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4 hover:bg-blue-600"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
    )
}