export const getLastPath = (path: string) => {
    const paths = path.split("/")
    return paths[3] || ""
}

export const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))

export function isValidUrl(url: string): boolean {
    const urlPattern =
        /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/
    return urlPattern.test(url)
}

export function isValidYouTubeUrl(url: string): boolean {
    const youtubePattern =
        /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|embed\/|v\/|.+\?v=)?[a-zA-Z0-9_-]{11}(&\S*)?$/
    return youtubePattern.test(url)
}
