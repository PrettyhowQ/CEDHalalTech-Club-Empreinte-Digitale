import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Truck,
  MapPin,
  Phone,
  User,
  Package,
  CheckCircle,
  Clock,
  AlertTriangle,
  Building2,
  Euro,
  Calendar,
  FileText,
  Download,
  Edit,
  Plus
} from "lucide-react";

interface EquipmentAssignment {
  id: string;
  recipient: string;
  role: string;
  location: string;
  equipment: {
    type: string;
    brand: string;
    model: string;
    specifications: string;
    estimatedValue: number;
    supplier: string;
  }[];
  status: 'requested' | 'approved' | 'ordered' | 'delivered' | 'completed';
  requestDate: Date;
  expectedDelivery?: Date;
  actualDelivery?: Date;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  justification: string;
  approvedBy: string;
}

export default function LogistiqueEquipements() {
  const [selectedTab, setSelectedTab] = useState('assignments');

  const equipmentAssignments: EquipmentAssignment[] = [
    {
      id: 'eq-001',
      recipient: 'Yakoubi Yamina',
      role: 'Directrice Générale',
      location: 'Suisse',
      equipment: [
        {
          type: 'Ordinateur portable',
          brand: 'Apple',
          model: 'MacBook Pro M4 Max',
          specifications: 'M4 Max, 64GB RAM, 2TB SSD, 16" Liquid Retina XDR',
          estimatedValue: 4500,
          supplier: 'Macena (avance matérielle)'
        },
        {
          type: 'Ordinateur portable',
          brand: 'Dell',
          model: 'Precision 7880',
          specifications: 'Dernière génération, Intel Xeon, 128GB RAM, 4TB SSD',
          estimatedValue: 6200,
          supplier: 'Macena (avance matérielle)'
        }
      ],
      status: 'requested',
      requestDate: new Date('2025-06-25'),
      expectedDelivery: new Date('2025-07-05'),
      priority: 'urgent',
      justification: 'Équipements essentiels pour direction générale - Anciens PC défaillants',
      approvedBy: 'Auto-approuvé (Direction)'
    },
    {
      id: 'eq-002',
      recipient: 'Brahim Yakoubi',
      role: 'Directeur Costa del Sol',
      location: 'Costa del Sol, Espagne',
      equipment: [
        {
          type: 'Smartphone',
          brand: 'Apple',
          model: 'iPhone 15 Pro Max',
          specifications: '1TB, Titane naturel',
          estimatedValue: 1600,
          supplier: 'TechForAll (don récupéré)'
        }
      ],
      status: 'approved',
      requestDate: new Date('2025-06-20'),
      expectedDelivery: new Date('2025-07-01'),
      priority: 'high',
      justification: 'Gestion opérationnelle boutique solidaire et communication',
      approvedBy: 'Yakoubi Yamina'
    },
    {
      id: 'eq-003',
      recipient: 'Yakoubi Aziz',
      role: 'Responsable Logistique Suisse',
      location: 'Berne, Suisse',
      equipment: [
        {
          type: 'Smartphone',
          brand: 'Apple',
          model: 'iPhone 15 Pro Max',
          specifications: '1TB, Titane naturel',
          estimatedValue: 1600,
          supplier: 'TechForAll (don récupéré)'
        }
      ],
      status: 'approved',
      requestDate: new Date('2025-06-20'),
      expectedDelivery: new Date('2025-06-28'),
      priority: 'high',
      justification: 'Coordination logistique TechForAll région Suisse',
      approvedBy: 'Yakoubi Yamina'
    },
    {
      id: 'eq-004',
      recipient: 'Yakoubi Abdel Karim',
      role: 'Responsable Logistique Europe',
      location: 'Paris, France',
      equipment: [
        {
          type: 'Smartphone',
          brand: 'Apple',
          model: 'iPhone 15 Pro Max',
          specifications: '1TB, Titane naturel',
          estimatedValue: 1600,
          supplier: 'TechForAll (don récupéré)'
        }
      ],
      status: 'approved',
      requestDate: new Date('2025-06-20'),
      expectedDelivery: new Date('2025-06-30'),
      priority: 'high',
      justification: 'Coordination logistique TechForAll Europe et expatriés',
      approvedBy: 'Yakoubi Yamina'
    },
    {
      id: 'eq-005',
      recipient: 'Souheila Yakoubi-Ozel',
      role: 'Co-directrice Secteur Santé',
      location: 'Suisse',
      equipment: [
        {
          type: 'Smartphone',
          brand: 'Apple',
          model: 'iPhone 15 Pro Max',
          specifications: '1TB, Titane naturel',
          estimatedValue: 1600,
          supplier: 'TechForAll (don récupéré)'
        }
      ],
      status: 'approved',
      requestDate: new Date('2025-06-22'),
      expectedDelivery: new Date('2025-07-02'),
      priority: 'high',
      justification: 'Coordination secteur santé et succession planifiée',
      approvedBy: 'Yakoubi Yamina'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'requested': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-blue-100 text-blue-800';
      case 'ordered': return 'bg-purple-100 text-purple-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-blue-100 text-blue-800';
      case 'low': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTotalValue = (equipment: any[]) => {
    return equipment.reduce((total, item) => total + item.estimatedValue, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-xl flex items-center justify-center">
              <Truck className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Logistique Équipements</h1>
              <h2 className="text-2xl text-blue-600">Attribution Matériel Direction & Équipe</h2>
              <p className="text-gray-600">Gestion centralisée équipements TechForAll et avances Macena</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{equipmentAssignments.length}</div>
              <div className="text-xs text-gray-600">Attributions</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">
                {equipmentAssignments.filter(eq => eq.priority === 'urgent').length}
              </div>
              <div className="text-xs text-gray-600">Urgent</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">
                {equipmentAssignments.filter(eq => eq.status === 'approved').length}
              </div>
              <div className="text-xs text-gray-600">Approuvés</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">
                {Math.round(equipmentAssignments.reduce((total, eq) => total + getTotalValue(eq.equipment), 0) / 1000)}K
              </div>
              <div className="text-xs text-gray-600">€ Total</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-red-600">5</div>
              <div className="text-xs text-gray-600">Bénéficiaires</div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="assignments" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Attributions
            </TabsTrigger>
            <TabsTrigger value="macena-letter" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Lettre Macena
            </TabsTrigger>
            <TabsTrigger value="logistics" className="flex items-center gap-2">
              <Truck className="h-4 w-4" />
              Logistique
            </TabsTrigger>
          </TabsList>

          {/* Attributions */}
          <TabsContent value="assignments" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {equipmentAssignments.map((assignment) => (
                <Card key={assignment.id} className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg">{assignment.recipient}</CardTitle>
                        <p className="text-sm text-gray-600">{assignment.role}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin className="h-3 w-3 text-gray-500" />
                          <span className="text-xs text-gray-500">{assignment.location}</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Badge className={getStatusColor(assignment.status)}>
                          {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                        </Badge>
                        <Badge className={getPriorityColor(assignment.priority)}>
                          {assignment.priority.charAt(0).toUpperCase() + assignment.priority.slice(1)}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Équipements attribués:</h4>
                        <div className="space-y-2">
                          {assignment.equipment.map((item, index) => (
                            <div key={index} className="bg-gray-50 p-3 rounded-lg">
                              <div className="flex justify-between items-start mb-1">
                                <div className="font-medium">{item.brand} {item.model}</div>
                                <div className="text-sm font-semibold text-green-600">
                                  {item.estimatedValue.toLocaleString()} €
                                </div>
                              </div>
                              <div className="text-xs text-gray-600 mb-1">{item.specifications}</div>
                              <div className="text-xs text-blue-600">Source: {item.supplier}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Valeur totale:</span>
                          <div className="font-semibold text-green-600">
                            {getTotalValue(assignment.equipment).toLocaleString()} €
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-600">Demandé le:</span>
                          <div className="font-semibold">
                            {assignment.requestDate.toLocaleDateString('fr-FR')}
                          </div>
                        </div>
                      </div>

                      {assignment.expectedDelivery && (
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-blue-500" />
                          <span>Livraison prévue: {assignment.expectedDelivery.toLocaleDateString('fr-FR')}</span>
                        </div>
                      )}

                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-xs font-semibold text-blue-800 mb-1">Justification:</div>
                        <div className="text-xs text-blue-700">{assignment.justification}</div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-gray-600">
                        <span>Approuvé par: {assignment.approvedBy}</span>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <FileText className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Lettre Macena */}
          <TabsContent value="macena-letter" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6 text-blue-600" />
                  Lettre Officielle - Demande Avance Matérielle Macena
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white border-2 border-gray-300 p-8 rounded-lg font-mono text-sm">
                  <div className="text-center mb-8">
                    <div className="font-bold text-xl mb-2">CLUB EMPREINTE DIGITALE</div>
                    <div className="text-sm text-gray-600">
                      Association TechForAll - Écosystème CED & PrettyhowQ<br/>
                      Siège social: Genève, Suisse<br/>
                      Direction: Yakoubi Yamina
                    </div>
                  </div>

                  <div className="text-right mb-6">
                    <div>Genève, le {new Date().toLocaleDateString('fr-FR')}</div>
                  </div>

                  <div className="mb-6">
                    <div className="font-bold">À l'attention de Macena</div>
                    <div>Responsable des avances matérielles</div>
                  </div>

                  <div className="mb-6">
                    <div className="font-bold mb-3">Objet: Demande d'avance matérielle pour équipements Direction</div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <p>Monsieur/Madame,</p>
                    
                    <p>
                      Par la présente, je sollicite votre accord pour une avance matérielle concernant 
                      l'acquisition d'équipements informatiques essentiels à la direction de notre écosystème 
                      Club Empreinte Digitale.
                    </p>

                    <div className="bg-gray-50 p-4 rounded border-l-4 border-l-blue-500">
                      <div className="font-bold mb-3">ÉQUIPEMENTS DEMANDÉS:</div>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="font-semibold">1. MacBook Pro M4 Max (Direction)</div>
                          <div className="ml-4 text-sm">
                            • Processeur: Apple M4 Max<br/>
                            • Mémoire: 64GB RAM unifiée<br/>
                            • Stockage: 2TB SSD<br/>
                            • Écran: 16" Liquid Retina XDR<br/>
                            • <strong>Valeur estimée: 4,500 €</strong>
                          </div>
                        </div>

                        <div>
                          <div className="font-semibold">2. Dell Precision 7880 (Direction)</div>
                          <div className="ml-4 text-sm">
                            • Processeur: Intel Xeon dernière génération<br/>
                            • Mémoire: 128GB RAM<br/>
                            • Stockage: 4TB SSD<br/>
                            • Configuration professionnelle haut de gamme<br/>
                            • <strong>Valeur estimée: 6,200 €</strong>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-gray-300">
                        <div className="font-bold text-lg">TOTAL AVANCE DEMANDÉE: 10,700 €</div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded border-l-4 border-l-yellow-500">
                      <div className="font-bold mb-2">JUSTIFICATION URGENTE:</div>
                      <p className="text-sm">
                        Les équipements informatiques actuels de la direction sont défaillants, 
                        compromettant gravement les opérations critiques de l'écosystème CED. 
                        Cette situation impacte directement:
                      </p>
                      <ul className="text-sm mt-2 ml-4">
                        <li>• Gestion TechForAll Association (12,847 dons actifs)</li>
                        <li>• Supervision Costa del Sol (boutique solidaire)</li>
                        <li>• Coordination CED Bank et Al-Aman Takaful</li>
                        <li>• Direction écosystème complet valorisé 55M CHF</li>
                      </ul>
                    </div>

                    <p>
                      Cette avance sera remboursée par compensation avec les équipements 
                      récupérés via TechForAll Association, dont la valeur cumulée des dons 
                      collectés s'élève à plus de 2,8M CHF.
                    </p>

                    <div className="bg-green-50 p-4 rounded border-l-4 border-l-green-500">
                      <div className="font-bold mb-2">MODALITÉS DE REMBOURSEMENT:</div>
                      <ul className="text-sm">
                        <li>• Compensation via dons TechForAll valorisés</li>
                        <li>• Délai de remboursement: 90 jours</li>
                        <li>• Garantie: Patrimoine écosystème CED</li>
                        <li>• Supervision: Yakoubi Yamina (propriétaire unique)</li>
                      </ul>
                    </div>

                    <p>
                      En raison de l'urgence de la situation et de l'impact sur nos opérations, 
                      je sollicite un traitement prioritaire de cette demande.
                    </p>

                    <p>
                      Je reste à votre disposition pour tout complément d'information et 
                      vous remercie par avance de votre compréhension.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p>Cordialement,</p>
                    
                    <div className="mt-8">
                      <div className="font-bold">Yakoubi Yamina</div>
                      <div>Directrice Générale</div>
                      <div>Club Empreinte Digitale</div>
                      <div>Propriétaire unique écosystème CED & PrettyhowQ</div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-gray-300 text-xs text-gray-600">
                    <div>
                      Contact: direction@ced-ecosystem.ch | +41 22 XXX XX XX<br/>
                      Siège: Genève, Suisse | Écosystème valorisé: 55M CHF<br/>
                      TechForAll: 12,847 dons collectés | 2,8M CHF valeur cumulée
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <Button className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Télécharger PDF
                  </Button>
                  <Button variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    Version Word
                  </Button>
                  <Button variant="outline">
                    <Edit className="h-4 w-4 mr-2" />
                    Modifier
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Logistique */}
          <TabsContent value="logistics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-6 w-6 text-blue-600" />
                    Yakoubi Aziz
                  </CardTitle>
                  <p className="text-sm text-gray-600">Responsable Logistique Suisse</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">Berne, Suisse</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">+41 31 XXX XX XX</span>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="text-sm font-semibold text-blue-800 mb-1">Responsabilités:</div>
                      <div className="text-xs text-blue-700">
                        • Collecte TechForAll Suisse<br/>
                        • Coordination centres tri<br/>
                        • Gestion stocks matériels<br/>
                        • Distribution équipe Suisse
                      </div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="text-sm font-semibold text-green-800">Équipement attribué:</div>
                      <div className="text-xs text-green-700">iPhone 15 Pro Max 1TB</div>
                      <div className="text-xs text-green-600">Statut: Approuvé - Livraison 28/06</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-6 w-6 text-green-600" />
                    Yakoubi Abdel Karim
                  </CardTitle>
                  <p className="text-sm text-gray-600">Responsable Logistique Europe</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">Paris, France</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">+33 1 XX XX XX XX</span>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="text-sm font-semibold text-green-800 mb-1">Responsabilités:</div>
                      <div className="text-xs text-green-700">
                        • Logistique TechForAll Europe<br/>
                        • Coordination expatriés<br/>
                        • Transport transfrontalier<br/>
                        • Conformité douanière
                      </div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="text-sm font-semibold text-green-800">Équipement attribué:</div>
                      <div className="text-xs text-green-700">iPhone 15 Pro Max 1TB</div>
                      <div className="text-xs text-green-600">Statut: Approuvé - Livraison 30/06</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-6 w-6 text-orange-600" />
                    Brahim Yakoubi
                  </CardTitle>
                  <p className="text-sm text-gray-600">Directeur Costa del Sol</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">Costa del Sol, Espagne</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">+34 952 XXX XXX</span>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <div className="text-sm font-semibold text-orange-800 mb-1">Responsabilités:</div>
                      <div className="text-xs text-orange-700">
                        • Direction boutique solidaire<br/>
                        • Reconditionnement équipements<br/>
                        • Vente circuit TechForAll<br/>
                        • Secrétariat Kadjouf Hanane
                      </div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="text-sm font-semibold text-green-800">Équipement attribué:</div>
                      <div className="text-xs text-green-700">iPhone 15 Pro Max 1TB</div>
                      <div className="text-xs text-green-600">Statut: Approuvé - Livraison 01/07</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>État des Livraisons</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-l-yellow-500">
                      <div className="font-semibold text-yellow-800">En attente</div>
                      <div className="text-2xl font-bold text-yellow-600">2</div>
                      <div className="text-xs text-yellow-700">MacBook + Dell (Yamina)</div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-l-blue-500">
                      <div className="font-semibold text-blue-800">Approuvés</div>
                      <div className="text-2xl font-bold text-blue-600">4</div>
                      <div className="text-xs text-blue-700">iPhone équipe logistique</div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-l-green-500">
                      <div className="font-semibold text-green-800">Prêts livraison</div>
                      <div className="text-2xl font-bold text-green-600">4</div>
                      <div className="text-xs text-green-700">Stocks TechForAll</div>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-l-purple-500">
                      <div className="font-semibold text-purple-800">Valeur totale</div>
                      <div className="text-2xl font-bold text-purple-600">17K€</div>
                      <div className="text-xs text-purple-700">Équipements attribués</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
          <div className="mb-4 p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-700 mb-2">
              Yakoubi Yamina – Tous droits réservés | All rights reserved | جميع الحقوق محفوظة | 版权所有
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-2">
              <span>🇪🇺 Conforme RGPD</span>
              <span>🇨🇭 LPD Suisse</span>
              <span>🔒 Hébergement sécurisé Suisse</span>
              <span>🛡️ Données confidentielles protégées</span>
            </div>
            <p className="text-xs text-gray-600 mb-2">
              Projet confidentiel – Traçabilité numérique activée – Usage exclusif réservé à l'écosystème CED & PrettyhowQ
            </p>
            <p className="text-xs text-gray-600">
              Ce projet, son contenu, son code, ses idées, ses visuels, ses textes et sa structure sont la propriété exclusive de Yakoubi Yamina. 
              Toute reproduction, diffusion, extraction, adaptation, modification ou exploitation – totale ou partielle – sans autorisation écrite préalable 
              est strictement interdite et fera l'objet de poursuites judiciaires conformément au Code de la propriété intellectuelle (France / Europe / International).
            </p>
          </div>
          <p className="mb-2">
            © 2025 Logistique Équipements - Attribution matériel direction & équipe - Yakoubi Yamina
          </p>
          <p className="font-semibold text-blue-600">
            📌 Version complète – Système logistique opérationnel 📎
          </p>
        </div>
      </div>
    </div>
  );
}