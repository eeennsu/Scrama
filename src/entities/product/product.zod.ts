import { z } from 'zod'

export const SearchedProductPriceSchema = z.object({
    discountedPrice: z.number().nullish(),
    originalPrice: z.number().optional(),
    currency: z.string().optional(),
    history: z.array(z.object({ price: z.number() })).nullish(),
})

export const CarouselProductImageSchema = z.object({
    image: z.string().url().optional(),
    url: z.string().url().optional(),
})

export const CommonProductSchema = z.object({
    id: z.string().optional(),
    title: z.string().optional(),
    url: z.string().url().optional(),
    image: z.string().url().optional(),
    rating: z.string().optional(),
    lastMonthPurchases: z.number().nullish(),
})

export const TodaysDealsProductSchema = CommonProductSchema.omit({
    rating: true,
    lastMonthPurchases: true,
}).extend({
    image: z.string().url().optional(),
    discountedPercent: z.string().optional(),
    avaliableCoupon: z.string().nullish(),
})

export const SearchedProductSchema = CommonProductSchema.extend({
    membership: z.string().nullish(),
    price: z.string().nullish(),
    stock: z.string().nullish(),
})

export const DetailProductSchema = CommonProductSchema.omit({
    id: true,
    url: true,
}).extend({
    price: SearchedProductPriceSchema,
    descriptions: z.string().array().optional(),
    isAvaliable: z.boolean().optional(),
    brand: z.string().optional(),
    reviewsCount: z.number().optional(),
    delivery: z.object({
        deliveryCost: z.string().optional(),
        importCost: z.string().optional(),
    }),
})
