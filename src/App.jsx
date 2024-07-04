import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SerchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

const user = {
  name: "じゃけぇ",

  image:
    "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  email: "12345@example.com",
  phone: "090-1111-2222",
  company: {
    name: "テスト会社",
  },
  website: "https://google.com",
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>aaa</SecondaryButton>
      <br />
      <SerchInput />
      <UserCard user={user} />
    </div>
  );
}
