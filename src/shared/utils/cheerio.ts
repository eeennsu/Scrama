import type { Cheerio, Element } from 'cheerio'

export const generateTitle = (product: Cheerio<Element>, link?: string) => {
    const title = product
        .find('.a-size-medium.a-color-base.a-text-normal')
        .text()

    // If title is empty
    if (title === '') {
        const urlSegment = link

        if (typeof urlSegment === 'string') {
            const urlSegmentStripped = urlSegment.split('/')[1]
            const title = urlSegmentStripped.replace(/-/g, ' ')

            return title
        }
    }

    return title
}
