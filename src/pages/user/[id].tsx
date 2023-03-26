import * as styles from '../../styles/user'
import { CardBlack } from '@/styles/components/CardBlack'

export default function User() {
  return (
    <styles.MainContainer>
      <h1>Informacao do usuario</h1>
      <CardBlack className="user-information">
        <div className="user-image">E</div>
        <h2>
          Name: <span>User name</span>
        </h2>
        <p>
          company: <span>User Company</span>
        </p>
        <p>
          website: <span>User website</span>
        </p>
        <p>
          city: <span>User city</span>
        </p>
        <p>
          number: <span>User number</span>
        </p>
      </CardBlack>

      <div className="posts">
        {/* map */}
        <div className="post"></div>
      </div>
      <div className="posts">
        {/* map */}
        <div className="post"></div>
      </div>
    </styles.MainContainer>
  )
}
