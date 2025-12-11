interface TeacherCardProps {
  name: string;
  jabatan: string;
  motivasi: string;
  image: string;
}

const TeacherCard = ({ name, jabatan, motivasi, image }: TeacherCardProps) => {
  return (
    <div className="group relative max-w-md mx-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/50 to-secondary rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
      <div className="relative bg-card rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 card-glow">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-8 space-y-4">
          <div className="text-center space-y-2">
            <div className="inline-block px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold mb-2">
              WALI KELAS
            </div>
            <h2 className="text-2xl font-bold text-card-foreground">{name}</h2>
            <p className="text-muted-foreground font-medium">{jabatan}</p>
          </div>
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground italic text-center">
              "{motivasi}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
