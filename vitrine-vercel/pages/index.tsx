import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Globe, Users, Award, CheckCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">🏦</span>
              </div>
              <h1 className="text-2xl font-bold text-green-900">CED HalalTech™</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#modules" className="text-gray-600 hover:text-green-600">Modules</Link>
              <Link href="#certifications" className="text-gray-600 hover:text-green-600">ISO</Link>
              <Link href="/contact" className="text-gray-600 hover:text-green-600">Contact</Link>
              <Link href="https://app.cedbank.org" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                Accéder Plateforme
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Premier Écosystème
              <span className="text-green-600"> Technologique Islamique</span> Mondial
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              147+ visiteurs actifs aujourd'hui • 6 certifications ISO • 245K+ membres globaux • 100% conformité Sharia validée par scholars internationaux
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Link 
                href="https://app.cedbank.org"
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 flex items-center space-x-2"
              >
                <span>Découvrir l'Écosystème</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/contact"
                className="border border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50"
              >
                Demander Démo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modules Overview */}
      <section id="modules" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">6 Modules Révolutionnaires</h2>
            <p className="text-xl text-gray-600">Technologies éthiques conformes aux valeurs islamiques authentiques</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CED Bank */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200"
            >
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🏦</span>
              </div>
              <h3 className="text-2xl font-bold text-green-900 mb-4">CED Bank™</h3>
              <p className="text-gray-600 mb-6">Banking islamique complet : SWIFT international, Cartes Yakoubi 4 tiers, 0% Riba, Mode Prière</p>
              <Link 
                href="https://app.cedbank.org/banking"
                className="text-green-600 font-semibold hover:text-green-700 flex items-center space-x-2"
              >
                <span>Accéder Banking</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Super IARP Pro */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🤖</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Super IARP Pro™</h3>
              <p className="text-gray-600 mb-6">IA éthique multilingue : 78+ langues, 27,446+ règles Fiqh, validation scholars internationaux</p>
              <Link 
                href="https://app.cedbank.org/super-iarp-pro"
                className="text-blue-600 font-semibold hover:text-blue-700 flex items-center space-x-2"
              >
                <span>Tester IA</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Institut Academy */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🎓</span>
              </div>
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Institut CED Academy™</h3>
              <p className="text-gray-600 mb-6">10 formations HALAL certifiées : Tajweed, Fiqh, Coran, Hadith, Arabe, Calligraphie</p>
              <Link 
                href="https://app.cedbank.org/institut-academy"
                className="text-purple-600 font-semibold hover:text-purple-700 flex items-center space-x-2"
              >
                <span>Voir Formations</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Al-Aman Takaful */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl border border-emerald-200"
            >
              <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Al-Aman Takaful™</h3>
              <p className="text-gray-600 mb-6">Assurance islamique authentique : Famille, Auto Halal, Santé, Voyage/Hajj conformes Sharia</p>
              <Link 
                href="https://app.cedbank.org/al-aman-takaful"
                className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center space-x-2"
              >
                <span>Découvrir Assurance</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* TechForAll */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200"
            >
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🛍️</span>
              </div>
              <h3 className="text-2xl font-bold text-orange-900 mb-4">TechForAll™</h3>
              <p className="text-gray-600 mb-6">Commerce solidaire : 890K+ appareils reconditionnés, Impact écologique positif</p>
              <Link 
                href="https://app.cedbank.org/techforall"
                className="text-orange-600 font-semibold hover:text-orange-700 flex items-center space-x-2"
              >
                <span>Marketplace</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* PrettyhowQ */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl border border-pink-200"
            >
              <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">💬</span>
              </div>
              <h3 className="text-2xl font-bold text-pink-900 mb-4">PrettyhowQ™</h3>
              <p className="text-gray-600 mb-6">Chat IA conversationnel : Assistant intelligent halal, réponses authentiques</p>
              <Link 
                href="https://app.cedbank.org/prettyhowq-chat"
                className="text-pink-600 font-semibold hover:text-pink-700 flex items-center space-x-2"
              >
                <span>Discuter</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ISO Certifications */}
      <section id="certifications" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">6 Certifications ISO</h2>
            <p className="text-xl text-gray-600">Standards internationaux de qualité et sécurité</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">ISO 27001</h3>
                  <p className="text-sm text-gray-500">Sécurité Information</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="w-5 h-5 text-yellow-500" />
                <span className="text-yellow-600 font-semibold">En cours</span>
              </div>
              <p className="text-gray-600 text-sm">CED Bank™ + Al-Aman CED™</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">ISO 9001</h3>
                  <p className="text-sm text-gray-500">Management Qualité</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span className="text-blue-600 font-semibold">Planifié</span>
              </div>
              <p className="text-gray-600 text-sm">Écosystème complet</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">ISO 21001</h3>
                  <p className="text-sm text-gray-500">Organismes Formation</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="w-5 h-5 text-red-500" />
                <span className="text-red-600 font-semibold">Priorité</span>
              </div>
              <p className="text-gray-600 text-sm">CED Learn Pro™</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">ISO 26000</h3>
                  <p className="text-sm text-gray-500">Responsabilité Sociétale</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-green-600 font-semibold">Intégré</span>
              </div>
              <p className="text-gray-600 text-sm">TechForAll Suisse™</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <span className="text-emerald-600 text-xl">♻️</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">ISO 14001</h3>
                  <p className="text-sm text-gray-500">Management Environnemental</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="text-emerald-600 font-semibold">Actif</span>
              </div>
              <p className="text-gray-600 text-sm">CED Market™</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <span className="text-red-600 text-xl">🚨</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">ISO 22301</h3>
                  <p className="text-sm text-gray-500">Continuité Activité</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="w-5 h-5 text-orange-500" />
                <span className="text-orange-600 font-semibold">Critique</span>
              </div>
              <p className="text-gray-600 text-sm">Banking + Assurance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Rejoignez 245K+ Membres CED HalalTech™
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Écosystème technologique islamique complet. Banking halal, IA éthique, formations certifiées, assurance Takaful.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="https://app.cedbank.org"
              className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 flex items-center space-x-2"
            >
              <span>Accéder Plateforme Complète</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/contact"
              className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700"
            >
              Demander Démo Personnalisée
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🏦</span>
                </div>
                <h3 className="text-2xl font-bold">CED HalalTech™</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Premier écosystème technologique islamique mondial. 100% conforme Sharia.
              </p>
              <p className="text-gray-400 text-sm">
                © 2025 Club Empreinte Digitale<br/>
                Tous droits réservés | جميع الحقوق محفوظة
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Modules</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="https://app.cedbank.org/banking" className="hover:text-green-400">CED Bank™</Link></li>
                <li><Link href="https://app.cedbank.org/super-iarp-pro" className="hover:text-green-400">Super IARP Pro™</Link></li>
                <li><Link href="https://app.cedbank.org/institut-academy" className="hover:text-green-400">Institut Academy™</Link></li>
                <li><Link href="https://app.cedbank.org/al-aman-takaful" className="hover:text-green-400">Al-Aman Takaful™</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Certifications</h4>
              <ul className="space-y-2 text-gray-300">
                <li>ISO 27001 - Sécurité</li>
                <li>ISO 9001 - Qualité</li>
                <li>ISO 21001 - Formation</li>
                <li>ISO 26000 - RSE</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>📧 contact@empreintedigitale.club</li>
                <li>📧 yakoubi.yamina@ik.me</li>
                <li>🏢 Genève, Suisse 🇨🇭</li>
                <li>🌍 Bureau Dubai 🇦🇪</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              🇨🇭 Données hébergées en Suisse - Conforme RGPD/LPD - Usage éthique & halal uniquement
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}