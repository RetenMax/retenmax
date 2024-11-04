import {
    createDirectus,
    rest,
    readItems,
    readItem
} from '@directus/sdk';

const client = createDirectus(process.env.NEXT_PUBLIC_PROD_API_ENDPOINT).with(rest());

const getMainMenu = async () => {
    try {
        const menu = await client.request(readItems('Menu'));
        return menu || [];
    } catch (error) {
        console.error("Error fetching Main Menu:", error);
        return []; 
    }
}

const getBlogPosts = async () => {
    const posts = await client.request(readItems('Blog'));

    if (posts) {
        return posts;
    } else {
        return [];
    }
}

const getBlogPost = async (slug) => {
    const post = await client.request(readItem('Blog', slug));

    if (post) {
        return post
    } else {
        return {};
    }
}

export {
    getMainMenu,
    getBlogPosts,
    getBlogPost
}
