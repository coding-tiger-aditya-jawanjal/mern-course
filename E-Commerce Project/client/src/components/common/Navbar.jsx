const url =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between h-24">
      <div className="flex items-center gap-4">
        <img src={url} alt="" className="w-14 h-14 rounded-full" />
        <h1 className="font-bold text-4xl">Coding shop</h1>
      </div>
      <nav className="flex items-center gap-7 text-2xl">
        <a href="#" className="custom-link">
          Home
        </a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">products</a>
      </nav>
      <img src={url} alt="" className="w-14 h-14 rounded-full" />
    </header>
  );
};

export default Navbar;
