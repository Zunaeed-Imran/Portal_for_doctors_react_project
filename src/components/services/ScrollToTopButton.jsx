import { TbHandTwoFingers } from "react-icons/tb";


function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This makes the scroll smooth
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="bg-blue-500 text-white p-2 rounded z-50 absolute right-6 bottom-8"
    >
      <TbHandTwoFingers size={'1.5rem'} />
    </button>
  );
}

export default ScrollToTopButton;
