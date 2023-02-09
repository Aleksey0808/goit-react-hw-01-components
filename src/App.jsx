// import Section from "./components/Section/Section";
import Profile from "./components/Profile/Profile";
import user from "data/user.json";

export default function App() {
  return (
    <div>

        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />

   </div>
  );
}
