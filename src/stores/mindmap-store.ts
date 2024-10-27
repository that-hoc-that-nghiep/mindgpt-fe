import { create } from "zustand"
import { MindmapResponse } from "@/types"

interface MindmapStore {
    mindmap: MindmapResponse

    setMindmap: (newMindmap: MindmapResponse) => void
    clearMindmap: () => void
}

const useMindmapStore = create<MindmapStore>((set) => ({
    mindmap: null,

    setMindmap: (newMindmap) =>
        set((state) => ({
            mindmap: {
                ...state.mindmap,
                ...newMindmap,
            },
        })),
    clearMindmap: () =>
        set(() => ({
            mindmap: null,
        })),
}))

export const useCurrentMindmap = () => useMindmapStore((state) => state)
