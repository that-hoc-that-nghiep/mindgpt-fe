export interface OrganizationUserResponse {
    id: string
    name: string
    image?: string
    metadata?: string
    created_at: string
    subscription: "free" | "plus" | "pro"
    is_owner: boolean
}
export interface UserResponse {
    id: number
    created_at: string
    email: string
    name: string
    given_name: string
    family_name: string
    picture: string
    locale?: string
    metadata?: string
    organizations: OrganizationUserResponse[]
}

export interface GetOrgRequestParams {
    orgId: string
}

export interface CreateOrgRequest {
    name: string
}

export interface UpdateOrgRequest {
    name: string
}

export interface AddUserToOrgRequest {
    usersEmail: string[]
}

export interface RemoveUserFromOrgRequest {
    usersEmail: string[]
}

export interface TransferOwnershipRequest {
    newOwnerEmail: string
}

export interface UserOrganizationResponse {
    id: number
    name: string
    email: string
    locale?: string
    picture?: string
    metadata?: string
    created_at: string
    given_name: string
    family_name: string
    is_owner: boolean
}

export interface OrgResponse {
    id: string
    created_at: string
    name: string
    image?: string
    metadata?: string
    subscription: "free" | "plus" | "pro"
    users: UserOrganizationResponse[]
}
