import { useQuery } from "@tanstack/react-query"
import { getMindmaps } from "."

export const useMindmaps = (
    orgId: string,
    limit: string,
    page: string,
    keyword: string
) => {
    return useQuery({
        queryKey: ["mindmaps", orgId],
        queryFn: () => getMindmaps(orgId, limit, page, keyword),
    })
}
