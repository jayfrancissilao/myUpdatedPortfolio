import '/src/components/Footer/Footer.css'
const Footer = () => {
  return (
    <div className='footer-pc footer-cp'>
      <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4 ">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Owner <a href="https://flowbite.com/" class="hover:underline"></a>:
            Jay Francis Silao.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
