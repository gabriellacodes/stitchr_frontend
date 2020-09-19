export const allProjects = [
    {
        id: 1,
        title: "this is a title",
        description: "this is a description",
        image: "this is an image",
        is_open: "yes",
        date_created: "2020-08-28T13:05:58Z",
        owner: "I am the owner"
    },
    {
        id: 2,
        title: "this is a second title",
        description: "this is a second description",
        image: "this is a second image",
        is_open: "yes",
        date_created: "2020-08-28T13:05:58Z",
        owner: "I am the second owner"
    }
]
export const oneProject = {
    id: 1,
    title: "this is a title",
    description: "this is a description",
    image: "this is an image",
    is_open: "yes",
    date_created: "2020-08-28T13:05:58Z",
    owner: "I am the owner",
    likes: [
            {
            id: 1,
            amount: 20,
            comment: "so good!",
            anonymous: true,
            supporter: 3,
            project_id: 1
            },
    ],
};