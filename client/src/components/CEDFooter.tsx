import { motion } from 'framer-motion';

export function CEDFooter() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.2 }}
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
      className="dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300"
    >
      <p style={{ marginBottom: '0.5em' }}>
        <strong>© Yakoubi Yamina</strong> – Tous droits réservés | All rights reserved | 
        <span dir="rtl" style={{ margin: '0 0.5em' }}>جميع الحقوق محفوظة</span> | 版权所有
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
        Toute reproduction, diffusion, extraction, adaptation, modification ou exploitation – totale ou partielle – sans autorisation écrite préalable est strictement interdite 
        et fera l'objet de poursuites judiciaires conformément au <strong>Code de la propriété intellectuelle</strong> (France / Europe / International).
      </p>
      
      <p style={{ marginBottom: '0.5em' }}>
        Ce dépôt n'est <strong>ni open source</strong>, ni destiné à un usage public ou commercial sans accord express préalable.
      </p>
      
      <p style={{ marginBottom: '0.5em' }}>
        📌 Version non publique – Dépôt en cours 📎
      </p>
      
      <p style={{ marginBottom: '0' }}>
        Pour toute demande d'autorisation :<br />
        <a 
          href="mailto:swissyakoubidev.ch@ik.me" 
          style={{ color: '#0066cc', textDecoration: 'none' }}
          className="hover:underline"
        >
          swissyakoubidev.ch@ik.me
        </a> 
        &nbsp;·&nbsp; 
        <a 
          href="mailto:yakoubi.yamina@ik.me" 
          style={{ color: '#0066cc', textDecoration: 'none' }}
          className="hover:underline"
        >
          yakoubi.yamina@ik.me
        </a>
      </p>
    </motion.footer>
  );
}