import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PlanificateurSatellite } from '@/components/PlanificateurSatellite';

export default function Planning() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <PlanificateurSatellite />
      </main>
      <Footer />
    </div>
  );
}