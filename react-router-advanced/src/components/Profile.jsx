import {
    Route,
    Routes,
    Link,
    useMatch
  } from "react-router-dom";
  import ProfileDetails from "./ProfileDetails";
  import ProfileSettings from "./ProfileSettings";

const Profile = () => {
    const match = useMatch("/Profile/*");
  return ( 
  <>
  <h2>Profile</h2>
        <ul>
          <li>
            <Link to={`${match.pathnameBase}/ProfileDetails`}>ProfileDetails</Link>
          </li>
          <li>
            <Link to={`${match.pathnameBase}/ProfileSettings`}>ProfileSettings</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<h3>Please select an option.</h3>} />
          <Route path="ProfileDetails" element={<ProfileDetails />} />
          <Route path="ProfileSettings" element={<ProfileSettings />} />
        </Routes>
  </>
  )
};

export default Profile;
