function AboutPage() {
  return (
    <section>
      <h1 className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl'>
        We are Passionate About
        <span className='bg-primary py-2 px-4 rounded-lg tracking-widest text-white'>
          Your Shopping Experience
        </span>
      </h1>
      <p className='mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground'>
        At our core, we believe shopping should be simple, exciting, and
        tailored to your needs. From hand-picked products to a seamless user
        experience, we are here to make every moment of your journey enjoyable
        and rewarding. Welcome to a store built with love for every customer.
      </p>
    </section>
  );
}
export default AboutPage;
