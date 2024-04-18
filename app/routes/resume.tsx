import { useLoaderData } from "@remix-run/react"
import { LoaderFunction } from "react-router";

// TODO: Add react-pdf
export const loader: LoaderFunction = () => {
  const resume = "resume"
  return resume;
}

export const Resume = () => {
  const resume = useLoaderData() as string 

  return (
    <ul>
      <li>{resume}</li>
    </ul>
  )
}