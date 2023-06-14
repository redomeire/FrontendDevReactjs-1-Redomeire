interface Restaurant {
    id?: string
    name?: string
    description?: string
    pictureId?: string
    city?: string
    rating?: string
    categories?: { name: string }[]
    customerReviews?: {
        date: string,
        name: string,
        review: string
    }[]
    menus?: {
        drinks?: { name: string }[]
        foods?: { name: string }[]
    }
}

export type { Restaurant }
