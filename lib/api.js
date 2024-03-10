import {
    createDirectus,
    rest,
    readItems,
    readItem
} from '@directus/sdk';

const client = createDirectus('https://admin.retenmax.com.br').with(rest());

const getBlogPosts = async () => {
    const posts = await client.request(readItems('Blog'));

    console.log(posts)

    if (posts) {
        return posts;
    } else {
        return [];
    }
}

const getBlogPost = async (slug) => {
    const post = await client.request(readItem('Blog', slug));

    console.log(post)

    if (post) {
        return post
    } else {
        return {};
    }
}

export {
    getBlogPosts,
    getBlogPost
}
