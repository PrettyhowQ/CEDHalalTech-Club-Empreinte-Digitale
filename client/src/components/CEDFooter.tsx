import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin,
  Scale,
  FileText,
  Users,
  MessageSquare,
  Bot,
  Download
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function CEDFooter() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white"
      style={{
        backgroundColor: '#f8f8f8',
        padding: '2em 1em',
        fontFamily: "'Segoe UI', sans-serif",
        fontSize: '0.9rem',
        color: '#444',
        textAlign: 'center',
        lineHeight: '1.7',
        borderTop: '1px solid #ddd'
      }}
    >
      <div className="container mx-auto px-4 py-12">
        {/* Navigation principale */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              CED Bank
            </h3>
            <div className="space-y-2 text-sm">
              <Link href="/ced-bank" className="block text-gray-300 hover:text-white transition-colors">
                Banque Islamique
              </Link>
              <Link href="/virements-swift" className="block text-gray-300 hover:text-white transition-colors">
                Virements SWIFT
              </Link>
              <Link href="/cartes-bancaires" className="block text-gray-300 hover:text-white transition-colors">
                Cartes Yakoubi
              </Link>
              <Link href="/investissements-halal" className="block text-gray-300 hover:text-white transition-colors">
                Investissements Halal
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Al-Aman Takaful</h3>
            <div className="space-y-2 text-sm">
              <Link href="/al-aman-takaful" className="block text-gray-300 hover:text-white transition-colors">
                Assurance Famille
              </Link>
              <Link href="/takaful-auto" className="block text-gray-300 hover:text-white transition-colors">
                Assurance Auto
              </Link>
              <Link href="/takaful-voyage" className="block text-gray-300 hover:text-white transition-colors">
                Assurance Voyage
              </Link>
              <Link href="/takaful-habitation" className="block text-gray-300 hover:text-white transition-colors">
                Assurance Habitation
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Formation IA</h3>
            <div className="space-y-2 text-sm">
              <Link href="/super-iarp-pro" className="block text-gray-300 hover:text-white transition-colors">
                Super IARP Pro
              </Link>
              <Link href="/courses" className="block text-gray-300 hover:text-white transition-colors">
                Cours IA Éthique
              </Link>
              <Link href="/formation-ia" className="block text-gray-300 hover:text-white transition-colors">
                Formation Continue
              </Link>
              <Link href="/certifications" className="block text-gray-300 hover:text-white transition-colors">
                Certifications
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Ressources Humaines
            </h3>
            <div className="space-y-2 text-sm">
              <Link href="/rh-management" className="block text-gray-300 hover:text-white transition-colors">
                Gestion RH
              </Link>
              <Link href="/contrats-travail" className="block text-gray-300 hover:text-white transition-colors">
                Contrats de Travail
              </Link>
              <Link href="/code-travail-suisse" className="block text-gray-300 hover:text-white transition-colors">
                Code du Travail 🇨🇭
              </Link>
              <div className="flex items-center gap-2">
                <Bot className="h-4 w-4 text-blue-400" />
                <span className="text-blue-400 cursor-pointer hover:text-blue-300">
                  IA Juridique 24/7
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Accès rapide Code du Travail et IA Juridique */}
        <div className="bg-slate-700 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Scale className="h-5 w-5 text-yellow-400" />
            Consultation Juridique Instantanée
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-600 rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Code du Travail Suisse
              </h4>
              <p className="text-sm text-gray-300 mb-3">
                Accès complet au Code des obligations (CO), Loi sur le travail (LTr) et réglementations FINMA
              </p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="text-xs">
                  <Download className="h-3 w-3 mr-1" />
                  Télécharger PDF
                </Button>
                <Badge variant="secondary" className="text-xs">🇨🇭 Suisse</Badge>
              </div>
            </div>

            <div className="bg-slate-600 rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Bot className="h-4 w-4 text-blue-400" />
                Assistant IA Juridique
              </h4>
              <p className="text-sm text-gray-300 mb-3">
                Consultation 24/7 sur droits et devoirs des employés, salaires, congés, résiliation
              </p>
              <div className="flex gap-2">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-xs">
                  <MessageSquare className="h-3 w-3 mr-1" />
                  Chat Juridique
                </Button>
                <Badge className="bg-green-500 text-xs">En ligne</Badge>
              </div>
            </div>

            <div className="bg-slate-600 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Droits Européens</h4>
              <p className="text-sm text-gray-300 mb-3">
                RGPD, Directive temps de travail, Convention collective européenne
              </p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="text-xs">
                  <Download className="h-3 w-3 mr-1" />
                  Docs EU
                </Button>
                <Badge variant="secondary" className="text-xs">🇪🇺 Europe</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="border-t border-slate-600 pt-8 mb-8">
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Siège Social</h4>
              <div className="space-y-1 text-gray-300">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Rue du Rhône 123, 1204 Genève</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+41 22 XXX XXXX</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>contact@club-empreinte-digitale.com</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Support RH</h4>
              <div className="space-y-1 text-gray-300">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>Souheila Yakoubi Ozel - Directrice RH</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>hr@club-empreinte-digitale.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+41 44 XXX XXXX</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Conseil Juridique</h4>
              <div className="space-y-1 text-gray-300">
                <div className="flex items-center gap-2">
                  <Scale className="h-4 w-4" />
                  <span>Cabinet Juridique Partenaire</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>legal@club-empreinte-digitale.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bot className="h-4 w-4 text-blue-400" />
                  <span className="text-blue-400">IA Juridique 24/7 disponible</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright et protection intellectuelle */}
        <div className="border-t border-slate-600 pt-8 text-center">
          <div style={{ color: '#444' }}>
            <p style={{ marginBottom: '0.5em' }}>
              <strong>© Yakoubi Yamina</strong> – Tous droits réservés | All rights reserved | <span dir="rtl">جميع الحقوق محفوظة</span> | 版权所有
            </p>
            <p style={{ marginBottom: '0.5em' }}>
              Conforme RGPD 🇪🇺 & LPD 🇨🇭 · Hébergement sécurisé en <strong>Suisse</strong> · Données confidentielles protégées
            </p>
            <p style={{ marginBottom: '0.5em' }}>
              Projet confidentiel – <strong>Traçabilité numérique activée</strong> – Usage exclusif réservé à l'écosystème <strong>CED & PrettyhowQ</strong>
            </p>
            <p style={{ marginBottom: '0.5em' }}>
              Ce projet, son contenu, son code, ses idées, ses visuels, ses textes et sa structure sont la propriété exclusive de <strong>Yakoubi Yamina</strong>.
            </p>
            <p style={{ marginBottom: '0.5em' }}>
              Toute reproduction, diffusion, extraction, adaptation, modification ou exploitation – totale ou partielle – sans autorisation écrite préalable est strictement interdite et fera l'objet de poursuites judiciaires conformément au <strong>Code de la propriété intellectuelle</strong> (France / Europe / International).
            </p>
            <p style={{ marginBottom: '0.5em' }}>
              Ce dépôt n'est <strong>ni open source</strong>, ni destiné à un usage public ou commercial sans accord express préalable.
            </p>
            <p style={{ marginBottom: '0.5em' }}>
              📌 Version non publique – Dépôt en cours 📎
            </p>
            <p style={{ marginBottom: '0' }}>
              Pour toute demande d'autorisation :<br/>
              <a href="mailto:swissyakoubidev.ch@ik.me" style={{ color: '#0066cc', textDecoration: 'none' }}>swissyakoubidev.ch@ik.me</a> &nbsp;·&nbsp;
              <a href="mailto:yakoubi.yamina@ik.me" style={{ color: '#0066cc', textDecoration: 'none' }}>yakoubi.yamina@ik.me</a> &nbsp;·&nbsp;
              <a href="mailto:contact@empreintedigitale.club" style={{ color: '#0066cc', textDecoration: 'none' }}>contact@empreintedigitale.club</a>
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}