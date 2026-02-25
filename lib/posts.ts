export type Post = {
  id: string
  title: string
  content: string
  date: string
}

let posts: Post[] = [
  {
    id: "1",
    title: "기록하는 삶에 대하여",
    content: "우리는 기록을 통해 자신을 이해하게 된다...",
    date: "2026.02.24",
  },
]

export function getPosts() {
  return posts
}

export function getPost(id: string) {
  return posts.find((p) => p.id === id)
}

export function addPost(post: Post) {
  posts.unshift(post)
}