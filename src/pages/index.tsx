// import { GetStaticProps } from 'next'
// import { api } from '@/lib/api'
// import { DataPostProps, UserProps } from '@/interfaces/interfaces'
import { CardBlack } from '@/styles/components/CardBlack'
import * as styled from '@/styles/Home'

import Head from 'next/head'

export default function Home() {
  // export default function Home({ posts }: any) {
  return (
    <styled.MainPage>
      <Head>
        <title>Social Media</title>
      </Head>
      <h1>Todos os Posts</h1>
      <CardBlack className="card-post">
        <div>
          <h2>title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            voluptatum aliquid nobis accusamus suscipit, beatae tenetur iure
            deleniti ipsam doloribus ducimus corporis sequi quia facere odit
            repellendus nihil voluptates sint!
          </p>
          <div className="author">
            <p>Author</p>
          </div>
        </div>
      </CardBlack>
    </styled.MainPage>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const dataPosts = await api.get('/posts')
//   const dataUsers = await api.get('/users')

//   const posts = dataPosts.data.map((post: DataPostProps) => {
//     const userName = dataUsers.data.map((user: UserProps) =>
//       user.id === post.userId ? user.username : null,
//     )
//     let name
//     for (const names of userName) {
//       if (names !== null) {
//         name = names
//         break
//       }
//     }
//     return { ...post, name }
//   })

//   return {
//     props: { posts },
//     revalidate: 60 * 60 * 2, // 2 hours
//   }
// }
