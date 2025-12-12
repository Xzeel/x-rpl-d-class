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
import abiWaqqashImg from '@/assets/students/abi-waqqash.jpg';
import miftaImg from '@/assets/students/mifta.jpg';
import adindaNabilaImg from '@/assets/students/adinda-nabila.jpg';
import naufalImg from '@/assets/students/naufal.jpg';
import aisyahSafaImg from '@/assets/students/aisyah-safa.jpg';
import akbarImg from '@/assets/students/akbar.jpg';
import anisaAsaputriImg from '@/assets/students/anisa-asaputri.JPG';
import audyImg from '@/assets/students/audy-valencia.jpg';
import auliaPutriImg from '@/assets/students/aulia-putri.jpg';

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
    { name: 'Abi Waqqash', noAbsen: 1, image: abiWaqqashImg },
    { name: 'Achmad Miftakhul Haq', noAbsen: 2, image: miftaImg },
    { name: 'Adinda Nabila P.S', noAbsen: 3, image: adindaNabilaImg },
    { name: 'Ahnaf Naufal Prawira', noAbsen: 4, image: naufalImg },
    { name: 'Aisyah Safa Azahrah', noAbsen: 5, image: aisyahSafaImg },
    { name: 'Akbar Ramadhan Yasid', noAbsen: 6, image: akbarImg },
    { name: 'Anisa Asaputri W.K', noAbsen: 7, image: anisaAsaputriImg },
    { name: 'Audy Valencia', noAbsen: 8, image: audyImg },
    { name: 'Aulia Putri Maharani', noAbsen: 9, image: '/placeholder.svg' },
    { name: 'Bintang Sholikhul Khakim', noAbsen: 10, image: '/placeholder.svg' },
    { name: 'Esya Galih Pratama', noAbsen: 11, image: '/placeholder.svg' },
    { name: 'Fadhil Dwi Nugroho', noAbsen: 12, image: '/placeholder.svg' },
    { name: 'Galih Ajeng Ayuningtyas', noAbsen: 13, image: '/placeholder.svg' },
    { name: 'Gendis Diva Azuhra', noAbsen: 14, image: '/placeholder.svg' },
    { name: 'Gendis Gadis Galuh', noAbsen: 15, image: '/placeholder.svg' },
    { name: 'Indhana Zulfa', noAbsen: 16, image: '/placeholder.svg' },
    { name: 'Izza Nur R.K', noAbsen: 17, image: '/placeholder.svg' },
    { name: 'Johansyach Rainer Kusworo', noAbsen: 18, image: '/placeholder.svg' },
    { name: 'Kaka Satria Pamungkas', noAbsen: 19, image: '/placeholder.svg' },
    { name: 'Ken Abimanyu K', noAbsen: 20, image: '/placeholder.svg' },
    { name: 'Moch Raihan Fadillah', noAbsen: 21, image: '/placeholder.svg' },
    { name: 'Muhammad Fafa F.F', noAbsen: 22, image: '/placeholder.svg' },
    { name: 'Muhammad Irgy Farezi', noAbsen: 23, image: '/placeholder.svg' },
    { name: 'Muhammad Shulthan A.G', noAbsen: 24, image: '/placeholder.svg' },
    { name: 'Navissa Naora Nadzillin', noAbsen: 25, image: '/placeholder.svg' },
    { name: 'Navisya Salfa Saifunisa', noAbsen: 26, image: '/placeholder.svg' },
    { name: 'Nesya Putri Anggraini', noAbsen: 27, image: '/placeholder.svg' },
    { name: 'Ramadhani Hakhimah Z.K', noAbsen: 28, image: '/placeholder.svg' },
    { name: 'Salma Dinah Herfinza', noAbsen: 29, image: '/placeholder.svg' },
    { name: 'Satria Moreno Prasetya', noAbsen: 30, image: '/placeholder.svg' },
    { name: 'Serli Aprilia Maulida', noAbsen: 31, image: '/placeholder.svg' },
    { name: 'Widi Heri Waluyo', noAbsen: 32, image: '/placeholder.svg' },
    { name: 'Yesica Gianita W.P', noAbsen: 33, image: '/placeholder.svg' },
    { name: 'Zakrianda Putra Faristo', noAbsen: 34, image: '/placeholder.svg' },
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
