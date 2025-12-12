import Navbar from '@/components/Navbar';
import TeacherCard from '@/components/TeacherCard';
import StudentCard from '@/components/StudentCard';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import AnimatedBackground from '@/components/AnimatedBackground';
import Card3D from '@/components/Card3D';
import ShineText from '@/components/ShineText';
import TypingAnimation from '@/components/TypingAnimation';
import ScrollReveal from '@/components/ScrollReveal';
import ClassStructure from '@/components/ClassStructure';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import teacherImg from '@/assets/teacher.jpg';

const Index = () => {
  useSmoothScroll();

  const teacher = {
    name: 'Danang Dwi Gusti Fajar Yanto, S.Kom',
    jabatan: 'Guru Mata Pelajaran RPL',
    motivasi:
      'Pendidikan adalah senjata paling ampuh yang bisa kamu gunakan untuk mengubah dunia',
    image: teacherImg,
  };

  const students = [
    { name: 'Siswa 1', kelas: 'X RPL D', noAbsen: 1, image: '/placeholder.svg' },
    { name: 'Siswa 2', kelas: 'X RPL D', noAbsen: 2, image: '/placeholder.svg' },
    { name: 'Siswa 3', kelas: 'X RPL D', noAbsen: 3, image: '/placeholder.svg' },
    { name: 'Siswa 4', kelas: 'X RPL D', noAbsen: 4, image: '/placeholder.svg' },
    { name: 'Siswa 5', kelas: 'X RPL D', noAbsen: 5, image: '/placeholder.svg' },
    { name: 'Siswa 6', kelas: 'X RPL D', noAbsen: 6, image: '/placeholder.svg' },
    { name: 'Siswa 7', kelas: 'X RPL D', noAbsen: 7, image: '/placeholder.svg' },
    { name: 'Siswa 8', kelas: 'X RPL D', noAbsen: 8, image: '/placeholder.svg' },
    { name: 'Siswa 9', kelas: 'X RPL D', noAbsen: 9, image: '/placeholder.svg' },
    { name: 'Siswa 10', kelas: 'X RPL D', noAbsen: 10, image: '/placeholder.svg' },
    { name: 'Siswa 11', kelas: 'X RPL D', noAbsen: 11, image: '/placeholder.svg' },
    { name: 'Siswa 12', kelas: 'X RPL D', noAbsen: 12, image: '/placeholder.svg' },
    { name: 'Siswa 13', kelas: 'X RPL D', noAbsen: 13, image: '/placeholder.svg' },
    { name: 'Siswa 14', kelas: 'X RPL D', noAbsen: 14, image: '/placeholder.svg' },
    { name: 'Siswa 15', kelas: 'X RPL D', noAbsen: 15, image: '/placeholder.svg' },
    { name: 'Siswa 16', kelas: 'X RPL D', noAbsen: 16, image: '/placeholder.svg' },
    { name: 'Siswa 17', kelas: 'X RPL D', noAbsen: 17, image: '/placeholder.svg' },
    { name: 'Siswa 18', kelas: 'X RPL D', noAbsen: 18, image: '/placeholder.svg' },
    { name: 'Siswa 19', kelas: 'X RPL D', noAbsen: 19, image: '/placeholder.svg' },
    { name: 'Siswa 20', kelas: 'X RPL D', noAbsen: 20, image: '/placeholder.svg' },
    { name: 'Siswa 21', kelas: 'X RPL D', noAbsen: 21, image: '/placeholder.svg' },
    { name: 'Siswa 22', kelas: 'X RPL D', noAbsen: 22, image: '/placeholder.svg' },
    { name: 'Siswa 23', kelas: 'X RPL D', noAbsen: 23, image: '/placeholder.svg' },
    { name: 'Siswa 24', kelas: 'X RPL D', noAbsen: 24, image: '/placeholder.svg' },
    { name: 'Siswa 25', kelas: 'X RPL D', noAbsen: 25, image: '/placeholder.svg' },
    { name: 'Siswa 26', kelas: 'X RPL D', noAbsen: 26, image: '/placeholder.svg' },
    { name: 'Siswa 27', kelas: 'X RPL D', noAbsen: 27, image: '/placeholder.svg' },
    { name: 'Siswa 28', kelas: 'X RPL D', noAbsen: 28, image: '/placeholder.svg' },
    { name: 'Siswa 29', kelas: 'X RPL D', noAbsen: 29, image: '/placeholder.svg' },
    { name: 'Siswa 30', kelas: 'X RPL D', noAbsen: 30, image: '/placeholder.svg' },
    { name: 'Siswa 31', kelas: 'X RPL D', noAbsen: 31, image: '/placeholder.svg' },
    { name: 'Siswa 32', kelas: 'X RPL D', noAbsen: 32, image: '/placeholder.svg' },
    { name: 'Siswa 33', kelas: 'X RPL D', noAbsen: 33, image: '/placeholder.svg' },
    { name: 'Siswa 34', kelas: 'X RPL D', noAbsen: 34, image: '/placeholder.svg' },
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <AnimatedBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <div className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold animate-fade-in">
              X RPL D Class
            </div>
            <div className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold animate-fade-in">
              Asta Arkananta
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground animate-fade-in">
            <ShineText>Software Engineering</ShineText>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in h-8">
            <TypingAnimation text="Welcome to the class X RPL D website!" />
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                About Us
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Ngintip lebih deket tentang vibes dan karakter seru dari kelas X RPL D
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={100}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  X RPL D - SMKN 8 Malang
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Kami ini kelas X RPL D, squad yang lagi gaspol belajar dunia RPL. Dengan vibes kompak dan niat yang nggak setengah-setengah,
                  kami siap jadi developer masa depan yang nggak cuma jago, tapi juga impactful buat Indonesia.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Di sini, kita ngulik macem-macem teknologi dari coding, web dev, mobile app, sampe database.
                  Dibimbing sama guru-guru yang udah expert, kita terus upgrade skill biar makin siap ngegas di dunia industri teknologi.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="text-center p-4 rounded-xl bg-primary/10">
                    <div className="text-3xl font-bold text-primary">34</div>
                    <div className="text-sm text-muted-foreground">Siswa</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-primary/10">
                    <div className="text-3xl font-bold text-primary">2K25</div>
                    <div className="text-sm text-muted-foreground">Angkatan</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Card3D floating>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
                  <div className="relative bg-card rounded-3xl p-8 shadow-xl card-glow">
                    <h4 className="text-xl font-bold text-card-foreground mb-4">Visi Kami</h4>
                    <p className="text-muted-foreground mb-6">
                      Jadi kelas yang standout di dunia tech, ngelahirin anak-anak yang jago, kreatif, dan punya integritas tanpa drama.
                    </p>
                    <h4 className="text-xl font-bold text-card-foreground mb-4">Misi Kami</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                        Ngulik dan nguasain teknologi pemrograman yang kekinian
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                        Bikin proyek-proyek yang fresh, inovatif, dan worth to flex
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                        Kolaborasi bareng, saling sharing biar semua naik level bareng
                      </li>
                    </ul>
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Teacher Section */}
      <section id="teacher" className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Wali Kelas
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Pembimbing sekaligus motivator yang selalu nge-backup kita sepanjang perjalanan belajar ini
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <TeacherCard
              name={teacher.name}
              jabatan={teacher.jabatan}
              motivasi={teacher.motivasi}
              image={teacher.image}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Class Structure Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Struktur Kelas
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Susunan pengurus kelas yang siap nge-handle segala urusan biar kelas tetap rapi, aman, dan stay on track
              </p>
            </div>
          </ScrollReveal>
          <ClassStructure />
        </div>
      </section>

      {/* Students Section */}
      <section id="students" className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Siswa
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Para siswa keren kelas X RPL D yang siap jadi developer masa depan
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {students.map((student, index) => (
              <ScrollReveal key={student.noAbsen} delay={index * 30}>
                <StudentCard
                  name={student.name}
                  kelas={student.kelas}
                  noAbsen={student.noAbsen}
                  image={student.image}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Galeri Kegiatan
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Momen kece yang jadi highlight serunya perjalanan kelas X RPL D
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Gallery />
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
