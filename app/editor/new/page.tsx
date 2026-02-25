import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import Editor from "./Editor"

export default function NewPostPage() {
  const cookieStore = cookies()
  const isAdmin = cookieStore.get("admin")

  if (!isAdmin) {
    redirect("/login")
  }

  return <Editor />
}