import ScrollReveal from './ScrollReveal';

interface StructureItem {
  title: string;
  members: string[];
}

const ClassStructure = () => {
  const structure: StructureItem[] = [
    {
      title: 'Ketua Kelas',
      members: ['Gendis Gadis Galuh'],
    },
    {
      title: 'Wakil Ketua',
      members: ['Navisya Salfa Saifunisa'],
    },
    {
      title: 'Sekretaris',
      members: ['1. Salma Dinah Herfinza', '2. Ramadhani Hakhimah Zuhria Khoji'],
    },
    {
      title: 'Bendahara',
      members: ['1. Nesya Putri Anggraini', '2. Yesica Gianita Wijaya Putri'],
    },
    {
      title: 'Kebersihan',
      members: ['1. Yesica', '2. Ajeng', '3. Serli', '4. Nana', '5. Rainer', '6. Bintang', '7. Shulthan'],
    },
    {
      title: 'Keamanan',
      members: ['1. Satria', '2. Fadhil', '3. Abi', '4. Akbar', '5. Ken'],
    },
    {
      title: 'Ketertiban',
      members: ['1. Fafa', '2. Irgy', '3. Naufal', '4. Esya', '5. Widi', '6. Gendis'],
    },
    {
      title: 'Keindahan',
      members: ['1. Safa', '2. Gendis Diva', '3. Caca', '4. Asa', '5. Nesya', '6. Nana'],
    },
    {
      title: 'Kekeluargaan',
      members: ['1. Dinda', '2. Rani', '3. Rahma', '4. Izza', '5. Cia'],
    },
    {
      title: 'Keagamaan',
      members: ['1. Abi', '2. Fadhil', '3. Raihan', '4. Fafa', '5. Moreno'],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {structure.map((item, index) => (
        <ScrollReveal key={item.title} delay={index * 100}>
          <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50">
            <h3 className="text-xl font-bold text-primary mb-3 text-center">
              {item.title}
            </h3>
            <div className="text-center space-y-1">
              {item.members.map((member, idx) => (
                <p key={idx} className="text-card-foreground">
                  {member}
                </p>
              ))}
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
};

export default ClassStructure;
