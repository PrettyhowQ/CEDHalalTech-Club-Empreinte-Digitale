import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home,
  Grid3x3,
  ShoppingCart,
  Mail,
  CreditCard,
  Truck,
  Globe,
  MapPin,
  Phone,
  User,
  Send,
  Star,
  Award,
  Shield,
  Package
} from 'lucide-react';

interface Translation {
  [key: string]: string;
}

interface Category {
  id: string;
  name: string;
  status: 'active' | 'coming_soon';
}

interface Product {
  id: string;
  name: string;
  image: string;
  status: 'available' | 'coming_soon';
}

export function CostaDelSolWebsite() {
  const [selectedLanguage, setSelectedLanguage] = useState('fr');
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });

  const translations: Translation = {
    fr: "Bienvenue chez Costa del Sol",
    en: "Welcome to Costa del Sol",
    ar: "مرحبا بكم في كوستا ديل سول",
    es: "Bienvenido a Costa del Sol",
    zh: "欢迎来到阳光海岸"
  };

  const categories: Category[] = [
    { id: 'furniture', name: 'Meubles', status: 'active' },
    { id: 'appliances', name: 'Électroménager', status: 'active' },
    { id: 'beauty', name: 'Beauté', status: 'active' },
    { id: 'fashion', name: 'Mode', status: 'active' },
    { id: 'sports', name: 'Sport', status: 'active' },
    { id: 'coming', name: 'À venir', status: 'coming_soon' }
  ];

  const products: Product[] = [
    {
      id: 'p1',
      name: 'Canapé 3 places',
      image: '/api/placeholder/300/300',
      status: 'coming_soon'
    },
    {
      id: 'p2',
      name: 'Mixeur Pro 1200W',
      image: '/api/placeholder/300/300',
      status: 'coming_soon'
    },
    {
      id: 'p3',
      name: 'Sèche-cheveux Compact',
      image: '/api/placeholder/300/300',
      status: 'available'
    }
  ];

  const paymentMethods = [
    { name: 'Visa', icon: 'https://img.icons8.com/color/48/visa.png' },
    { name: 'MasterCard', icon: 'https://img.icons8.com/color/48/mastercard-logo.png' },
    { name: 'PayPal', icon: 'https://img.icons8.com/color/48/paypal.png' },
    { name: 'Apple Pay', icon: 'https://img.icons8.com/ios-filled/50/apple-pay.png' },
    { name: 'Stripe', icon: 'https://img.icons8.com/color/48/stripe.png' }
  ];

  const currencies = [
    { code: 'fr', name: 'France (EUR €)' },
    { code: 'us', name: 'USA (USD $)' },
    { code: 'jp', name: 'Japon (JPY ¥)' },
    { code: 'br', name: 'Brésil (BRL R$)' },
    { code: 'dz', name: 'Algérie (DZD د.ج)' }
  ];

  useEffect(() => {
    const savedLang = localStorage.getItem('selectedLang');
    if (savedLang) {
      setSelectedLanguage(savedLang);
    }

    // Protection anti-copie
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      alert("Contenu protégé © Yakoubi Yamina");
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && ['u','s','c','x'].includes(e.key.toLowerCase())) || e.key === "F12") {
        e.preventDefault();
        alert("Copie protégée © Yakoubi Yamina");
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const changeLanguage = (lang: string) => {
    setSelectedLanguage(lang);
    localStorage.setItem('selectedLang', lang);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Préparation des données pour FormSubmit
    const formDataToSend = new FormData();
    formDataToSend.append('_captcha', 'false');
    formDataToSend.append('_subject', 'Nouvelle commande via Costa del Sol');
    formDataToSend.append('_template', 'box');
    formDataToSend.append('nom', formData.nom);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);

    try {
      const response = await fetch('https://formsubmit.co/yakoubi.yamina@ik.me', {
        method: 'POST',
        body: formDataToSend
      });
      
      if (response.ok) {
        alert('Message envoyé avec succès !');
        setFormData({ nom: '', email: '', message: '' });
      }
    } catch (error) {
      alert('Erreur lors de l\'envoi du message');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-800 to-blue-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex flex-wrap justify-between items-center">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl font-bold"
            >
              Costa del Sol
            </motion.h1>
            
            <nav className="flex flex-wrap gap-3 items-center">
              <Button variant="secondary" className="bg-orange-200 text-gray-900 hover:bg-orange-300">
                <Home className="h-4 w-4 mr-2" />
                Accueil
              </Button>
              <Button variant="secondary" className="bg-orange-200 text-gray-900 hover:bg-orange-300">
                <Grid3x3 className="h-4 w-4 mr-2" />
                Catégories
              </Button>
              <Button variant="secondary" className="bg-orange-200 text-gray-900 hover:bg-orange-300">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Panier
              </Button>
              
              <select 
                value={selectedLanguage}
                onChange={(e) => changeLanguage(e.target.value)}
                className="ml-3 px-3 py-2 rounded-lg text-gray-900 bg-orange-200"
              >
                <option value="fr">Français</option>
                <option value="en">English</option>
                <option value="ar">العربية</option>
                <option value="es">Español</option>
                <option value="zh">中文</option>
              </select>
            </nav>
          </div>
        </div>
      </header>

      {/* Section Introduction */}
      <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-blue-900 mb-4"
          >
            {translations[selectedLanguage] || translations.fr}
          </motion.h2>
          <p className="text-xl text-gray-700">
            Des articles soigneusement sélectionnés pour votre confort, livrés depuis l'Europe vers le monde entier.
          </p>
        </div>
      </section>

      {/* Banner avec animation */}
      <section className="relative h-80 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
            alt="Costa del Sol & Canaries"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="text-center text-white">
            <h3 className="text-3xl font-bold mb-2">Costa del Sol & TechForAll</h3>
            <p className="text-xl">Excellence européenne et reconditionnement solidaire</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Catégories */}
        <section className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-8"
          >
            Catégories
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05, backgroundColor: "#f0f8ff" }}
                className="bg-white rounded-xl p-6 shadow-lg cursor-pointer transition-all"
              >
                <div className="text-center">
                  <h3 className="font-semibold text-gray-800">{category.name}</h3>
                  {category.status === 'coming_soon' && (
                    <Badge variant="outline" className="mt-2 bg-orange-100 text-orange-800">
                      À venir
                    </Badge>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Produits */}
        <section className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-8"
          >
            Nouveaux Produits
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-3">{product.name}</h3>
                  <Button 
                    variant={product.status === 'available' ? 'default' : 'outline'}
                    className="w-full"
                    disabled={product.status === 'coming_soon'}
                  >
                    {product.status === 'available' ? 'Disponible' : 'À venir'}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Formulaire Contact */}
        <section className="mb-16">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-blue-800">
                Contact & Commande
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  name="nom"
                  placeholder="Nom / Name / الاسم"
                  value={formData.nom}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email / البريد الإلكتروني"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Votre message / Your message / رسالتك"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                  <Send className="h-4 w-4 mr-2" />
                  Envoyer / Send / إرسال
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Livraison Internationale */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl">Livraison Internationale</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div>
                <p className="text-lg mb-2">Livraison en Europe, Maghreb, Moyen-Orient, Amérique du Nord...</p>
                <p className="text-gray-600">Suivi, rapidité, fiabilité — DHL, UPS et partenaires locaux</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Paiements sécurisés</h3>
                <div className="flex justify-center flex-wrap gap-4">
                  {paymentMethods.map((method) => (
                    <img 
                      key={method.name}
                      src={method.icon} 
                      alt={method.name}
                      className="h-10 object-contain"
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4">
                  <Shield className="h-12 w-12 mx-auto mb-3 text-blue-600" />
                  <h4 className="font-semibold mb-2">Sécurité Garantie</h4>
                  <p className="text-sm text-gray-600">Paiements sécurisés et protection des données</p>
                </div>
                <div className="text-center p-4">
                  <Truck className="h-12 w-12 mx-auto mb-3 text-green-600" />
                  <h4 className="font-semibold mb-2">Livraison Rapide</h4>
                  <p className="text-sm text-gray-600">Expédition depuis l'Europe vers le monde</p>
                </div>
                <div className="text-center p-4">
                  <Award className="h-12 w-12 mx-auto mb-3 text-purple-600" />
                  <h4 className="font-semibold mb-2">Qualité Premium</h4>
                  <p className="text-sm text-gray-600">Articles soigneusement sélectionnés</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Section Légale */}
        <section className="mb-16">
          <Card className="bg-gray-50">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Conditions d'utilisation</h3>
              <p className="text-gray-700 mb-4">
                En accédant au site, vous acceptez nos conditions générales. Toutes les données sont protégées. 
                Le contenu est la propriété de Yakoubi Yamina.
              </p>
              <p className="text-gray-600">
                Pour toute question, contactez : 
                <a href="mailto:contact@costa-del-sol.com" className="text-blue-600 hover:underline ml-1">
                  contact@costa-del-sol.com
                </a>
              </p>
            </CardContent>
          </Card>
        </section>

      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-orange-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-8">
          
          {/* Sélecteur de langue et devise */}
          <div>
            <label className="block mb-3 text-lg font-medium">Langue / Devise :</label>
            <select className="px-4 py-2 rounded-lg text-gray-900 bg-orange-200">
              {currencies.map(currency => (
                <option key={currency.code} value={currency.code}>
                  {currency.name}
                </option>
              ))}
            </select>
          </div>

          {/* Moyens de paiement */}
          <div>
            <div className="flex justify-center flex-wrap gap-4 mb-6">
              {paymentMethods.map((method) => (
                <img 
                  key={method.name}
                  src={method.icon} 
                  alt={method.name}
                  className="h-9 object-contain"
                />
              ))}
            </div>
          </div>

          {/* Navigation TechForAll */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button 
                onClick={() => window.location.href = '/costa-del-sol'}
                variant="outline"
                className="border-orange-300 text-orange-200 hover:bg-orange-800"
              >
                App Logistique Mobile
              </Button>
              <Button 
                onClick={() => window.location.href = '/boutique-yakoubi'}
                variant="outline"
                className="border-orange-300 text-orange-200 hover:bg-orange-800"
              >
                Boutique Solidaire B. Yakoubi
              </Button>
              <Button 
                onClick={() => window.location.href = '/techforall'}
                variant="outline"
                className="border-orange-300 text-orange-200 hover:bg-orange-800"
              >
                TechForAll Association
              </Button>
            </div>
            
            <Button 
              onClick={() => window.location.href = '/premium-dashboard'}
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-3 rounded-full shadow-lg"
            >
              Rejoignez le Réseau CED & IAP
            </Button>
          </div>

          {/* Liens légaux */}
          <div className="text-sm space-x-4">
            <a href="#" className="hover:text-orange-300">Conditions d'utilisation</a>
            <span>|</span>
            <a href="#" className="hover:text-orange-300">CGV</a>
            <span>|</span>
            <a href="#" className="hover:text-orange-300">Mentions légales</a>
            <span>|</span>
            <a href="#" className="hover:text-orange-300">Confidentialité</a>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-6">
            <p className="text-sm">
              © 2025 Costa del Sol – Tous droits réservés | Propulsé par <strong>Yakoubi Yamina</strong>
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}