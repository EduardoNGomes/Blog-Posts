import * as styles from '../../styles/user'
import { CardBlack } from '@/styles/components/CardBlack'
import { Section } from '@/styles/components/Section'
import { CardBlue } from '@/styles/components/CardBlue'
import { GetStaticPaths, GetStaticProps } from 'next'
import { api } from '../lib/api'
import { CommentProps, PostProps, UserProps } from '@/interfaces'

interface DataResponseUser {
  user: UserProps
  userPosts: PostProps[]
  userComments: CommentProps[]
}

export default function User({
  user,
  userPosts,
  userComments,
}: DataResponseUser) {
  return (
    <styles.MainContainer>
      <h1>Informações do usuário</h1>
      <CardBlack className="user-information">
        <div className="user-image">{user.name[0]}</div>
        <h2>
          Name: <span>{user.name}</span>
        </h2>
        <p>
          Company: <span>{user.company?.name}</span>
        </p>
        <p>
          Website: <span>{user.website}</span>
        </p>
        <p>
          City: <span>{user.address?.city}</span>
        </p>
        <p>
          Number: <span>{user.phone}</span>
        </p>
      </CardBlack>

      <Section className="posts">
        <h2>Todos os posts</h2>

        <div className="section-content">
          {userPosts &&
            userPosts.map((post) => {
              return (
                <CardBlue className="post" key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </CardBlue>
              )
            })}
        </div>
      </Section>
      <Section className="comments">
        <h2>Todos os comentarios</h2>

        <div className="section-content">
          {userComments.length > 0 ? (
            userComments.map((comment) => {
              return (
                <CardBlue className="comment" key={comment.id}>
                  <h3>title</h3>
                  <p>body</p>
                </CardBlue>
              )
            })
          ) : (
            <h4>Nao ha comentarios deste usuario</h4>
          )}
        </div>
      </Section>
    </styles.MainContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get('/users')

  const ids = response.data.map((post: UserProps) => {
    const id = String(post.id)
    return { params: { id } }
  })
  return {
    paths: ids,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const userId = params!.id
  const responseUsers = await api(`/users/${userId}`)
  const responsePosts = await api.get('/posts')
  const responseComments = await api.get(`/comments`)

  const user = responseUsers.data

  const userPosts = responsePosts.data.filter(
    (post: PostProps) => post.userId === user.id,
  )
  const userComments = responseComments.data.filter(
    (comment: CommentProps) => comment.email === user.email,
  )

  return {
    props: { user, userPosts, userComments },
  }
}
