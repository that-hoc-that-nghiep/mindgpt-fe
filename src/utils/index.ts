export const getLastPath = (path: string) => {
    const paths = path.split("/")
    return paths[3] || ""
}

export const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))
