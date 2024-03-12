export interface LoginType {
  email: string
  password: string
}

export interface SignUpType {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface BlogShortType {
  _id: string
  title: string
  description: string
  author: {
    name: string
    _id: string
    profileImage: string
  }
  img: string
  tags: string[]
}

export interface BlogFullType extends BlogShortType {
  content: string
  createdAt: string
  updatedAt: string
}

interface User {
  name: string
  email: string
  bio?: string
  profileImage?: string
}

export interface UserType extends User {
  _id: string
  createdAt: string
  updatedAt: string
  blogs?: BlogFullType[]
}

export enum Category {
  All = "all",
  Technology = "technology",
  Science = "science",
  Programming = "programming",
  Health = "health",
  Business = "business",
  Entertainment = "entertainment",
  Sports = "sports",
  Education = "education",
  Lifestyle = "lifestyle",
}
