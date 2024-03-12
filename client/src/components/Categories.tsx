import React from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import { Category } from "../definitions"

interface TabPanelProps {
  children?: React.ReactNode
  category: Category
  setCategory: React.Dispatch<React.SetStateAction<Category>>
}

const Categories = ({ category, setCategory }: TabPanelProps) => {
  const handleChange = (_event: React.SyntheticEvent, newValue: Category) => {
    setCategory(newValue)
  }
  return (
    <Tabs
      TabIndicatorProps={{
        style: { display: "none" },
      }}
      value={category}
      onChange={handleChange}
      indicatorColor="secondary"
      textColor="secondary"
      variant="scrollable"
      scrollButtons="auto"
      className="w-[90%]"
    >
      {Object.values(Category).map((category) => (
        <Tab
          // label={category}
          value={category}
          label={category === "all" ? "For You" : category}
          key={category}
          disableRipple
          className="!text-[0.9rem] !capitalize"
        />
      ))}
    </Tabs>
  )
}

export default Categories
