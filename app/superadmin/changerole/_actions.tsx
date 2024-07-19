"use server"
import { clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function setRole(formData: FormData) {

    // Update role in Clerk
    const clerkRes = await clerkClient.users.updateUser(
      formData.get("id") as string,
      {
        publicMetadata: { role: formData.get("role") },
      }
    );
    redirect("/dashboard")
  
}

export async function initiateRole(id:string, user_role:string) {
  // Update role in Clerk
  await clerkClient.users.updateUser(id,{
      publicMetadata: { role: user_role },
    }
  );
}
