const SubHeader = ({
  logo,
  title,
  description,
}: {
  logo: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="text-center mb-10 animate-fade-in">
      <div className="mb-4">
        <span className="mb-4 text-primary bg-primary/5 border border-primary rounded-xl px-3 py-1 text-sm font-semibold">
          {logo}
        </span>
      </div>

      <h2 className="text-4xl font-bold mb-3 tracking-tight">{title}</h2>
      <p className="text-lg text-foreground/10 max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default SubHeader;
