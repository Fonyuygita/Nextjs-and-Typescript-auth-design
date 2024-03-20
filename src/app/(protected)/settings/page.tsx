import { auth } from "@/auth"


const page = async() => {
const session=await auth()

  return (
    <div>
      Setting Page
      {JSON.stringify(session)}
    </div>
  )
}

export default page
