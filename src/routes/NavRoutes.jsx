import React from 'react'
import { Routes, Route } from 'react-router';
import Login from "../pages/Auth/Login"
import SignUp from "../pages/Auth/SignUp"
import Home from '../pages/Home/Home';
import Explore from '../pages/Explore/Explore';
import BookMark from '../pages/Bookmarks/BookMarks';
import Profile from '../pages/Profile/Profile';
import Posts from "../components/Posts/Posts"
import { useSelector } from 'react-redux';
import Error from '../pages/Error';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import PostDetail from '../pages/PostDetail/PostDetail';
import Theme from '../pages/Theme/Theme';


const NavRoutes = () => {

  const { allPosts } = useSelector(store => store.posts);
  const { user } = useSelector(store => store.auth)



  return (
    <Routes>
      <Route path="/" element={
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      } />
      <Route path="/bookmark" element={
        <PrivateRoute>
          <BookMark />
        </PrivateRoute>
      } />
      <Route path="/profile/:username" element={
        <PrivateRoute>
          <Profile />
        </PrivateRoute>
      } />
      <Route path="/explore" element={
        <PrivateRoute>
          <Explore posts={allPosts} />
        </PrivateRoute>
      }
      />
      <Route path="/post/:postId" element={
        <PrivateRoute>
          <PostDetail />
        </PrivateRoute>
      }/>
      <Route path="/theme" element={
         <PrivateRoute>
          <Theme />        
         </PrivateRoute>
      } />
      <Route path="*" element={<Error />} />
      <Route path="/login" element={<Login  />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}

export default NavRoutes;