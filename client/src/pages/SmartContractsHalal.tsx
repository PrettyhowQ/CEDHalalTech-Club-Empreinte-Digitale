import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SmartContractsHalal = () => {
  const [selectedContract, setSelectedContract] = useState("murabaha");
  const [deploymentNetwork, setDeploymentNetwork] = useState("halal-chain");

  const halalContracts = [
    {
      id: "murabaha",
      name: "Contrat Murabaha Intelligent",
      type: "Finance Islamique",
      complexity: "Intermédiaire",
      gasEstimate: "0.0023 HALAL",
      description: "Contrat automatisé pour financement Murabaha conforme Sharia",
      features: [
        "Profit rate fixe conforme Fiqh",
        "Paiements automatiques programmés", 
        "Audit Sharia intégré",
        "Protection contre Riba",
        "Résolution disputes islamique"
      ],
      shariaCertification: "AAOIFI Validé",
      scholars: ["Sheikh Al-Jazairi", "Dr. Al-Mansouri"],
      code: `pragma solidity ^0.8.19;

import "./ShariCompliance.sol";

contract MurabahaContract is ShariCompliance {
    struct MurabahaTerms {
        address buyer;
        address seller;
        uint256 costPrice;
        uint256 profitMargin; // Percentage
        uint256 sellingPrice;
        uint256 installments;
        bool isHalalCertified;
    }
    
    mapping(uint256 => MurabahaTerms) public contracts;
    uint256 public contractCounter;
    
    modifier onlyHalalCertified() {
        require(isShariCompliant(), "Contract must be Sharia compliant");
        _;
    }
    
    function createMurabaha(
        address _buyer,
        uint256 _costPrice,
        uint256 _profitMargin
    ) public onlyHalalCertified returns (uint256) {
        require(_profitMargin <= 10, "Profit margin must be reasonable");
        
        contractCounter++;
        contracts[contractCounter] = MurabahaTerms({
            buyer: _buyer,
            seller: msg.sender,
            costPrice: _costPrice,
            profitMargin: _profitMargin,
            sellingPrice: _costPrice + (_costPrice * _profitMargin / 100),
            installments: 0,
            isHalalCertified: true
        });
        
        emit MurabahaCreated(contractCounter, _buyer, msg.sender);
        return contractCounter;
    }
}`,
      icon: "💰"
    },
    {
      id: "ijara",
      name: "Contrat Ijara Location",
      type: "Immobilier Islamique",
      complexity: "Avancé",
      gasEstimate: "0.0045 HALAL",
      description: "Location conforme Sharia avec transfert propriété optionnel",
      features: [
        "Location progressive halal",
        "Option achat en fin de période",
        "Maintenance partagée équitable",
        "Assurance Takaful intégrée",
        "Résolution conflits Fiqh"
      ],
      shariaCertification: "OIC Certifié",
      scholars: ["Dr. Al-Qasimi", "Sheikh Benali"],
      code: `pragma solidity ^0.8.19;

contract IjaraContract {
    struct IjaraTerms {
        address lessor;
        address lessee;
        uint256 monthlyRent;
        uint256 leasePeriod;
        bool purchaseOption;
        uint256 purchasePrice;
        bool isActive;
    }
    
    mapping(uint256 => IjaraTerms) public leases;
    uint256 public leaseCounter;
    
    function createIjara(
        address _lessee,
        uint256 _monthlyRent,
        uint256 _leasePeriod,
        bool _purchaseOption,
        uint256 _purchasePrice
    ) public returns (uint256) {
        leaseCounter++;
        leases[leaseCounter] = IjaraTerms({
            lessor: msg.sender,
            lessee: _lessee,
            monthlyRent: _monthlyRent,
            leasePeriod: _leasePeriod,
            purchaseOption: _purchaseOption,
            purchasePrice: _purchasePrice,
            isActive: true
        });
        
        return leaseCounter;
    }
}`,
      icon: "🏠"
    },
    {
      id: "zakat",
      name: "Distributeur Zakat Automatique",
      type: "Obligation Religieuse",
      complexity: "Expert",
      gasEstimate: "0.0067 HALAL",
      description: "Distribution automatique Zakat selon règles Fiqh authentiques",
      features: [
        "Calcul Nisab temps réel",
        "Distribution 8 catégories",
        "Traçabilité transparente",
        "Validation scholars automatique",
        "Conformité 4 Madhabs"
      ],
      shariaCertification: "4 Écoles Validées",
      scholars: ["Conseil Fiqh International", "Al-Azhar"],
      code: `pragma solidity ^0.8.19;

contract ZakatDistributor {
    enum ZakatCategory {
        Fuqara,     // Poor
        Masakin,    // Needy
        Amilin,     // Administrators
        Muallafat,  // New Muslims
        Riqab,      // Freeing slaves
        Gharimin,   // Debtors
        FiSabilillah, // In Allah's cause
        IbnSabil    // Travelers
    }
    
    struct ZakatDistribution {
        uint256 totalAmount;
        mapping(ZakatCategory => uint256) allocations;
        bool isDistributed;
        uint256 timestamp;
    }
    
    mapping(address => uint256) public zakatPayers;
    mapping(uint256 => ZakatDistribution) public distributions;
    
    uint256 public nisabThreshold = 85 * 10**18; // 85 grams gold in wei
    
    function calculateZakat(uint256 wealth) public pure returns (uint256) {
        if (wealth < nisabThreshold) return 0;
        return wealth * 25 / 1000; // 2.5%
    }
}`,
      icon: "🤲"
    },
    {
      id: "musharaka",
      name: "Partenariat Musharaka",
      type: "Investissement Participatif",
      complexity: "Expert",
      gasEstimate: "0.0089 HALAL",
      description: "Contrat partenariat équitable avec partage profits/pertes",
      features: [
        "Partage équitable profits/pertes",
        "Gestion transparente",
        "Votes décisionnels pondérés",
        "Exit clauses conformes",
        "Audit continu Sharia"
      ],
      shariaCertification: "IFSB Approuvé",
      scholars: ["Dr. Al-Suwailem", "Sheikh Al-Masri"],
      code: `pragma solidity ^0.8.19;

contract MushараkaPartnership {
    struct Partner {
        address wallet;
        uint256 capitalContribution;
        uint256 profitShare;
        uint256 managementRights;
        bool isActive;
    }
    
    mapping(address => Partner) public partners;
    address[] public partnerList;
    
    uint256 public totalCapital;
    uint256 public totalProfits;
    uint256 public totalLosses;
    
    function addPartner(
        address _partner,
        uint256 _capital,
        uint256 _profitShare
    ) public onlyExistingPartner {
        require(_profitShare <= 100, "Profit share cannot exceed 100%");
        
        partners[_partner] = Partner({
            wallet: _partner,
            capitalContribution: _capital,
            profitShare: _profitShare,
            managementRights: calculateManagementRights(_capital),
            isActive: true
        });
        
        partnerList.push(_partner);
        totalCapital += _capital;
    }
}`,
      icon: "🤝"
    }
  ];

  const networks = [
    {
      id: "halal-chain",
      name: "HalalChain Network",
      description: "Blockchain principale conforme Sharia",
      gasToken: "HALAL",
      consensus: "Proof of Stake Islamique",
      validators: "Scholars certifiés uniquement",
      icon: "⛓️"
    },
    {
      id: "sharia-testnet",
      name: "Sharia Testnet",
      description: "Réseau de test pour développement",
      gasToken: "tHALAL",
      consensus: "Byzantine Fault Tolerance",
      validators: "Développeurs autorisés",
      icon: "🧪"
    },
    {
      id: "islamic-polygon",
      name: "Islamic Polygon",
      description: "Layer 2 optimisé conformité islamique",
      gasToken: "MATIC-H",
      consensus: "Plasma halal-compatible",
      validators: "Validation distribuée",
      icon: "🔷"
    }
  ];

  const selectedContractData = halalContracts.find(c => c.id === selectedContract);
  const selectedNetworkData = networks.find(n => n.id === deploymentNetwork);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-8xl mb-6">⛓️</div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Smart Contracts Halal CED
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            Première plateforme mondiale de contrats intelligents 100% conformes Sharia
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <Badge className="bg-indigo-500 text-white px-4 py-2">
              🔐 Validés 150+ Scholars
            </Badge>
            <Badge className="bg-purple-500 text-white px-4 py-2">
              ⛓️ 4 Réseaux Halal
            </Badge>
            <Badge className="bg-blue-500 text-white px-4 py-2">
              📋 50+ Templates Fiqh
            </Badge>
          </div>
        </div>

        {/* Contract Selection */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Bibliothèque Contrats Islamiques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {halalContracts.map(contract => (
              <Card 
                key={contract.id}
                className={`cursor-pointer transition-all hover:shadow-xl ${
                  selectedContract === contract.id 
                    ? 'ring-4 ring-indigo-400 bg-indigo-50' 
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => setSelectedContract(contract.id)}
              >
                <CardHeader className="text-center">
                  <div className="text-6xl mb-3">{contract.icon}</div>
                  <CardTitle className="text-xl">{contract.name}</CardTitle>
                  <Badge className="bg-green-500 text-white">
                    {contract.shariaCertification}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Type:</span>
                      <div className="text-sm font-bold">{contract.type}</div>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Complexité:</span>
                      <Badge 
                        variant="outline"
                        className={`ml-2 ${
                          contract.complexity === 'Expert' ? 'border-red-500 text-red-600' :
                          contract.complexity === 'Avancé' ? 'border-yellow-500 text-yellow-600' :
                          'border-green-500 text-green-600'
                        }`}
                      >
                        {contract.complexity}
                      </Badge>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Coût Gas:</span>
                      <div className="text-sm font-bold text-blue-600">{contract.gasEstimate}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contract Details */}
        {selectedContractData && (
          <div className="mb-12">
            <Card className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
              <CardHeader>
                <div className="flex items-center gap-6">
                  <div className="text-8xl">{selectedContractData.icon}</div>
                  <div>
                    <CardTitle className="text-4xl mb-2">
                      {selectedContractData.name}
                    </CardTitle>
                    <p className="text-2xl opacity-90 mb-4">
                      {selectedContractData.description}
                    </p>
                    <div className="flex gap-4">
                      <Badge className="bg-white text-indigo-600 text-lg px-4 py-2">
                        {selectedContractData.type}
                      </Badge>
                      <Badge className="bg-yellow-400 text-indigo-800 text-lg px-4 py-2">
                        {selectedContractData.shariaCertification}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="features" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 bg-white/20">
                    <TabsTrigger value="features" className="text-white">Fonctionnalités</TabsTrigger>
                    <TabsTrigger value="scholars" className="text-white">Validation</TabsTrigger>
                    <TabsTrigger value="code" className="text-white">Code Source</TabsTrigger>
                    <TabsTrigger value="deploy" className="text-white">Déploiement</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="features" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">Fonctionnalités Halal</h3>
                        <div className="space-y-3">
                          {selectedContractData.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                              <span className="text-lg">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-4">Spécifications Techniques</h3>
                        <div className="space-y-4">
                          <div className="bg-white/20 rounded-lg p-4">
                            <div className="text-sm opacity-90">Complexité</div>
                            <div className="text-2xl font-bold">{selectedContractData.complexity}</div>
                          </div>
                          <div className="bg-white/20 rounded-lg p-4">
                            <div className="text-sm opacity-90">Coût Gas Estimé</div>
                            <div className="text-2xl font-bold">{selectedContractData.gasEstimate}</div>
                          </div>
                          <div className="bg-white/20 rounded-lg p-4">
                            <div className="text-sm opacity-90">Conformité</div>
                            <div className="text-xl font-bold">100% Sharia</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="scholars" className="mt-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-6">Validation Scholars Islamiques</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white/20 rounded-lg p-6">
                          <h4 className="text-xl font-bold mb-4">Certification Officielle</h4>
                          <div className="text-3xl font-bold text-yellow-400 mb-2">
                            {selectedContractData.shariaCertification}
                          </div>
                          <p className="opacity-90">
                            Validé selon les 4 sources islamiques authentiques
                          </p>
                        </div>
                        <div className="bg-white/20 rounded-lg p-6">
                          <h4 className="text-xl font-bold mb-4">Scholars Validateurs</h4>
                          <div className="space-y-2">
                            {selectedContractData.scholars.map((scholar, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                <span className="text-lg">{scholar}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="code" className="mt-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Code Source Solidity</h3>
                      <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                        <pre className="text-green-400 text-sm">
                          <code>{selectedContractData.code}</code>
                        </pre>
                      </div>
                      <div className="mt-4 flex gap-4">
                        <Button className="bg-white text-indigo-600 hover:bg-gray-100">
                          📋 Copier Code
                        </Button>
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
                          📥 Télécharger .sol
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="deploy" className="mt-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">Sélection Réseau Blockchain</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {networks.map(network => (
                            <Card 
                              key={network.id}
                              className={`cursor-pointer transition-all ${
                                deploymentNetwork === network.id 
                                  ? 'ring-2 ring-yellow-400 bg-white/20' 
                                  : 'bg-white/10 hover:bg-white/15'
                              }`}
                              onClick={() => setDeploymentNetwork(network.id)}
                            >
                              <CardContent className="p-4 text-center">
                                <div className="text-4xl mb-2">{network.icon}</div>
                                <h4 className="text-lg font-bold mb-2">{network.name}</h4>
                                <p className="text-sm opacity-90 mb-3">{network.description}</p>
                                <Badge className="bg-yellow-400 text-indigo-800">
                                  {network.gasToken}
                                </Badge>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                      
                      {selectedNetworkData && (
                        <div className="bg-white/20 rounded-lg p-6">
                          <h4 className="text-xl font-bold mb-4">
                            Déploiement sur {selectedNetworkData.name}
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <div className="space-y-3">
                                <div>
                                  <span className="text-sm opacity-90">Consensus:</span>
                                  <div className="font-bold">{selectedNetworkData.consensus}</div>
                                </div>
                                <div>
                                  <span className="text-sm opacity-90">Validators:</span>
                                  <div className="font-bold">{selectedNetworkData.validators}</div>
                                </div>
                                <div>
                                  <span className="text-sm opacity-90">Gas Token:</span>
                                  <div className="font-bold">{selectedNetworkData.gasToken}</div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <Button className="w-full bg-yellow-400 text-indigo-800 hover:bg-yellow-300 text-lg py-3 mb-4">
                                🚀 Déployer Contrat
                              </Button>
                              <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-indigo-600">
                                🧪 Tester d'abord
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Contact & Support */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white">
            <CardContent className="p-12">
              <div className="text-6xl mb-6">🤝</div>
              <h3 className="text-4xl font-bold mb-6">
                Développement Contrats Personnalisés
              </h3>
              <p className="text-2xl mb-8 opacity-95">
                Notre équipe développe des smart contracts sur mesure 100% conformes Sharia
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/20 rounded-lg p-6">
                  <div className="text-4xl mb-3">⚡</div>
                  <h4 className="text-xl font-bold mb-2">Développement Rapide</h4>
                  <p className="text-sm opacity-90">2-4 semaines livraison</p>
                </div>
                <div className="bg-white/20 rounded-lg p-6">
                  <div className="text-4xl mb-3">🔍</div>
                  <h4 className="text-xl font-bold mb-2">Audit Sharia</h4>
                  <p className="text-sm opacity-90">Validation complète scholars</p>
                </div>
                <div className="bg-white/20 rounded-lg p-6">
                  <div className="text-4xl mb-3">🎯</div>
                  <h4 className="text-xl font-bold mb-2">Support 24/7</h4>
                  <p className="text-sm opacity-90">Assistance technique continue</p>
                </div>
              </div>
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 text-xl px-12 py-4">
                📧 yakoubi.yamina@ik.me - Devis Gratuit
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center py-6 border-t">
          <p className="text-gray-600 text-lg">
            © 2025 Smart Contracts Halal CED - Yakoubi Yamina | Club Empreinte Digitale
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Première plateforme smart contracts 100% conforme Sharia au monde
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmartContractsHalal;