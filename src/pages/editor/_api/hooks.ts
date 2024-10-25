import { useQuery } from "@tanstack/react-query"
import { getMindmap } from "."

export const useMindmap = (orgId: string, mindmapId: string) => {
    return useQuery({
        queryKey: ["mindmap", orgId, mindmapId],
        queryFn: () => getMindmap(orgId, mindmapId),
    })
}
