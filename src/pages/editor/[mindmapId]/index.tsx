import React, { Fragment, useCallback, useEffect, useRef } from "react"
import { BaseUserMeta, JsonObject, User as UserData } from "@liveblocks/client"
import { useParams } from "react-router-dom"
import { UserResponse } from "@/types"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Network, User } from "lucide-react"
import useRoomStore from "@/stores/room-store"
import { useLayoutedElements, useRemoveLogo } from "@/hooks"
import { useMindmap, useUser } from "@/api/hooks"
import ReactFlow, {
    addEdge,
    Background,
    Connection,
    Controls,
    MarkerType,
    OnConnectStartParams,
    Panel,
    SelectionMode,
    useEdgesState,
    useNodesState,
    useReactFlow,
} from "reactflow"
import { useSelectedNodes } from "@/stores/selected-nodes-store"
import { useMouse } from "@mantine/hooks"
import { nodeTypes } from "@/nodes"
import { edgeTypes } from "@/edges"
import Cursor from "@/components/cursor"
import { CommonNodeData } from "@/nodes/common-node"
import { convertEdgeToMindmapEdge, convertNodeToMindmapNode } from "@/utils"
import type {
    MouseEvent as ReactMouseEvent,
    TouchEvent as ReactTouchEvent,
    ComponentType,
    MemoExoticComponent,
} from "react"

const cusorColors = [
    "#991b1b",
    "#92400e",
    "#3f6212",
    "#065f46",
    "#155e75",
    "#1e40af",
    "#5b21b6",
    "#86198f",
    "#9f1239",
]

const MAX_USERS_DISPLAY = 5

const panOnDrag = [1, 2]

let id = 1
const getId = () => `temp_${id++}`

const OnlineUsers = ({
    others,
    currentUser,
}: {
    others: readonly UserData<JsonObject, BaseUserMeta>[]
    currentUser: UserResponse
}) => {
    return (
        <div className="bg-white shadow-md rounded flex px-2 py-1">
            <Tooltip>
                <TooltipContent>Bạn</TooltipContent>
                <TooltipTrigger>
                    <Avatar>
                        <AvatarImage src={currentUser?.picture} />
                        <AvatarFallback>
                            <User className="size-6" />
                        </AvatarFallback>
                    </Avatar>
                </TooltipTrigger>
            </Tooltip>
            {others.map((user, index) => {
                if (index + 1 === MAX_USERS_DISPLAY) {
                    return <Avatar key={index}>+{index + 1}</Avatar>
                }
                if (index + 1 > MAX_USERS_DISPLAY) {
                    return <Fragment key={index}></Fragment>
                }
                return (
                    <Tooltip key={index}>
                        <TooltipContent
                            style={{
                                backgroundColor: cusorColors[index],
                                color: "white",
                            }}
                        >
                            {user.presence.user["name"]}
                        </TooltipContent>
                        <TooltipTrigger>
                            <Avatar
                                key={user.id}
                                style={{
                                    outline: "2px solid white",
                                    border: `3px solid ${cusorColors[index]}`,
                                }}
                            >
                                <AvatarImage
                                    src={user.presence.user["picture"]}
                                />
                                <AvatarFallback>
                                    <User className="size-6" />
                                </AvatarFallback>
                            </Avatar>
                        </TooltipTrigger>
                    </Tooltip>
                )
            })}
        </div>
    )
}

