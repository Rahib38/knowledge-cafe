import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <header className="flex justify-between border-b-2 p-2">
      <h1 className="text-4xl font-semibold">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
