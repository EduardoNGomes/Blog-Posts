import * as styles from '../../styles/post'

import Head from 'next/head'

export default function Post() {
  return (
    <styles.MainContainer>
      <Head>
        <title>Social Media | Posts</title>
      </Head>
      <h2>Author</h2>
      <div className="post">
        <h1>title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
          voluptatum aliquid nobis accusamus suscipit, beatae tenetur iure
          deleniti ipsam doloribus ducimus corporis sequi quia facere odit
          repellendus nihil voluptates sint!
        </p>
      </div>

      <styles.CommentSection>
        <h2>Comentarios</h2>
        {/* map */}
        <div className="comment">
          <h3>Name</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut error
            consectetur dolor, perferendis facere nihil? Asperiores quae
            corrupti iure ad blanditiis, sapiente quos quam aliquid qui eveniet,
            voluptates dolores enim.
          </p>
        </div>
      </styles.CommentSection>
    </styles.MainContainer>
  )
}