const MindmapEditorPage = () => {
    useRemoveLogo()
    const { data: user } = useUser()
    const { fitView, screenToFlowPosition } = useReactFlow()
    const [nodes, setNodes, onNodesChange] = useNodesState<CommonNodeData>([])
    const [edges, setEdges, onEdgesChange] = useEdgesState([])
    const reactFlowWrapper = useRef(null)
    const connectingNodeId = useRef(null)
    const { orgId, mindmapId } = useParams()
    const {
        data: mindmap,
        isLoading,
        setMindmap,
    } = useMindmap(orgId, mindmapId)
    // const {
    //     liveblocks: { enterRoom, leaveRoom, isStorageLoading, others },
    //     nodes,
    //     edges,
    //     setNodes,
    //     setEdges,
    //     onNodesChange,
    //     onEdgesChange,
    //     onConnect,
    // } = useRoomStore()

    const setUser = useRoomStore((state) => state.setUser)

    const { getLayoutedElements } = useLayoutedElements()

    useEffect(() => {
        if (mindmap) {
            setNodes(
                mindmap?.nodes.map((node) => convertNodeToMindmapNode(node))
            )
            setEdges(
                mindmap?.edges.map((edge) => convertEdgeToMindmapEdge(edge))
            )

            setTimeout(() => {
                // check if all node has x and y position is 0 then get layouted elements
                const isNotLayouted = mindmap?.nodes.every(
                    (node) => node.pos.x === 0 && node.pos.y === 0
                )

                if (isNotLayouted) {
                    fitView({ duration: 500 })
                    setTimeout(() => {
                        getLayoutedElements()
                    }, 500)
                }
            }, 100)
        }
    }, [mindmap, isLoading])

    const { setSelectedNodes } = useSelectedNodes()
    const onSelectionChange = useCallback(
        ({ nodes }) => {
            setSelectedNodes(nodes)
        },
        [setSelectedNodes]
    )

    // useEffect(() => {
    //     enterRoom(mindmapId)
    //     return () => leaveRoom()
    // }, [enterRoom, leaveRoom, mindmapId])

    const { ref: mouseRef, x, y } = useMouse()

    // const handleRealtimeChange = (e: React.PointerEvent<HTMLDivElement>) => {
    //     setUser({
    //         id: user.id,
    //         cursor: {
    //             x,
    //             y,
    //         },
    //         name: user.name,
    //         picture: user.picture,
    //     })
    // }

    // if (isStorageLoading) {
    //     return (
    //         <div className="h-screen flex items-center justify-center w-full">
    //             <svg
    //                 className="animate-spin -ml-1 mr-3 size-10 text-primary"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //             >
    //                 <circle
    //                     className="opacity-25"
    //                     cx="12"
    //                     cy="12"
    //                     r="10"
    //                     stroke="currentColor"
    //                     strokeWidth="4"
    //                 ></circle>
    //                 <path
    //                     className="opacity-75"
    //                     fill="currentColor"
    //                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    //                 ></path>
    //             </svg>
    //         </div>
    //     )
    // }

    const onConnect = useCallback((params: Connection) => {
        // reset the start node on connections
        connectingNodeId.current = null
        setEdges((eds) => addEdge(params, eds))
    }, [])
    const onConnectStart = useCallback(
        (
            _: ReactMouseEvent | ReactTouchEvent,
            { nodeId }: OnConnectStartParams
        ) => {
            connectingNodeId.current = nodeId
        },
        []
    )

    const onConnectEnd = useCallback(
        (event: any) => {
            if (!connectingNodeId.current) return

            const targetIsPane =
                event.target.classList.contains("react-flow__pane")

            if (targetIsPane) {
                // we need to remove the wrapper bounds, in order to get the correct position
                const id = getId()
                const pos = screenToFlowPosition({
                    x: event.clientX,
                    y: event.clientY,
                })
                const newNode = convertNodeToMindmapNode({
                    id,
                    label: "New Node",
                    note: "",
                    level: 3,
                    bg_color: "#fff",
                    text_color: "#000",
                    pos,
                    size: {
                        width: 0,
                        height: 0,
                    },
                })

                setNodes((nds) => nds.concat(newNode))
                setEdges((eds) =>
                    eds.concat({
                        id,
                        source: connectingNodeId.current,
                        target: id,
                    })
                )
            }
        },
        [screenToFlowPosition]
    )
    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onConnectStart={onConnectStart}
            onConnectEnd={onConnectEnd}
            onSelectionChange={onSelectionChange}
            panOnScroll
            selectionOnDrag
            panOnDrag={[1, 2]}
            selectionMode={SelectionMode.Partial}
            fitView
            defaultEdgeOptions={{
                animated: true,
                type: "floating",
                markerEnd: { type: MarkerType.ArrowClosed },
            }}
            minZoom={0.1}
            // onPointerMove={handleRealtimeChange}
            ref={mouseRef}
        >
            {/* {others.map((user, index) => (
                <Cursor
                    key={index}
                    color={cusorColors[index]}
                    x={user.presence.user["cursor"]["x"]}
                    y={user.presence.user["cursor"]["y"]}
                    name={user.presence.user["name"]}
                />
            ))} */}
            <Background />
            <Controls />
            {/* <Panel position="top-right">
                <OnlineUsers others={others} currentUser={user} />
            </Panel> */}
            <Panel position="bottom-right">
                <button
                    className="bg-primary rounded-full p-3 text-secondary"
                    onClick={() => {
                        fitView({ duration: 500 })
                        setTimeout(() => {
                            getLayoutedElements()
                        }, 500)
                    }}
                >
                    <Network className="size-5" />
                </button>
            </Panel>
        </ReactFlow>
    )
}

export default MindmapEditorPage
