import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Users, 
  BookOpen, 
  Settings, 
  BarChart3,
  Search,
  Filter,
  Download,
  Upload,
  Save,
  X,
  CheckCircle,
  AlertCircle,
  Clock,
  DollarSign,
  Globe,
  Award,
  Calendar,
  Target,
  TrendingUp,
  UserCheck,
  FileText,
  Video,
  Headphones,
  Star
} from 'lucide-react';
import { CEDFooter } from '@/components/CEDFooter';
import { useToast } from '@/hooks/use-toast';

interface Formation {
  id: number;
  titre: string;
  description: string;
  instructeur: string;
  duree: string;
  niveau: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';
  prix: string;
  devise: 'CHF' | 'EUR' | 'USD' | 'AED';
  categorie: string;
  langue: string[];
  tags: string[];
  participants: number;
  note: number;
  avis: number;
  image: string;
  certifie: boolean;
  halal: boolean;
  video: boolean;
  audio: boolean;
  pdf: boolean;
  quiz: boolean;
  certification: boolean;
  dateDebut: string;
  dateFin: string;
  places: number;
  placesRestantes: number;
  savantValidateur: string;
  sourcesFiqh: string[];
  prerequis: string[];
  objectifs: string[];
  programme: string[];
  dateCreation: string;
  dateMiseAJour: string;
}

interface FormationStats {
  totalFormations: number;
  totalInscrits: number;
  formationsActives: number;
  revenuTotal: number;
  tauxCompletion: number;
  noteMoyenne: number;
}

