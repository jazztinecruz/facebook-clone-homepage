import Post from '../components/sections/create-post'
import Dashboard from '../components/sections/dashboard'
import LeftPanel from '../components/sections/panel/left'
import RightPanel from '../components/sections/panel/right'
import PostedPost from '../components/sections/post'

const Home = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-0 mt-12 md:mt-20">
      {/* left */}
      <div className='hidden lg:block'>
        <LeftPanel/>
      </div>

      {/* middle */}
      <div className='grid gap-4'>
        <Dashboard />
        <Post />
        <PostedPost
          name="Loreline Mae Roxas"
          hours="10"
          caption="exercitationem deleniti assumenda Delectus, ipsa iure. Exercitationem provident, suscipit ipsum accusantium iusto iste!"
          like="99"
          share="3"
          comments="76"
          profile="/images/profile-two.jpg"
          postPhoto="/images/story-four.jpg"
        />
        <PostedPost
          name="Peter Maxille"
          hours="4"
          caption="laborum autem dolorum ab totam tempore. Delectus, ipsa iure. Exercitationem provident, suscipit ipsum accusantium iusto iste!"
          like="20"
          share="1"
          comments="3"
          profile="/images/profile-one.jpg"
          postPhoto="/images/story-three.jpg"
        />
        <PostedPost
          name="Michaela Anggat"
          hours="3"
          caption="Goodmorning! consectetur adipisicing elit. Fuga molestiae, exercitationem deleniti assumenda ex laborum autem dolorum ab totam tempore. Delectus, ipsa iure. Exercitationem provident, suscipit ipsum accusantium iusto iste!"
          like="20"
          share="1"
          comments="3"
          profile="/images/profile-four.jpg"
          postPhoto="/images/story-one.jpg"
        />
        <PostedPost
          name="Joshua Pangilinan"
          hours="5"
          caption="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga molestiae, exercitationem deleniti assumenda ex laborum autem dolorum ab totam tempore. Delectus, ipsa iure. Exercitationem provident, suscipit ipsum accusantium iusto iste!"
          like="58"
          share="2"
          comments="10"
          profile="/images/profile-three.jpg"
          postPhoto="/images/story-two.jpg"
        />
      </div>

      {/* right */}
      <div className='hidden md:block'>
        <RightPanel/>
      </div>
    </div>
  )
}

export default Home
