export const AuthHeading = ({ title }: { title: string }) => {
  return (
    <div className="w-full py-4">
      <h1 className="text-3xl font-medium text-foreground">{title}</h1>
    </div>
  );
};
