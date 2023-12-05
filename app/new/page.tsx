import { prisma } from "@/db"
import { redirect } from "next/navigation"
import Link from "next/link"
const page = () => {

    async function createTodo(data: FormData) {
        "use server"

        const title = data.get("title")?.valueOf()
        if (typeof title !== 'string' || title.length === 0) {
            return new Error("Invalid Title")
        }
        await prisma.todo.create({data: {title, complete: false}})

        redirect("/")
    }

  return (
    <>
        <header>
            <h1>Make new task</h1>
        </header>
        <form action={createTodo} > 
            <input type="text" name="title"/>
            <div className="form_btns">
                <Link href='..' >Cancel</Link>           
                 <button type='submit'>Create</button>
            </div>
        </form>

    </>
    
  )
}

export default page