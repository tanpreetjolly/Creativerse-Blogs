import { useEffect, useState } from "react"
import { getMyProfile } from "../api"
import ClearIcon from "@mui/icons-material/Clear"
import AddIcon from "@mui/icons-material/Add"
import { UserType } from "../definitions"
import Loader from "./Loader"
import { userInfo } from "os"

const MyProfile = () => {
  const [user, setUser] = useState<UserType>({
    userId: "",
  createdAt: "",
  updatedAt: "",
  blogs: [],
  followingCount: number,
  followersCount: number,
  myInterests: string[]}
  ))
  const [edit, setEdit] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getProfile = async () => {
      setLoading(true)
      getMyProfile()
        .then((data) => {
          console.log(data.data)
          setUser(data.data)
          console.log(user)
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          setLoading(false)
        })
    }
    getProfile()
  }, [])
  const handleEdit = () => {
    setEdit(true)
  }
  const handleUpdate = () => {
    setEdit(false)
  }
  const handleCancel = () => {
    setEdit(false)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  }
  
  
  +
  if (loading) return <Loader />

  if (user === null)
    return (
      <div style={{ color: "red", fontWeight: "bold", textAlign: "center" }}>
        You are not authorized to view this page.
      </div>
    )
  return (
    <div className="flex flex-col font-inter mx-6 w-full">
      <nav className="pb-5 px-5 rounded-xl flex justify-between ">
        <div>
          <h1 className="text-2xl font-medium">My Profile</h1>
          <span className="text-sm text-slate-500 ">
            Manage your profile settings
          </span>
        </div>

        <button
          className="bg-secondary rounded-3xl px-3 text-dark hover:bg-highlight hover:text-primary duration-100"
          onClick={handleEdit}
        >
          Edit
        </button>
      </nav>
      <hr className="" />
      <main className="flex xs:flex-wrap">
        <section className="sm:w-100 xs:w-3/4 lg:w-1/2 p-5">
          <form action="" className="flex flex-col">
            <label className="text-lg my-2 font-medium">
              Your profile photo
            </label>
            <img
              className="h-40 w-40 rounded-full border"
              src={user?.profileImage}
              alt={user?.name}
            />
            <div className="flex gap-5 my-4 text-sm">
              <p>
                <span className="rounded-xl p-1 text-slate-700 px-1 font-bold">
                  {user?.followersCount}
                </span>
                <span className="text-slate-500 ">Followers</span>
              </p>

              <p>
                <span className="rounded-xl p-1 text-slate-700 px-1 font-bold">
                  {user?.followingCount}
                </span>
                <span className="text-slate-500">Following</span>
              </p>
            </div>

            <label className="mt-2 text-slate-600 font-light">Full name</label>
            <input
              type="text"
              placeholder="Vedant Nagar"
              disabled={!edit}
              name = "name"
              value={user.name }
              onChange={handleChange}
              className={`${!edit && "rounded-lg p-2 border"}  ${edit && "rounded-lg p-2 border text-black"}`}
            />

            <label className="mt-2 text-slate-600 font-light">
              Email Address
            </label>
            {/* <p className="text-base font-light text-gray-400 leading-4 mb-1 italic">
              Changing your email address might break your OAuth sign-in if your
              social media accounts do not use the same email address. Please
              use magic link sign-in if you encounter such an issue..
            </p> */}
            <input
              type="text"
              placeholder="pathaa@gmail.com"
              disabled={true}
              value={user.email}
              className="rounded-lg p-2 border"
            />
            <label className="mt-6 text-slate-600">Profile bio</label>
            <textarea
              rows={4}
              cols={50}
              maxLength={50}
              disabled={!edit}
              defaultValue={user.bio}
              className={`${!edit && "rounded-lg p-2 border"}   ${edit && "rounded-lg p-2 border text-black"}`}
            ></textarea>
          </form>
        </section>
        <section className="w-3/6  p-5 ml-0">
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col">
            <h3 className="text-lg font-medium mb-3">My Interests</h3>

            <div className="flex flex-wrap gap-3">
              {user.myInterests.map((item, index) => {
                return (
                  <span
                    className="rounded-xl border w-fit p-2 hover:border-highlight duration-200"
                    key={index}
                  >
                    <span>{item}</span>
                    <button className={`${!edit && "hidden"} `}>
                      <ClearIcon fontSize="small" />
                    </button>
                  </span>
                )
              })}
              <button
                className={`${!edit && "hidden"} p-2 bg-dark rounded-xl text-white hover:bg-highlight duration-200`}
              >
                <AddIcon />{" "}
              </button>
            </div>
          </form>

          {edit && (
            <div className="my-8 flex gap-10">
              <button
                className="bg-dark p-2 rounded-3xl px-5 text-white hover:bg-highlight duration-200"
                onClick={handleUpdate}
              >
                Update
              </button>
              <button
                className="bg-dark p-2 rounded-3xl px-5 text-white hover:bg-highlight duration-200"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

export default MyProfile
