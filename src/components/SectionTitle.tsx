export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center mb-8">
      <div className="h-[2px] w-8 bg-primary" />
      <p className="text-4xl">{title}</p>
    </div>
  );
};
