import {
    createDirectus,
    rest,
    readItems,
    readItem
} from '@directus/sdk';

const client = createDirectus('https://admin.retenmax.com.br').with(rest());

const getMainMenu = async () => {
    const menu = await client.request(readItems('Menu'));

    if (menu) {
        return menu;
    } else {
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
