export const sleep = async (ms: number): Promise<unknown> => {
  return await new Promise((resolve) => {
    return setTimeout(resolve, ms)
  })
}
