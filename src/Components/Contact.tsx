const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-base-200 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Skontaktuj się ze mną</h2>
        <p className="text-lg mb-10">
          Chętnie odpowiem na wszelkie pytania i porozmawiam o potencjalnej
          współpracy.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <a
            href="mailto:kacper.jankowski.webdev@gmail.com"
            className="flex items-center gap-3 text-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300 px-6 py-3 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            kacper.jankowski.webdev@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/kacper-jankowski-webdev/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg bg-blue-600 hover:bg-blue-500 transition-colors duration-300 px-6 py-3 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
