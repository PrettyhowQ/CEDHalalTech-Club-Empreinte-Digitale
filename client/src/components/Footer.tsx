export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="text-sm font-medium">
            © Yakoubi Yamina – Tous droits réservés | All rights reserved | جميع الحقوق محفوظة | 版权所有
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <span className="flex items-center gap-1">
              🇪🇺 Conforme RGPD
            </span>
            <span className="flex items-center gap-1">
              🇨🇭 LPD Suisse
            </span>
            <span className="flex items-center gap-1">
              🔒 Hébergement sécurisé Suisse
            </span>
            <span className="flex items-center gap-1">
              🛡️ Données confidentielles protégées
            </span>
          </div>
          
          <div className="text-xs text-gray-300 max-w-4xl mx-auto">
            <p className="mb-2 font-semibold">
              Projet confidentiel – Traçabilité numérique activée – Usage exclusif réservé à l'écosystème CED & PrettyhowQ
            </p>
            <p className="leading-relaxed">
              Ce projet, son contenu, son code, ses idées, ses visuels, ses textes et sa structure sont la propriété exclusive de Yakoubi Yamina. 
              Toute reproduction, diffusion, extraction, adaptation, modification ou exploitation – totale ou partielle – sans autorisation écrite préalable 
              est strictement interdite et fera l'objet de poursuites judiciaires conformément au Code de la propriété intellectuelle (France / Europe / International).
            </p>
            <p className="mt-2">
              Ce dépôt n'est ni open source, ni destiné à un usage public ou commercial sans accord express préalable.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-xs text-blue-300">
            <a href="mailto:swissyakoubidev.ch@ik.me" className="hover:text-blue-200">
              swissyakoubidev.ch@ik.me
            </a>
            <span>·</span>
            <a href="mailto:yakoubi.yamina@ik.me" className="hover:text-blue-200">
              yakoubi.yamina@ik.me
            </a>
            <span>·</span>
            <a href="mailto:contact@empreintedigitale.club" className="hover:text-blue-200">
              contact@empreintedigitale.club
            </a>
          </div>
          
          <div className="text-xs font-medium text-emerald-400">
            📌 Version complète – Écosystème en production 📎
          </div>
        </div>
      </div>
    </footer>
  );
}