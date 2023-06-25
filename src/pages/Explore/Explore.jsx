import React from 'react'
import Posts from '../../components/Posts/Posts'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import SuggestedUser from '../../components/SuggestedUser/SuggestedUser'

const Explore = ({posts}) => {
  return (
    <>
    <Header />
     <div className="main">
     <div className="container">
     <div>
    <Navbar />
    </div>
    <div>
   <Posts  posts={posts}/>
    </div>
    <div>
    <SuggestedUser />
    </div>
    </div>
    </div>
    </>
  )
}

export default Explore