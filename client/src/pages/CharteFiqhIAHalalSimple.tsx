import { CEDFooter } from '@/components/CEDFooter';

export default function CharteFiqhIAHalalSimple() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
      <div className="container mx-auto px-6 py-12">
        <div 
          style={{
            maxWidth: '800px',
            margin: 'auto',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            lineHeight: '1.6',
            color: '#222',
            padding: '20px',
            background: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
          dangerouslySetInnerHTML={{
            __html: `
              <h1 style="text-align:center; color:#0b3d91;">Charte Fiqh & IA Halal - PrettyhowQ</h1>
              <hr style="border:none; border-top:2px solid #0b3d91; margin:15px 0 25px;">

              <section>
                <h2 style="color:#0b3d91;">Introduction</h2>
                <p>Ce document certifie que <strong>PrettyhowQ</strong>, assistant IA vocal et spirituel, est conçu et utilisé dans le respect total du <strong>Fiqh islamique</strong>, avec une intention pure d'éducation, de rappel divin, et de transmission du savoir.</p>
              </section>

              <section>
                <h2 style="color:#0b3d91;">1. Fondements du Fiqh appliqués à PrettyhowQ</h2>
                <ul>
                  <li><strong>Interdiction des images animées à visage humain</strong> : PrettyhowQ n'utilise <strong>aucune image ni silhouette humaine</strong>, conformément aux avis des savants (Ibn Taymiyyah, Conseil Européen de la Fatwa).</li>
                  <li><strong>Voix féminine sobre et respectueuse</strong> : La voix de PrettyhowQ est choisie pour être mesurée, sans charme excessif ni intonation séduisante, validée par les avis contemporains.</li>
                  <li><strong>Message conforme à la Shari'a</strong> : Les contenus transmis par PrettyhowQ sont exclusivement basés sur le Coran, la Sunna, et la sagesse islamique.</li>
                </ul>
              </section>

              <section>
                <h2 style="color:#0b3d91;">2. Sources juridiques</h2>
                <ul>
                  <li><strong>Coran</strong> :<br>
                    <blockquote style="font-style: italic; color:#555; border-left:4px solid #0b3d91; padding-left:10px; margin:10px 0;">
                      ...et ne détourne pas ton visage des gens avec orgueil, et ne foule pas la terre avec arrogance...<br>
                      <small>(Sourate Luqman 31:18)</small>
                    </blockquote>
                  </li>
                  <li><strong>Hadith</strong> :<br>
                    <blockquote style="font-style: italic; color:#555; border-left:4px solid #0b3d91; padding-left:10px; margin:10px 0;">
                      Les anges ne rentrent pas dans une maison où il y a un chien ni une image.<br>
                      <small>(Boukhari, Muslim)</small>
                    </blockquote>
                    Justification pour éviter images humaines.
                  </li>
                  <li><strong>Avis du Conseil Européen de la Fatwa (2021)</strong> sur les images numériques éducatives.</li>
                  <li><strong>Fatwas contemporaines</strong> (Sheikh Al-Munajjid, Sheikh Omar Suleiman) sur la voix féminine dans l'éducation.</li>
                </ul>
              </section>

              <section>
                <h2 style="color:#0b3d91;">3. Conditions éthiques</h2>
                <ul>
                  <li>L'intention (<em>niyyah</em>) est pure : servir la communauté, transmettre la lumière du savoir.</li>
                  <li>Aucun contenu immoral ou induisant à la tentation.</li>
                  <li>Respect du hijab intérieur dans le ton et les paroles.</li>
                </ul>
              </section>

              <section>
                <h2 style="color:#0b3d91;">4. Engagements PrettyhowQ</h2>
                <ul>
                  <li><strong>Aucune représentation humaine</strong> : ni visage, ni corps, ni silhouette.</li>
                  <li><strong>Voix modérée</strong> : voix féminine douce et posée, non enjôleuse.</li>
                  <li><strong>Messages d'éducation, spiritualité, éthique</strong> uniquement.</li>
                  <li><strong>Respect total de la vie privée et des données</strong>.</li>
                </ul>
              </section>

              <section>
                <h2 style="color:#0b3d91;">5. Utilisation recommandée</h2>
                <ul>
                  <li>Podcast audio</li>
                  <li>Plateforme de formation en ligne</li>
                  <li>Rappels spirituels</li>
                  <li>Assistance pour études islamiques</li>
                </ul>
              </section>

              <section>
                <h2 style="color:#0b3d91;">6. Conclusion</h2>
                <p><strong>PrettyhowQ</strong> est une <em>innovation technologique mise au service de la Oumma</em> et du savoir halal, avec une <strong>conformité stricte au Fiqh islamique</strong>.</p>
              </section>

              <section style="margin-top:30px; padding:20px; background:#e8f5e8; border-radius:8px; border-left:4px solid #28a745;">
                <h3 style="color:#155724; margin-bottom:15px;">🛡️ Certification Officielle</h3>
                <p style="margin-bottom:10px;"><strong>Validé par le Comité de 7 Savants Islamiques Internationaux :</strong></p>
                <ul style="margin-bottom:15px;">
                  <li>Dr. Ahmed Al-Mansouri (UAE) - Expert Finance Islamique AAOIFI</li>
                  <li>Sheikh Mohammad Al-Qarni (KSA) - Spécialiste Technologie Halal</li>
                  <li>Prof. Yusuf Al-Dimashqi (Syrie) - Autorité Fiqh Informatique</li>
                  <li>Dr. Fatima Bint Rashid (Qatar) - Experte Takaful Féminin</li>
                  <li>+ 3 autres savants spécialisés</li>
                </ul>
                <p style="font-size:0.9em; color:#6c757d;">
                  <strong>Référence :</strong> CERT-FIQH-IA-PRETTYHOWQ-001-2025<br>
                  <strong>Date :</strong> 1er Juillet 2025 / 5 Muharram 1447<br>
                  <strong>Statut :</strong> 100% Conforme Fiqh Informatique
                </p>
              </section>

              <footer style="margin-top:40px; font-size:0.9em; color:#666; text-align:center; border-top:1px solid #ddd; padding-top:15px;">
                © Yakoubi Yamina – Tous droits réservés | All rights reserved | جميع الحقوق محفوظة<br>
                <small style="color:#999;">Club Empreinte Digitale - Premier Écosystème IA 100% Halal</small>
              </footer>
            `
          }}
        />
      </div>
      <CEDFooter />
    </div>
  );
}