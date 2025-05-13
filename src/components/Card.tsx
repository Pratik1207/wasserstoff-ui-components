type CardProps = {
    title: string;
    children: React.ReactNode;
  };
  
  const Card = ({ title, children }: CardProps) => (
    <div className="p-4 border rounded shadow mb-4">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      {children}
    </div>
  );
  
  export default Card;
  