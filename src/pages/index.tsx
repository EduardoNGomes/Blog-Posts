// import { GetStaticProps } from 'next'
// import { api } from '@/lib/api'
// import { DataPostProps, UserProps } from '@/interfaces/interfaces'
import { MainPage } from '@/styles/Home'

import Head from 'next/head'

export default function Home() {
  // export default function Home({ posts }: any) {
  return (
    <>
      <Head>
        <title>black</title>
      </Head>
      <MainPage>
        <h1>Hello world!</h1>
      </MainPage>
    </>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const dataPosts = await api.get('/posts')
//   const dataUsers = await api.get('/users')

//   const posts = dataPosts.data.map((post: DataPostProps) => {
//     const userName = dataUsers.data.map((user: UserProps) =>
//       user.id === post.userId ? user.name : null,
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
