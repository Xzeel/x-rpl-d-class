import Navbar from '@/components/Navbar';
import StudentCard from '@/components/StudentCard';
import TeacherCard from '@/components/TeacherCard';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import teacherImg from '@/assets/teacher.jpg';
import student1Img from '@/assets/student1.jpg';
import student2Img from '@/assets/student2.jpg';
import student3Img from '@/assets/student3.jpg';
import student4Img from '@/assets/student4.jpg';

const Index = () => {
  useSmoothScroll();

  const students = [
    {
      name: 'Ahmad Rizki Pratama',
      kelas: 'X RPL D',
      noAbsen: 1,
      motivasi: 'Coding is not just about writing code, it\'s about solving problems',
      image: student1Img,
    },
    {
      name: 'Siti Nurhaliza',
      kelas: 'X RPL D',
      noAbsen: 2,
      motivasi: 'Technology is best when it brings people together',
      image: student2Img,
    },
    {
      name: 'Budi Santoso',
      kelas: 'X RPL D',
      noAbsen: 3,
      motivasi: 'The only way to do great work is to love what you do',
      image: student3Img,
    },
    {
      name: 'Dewi Anggraini',
      kelas: 'X RPL D',
      noAbsen: 4,
      motivasi: 'Innovation distinguishes between a leader and a follower',
      image: student4Img,
    },
    {
      name: 'Fikri Ramadhan',
      kelas: 'X RPL D',
      noAbsen: 5,
      motivasi: 'Learn from yesterday, live for today, hope for tomorrow',
      image: student1Img,
    },
    {
      name: 'Anisa Putri',
      kelas: 'X RPL D',
      noAbsen: 6,
      motivasi: 'Success is not final, failure is not fatal',
      image: student2Img,
    },
    {
      name: 'Dimas Prasetyo',
      kelas: 'X RPL D',
      noAbsen: 7,
      motivasi: 'The future belongs to those who believe in their dreams',
      image: student3Img,
    },
    {
      name: 'Maya Wijaya',
      kelas: 'X RPL D',
      noAbsen: 8,
      motivasi: 'Dream big, work hard, stay focused',
      image: student4Img,
    },
  ];

  const teacher = {
    name: 'Danang Dwi Gusti Fajar Yanto, S.Kom',
    jabatan: 'Guru Mata Pelajaran RPL',
    motivasi:
      'Pendidikan adalah senjata paling ampuh yang bisa kamu gunakan untuk mengubah dunia',
    image: teacherImg,
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center space-y-6">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 animate-fade-in">
            Kelas X RPL D
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground animate-fade-in">
            Rekayasa Perangkat Lunak
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Membangun masa depan digital dengan kreativitas dan inovasi
          </p>
        </div>
      </section>

      {/* Teacher Section */}
      <section id="guru" className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Wali Kelas
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Pembimbing dan motivator kami dalam perjalanan belajar
            </p>
          </div>
          <TeacherCard
            name={teacher.name}
            jabatan={teacher.jabatan}
            motivasi={teacher.motivasi}
            image={teacher.image}
          />
        </div>
      </section>

      {/* Students Section */}
      <section id="siswa" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Siswa Kelas X RPL D
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Calon developer handal masa depan Indonesia
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {students.map((student) => (
              <StudentCard
                key={student.noAbsen}
                name={student.name}
                kelas={student.kelas}
                noAbsen={student.noAbsen}
                motivasi={student.motivasi}
                image={student.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeri" className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Galeri Kegiatan
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Momen-momen berharga kegiatan kelas X RPL D
            </p>
          </div>
          <Gallery />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
