// import { GetStaticProps } from 'next'
// import { api } from '@/lib/api'
// import { DataPostProps, UserProps } from '@/interfaces/interfaces'
import { PostProps, UserProps } from '@/interfaces'
import { CardBlack } from '@/styles/components/CardBlack'
import * as styled from '@/styles/Home'
import { GetStaticProps } from 'next'

import Head from 'next/head'
import Link from 'next/link'
import { api } from './lib/api'

interface dataResponsePosts {
  posts: PostProps[]
}

export default function Home({ posts }: dataResponsePosts) {
  return (
    <styled.MainPage>
      <Head>
        <title>Social Media</title>
      </Head>
      <h1>Todos os Posts</h1>

      {posts &&
        posts.map((post) => {
          return (
            <CardBlack className="card-post" key={post.id}>
              <Link href={`/post/${post.id}`} className="link-post">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <div className="author">
                  <p>{post.username}</p>
                </div>
              </Link>
            </CardBlack>
          )
        })}
    </styled.MainPage>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const dataPosts = await api.get('/posts')
  const dataUsers = await api.get('/users')

  const posts = dataPosts.data.map((post: PostProps) => {
    const userName = dataUsers.data.map((user: UserProps) =>
      user.id === post.userId ? user.username : null,
    )
    let username
    for (const names of userName) {
      if (names !== null) {
        username = names
        break
      }
    }
    return { ...post, username }
  })

  return {
    props: { posts },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
