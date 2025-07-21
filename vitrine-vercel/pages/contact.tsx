import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Clock, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    modules: [] as string[],
    message: '',
    wantDemo: false
  })
  const [submitted, setSubmitted] = useState(false)

  const modules = [
    'CED Bank™ - Banking Islamique',
    'Super IARP Pro™ - IA Éthique', 
    'Institut CED Academy™ - Formations HALAL',
    'Al-Aman Takaful™ - Assurance Islamique',
    'TechForAll™ - Commerce Solidaire',
    'PrettyhowQ™ - Chat IA'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
  }

  const handleModuleChange = (module: string) => {
    setFormData(prev => ({
      ...prev,
      modules: prev.modules.includes(module) 
        ? prev.modules.filter(m => m !== module)
        : [...prev.modules, module]
    }))
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Demande Envoyée !</h2>
          <p className="text-gray-600 mb-6">
            Merci pour votre intérêt. Notre équipe vous contactera sous 24h pour organiser votre démo personnalisée.
          </p>
          <div className="space-y-2 text-sm text-gray-500 mb-6">
            <p>📧 contact@empreintedigitale.club</p>
            <p>📧 yakoubi.yamina@ik.me</p>
          </div>
          <Link 
            href="/"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 inline-flex items-center space-x-2"
          >
            <span>Retour Accueil</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">🏦</span>
              </div>
              <h1 className="text-2xl font-bold text-green-900">CED HalalTech™</h1>
            </Link>
            <Link 
              href="https://app.cedbank.org"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Accéder Plateforme
            </Link>
          </div>
        </div>
      </header>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Demander une Démo
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Découvrez l'écosystème CED HalalTech™ avec une démonstration personnalisée adaptée à vos besoins.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email professionnel *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Entreprise/Organisation
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Nom de votre organisation"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pays/Région
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Votre pays"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Modules d'intérêt (sélection multiple)
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {modules.map(module => (
                      <label key={module} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.modules.includes(module)}
                          onChange={() => handleModuleChange(module)}
                          className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                        />
                        <span className="text-sm text-gray-700">{module}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message personnalisé
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Décrivez vos besoins spécifiques et vos questions..."
                  />
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="demo"
                    checked={formData.wantDemo}
                    onChange={(e) => setFormData({...formData, wantDemo: e.target.checked})}
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <label htmlFor="demo" className="text-sm text-gray-700">
                    Je souhaite une démonstration personnalisée en direct
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-green-700 flex items-center justify-center space-x-2"
                >
                  <span>Demander Démo Gratuite</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Réponse garantie sous 24h • Démo personnalisée • Sans engagement
                </p>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:pl-8"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations de Contact</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">contact@empreintedigitale.club</p>
                      <p className="text-gray-600">yakoubi.yamina@ik.me (Direction)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Sièges Internationaux</h3>
                      <p className="text-gray-600">🇨🇭 Genève, Suisse (Siège principal)</p>
                      <p className="text-gray-600">🇦🇪 Dubai, Emirates</p>
                      <p className="text-gray-600">🇸🇦 Riyadh, Arabie Saoudite</p>
                      <p className="text-gray-600">🇫🇷 Paris, France</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Horaires</h3>
                      <p className="text-gray-600">Lun-Ven: 9h-18h CET</p>
                      <p className="text-gray-600">Support 24/7 disponible</p>
                      <p className="text-gray-600">Réponse sous 24h garantie</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">Écosystème Actuel</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">147+</div>
                      <div className="text-gray-600">Visiteurs aujourd'hui</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">245K+</div>
                      <div className="text-gray-600">Membres globaux</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">67</div>
                      <div className="text-gray-600">Pays couverts</div>
                    </div>
                    <div className="text-center p-3 bg-emerald-50 rounded-lg">
                      <div className="text-2xl font-bold text-emerald-600">100%</div>
                      <div className="text-gray-600">Conformité Sharia</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Access */}
              <div className="mt-8 bg-gradient-to-r from-green-600 to-blue-600 p-6 rounded-2xl text-white">
                <h3 className="text-lg font-semibold mb-4">Accès Direct Plateforme</h3>
                <p className="text-green-100 mb-4">
                  Explorez dès maintenant nos 6 modules révolutionnaires
                </p>
                <Link 
                  href="https://app.cedbank.org"
                  className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 inline-flex items-center space-x-2"
                >
                  <span>Découvrir l'Écosystème</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">🏦</span>
            </div>
            <h3 className="text-2xl font-bold">CED HalalTech™</h3>
          </div>
          <p className="text-gray-300 mb-4">
            Premier écosystème technologique islamique mondial
          </p>
          <p className="text-gray-400 text-sm">
            © 2025 Club Empreinte Digitale • Tous droits réservés • جميع الحقوق محفوظة<br/>
            🇨🇭 Données hébergées en Suisse - Conforme RGPD/LPD
          </p>
        </div>
      </footer>
    </div>
  )
}