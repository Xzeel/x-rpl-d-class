interface StudentCardProps {
  name: string;
  noAbsen: number;
  image: string;
}

const StudentCard = ({ name, noAbsen, image }: StudentCardProps) => {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 card-glow">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-4 space-y-2">
          <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            #{noAbsen}
          </span>
          <h3 className="text-sm md:text-base font-bold text-card-foreground">{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