export default function AdminFormations() {
  const [formations, setFormations] = useState<Formation[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFormation, setSelectedFormation] = useState<Formation | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategorie, setFilterCategorie] = useState('all');
  const [stats, setStats] = useState<FormationStats | null>(null);
  const { toast } = useToast();

  // Nouveau formulaire formation
  const [newFormation, setNewFormation] = useState({
    titre: '',
    description: '',
    instructeur: '',
    duree: '',
    niveau: 'Débutant' as const,
    prix: '0',
    devise: 'CHF' as const,
    categorie: '',
    langue: ['français'],
    tags: [],
    image: '',
    certifie: false,
    halal: true,
    video: false,
    audio: false,
    pdf: false,
    quiz: false,
    certification: false,
    dateDebut: '',
    dateFin: '',
    places: 50,
    placesRestantes: 50,
    savantValidateur: '',
    sourcesFiqh: [],
    prerequis: [],
    objectifs: [],
    programme: []
  });

  useEffect(() => {
    fetchFormations();
    fetchStats();
  }, []);

  const fetchFormations = async () => {
    try {
      const response = await fetch('/api/formations');
      const data = await response.json();
      setFormations(data.formations || []);
    } catch (error) {
      console.error('Erreur lors du chargement des formations:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger les formations",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    // Simuler des statistiques en attendant l'API analytics
    const mockStats: FormationStats = {
      totalFormations: formations.length,
      totalInscrits: formations.reduce((acc, f) => acc + f.participants, 0),
      formationsActives: formations.filter(f => new Date(f.dateFin) > new Date()).length,
      revenuTotal: formations.reduce((acc, f) => acc + (parseFloat(f.prix) * f.participants), 0),
      tauxCompletion: 87.3,
      noteMoyenne: 4.6
    };
    setStats(mockStats);
  };

  const handleCreateFormation = async () => {
    try {
      const response = await fetch('/api/formations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newFormation)
      });

      if (response.ok) {
        toast({
          title: "Succès",
          description: "Formation créée avec succès"
        });
        fetchFormations();
        setIsCreating(false);
        resetForm();
      } else {
        throw new Error('Erreur lors de la création');
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de créer la formation",
        variant: "destructive"
      });
    }
  };

  const handleUpdateFormation = async () => {
    if (!selectedFormation) return;

    try {
      const response = await fetch(`/api/formations/${selectedFormation.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(selectedFormation)
      });

      if (response.ok) {
        toast({
          title: "Succès",
          description: "Formation mise à jour avec succès"
        });
        fetchFormations();
        setIsEditing(false);
        setSelectedFormation(null);
      } else {
        throw new Error('Erreur lors de la mise à jour');
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour la formation",
        variant: "destructive"
      });
    }
  };

  const handleDeleteFormation = async (id: number) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette formation ?')) return;

    try {
      const response = await fetch(`/api/formations/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        toast({
          title: "Succès",
          description: "Formation supprimée avec succès"
        });
        fetchFormations();
      } else {
        throw new Error('Erreur lors de la suppression');
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de supprimer la formation",
        variant: "destructive"
      });
    }
  };

  const handleSeedData = async () => {
    try {
      const response = await fetch('/api/formations/seed', {
        method: 'POST'
      });

      if (response.ok) {
        toast({
          title: "Succès", 
          description: "Données d'exemple ajoutées avec succès"
        });
        fetchFormations();
      } else {
        throw new Error('Erreur lors de l\'ajout des données');
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible d'ajouter les données d'exemple",
        variant: "destructive"
      });
    }
  };

  const resetForm = () => {
    setNewFormation({
      titre: '',
      description: '',
      instructeur: '',
      duree: '',
      niveau: 'Débutant',
      prix: '0',
      devise: 'CHF',
      categorie: '',
      langue: ['français'],
      tags: [],
      image: '',
      certifie: false,
      halal: true,
      video: false,
      audio: false,
      pdf: false,
      quiz: false,
      certification: false,
      dateDebut: '',
      dateFin: '',
      places: 50,
      placesRestantes: 50,
      savantValidateur: '',
      sourcesFiqh: [],
      prerequis: [],
      objectifs: [],
      programme: []
    });
  };

  const filteredFormations = formations.filter(formation => {
    const matchesSearch = formation.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         formation.instructeur.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategorie === 'all' || formation.categorie === filterCategorie;
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(new Set(formations.map(f => f.categorie))).filter(Boolean);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <motion.div 
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                🏛️ Administration CED Academy
              </h1>
              <p className="text-lg opacity-90">
                Gestion des formations islamiques et système d'apprentissage
              </p>
            </div>
            <div className="flex space-x-4">
              <Button 
                onClick={handleSeedData}
                className="bg-white/20 hover:bg-white/30"
              >
                <Upload className="h-4 w-4 mr-2" />
                Données d'exemple
              </Button>
              <Button 
                onClick={() => setIsCreating(true)}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Nouvelle formation
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 py-12">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="formations">Formations</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Paramètres</TabsTrigger>
          </TabsList>

          {/* Vue d'ensemble */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {stats && (
                <>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Formations</CardTitle>
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stats.totalFormations}</div>
                      <p className="text-xs text-muted-foreground">
                        +2 ce mois-ci
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Inscrits</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stats.totalInscrits}</div>
                      <p className="text-xs text-muted-foreground">
                        +127 cette semaine
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Revenus Total</CardTitle>
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stats.revenuTotal.toLocaleString()} CHF</div>
                      <p className="text-xs text-muted-foreground">
                        +15% vs mois dernier
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Taux Complétion</CardTitle>
                      <Target className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stats.tauxCompletion}%</div>
                      <p className="text-xs text-muted-foreground">
                        +3% vs moyenne industrie
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Note Moyenne</CardTitle>
                      <Star className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stats.noteMoyenne}/5</div>
                      <p className="text-xs text-muted-foreground">
                        Basé sur {formations.reduce((acc, f) => acc + f.avis, 0)} avis
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Formations Actives</CardTitle>
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stats.formationsActives}</div>
                      <p className="text-xs text-muted-foreground">
                        En cours ou à venir
                      </p>
                    </CardContent>
                  </Card>
                </>
              )}
            </div>

            {/* Formations récentes */}
            <Card>
              <CardHeader>
                <CardTitle>Formations Récentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {formations.slice(0, 5).map((formation) => (
                    <div key={formation.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <img 
                          src={formation.image} 
                          alt={formation.titre}
                          className="w-12 h-12 rounded object-cover"
                        />
                        <div>
                          <h3 className="font-medium">{formation.titre}</h3>
                          <p className="text-sm text-gray-500">{formation.instructeur}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge variant={formation.halal ? "default" : "secondary"}>
                          {formation.halal ? "Halal" : "Standard"}
                        </Badge>
                        <span className="text-sm text-gray-500">
                          {formation.participants} inscrits
                        </span>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => setSelectedFormation(formation)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gestion des formations */}
          <TabsContent value="formations">
            {/* Filtres et recherche */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Rechercher formations..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={filterCategorie} onValueChange={setFilterCategorie}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Catégorie" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Toutes catégories</SelectItem>
                      {categories.map(cat => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtres
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Table des formations */}
            <Card>
              <CardHeader>
                <CardTitle>Liste des Formations ({filteredFormations.length})</CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="text-center py-8">Chargement...</div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Formation</TableHead>
                        <TableHead>Instructeur</TableHead>
                        <TableHead>Catégorie</TableHead>
                        <TableHead>Niveau</TableHead>
                        <TableHead>Prix</TableHead>
                        <TableHead>Inscrits</TableHead>
                        <TableHead>Statut</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredFormations.map((formation) => (
                        <TableRow key={formation.id}>
                          <TableCell>
                            <div className="flex items-center space-x-3">
                              <img 
                                src={formation.image} 
                                alt={formation.titre}
                                className="w-10 h-10 rounded object-cover"
                              />
                              <div>
                                <div className="font-medium">{formation.titre}</div>
                                <div className="text-sm text-gray-500">{formation.duree}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{formation.instructeur}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{formation.categorie}</Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant={
                              formation.niveau === 'Débutant' ? 'default' :
                              formation.niveau === 'Intermédiaire' ? 'secondary' :
                              formation.niveau === 'Avancé' ? 'destructive' : 'default'
                            }>
                              {formation.niveau}
                            </Badge>
                          </TableCell>
                          <TableCell>{formation.prix} {formation.devise}</TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <Users className="h-4 w-4 text-gray-500" />
                              <span>{formation.participants}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-1">
                              {formation.halal && <Badge className="bg-green-100 text-green-800">Halal</Badge>}
                              {formation.certifie && <Badge className="bg-blue-100 text-blue-800">Certifié</Badge>}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => setSelectedFormation(formation)}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => {
                                  setSelectedFormation(formation);
                                  setIsEditing(true);
                                }}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => handleDeleteFormation(formation.id)}
                                className="text-red-600 hover:text-red-700"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="text-center py-12">
              <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Analytics Avancées</h3>
              <p className="text-gray-600 mb-4">
                Tableaux de bord détaillés avec métriques de performance
              </p>
              <Button>Voir les Analytics</Button>
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <div className="text-center py-12">
              <Settings className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Paramètres Système</h3>
              <p className="text-gray-600 mb-4">
                Configuration générale et paramètres avancés
              </p>
              <Button>Configurer</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Dialog de création */}
      <Dialog open={isCreating} onOpenChange={setIsCreating}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Créer une nouvelle formation</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="titre">Titre *</Label>
                <Input
                  id="titre"
                  value={newFormation.titre}
                  onChange={(e) => setNewFormation({...newFormation, titre: e.target.value})}
                  placeholder="Titre de la formation"
                />
              </div>
              <div>
                <Label htmlFor="instructeur">Instructeur *</Label>
                <Input
                  id="instructeur"
                  value={newFormation.instructeur}
                  onChange={(e) => setNewFormation({...newFormation, instructeur: e.target.value})}
                  placeholder="Nom de l'instructeur"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                value={newFormation.description}
                onChange={(e) => setNewFormation({...newFormation, description: e.target.value})}
                placeholder="Description détaillée de la formation"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="duree">Durée</Label>
                <Input
                  id="duree"
                  value={newFormation.duree}
                  onChange={(e) => setNewFormation({...newFormation, duree: e.target.value})}
                  placeholder="ex: 8 semaines"
                />
              </div>
              <div>
                <Label htmlFor="niveau">Niveau</Label>
                <Select value={newFormation.niveau} onValueChange={(value: any) => setNewFormation({...newFormation, niveau: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Débutant">Débutant</SelectItem>
                    <SelectItem value="Intermédiaire">Intermédiaire</SelectItem>
                    <SelectItem value="Avancé">Avancé</SelectItem>
                    <SelectItem value="Expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="categorie">Catégorie</Label>
                <Input
                  id="categorie"
                  value={newFormation.categorie}
                  onChange={(e) => setNewFormation({...newFormation, categorie: e.target.value})}
                  placeholder="ex: Fiqh & Informatique"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="prix">Prix</Label>
                <Input
                  id="prix"
                  type="number"
                  value={newFormation.prix}
                  onChange={(e) => setNewFormation({...newFormation, prix: e.target.value})}
                  placeholder="0"
                />
              </div>
              <div>
                <Label htmlFor="places">Nombre de places</Label>
                <Input
                  id="places"
                  type="number"
                  value={newFormation.places}
                  onChange={(e) => setNewFormation({...newFormation, places: Number(e.target.value), placesRestantes: Number(e.target.value)})}
                  placeholder="50"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="dateDebut">Date de début</Label>
                <Input
                  id="dateDebut"
                  type="date"
                  value={newFormation.dateDebut}
                  onChange={(e) => setNewFormation({...newFormation, dateDebut: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="dateFin">Date de fin</Label>
                <Input
                  id="dateFin"
                  type="date"
                  value={newFormation.dateFin}
                  onChange={(e) => setNewFormation({...newFormation, dateFin: e.target.value})}
                />
              </div>
            </div>

            <div>
              <Label>Options</Label>
              <div className="grid grid-cols-3 gap-4 mt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="halal"
                    checked={newFormation.halal}
                    onCheckedChange={(checked) => setNewFormation({...newFormation, halal: checked as boolean})}
                  />
                  <Label htmlFor="halal">100% Halal</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="certifie"
                    checked={newFormation.certifie}
                    onCheckedChange={(checked) => setNewFormation({...newFormation, certifie: checked as boolean})}
                  />
                  <Label htmlFor="certifie">Certifié</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="video"
                    checked={newFormation.video}
                    onCheckedChange={(checked) => setNewFormation({...newFormation, video: checked as boolean})}
                  />
                  <Label htmlFor="video">Vidéo</Label>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4 pt-4">
              <Button variant="outline" onClick={() => setIsCreating(false)}>
                <X className="h-4 w-4 mr-2" />
                Annuler
              </Button>
              <Button onClick={handleCreateFormation}>
                <Save className="h-4 w-4 mr-2" />
                Créer la formation
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <CEDFooter />
    </div>
  );
}