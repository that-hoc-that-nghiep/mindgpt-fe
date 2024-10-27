import { Node, Position } from "reactflow"

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

export const downloadImage = (dataUrl: string, name: string = "Mindmap") => {
    const a = document.createElement("a")

    a.setAttribute("download", name)
    a.setAttribute("href", dataUrl)
    a.click()
}

export function getNodeIntersection(intersectionNode: Node, targetNode: Node) {
    // https://math.stackexchange.com/questions/1724792/an-algorithm-for-finding-the-intersection-point-between-a-center-of-vision-and-a
    const {
        width: intersectionNodeWidth,
        height: intersectionNodeHeight,
        positionAbsolute: intersectionNodePosition,
    } = intersectionNode
    const targetPosition = targetNode.positionAbsolute

    const w = intersectionNodeWidth / 2
    const h = intersectionNodeHeight / 2

    const x2 = intersectionNodePosition.x + w
    const y2 = intersectionNodePosition.y + h
    const x1 = targetPosition.x + targetNode.width / 2
    const y1 = targetPosition.y + targetNode.height / 2

    const xx1 = (x1 - x2) / (2 * w) - (y1 - y2) / (2 * h)
    const yy1 = (x1 - x2) / (2 * w) + (y1 - y2) / (2 * h)
    const a = 1 / (Math.abs(xx1) + Math.abs(yy1))
    const xx3 = a * xx1
    const yy3 = a * yy1
    const x = w * (xx3 + yy3) + x2
    const y = h * (-xx3 + yy3) + y2

    return { x, y }
}

// returns the position (top,right,bottom or right) passed node compared to the intersection point
function getEdgePosition(
    node: Node,
    intersectionPoint: { x: number; y: number }
) {
    const n = { ...node.positionAbsolute, ...node }
    const nx = Math.round(n.x)
    const ny = Math.round(n.y)
    const px = Math.round(intersectionPoint.x)
    const py = Math.round(intersectionPoint.y)

    if (px <= nx + 1) {
        return Position.Left
    }
    if (px >= nx + n.width - 1) {
        return Position.Right
    }
    if (py <= ny + 1) {
        return Position.Top
    }
    if (py >= n.y + n.height - 1) {
        return Position.Bottom
    }

    return Position.Top
}

// returns the parameters (sx, sy, tx, ty, sourcePos, targetPos) you need to create an edge
export function getEdgeParams(source: Node, target: Node) {
    const sourceIntersectionPoint = getNodeIntersection(source, target)
    const targetIntersectionPoint = getNodeIntersection(target, source)

    const sourcePos = getEdgePosition(source, sourceIntersectionPoint)
    const targetPos = getEdgePosition(target, targetIntersectionPoint)

    return {
        sx: sourceIntersectionPoint.x,
        sy: sourceIntersectionPoint.y,
        tx: targetIntersectionPoint.x,
        ty: targetIntersectionPoint.y,
        sourcePos,
        targetPos,
    }
}
