import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const INK   = '#0B1F4D'
const BLEU  = '#1742A8'
const MUTED = '#5B6680'

const testimonials = [
  {
    name: 'Marie-Claire T.',
    location: 'Mulhouse (68)',
    rating: 5,
    text: "Porte claquée à 23h, Wagner était là en 22 minutes chrono. Professionnel, efficace, et le prix annoncé par téléphone était celui sur la facture. Je recommande sans hésiter.",
    service: "Ouverture d'urgence",
    date: 'Nov. 2024',
  },
  {
    name: 'Karim B.',
    location: 'Colmar (68)',
    rating: 5,
    text: "Changement complet de serrure après une tentative d'effraction. Travail soigné, devis respecté. Serrure multipoints installée en moins de 2h. Merci !",
    service: 'Sécurisation effraction',
    date: 'Oct. 2024',
  },
  {
    name: 'Sophie L.',
    location: 'Altkirch (68)',
    rating: 5,
    text: "Blindage de porte après déménagement. M. Wagner explique chaque étape, le résultat est top. La porte est vraiment solide maintenant. 5 étoiles méritées.",
    service: 'Blindage de porte',
    date: 'Sep. 2024',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} étoiles sur 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      id="avis"
      style={{
        width: '100%',
        background: '#F8F9FB',
        padding: '88px 6vw 96px',
        fontFamily: '"Inter", system-ui, sans-serif',
        color: INK,
      }}
    >
      <div style={{ maxWidth: 1152, margin: '0 auto' }}>

        <motion.div
          style={{ textAlign: 'center', marginBottom: 56 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65 }}
        >
          <p style={{
            fontFamily: '"Inter", sans-serif',
            fontWeight: 500,
            fontSize: 11,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: BLEU,
            marginBottom: 18,
          }}>
            Ce que disent nos clients
          </p>

          <h2 style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(48px, 7vw, 88px)',
            fontWeight: 500,
            lineHeight: 0.96,
            letterSpacing: '-0.01em',
            color: INK,
            margin: '0 0 20px',
          }}>
            Témoignages
          </h2>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <Stars count={5} />
            <span style={{ color: INK, fontWeight: 600, fontSize: 14, marginLeft: 4 }}>4,9</span>
            <span style={{ color: MUTED, fontSize: 14 }}>/ 5 · 147 avis</span>
          </div>

          <div style={{
            width: 40,
            height: 1,
            background: '#DC2626',
            margin: '24px auto 0',
          }} />
        </motion.div>

        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {testimonials.map(({ name, location, rating, text, service, date }) => (
            <motion.article
              key={name}
              variants={cardVariants}
              style={{
                background: '#fff',
                border: '1px solid #E6E9F0',
                borderRadius: 16,
                padding: '24px',
                boxShadow: '0 1px 4px rgba(11,31,77,0.05)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 0.25s ease, border-color 0.25s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <Stars count={rating} />
                <span style={{
                  fontSize: 11,
                  color: MUTED,
                  background: '#F8F9FB',
                  padding: '4px 10px',
                  borderRadius: 999,
                  border: '1px solid #E6E9F0',
                }}>
                  {service}
                </span>
              </div>

              <p style={{
                color: MUTED,
                fontSize: 14,
                lineHeight: 1.7,
                flex: 1,
                marginBottom: 24,
              }}>
                « {text} »
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: 16,
                borderTop: '1px solid #E6E9F0',
              }}>
                <div>
                  <p style={{ color: INK, fontWeight: 600, fontSize: 14 }}>{name}</p>
                  <p style={{ color: MUTED, fontSize: 12, marginTop: 2 }}>{location}</p>
                </div>
                <span style={{ color: '#C5CAD9', fontSize: 12 }}>{date}</span>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
