import * as styles from '../../styles/post'

import { api } from '../../lib/api'
import { GetStaticPaths, GetStaticProps } from 'next'
import { CommentProps, PostProps, UserProps } from '@/interfaces'
import { CardBlack } from '@/styles/components/CardBlack'
import { CardBlue } from '@/styles/components/CardBlue'
import { Section } from '@/styles/components/Section'
import Link from 'next/link'

interface DataResponsePost {
  post: PostProps
  comments: CommentProps[]
}

export default function Post({ post, comments }: DataResponsePost) {
  return (
    <styles.MainContainer>
      <h2>
        Post de:{' '}
        <Link
          href={`/user/${post.id}`}
          className="link-h2
        "
        >
          {post.username}
        </Link>
      </h2>
      <CardBlack className="post">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </CardBlack>

      <Section className="comment-section">
        <h2>Comentarios:</h2>

        <div className="section-content">
          {comments.map((comment) => {
            return (
              <CardBlue className="comment" key={comment.id}>
                <h3>{comment.name}</h3>
                <p>{comment.body}</p>
                <div className="author">
                  <p>{comment.email}</p>
                </div>
              </CardBlue>
            )
          })}
        </div>
      </Section>
    </styles.MainContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get('/posts')

  const ids = response.data.map((post: PostProps) => {
    const id = String(post.id)
    return { params: { id } }
  })
  return {
    paths: ids,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postId = params!.id
  const responsePost = await api(`/posts/${postId}`)
  const responseUsers = await api.get('/users')

  const responseComments = await api.get(`/posts/${postId}/comments`)

  const dataPost = responsePost.data

  const dataUser = responseUsers.data.filter(
    (user: UserProps) => user.id === dataPost.userId,
  )

  const post = { ...dataPost, username: dataUser[0].username }

  return {
    props: { post, comments: responseComments.data },
  }
}
