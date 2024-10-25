import { MindmapResponse } from "@/types"
import { instance } from "@/utils/axios"

export const getMindmap = async (orgId: string, mindmapId: string) => {
    const { data } = await instance.get<{
        status: number
        message: string
        data: MindmapResponse
    }>(`/mindmap/${orgId}/${mindmapId}`)
    return data
}
