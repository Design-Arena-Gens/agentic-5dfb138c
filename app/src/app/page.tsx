import styles from "./page.module.css";

export default function Home() {
  const organismDistribution = [
    {
      name: "E. coli",
      percentage: "%30–35",
      description:
        "Özellikle prematüre ve NICU’dan yeni çıkmış bebeklerde baskın etken.",
    },
    {
      name: "Group B Streptococcus (GBS)",
      percentage: "%25–30",
      description:
        "Doğum sonrası erken dönemde hâlâ kritik; maternal kolonizasyon öyküsü sorgulanmalı.",
    },
    {
      name: "Listeria monocytogenes",
      percentage: "%5–10",
      description:
        "Maternal listeriosis öyküsü varsa hızlı tanı için düşük eşik gerekli.",
    },
    {
      name: "Streptococcus pneumoniae & Neisseria meningitidis",
      percentage: "%10–15",
      description:
        "Aşı programlarıyla azalma eğiliminde; bağışıklığı baskılanmış bebeklerde risk sürüyor.",
    },
  ];

  const clinicalPresentation = [
    {
      title: "Sepsis",
      features: [
        "İrritabilite veya letarji",
        "Beslenme bozukluğu ya da beslenmeyi reddetme",
        "Hipotermi / hipertermi",
        "Solunum sıkıntısı, apne veya takipne",
      ],
    },
    {
      title: "Meningit",
      features: [
        "Bebeklerde klasik baş ağrısı bulgusu görülmez",
        "Bulantı-kusma veya açıklanamayan kusma atakları",
        "Meningeal irritasyon işaretleri (bölünmüş göz, bacak bükülmesi)",
        "Kafa içi basınç artışını düşündüren fontanel kabarıklığı",
      ],
    },
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.hero}>
          <div>
            <p className={styles.kicker}>Epidemiyolojik Özellikler · 2020–2025</p>
            <h1>29–90 Gün Arası Bebeklerde İnvasiv Bakteriyel Enfeksiyonlar</h1>
            <p className={styles.lead}>
              Hastaneden yeni taburcu olmuş, özellikle de prematüre bebeklerde
              IBI’ye dair hızla erişilebilir bir özet: incidans, mortalite ve
              baskın patojenler.
            </p>
          </div>
          <div className={styles.statsGrid}>
            <article className={styles.statCard}>
              <span className={styles.statLabel}>Toplam İncidans</span>
              <strong className={styles.statValue}>%1–2</strong>
              <p className={styles.statNote}>
                29–90 gün arası sağlıklı term bebeklerde gözlenen IBI oranı.
              </p>
            </article>
            <article className={styles.statCard}>
              <span className={styles.statLabel}>Prematüre (NICU çıkışı)</span>
              <strong className={styles.statValue}>%5–7</strong>
              <p className={styles.statNote}>
                Uzun süre NICU takibi gören bebeklerde daha yüksek risk.
              </p>
            </article>
            <article className={styles.statCard}>
              <span className={styles.statLabel}>Erken Tedavi Mortalitesi</span>
              <strong className={styles.statValue}>%5–10</strong>
              <p className={styles.statNote}>
                Erken tanı ve uygun antibiyotik ile sağlanabilen mortalite
                aralığı.
              </p>
            </article>
            <article className={styles.statCard}>
              <span className={styles.statLabel}>Tedavi Gecikince</span>
              <strong className={styles.statValue}>
                <span className={styles.highlight}>≈%30</span>
              </strong>
              <p className={styles.statNote}>
                Tanı ve tedavide gecikme mortaliteyi üç katına çıkarabilir.
              </p>
            </article>
          </div>
        </header>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Mikroorganizma Dağılımı</h2>
            <p>
              2020–2025 döneminde görülen başlıca etkenlerin yüzdesel dağılımı ve
              klinik pratikteki kritik notlar.
            </p>
          </div>
          <div className={styles.organismGrid}>
            {organismDistribution.map((organism) => (
              <article key={organism.name} className={styles.organismCard}>
                <header>
                  <h3>{organism.name}</h3>
                  <span className={styles.organismPercent}>
                    {organism.percentage}
                  </span>
                </header>
                <p>{organism.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Klinik Sunum</h2>
            <p>
              IBI şüphesinde sepsis ve meningit bulgularını hızlı ayırt etmek,
              mortaliteyi düşürmek açısından kritik öneme sahiptir.
            </p>
          </div>
          <div className={styles.presentationGrid}>
            {clinicalPresentation.map((presentation) => (
              <article key={presentation.title} className={styles.presentationCard}>
                <h3>{presentation.title}</h3>
                <ul>
                  {presentation.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <footer className={styles.footer}>
          <p>
            Erken tanı ve disiplinler arası koordinasyon, özellikle prematüre
            bebeklerde IBI yönetiminin temelini oluşturur. Maternal öykü,
            aşılama durumu ve taburculuk sonrası takip planı mutlaka gözden
            geçirilmelidir.
          </p>
        </footer>
      </main>
    </div>
  );
}
