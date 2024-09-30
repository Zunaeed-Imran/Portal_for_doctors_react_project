

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
      className="bg-blue-500 text-white p-2 rounded"
    >
      Scroll to Top
    </button>
  );
}

export default ScrollToTopButton;
