interface StudentCardProps {
  name: string;
  kelas: string;
  noAbsen: number;
  image: string;
}

const StudentCard = ({ name, kelas, noAbsen, image }: StudentCardProps) => {
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
        <div className="p-6 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-card-foreground line-clamp-1">{name}</h3>
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold shrink-0">
              #{noAbsen}
            </span>
          </div>
          <p className="text-sm text-muted-foreground font-medium">{kelas}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
