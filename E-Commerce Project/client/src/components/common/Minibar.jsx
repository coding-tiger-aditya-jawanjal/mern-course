const Minibar = () => {
  return (
    <div className="flex items-center justify-between">
      <h2>Divine Shopping</h2>
      <input type="search" className="border-2 border-blue-500 rounded-md" />
      <div className="flex items-center gap-5">
        <span>cart</span>
        <span>Wishlist</span>
      </div>
    </div>
  );
};

export default Minibar;
