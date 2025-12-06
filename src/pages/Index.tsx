import Navbar from '@/components/Navbar';
import TeacherCard from '@/components/TeacherCard';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import AnimatedBackground from '@/components/AnimatedBackground';
import MusicPlayer from '@/components/MusicPlayer';
import ShineText from '@/components/ShineText';
import TypingAnimation from '@/components/TypingAnimation';
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

  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <MusicPlayer />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center space-y-6">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 animate-fade-in">
            X RPL D Class
          </div>
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 animate-fade-in">
            Asta Arkananta
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
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About Us
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Mengenal lebih dekat kelas X RPL D
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                X RPL D - SMKN 8 Malang
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Kami adalah kelas X RPL D, sebuah komunitas pembelajar yang bersemangat dalam dunia 
                Rekayasa Perangkat Lunak. Dengan dedikasi tinggi dan semangat kolaborasi, kami 
                berkomitmen untuk menjadi developer handal masa depan Indonesia.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Di kelas ini, kami mempelajari berbagai teknologi pemrograman, pengembangan web, 
                mobile, dan database. Dengan bimbingan guru-guru terbaik, kami terus mengasah 
                kemampuan untuk menghadapi tantangan industri teknologi.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="text-center p-4 rounded-xl bg-primary/10">
                  <div className="text-3xl font-bold text-primary">34</div>
                  <div className="text-sm text-muted-foreground">Siswa</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-primary/10">
                  <div className="text-3xl font-bold text-primary">2025</div>
                  <div className="text-sm text-muted-foreground">Angkatan</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
              <div className="relative bg-card rounded-3xl p-8 shadow-xl">
                <h4 className="text-xl font-bold text-card-foreground mb-4">Visi Kami</h4>
                <p className="text-muted-foreground mb-6">
                  Menjadi kelas yang unggul dalam bidang teknologi informasi dan menghasilkan 
                  lulusan yang kompeten, kreatif, dan berintegritas tinggi.
                </p>
                <h4 className="text-xl font-bold text-card-foreground mb-4">Misi Kami</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                    Menguasai teknologi pemrograman modern
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                    Membangun proyek-proyek inovatif
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                    Berkolaborasi dan berbagi ilmu
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Section */}
      <section id="teacher" className="py-20 px-4 bg-accent/30">
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

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4">
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
