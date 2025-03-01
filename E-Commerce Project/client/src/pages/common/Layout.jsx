import Footer from "../../components/common/Footer";
import Minibar from "../../components/common/Minibar";
import Navbar from "../../components/common/Navbar";

const Layout = ({ children }) => {
  return (
    <main
      className="bg-gray-50 
    max-w-7xl mx-auto min-h-screen p-5 flex flex-col justify-between w-full"
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <Navbar />
          <Minibar />
        </div>
        {children}
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
