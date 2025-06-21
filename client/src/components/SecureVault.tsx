import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Lock,
  Key,
  FileText,
  CreditCard,
  Fingerprint,
  Eye,
  EyeOff,
  Download,
  Upload,
  Plus,
  Edit2,
  Trash2,
  Search,
  Star,
  Calendar,
  AlertTriangle
} from 'lucide-react';

interface VaultItem {
  id: string;
  type: 'document' | 'password' | 'card' | 'note' | 'identity';
  title: string;
  description: string;
  encrypted: boolean;
  lastAccessed: Date;
  expiryDate?: Date;
  favorite: boolean;
  tags: string[];
  size?: string;
}

export function SecureVault() {
  const [vaultItems, setVaultItems] = useState<VaultItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [biometricAuth, setBiometricAuth] = useState(false);

  useEffect(() => {
    if (isUnlocked) {
      const demoItems: VaultItem[] = [
        {
          id: 'vault001',
          type: 'document',
          title: 'Passeport Suisse',
          description: 'Document d\'identité principal - Expire 2030',
          encrypted: true,
          lastAccessed: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
          expiryDate: new Date(2030, 5, 15),
          favorite: true,
          tags: ['identité', 'voyage', 'officiel'],
          size: '2.4 MB'
        },
        {
          id: 'vault002',
          type: 'card',
          title: 'CED Bank Platinum',
          description: 'Carte bancaire principale - **** 5678',
          encrypted: true,
          lastAccessed: new Date(Date.now() - 60 * 60 * 1000),
          expiryDate: new Date(2027, 11, 31),
          favorite: true,
          tags: ['banque', 'paiement', 'premium']
        },
        {
          id: 'vault003',
          type: 'document',
          title: 'Contrat Dubai Investment',
          description: 'Accord d\'investissement immobilier Dubai',
          encrypted: true,
          lastAccessed: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
          favorite: false,
          tags: ['investissement', 'dubai', 'immobilier'],
          size: '8.7 MB'
        },
        {
          id: 'vault004',
          type: 'password',
          title: 'Trading Platform',
          description: 'Accès plateforme Sukuk Trading',
          encrypted: true,
          lastAccessed: new Date(Date.now() - 30 * 60 * 1000),
          favorite: true,
          tags: ['trading', 'sukuk', 'finance']
        },
        {
          id: 'vault005',
          type: 'note',
          title: 'Codes Zakat 2025',
          description: 'Calculs et références Zakat annuelle',
          encrypted: true,
          lastAccessed: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
          favorite: false,
          tags: ['zakat', 'religieux', 'fiscal']
        },
        {
          id: 'vault006',
          type: 'identity',
          title: 'Certificat Halal Business',
          description: 'Certification conformité Charia',
          encrypted: true,
          lastAccessed: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
          expiryDate: new Date(2026, 2, 20),
          favorite: true,
          tags: ['halal', 'certification', 'business'],
          size: '1.2 MB'
        }
      ];
      setVaultItems(demoItems);
    }
  }, [isUnlocked]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'document': return <FileText className="h-5 w-5 text-blue-600" />;
      case 'password': return <Key className="h-5 w-5 text-green-600" />;
      case 'card': return <CreditCard className="h-5 w-5 text-purple-600" />;
      case 'note': return <Edit2 className="h-5 w-5 text-orange-600" />;
      case 'identity': return <Shield className="h-5 w-5 text-red-600" />;
      default: return <Lock className="h-5 w-5 text-gray-600" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'document': return 'Document';
      case 'password': return 'Mot de passe';
      case 'card': return 'Carte';
      case 'note': return 'Note';
      case 'identity': return 'Identité';
      default: return 'Autre';
    }
  };

  const isExpiringSoon = (date?: Date) => {
    if (!date) return false;
    const thirtyDaysFromNow = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
    return date <= thirtyDaysFromNow;
  };

  const handleBiometricAuth = async () => {
    setBiometricAuth(true);
    // Simulate biometric authentication
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsUnlocked(true);
    setBiometricAuth(false);
  };

  const filteredItems = vaultItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                           (selectedCategory === 'favorites' && item.favorite) ||
                           item.type === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  if (!isUnlocked) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card className="text-center">
          <CardContent className="p-12">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="space-y-6"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-12 w-12 text-white" />
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Coffre-Fort Sécurisé</h2>
                <p className="text-gray-600 mb-6">
                  Stockage ultra-sécurisé pour vos documents et données sensibles
                </p>
              </div>
              
              <div className="space-y-4">
                <Button
                  onClick={handleBiometricAuth}
                  disabled={biometricAuth}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 flex items-center gap-3"
                >
                  {biometricAuth ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Fingerprint className="h-5 w-5" />
                      </motion.div>
                      Authentification en cours...
                    </>
                  ) : (
                    <>
                      <Fingerprint className="h-5 w-5" />
                      Déverrouiller avec biométrie
                    </>
                  )}
                </Button>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  {[
                    { icon: Shield, title: 'Chiffrement AES-256', desc: 'Sécurité militaire' },
                    { icon: Fingerprint, title: 'Authentification biométrique', desc: 'Accès ultra-sécurisé' },
                    { icon: Lock, title: 'Zero-Knowledge', desc: 'Aucun accès tiers' }
                  ].map((feature, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <feature.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <h3 className="font-semibold text-sm">{feature.title}</h3>
                      <p className="text-xs text-gray-600">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Coffre-Fort Sécurisé</h2>
            <p className="text-gray-600">Gestion sécurisée de vos documents et données sensibles</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Badge className="bg-green-100 text-green-800">
            <Lock className="h-3 w-3 mr-1" />
            Déverrouillé
          </Badge>
          <Button variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Ajouter
          </Button>
        </div>
      </motion.div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Rechercher dans le coffre-fort..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Tous les éléments</option>
              <option value="favorites">Favoris</option>
              <option value="document">Documents</option>
              <option value="password">Mots de passe</option>
              <option value="card">Cartes</option>
              <option value="note">Notes</option>
              <option value="identity">Identité</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Vault Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow cursor-pointer relative">
                {item.favorite && (
                  <div className="absolute top-3 right-3 z-10">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  </div>
                )}
                
                {item.expiryDate && isExpiringSoon(item.expiryDate) && (
                  <div className="absolute top-3 left-3 z-10">
                    <Badge className="bg-red-100 text-red-800 text-xs">
                      <AlertTriangle className="h-3 w-3 mr-1" />
                      Expire bientôt
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      {getTypeIcon(item.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg truncate">{item.title}</CardTitle>
                      <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Type: {getTypeLabel(item.type)}</span>
                      {item.size && <span>Taille: {item.size}</span>}
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs">
                      <Calendar className="h-3 w-3" />
                      <span className="text-gray-500">
                        Accédé: {item.lastAccessed.toLocaleDateString('fr-FR')}
                      </span>
                    </div>
                    
                    {item.expiryDate && (
                      <div className="flex items-center gap-2 text-xs">
                        <AlertTriangle className="h-3 w-3" />
                        <span className={isExpiringSoon(item.expiryDate) ? 'text-red-600' : 'text-gray-500'}>
                          Expire: {item.expiryDate.toLocaleDateString('fr-FR')}
                        </span>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-1">
                      {item.tags.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {item.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{item.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="h-3 w-3 mr-1" />
                        Voir
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-3 w-3" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredItems.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Lock className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun élément trouvé</h3>
            <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
          </CardContent>
        </Card>
      )}

      {/* Security Info */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <Shield className="h-8 w-8 text-blue-600" />
            <div>
              <h3 className="font-semibold text-blue-900">Sécurité Maximum</h3>
              <p className="text-sm text-blue-700">
                Toutes vos données sont chiffrées avec AES-256 et stockées localement. 
                Accès biométrique requis. Conforme aux standards bancaires internationaux.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}