import { apiTaskByUserId } from "../infrastructure/api.firebase"

export const getTaskByUserId = async() => {
  const response = await apiTaskByUserId()
  console.log(response)
  return response
}