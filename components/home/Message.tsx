interface Props {
  description?: string;
}

const Message = ({ description }: Props) => {
  const desc =
    description ??
    "Strength doesn't come from what you can do, it comes from overcoming what you thought you couldn't.";

  return (
    <section className="min-h-[60vh] flex items-center justify-center px-6 md:px-12">
      <h2 className="text-center font-black leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        "{desc}"
      </h2>
    </section>
  );
};

export default Message;